import { Code2, PanelsTopLeft, Database, Cloud, Workflow, Lightbulb } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'

const groups = [
  { Icon: PanelsTopLeft, title: 'Frontend', items: 'React · JavaScript · HTML · CSS · Tailwind CSS' },
  { Icon: Database, title: 'Backend & data', items: 'Node.js · Express · REST APIs · MongoDB · Firebase' },
  { Icon: Code2, title: 'Programming', items: 'C++ · Python · SQL · Data structures' },
  { Icon: Cloud, title: 'Cloud & delivery', items: 'AWS fundamentals · Git · GitHub · Vercel' },
  { Icon: Workflow, title: 'Tools & workflow', items: 'Postman · Figma basics · Responsive design · Debugging' },
  { Icon: Lightbulb, title: 'How I work', items: 'Product thinking · Research · Collaboration · Iteration' },
]

export default function Skills() {
  return (
    <section id="skills" className="content-section page-shell">
      <SectionHeading eyebrow="TOOLS IN MY TOOLKIT" title="Skills with" mutedTitle="purpose." description="A growing toolkit for designing, building, testing, and shipping useful software." />
      <div className="skills-grid">
        {groups.map(({ Icon, title, items }, index) => (
          <article className="skill-card" key={title} data-reveal>
            <div className="skill-top"><span>0{index + 1}</span><Icon size={22} strokeWidth={1.7} /></div>
            <h3>{title}</h3><p>{items}</p>
          </article>
        ))}
      </div>
    </section>
  )
}