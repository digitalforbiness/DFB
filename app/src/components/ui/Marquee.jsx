/**
 * Infinite horizontal marquee. Duplicates its children so the loop is
 * seamless. Used for the "Ils nous font confiance" partner strip.
 */
export default function Marquee({ children, className = '', speed = 30, pauseOnHover = true }) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-marquee items-center gap-16"
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: 'running',
        }}
        onMouseEnter={(e) => pauseOnHover && (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={(e) => pauseOnHover && (e.currentTarget.style.animationPlayState = 'running')}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
