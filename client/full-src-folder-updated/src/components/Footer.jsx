import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Harshal Ghuge</span>
      <span>Designed with intent. Built with care.</span>
      <a href="#home" className="back-top">Back to top <ArrowUp size={15} /></a>
    </footer>
  )
}