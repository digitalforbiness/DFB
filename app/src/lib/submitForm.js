import { WEB3FORMS_ACCESS_KEY, CONTACT } from '../data/site'

const KEY_PLACEHOLDER = 'YOUR_WEB3FORMS_ACCESS_KEY'

const hasKey = Boolean(WEB3FORMS_ACCESS_KEY) && WEB3FORMS_ACCESS_KEY !== KEY_PLACEHOLDER

/**
 * Sends a contact submission to contact@dfb.digital (plus any FORM_CC
 * recipients) via Web3Forms — no backend required, works on static hosting.
 *
 * A `captchaToken` field (hCaptcha response) is forwarded as `h-captcha-response`
 * so Web3Forms can verify it. Any remaining keys are treated as email content.
 * When no access key is configured we fall back to opening the visitor's mail
 * client so a submission is never silently dropped.
 *
 * NOTE: only the Web3Forms account email (contact@dfb.digital) is delivered to.
 * CC (`ccemail`) is a Web3Forms PRO feature. To also notify a second address
 * (e.g. davney.bavoueza@dfb.digital) on the free plan, create a second access
 * key from that address and POST this payload to it as well.
 *
 * @param {Record<string, string>} fields  Content fields, plus optional
 *   `subject` and `captchaToken`.
 * @returns {Promise<{ ok: true, fallback?: boolean }>}
 * @throws {Error} when Web3Forms rejects the submission.
 */
export async function submitContact(fields) {
  const { subject, captchaToken, ...content } = fields

  if (!hasKey) {
    const mailSubject = encodeURIComponent(subject || 'Nouveau message depuis dfb.digital')
    const body = encodeURIComponent(
      Object.entries(content)
        .map(([label, value]) => `${label} : ${value}`)
        .join('\n')
    )
    window.location.href = `mailto:${CONTACT.email}?subject=${mailSubject}&body=${body}`
    return { ok: true, fallback: true }
  }

  const payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    from_name: 'Site DFB',
    subject: subject || 'Nouveau message depuis dfb.digital',
    ...content,
  }
  if (captchaToken) payload['h-captcha-response'] = captchaToken

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = await res.json().catch(() => ({}))
  if (!res.ok || !data.success) {
    throw new Error(data.message || "L'envoi a échoué. Veuillez réessayer.")
  }
  return { ok: true }
}
