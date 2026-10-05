import Logo from "./Logo";
import { IconFacebook, IconInstagram, IconLinkedIn } from "./icons";

// Replace "#" with the real profile URLs when available.
const socials = [
  { label: "LinkedIn", href: "#", icon: IconLinkedIn },
  { label: "Instagram", href: "#", icon: IconInstagram },
  { label: "Facebook", href: "#", icon: IconFacebook },
];

const columns = [
  {
    title: "Company",
    links: [
      { label: "About GAN", href: "#about" },
      { label: "Languages", href: "#languages" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs leading-relaxed text-white/55">
            Connecting students with global academic opportunities.
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">{col.title}</h2>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/65 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">Social</h2>
          <ul className="mt-5 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-0.5 hover:border-gold-500 hover:text-gold-400"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-white/45 sm:px-8">
          © 2026 Global Academic Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
