import { ArrowUpRight } from 'lucide-react'

export default function ArrowLink({ href, children, external = false, className = '' }) {
  return (
    <a className={`arrow-link ${className}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
      <span>{children}</span><ArrowUpRight size={18} aria-hidden="true" />
    </a>
  )
}