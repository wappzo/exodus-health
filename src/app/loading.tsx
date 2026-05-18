export default function Loading() {
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center">
      <div className="flex gap-1.5" role="status" aria-label="Loading">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-cobalt-light animate-pulse-dot"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
    </div>
  )
}
