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
    { icon: Github, url: "https://github.com/", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/", label: "LinkedIn" },
    { icon: Instagram, url: "https://instagram.com/", label: "Instagram" },
    { icon: Youtube, url: "https://youtube.com/", label: "YouTube" },
  ];

  return (
    <aside className="relative  mx-auto w-full max-w-[390px] self-start md:sticky md:top-5 ">
      <article className="relative flex min-h-[600px] flex-col overflow-hidden rounded-[20px] bg-[#faf9f7] px-5 py-6 text-black shadow-2xl sm:px-6">
        {/* Decorative dashed orbit */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[65px] -top-[110px] z-10 h-[220px] w-[220px] rounded-full border-[3px] border-dashed border-[#ff791f]"
        />

        {/* Profile image */}
        <div className="relative mx-auto h-[300px] w-[82%] shrink-0 overflow-hidden rounded-[17px] bg-gradient-to-br from-[#f05a16] to-[#a52b0c] sm:h-[330px]">
          <img
            src="/images/heroimg.jpeg"
            alt="Harshal Ghuge"
            className="h-full w-full object-cover object-top grayscale contrast-125 brightness-75"
          />
        </div>

        {/* Name */}
        <h2 className="relative z-10 mt-6 text-center font-sans text-[clamp(27px,2.15vw,38px)] font-bold leading-tight tracking-[-0.06em]">
          Harshal Ghuge
        </h2>

        {/* Accent icon */}
        <div className="relative z-10 mx-auto mt-4 grid h-10 w-10 place-items-center rounded-full bg-[#ff791f] text-white">
          <Flame size={21} />
        </div>

        {/* Decorative curve */}
        <svg
          viewBox="0 0 180 100"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-[57%] h-[100px] w-[155px]"
        >
          <path
            d="M-18 91C46 102 91 78 121 39C138 17 145 6 181 -7"
            stroke="#ff791f"
            strokeWidth="3"
            strokeDasharray="7 7"
          />
        </svg>

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
