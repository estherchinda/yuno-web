export default function YunoLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle border */}
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Middle circle border */}
      <circle
        cx="32"
        cy="32"
        r="18"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Inner filled circle (focus point) */}
      <circle
        cx="32"
        cy="32"
        r="6"
        fill="currentColor"
      />
    </svg>
  )
}
