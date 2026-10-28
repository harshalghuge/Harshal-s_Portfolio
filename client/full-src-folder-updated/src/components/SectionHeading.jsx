export default function SectionHeading({ eyebrow, title, mutedTitle, description }) {
  return (
    <div className="section-heading" data-reveal>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="display-heading">{title} {mutedTitle && <span>{mutedTitle}</span>}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}