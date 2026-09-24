import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 bg-ink-950 px-6 text-center">
      <span className="font-display text-8xl text-bronze-500">404</span>
      <h1 className="font-display text-2xl text-paper md:text-3xl">
        We couldn&apos;t find that page
      </h1>
      <p className="max-w-md text-sm text-paper/60">
        The page you&apos;re looking for may have been moved, renamed, or doesn&apos;t exist. Let&apos;s
        get you back on track.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-sm bg-bronze-500 px-6 py-3 text-sm font-semibold text-ink-950 hover:bg-bronze-400"
        >
          <Home size={16} /> Back to Home
        </Link>
        <Link
          to="/properties"
          className="flex items-center gap-2 rounded-sm border border-paper/25 px-6 py-3 text-sm font-semibold text-paper hover:border-paper"
        >
          <ArrowLeft size={16} /> Browse Properties
        </Link>
      </div>
    </div>
  )
}
