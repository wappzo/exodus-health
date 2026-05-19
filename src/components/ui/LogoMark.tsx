interface LogoMarkProps {
  /** 'navy' = on dark backgrounds (uses lighter blues)
   *  'light' = on light backgrounds (uses cobalt + navy) — default */
  variant?: 'light' | 'navy'
  className?: string
}

export default function LogoMark({ variant = 'light', className }: LogoMarkProps) {
  const arcFill   = variant === 'navy' ? '#4A8FE8' : '#1E6FD9'  // cobalt-light : cobalt
  const crossFill = variant === 'navy' ? '#C2D9F9' : '#0F2040'  // cobalt-pale  : navy-900

  return (
    <svg
      width="172"
      height="167"
      viewBox="0 0 172 167"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <g clipPath="url(#exodus-clip)">
        <path
          d="M168.351 83.5V92.3719H125.612V74.6282H150.63C145.939 43.3157 119.357 19.3094 86.5207 19.3094C51.0783 19.3094 22.4116 48.0125 22.4116 83.5C22.4116 118.988 51.0783 148.213 86.5207 148.213V165.434C41.6965 165.434 4.69043 128.903 4.69043 83.5C4.69043 38.6188 41.6965 1.56567 86.5207 1.56567C131.866 1.56567 168.351 38.6188 168.351 83.5Z"
          fill={arcFill}
        />
        <path
          d="M132.337 16.1159L139.693 21.0115L127.591 30.0852L122.611 25.9133L115.203 25.9133C86.6524 12.5241 52.08 21.3167 33.9605 48.5421C14.4029 77.9283 22.3828 117.535 51.8063 137.118C81.2298 156.7 121.28 149.059 140.837 119.673L155.116 129.176C130.382 166.341 79.6723 176.865 42.0275 151.811C4.81538 127.045 -5.48584 75.9158 19.2487 38.7509C44.2709 1.15392 95.1253 -8.65016 132.337 16.1159Z"
          fill={arcFill}
        />
        <path
          d="M115.709 74.6281V92.3719H58.376V74.6281H115.709Z"
          fill={crossFill}
        />
        <path
          d="M95.382 109.594H77.6608V57.4062H95.382V109.594Z"
          fill={crossFill}
        />
      </g>
      <defs>
        <clipPath id="exodus-clip">
          <rect width="172" height="167" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
