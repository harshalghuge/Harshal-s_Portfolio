import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Flame,
} from "lucide-react";

export default function ProfileCard() {
  const socials = [
    { icon: Github, url: "https://github.com/harshalghuge", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/harshalghuge", label: "LinkedIn" },
    { icon: Instagram, url: "https://www.instagram.com/harshalg555/", label: "Instagram" },
  ];

  return (
    <aside className="relative mx-10  w-full max-w-[390px] self-start md:sticky md:top-20">
      <article className="relative  overflow-hidden rounded-[20px] bg-[#faf9f7] px-10 py-6 text-black shadow-2xl sm:px-6">
        {/* Decorative dashed orbit */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[65px] -top-[110px] z-10 h-[220px] w-[220px] rounded-full border-[3px] border-dashed border-[#ff791f]"
        />

        {/* Profile image */}

        <div className="relative mx-auto h-[300px] w-[82%] shrink-0 overflow-hidden rounded-[20px] bg-gradient-to-br from-[#ff6e20] via-[#ff6720fb] to-[#250e01c2] sm:h-[330px]">
          {/* Portrait */}
          <img
            src="/images/heroimg.jpeg"
            alt="Harshal Ghuge"
            className="absolute inset-0 h-full w-full object-cover object-top grayscale contrast-[150%] brightness-[65%] mix-blend-multiply"
          />

          {/* Subtle orange lighting */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-black/20" />
        </div>

        {/* Name */}
        <h2 className="relative z-10 mt-6 text-center font-sans text-[clamp(27px,2.15vw,38px)] font-bold leading-tight tracking-[-0.06em]">
          Harshal Ghuge
        </h2>

        {/* Short introduction */}
        <p className="relative z-10 mx-auto mt-6 max-w-[285px] text-center font-sans text-base font-medium leading-[1.35] text-[#777574]">
          A Computer Engineer building practical, thoughtful digital products.
        </p>

        {/* Availability */}
        <div className="mt-5 flex flex-col items-center gap-2 text-[11px]">
          <span className="inline-flex items-center gap-2 text-[#5f8c68]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#51a66a]" />
            Open to opportunities
          </span>

          <span className="inline-flex items-center gap-1.5 text-[#88817c]">
            <MapPin size={13} />
            Pune, India
          </span>
        </div>

        {/* Social links */}
        <div className="mt-auto flex justify-center gap-4 pt-6">
          {socials.map(({ icon: Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full text-[#ff6b35] transition-all duration-200 hover:-translate-y-1 hover:bg-[#ff6b35] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6b35]"
            >
              <Icon size={21} />
            </a>
          ))}
        </div>
      </article>
    </aside>
  );
}
