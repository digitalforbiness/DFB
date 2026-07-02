/** Thin wrapper around Material Symbols Outlined (matches the original site). */
export default function Icon({ name, className = '', filled = false, style, ...rest }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: filled ? "'FILL' 1, 'wght' 400" : "'FILL' 0, 'wght' 400",
        ...style,
      }}
      aria-hidden="true"
      {...rest}
    >
      {name}
    </span>
  )
}
