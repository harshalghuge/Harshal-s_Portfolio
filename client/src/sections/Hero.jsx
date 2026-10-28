import { ArrowDown, ArrowUpRight } from "lucide-react";

const stats = [
  { value: "10+", label: "PROJECTS BUILT" },
  { value: "06+", label: "CORE TECHNOLOGIES" },
  { value: "2026", label: "GRADUATE" },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex w-full items-center justify-center px-1  sm:px-2 sm:py-16 lg:min-h-[min(780px,calc(100vh-105px))] lg:py-8"
    >
      <div
        data-reveal
        className="mx-auto flex w-full max-w-4xl flex-col items-center text-center lg:items-start lg:text-left"
      >
        <div className="mb-6 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400 sm:text-xs lg:justify-start">
          <span
            aria-hidden="true"
            className="h-[7px] w-[7px] shrink-0 rounded-full bg-orange-500 shadow-[0_0_0_4px_rgba(255,107,53,0.09)]"
          />
          <span>Portfolio</span>
        </div>

        <h1
          id="hero-title"
          className="w-full font-['Inter'] font-black uppercase leading-[0.85] tracking-[0.09em]"
        >
          <span className="block text-[clamp(3rem,7vw,8rem)] text-white">
            Software
          </span>

          <span className="block text-[clamp(3rem,7vw,8rem)] text-[#383533]">
            Engineer
          </span>
        </h1>

        <p className="mt-6 w-full max-w-xl text-4xl leading-7 text-neutral-400 sm:mt-7 sm:text-base sm:leading-7 lg:text-left">
          Passionate about creating intuitive and engaging user experiences. 
          Specialize in transforming ideas into beautifully crafted products. 
          modify it liitle built
        </p>

        <div className="mt-7 flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-6 lg:justify-start">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[10px] bg-[#ff6b35] px-5 py-3 text-sm font-bold text-[#17110e] transition duration-200 hover:-translate-y-0.5 hover:bg-[#ff8254] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11100f]"
          >
            Explore my work
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 text-sm font-semibold text-neutral-300 transition-colors hover:text-[#ff6b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11100f]"
          >
            Let&apos;s connect
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-xl grid-cols-3 tracking-tighter border-t border-white/10 pt-2 text-center sm:mt-14  sm:pt-6 lg:text-left">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <strong className="block text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl lg:text-5xl">
                {stat.value}
              </strong>
              <span className="mx-auto mt-2 block max-w-28 text-[9px] font-semibold leading-relaxed tracking-[0.1em] text-neutral-500 sm:text-[10px] lg:mx-0 lg:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#projects"
          className="mt-8 inline-flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.18em] text-neutral-500 transition-colors hover:text-[#ff6b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] sm:mt-10 lg:justify-start"
        >
          SCROLL TO EXPLORE
          <ArrowDown size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
