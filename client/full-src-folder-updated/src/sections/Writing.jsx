import { ArrowUpRight, BookOpen } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'

const notes = [
  { number: 'NOTE 01', title: 'Learning in public, building with intent', text: 'A short reflection on turning tutorials into projects that solve actual problems.', meta: 'LEARNING / 4 MIN' },
  { number: 'NOTE 02', title: 'Small details make interfaces feel right', text: 'Thoughts on spacing, hierarchy, feedback, and the details people notice without naming.', meta: 'DESIGN / 3 MIN' },
]

export default function Writing() {
  return (
    <section id="writing" className="content-section page-shell">
      <SectionHeading eyebrow="NOTES FROM THE PROCESS" title="Ideas in" mutedTitle="progress." description="Short notes on the things I’m learning, making, and thinking through." />
      <div className="notes-grid">
        {notes.map((note) => (
          <article className="note-card" key={note.number} data-reveal>
            <div className="note-top"><span>{note.number}</span><BookOpen size={19} /></div>
            <h3>{note.title}</h3><p>{note.text}</p>
            <div className="note-bottom"><span>{note.meta}</span><ArrowUpRight size={18} /></div>
          </article>
        ))}
      </div>
    </section>
  )
}