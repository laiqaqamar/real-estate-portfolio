import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-bronze-500 text-ink-950 hover:bg-bronze-400',
  outline: 'border border-paper/30 text-paper hover:border-paper hover:bg-paper/5',
  dark: 'bg-ink-950 text-paper hover:bg-ink-800',
  ghost: 'text-ink-900 hover:text-bronze-600',
}

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  icon: Icon,
  type = 'button',
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {Icon && <Icon size={16} strokeWidth={2} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  )
}
