import { useEffect, useRef } from 'react'
import { HCAPTCHA_SITE_KEY } from '../../data/site'

const SCRIPT_SRC = 'https://js.hcaptcha.com/1/api.js?render=explicit'
let scriptPromise = null

// Loads the hCaptcha API script once and resolves with window.hcaptcha.
function loadHCaptcha() {
  if (typeof window === 'undefined') return Promise.reject(new Error('no window'))
  if (window.hcaptcha) return Promise.resolve(window.hcaptcha)
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = SCRIPT_SRC
    s.async = true
    s.defer = true
    s.onload = () => resolve(window.hcaptcha)
    s.onerror = () => reject(new Error('hCaptcha failed to load'))
    document.head.appendChild(s)
  })
  return scriptPromise
}

/**
 * hCaptcha checkbox widget with explicit rendering — reliable in a React SPA
 * where the form mounts after the API script may already have loaded. Reports
 * the verification token through onVerify, and clears it through onExpire when
 * the challenge expires or errors.
 */
export default function HCaptcha({ onVerify, onExpire, theme = 'light' }) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    loadHCaptcha()
      .then((hcaptcha) => {
        if (cancelled || !containerRef.current || widgetIdRef.current !== null) return
        widgetIdRef.current = hcaptcha.render(containerRef.current, {
          sitekey: HCAPTCHA_SITE_KEY,
          theme,
          callback: (token) => onVerify?.(token),
          'expired-callback': () => onExpire?.(),
          'error-callback': () => onExpire?.(),
        })
      })
      .catch(() => onExpire?.())

    return () => {
      cancelled = true
      try {
        if (widgetIdRef.current !== null && window.hcaptcha) {
          window.hcaptcha.reset(widgetIdRef.current)
        }
      } catch {
        /* widget already gone — nothing to reset */
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div ref={containerRef} className="h-captcha" />
}
