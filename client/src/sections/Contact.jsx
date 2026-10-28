import { ArrowUpRight, Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="contact-section page-shell">
      <div className="contact-panel" data-reveal>
        <div className="contact-kicker"><span className="eyebrow-dot" /> HAVE A GOOD PROBLEM?</div>
        <h2>LET’S MAKE<br /><span>SOMETHING</span><br />MEANINGFUL<span className="orange-period">.</span></h2>
        <div className="contact-bottom">
          <p>I’m interested in thoughtful teams, useful products, and opportunities to keep growing as a developer.</p>
          <a className="button-primary" href="mailto:hello@example.com">Say hello <ArrowUpRight size={18} /></a>
        </div>
      </div>
      <div className="contact-links">
        <a href="mailto:ghugeharshal555@gmail.com"><Mail size={17} /> Email <ArrowUpRight size={16} /></a>
        <a href="https://github.com/harshalghuge" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={16} /></a>
        <a href="https://www.linkedin.com/in/harshalghuge/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={16} /></a>
      </div>
    </section>
  )
}