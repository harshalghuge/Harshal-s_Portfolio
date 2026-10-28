import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import Tag from '../components/Tag.jsx'
import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="content-section page-shell">
      <SectionHeading eyebrow="WHERE I’VE BEEN LEARNING" title="Experience &" mutedTitle="growth." description="Learning by shipping, collaborating, researching, and getting closer to real-world problems." />
      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-row" key={item.role} data-reveal>
            <div className="experience-index">0{index + 1}</div>
            <div className="experience-main">
              <p className="experience-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="experience-company">{item.company}</p>
              <p className="experience-description">{item.description}</p>
              <div className="tag-list">{item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
            </div>
            <ArrowUpRight className="experience-arrow" size={21} />
          </article>
        ))}
      </div>
    </section>
  )
}