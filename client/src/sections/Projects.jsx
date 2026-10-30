import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Tag from "../components/Tag.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="content-section page-shell">
      <SectionHeading
        eyebrow="A FEW THINGS I’VE MADE"
        title="Selected"
        mutedTitle="work."
        description="A mix of practical products, experiments, and ideas shaped into working interfaces."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card group block min-w-0 cursor-pointer"
            key={project.number}
            aria-label={`View ${project.title} on GitHub`}
            data-reveal
          >
            <div className={`project-art ${project.accent}`}>
              <span className="project-number">{project.number} / PROJECT</span>

              <div className="art-geometry" aria-hidden="true">
                <span className="geometry-circle" />
                <span className="geometry-square" />
                <span className="geometry-line" />
              </div>

              <span className="project-art-label">{project.category}</span>
            </div>

            <div className="project-body">
              <div className="project-title-row">
                <h3>{project.title}</h3>

                <span className="project-link-icon" aria-hidden="true">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              <p>{project.description}</p>

              <div className="tag-list">
                {project.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>

              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-orange-400">
                View on GitHub
                <ArrowUpRight size={15} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
