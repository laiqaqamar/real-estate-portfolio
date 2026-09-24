export default function Loader({ label = 'Loading' }) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3 text-slate-450">
      <div className="h-9 w-9 animate-spin rounded-full border-2 border-bronze-500 border-t-transparent" />
      <span className="text-sm">{label}…</span>
    </div>
  )
}
