import {
  Code2,
  Braces,
  Globe,
  Palette,
  Wind,
  Atom,
  Server,
  Database,
  Flame,
  GitBranch,
  Github,
  Cloud,
  Mail,
  PanelsTopLeft,
  Terminal,
  Award,
  ExternalLink,
  FileCode2,
} from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import SectionHeading from "../components/SectionHeading.jsx";

const fullStack = [
  {
    name: "React",
    Icon: Atom,
    detail: "Frontend interfaces",
    usedIn: "Portfolio · React projects",
  },
  {
    name: "JavaScript",
    Icon: Braces,
    detail: "UI logic & interactions",
    usedIn: "React apps · Web projects",
  },
  {
    name: "HTML5",
    Icon: Globe,
    detail: "Accessible page structure",
    usedIn: "Web projects",
  },
  {
    name: "CSS3",
    Icon: Palette,
    detail: "Responsive styling",
    usedIn: "Portfolio · Web projects",
  },
  {
    name: "Tailwind CSS",
    Icon: Wind,
    detail: "Utility-first styling",
    usedIn: "React interfaces",
  },
  {
    name: "Node.js",
    Icon: Server,
    detail: "Server-side JavaScript",
    usedIn: "MERN applications",
  },
  {
    name: "Express",
    Icon: Terminal,
    detail: "REST API development",
    usedIn: "Backend services",
  },
  {
    name: "MongoDB",
    Icon: Database,
    detail: "Document database",
    usedIn: "MERN applications",
  },
  {
    name: "Firebase",
    Icon: Flame,
    detail: "Authentication & data",
    usedIn: "KakiMess project",
  },
];

const languages = [
  { name: "C++", short: "C++", detail: "Problem-solving & DSA" },
  { name: "Python", short: "Py", detail: "Scripting & AI/ML learning" },
  { name: "JavaScript", short: "JS", detail: "Frontend & backend" },
  { name: "SQL", short: "SQL", detail: "Querying relational data" },
];

const tools = [
  {
    name: "WordPress",
    Icon: PanelsTopLeft,
    context: "Soul Tales internship",
    description: "Website updates and blog content using WordPress.",
  },
  {
    name: "EmailJS",
    Icon: Mail,
    context: "Form and email automation",
    description:
      "Connect website forms to email notifications. Keep this only if it matches your implementation.",
  },
  {
    name: "Git & GitHub",
    Icon: GitBranch,
    context: "Version control",
    description: "Track code changes and maintain project repositories.",
  },
  {
    name: "Vercel",
    Icon: Cloud,
    context: "Deployment",
    description: "Deploy frontend projects and portfolio work.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full min-w-0 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading
          eyebrow="TOOLS IN MY TOOLKIT"
          title="Skills with"
          mutedTitle="purpose."
          description="The technologies I use to build, experiment, and turn ideas into working products."
        />

        {/* Full-stack development */}
        <div className="mt-6 sm:mt-8">
          {/* Section heading */}
          <div className="mb-4 flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-orange-400">
              <Code2 size={20} />
            </span>
            <div>
              <h3 className="text-base font-bold text-white sm:text-2xl">
                Full-Stack Development
              </h3>
              <p className="text-xs text-neutral-500">
                Technologies I use to build web applications
              </p>
            </div>
          </div>

          {/* Technology grid */}
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-3">
            {[
              { name: "React", Icon: SiReact },
              { name: "JavaScript", Icon: SiJavascript },
              { name: "HTML5", Icon: SiHtml5 },
              { name: "CSS3", Icon: SiCss },
              { name: "Tailwind", Icon: SiTailwindcss },
              { name: "Node.js", Icon: SiNodedotjs },
              { name: "Express.js", Icon: SiExpress },
              { name: "MongoDB", Icon: SiMongodb },
              { name: "Firebase", Icon: SiFirebase },
            ].map(({ name, Icon }) => (
              <div
                key={name}
                className="group flex min-w-0 items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-2.5 py-3 transition duration-200 hover:border-orange-500/40 hover:bg-white/[0.05] sm:gap-3 sm:px-3.5"
              >
                <Icon
                  size={21}
                  className="shrink-0 text-orange-400 sm:size-6"
                />

                <span className="truncate text-xs font-medium text-neutral-300 transition-colors group-hover:text-white sm:text-sm">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Programming languages */}
        <div className="mt-10 sm:mt-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-orange-400">
              <FileCode2 size={20} />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                Programming languages
              </h3>
              <p className="text-xs text-neutral-500 sm:text-sm">
                Languages I practise and build with
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {languages.map((language) => (
              <article
                key={language.name}
                className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-orange-500/20 bg-orange-500/10 font-mono text-sm font-bold text-orange-400">
                  {language.short}
                </span>
                <div className="min-w-0">
                  <h4 className="break-words text-sm font-semibold text-white">
                    {language.name}
                  </h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-neutral-500">
                    {language.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* AWS certification badge slot */}
        <div className="mt-10 sm:mt-14">
          <div className="rounded-2xl border border-orange-500/25 bg-gradient-to-br from-orange-500/[0.09] to-transparent p-5 sm:p-6 sm:pt-4 sm:pb-4">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-400">
                  <Award size={25} />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-400">
                    Cloud certification
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                    AWS Certified Cloud Practitioner
                  </h3>
                  <p className="mt-2 max-w-xl text-xs leading-relaxed text-neutral-400 sm:text-sm">
                    https://www.credly.com/badges/4d8a5454-a8a6-4e6e-91cd-d85a9a65ab11/public_url
                  </p>
                </div>
              </div>

              {/* Replace this placeholder with your badge image when you have it. */}
              <div className="flex min-h-28 w-full shrink-0 items-center justify-center rounded-xl border border-dashed border-orange-500/30 bg-black/20 px-5 py-4 sm:w-44">
                <div className="text-center">
                  <img src="/images/awsBadge.png" alt="aws-badge" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools and real-world use */}
        <div className="mt-10 sm:mt-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-orange-400">
              <PanelsTopLeft size={20} />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                Tools in practice
              </h3>
              <p className="text-xs text-neutral-500 sm:text-sm">
                Where tools fit into my work
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {tools.map(({ name, Icon, context, description }) => (
              <article
                key={name}
                className="flex min-w-0 gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-500/10 text-orange-400">
                  <Icon size={21} />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-sm font-semibold text-white sm:text-base">
                      {name}
                    </h4>
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-neutral-500">
                      {context}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-400 sm:text-sm">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
