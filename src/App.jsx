import { useEffect, useRef, useState } from "react";

const COMPANY_NAME = "AQUAVERN Technologies";
const BRAND_WORDMARK = "AQUAVERN";
const CONTACT_EMAIL = "aquaverntechnologies@gmail.com";
const LOGO_SRC = "/aquavern-logo.png";

const NAV = [
  { id: "home", label: "Home" },
  { id: "pricing", label: "Pricing" },
  { id: "vision", label: "Vision & Goal" },
  { id: "about", label: "Our Team" },
  { id: "contact", label: "Contact" },
];

const TEAM_GROUPS = [
  {
    category: "Founders",
    description: "Strategic direction, product vision, and enterprise delivery.",
    members: [
      { name: "Mr. Swasthik", role: "Founder" },
      { name: "Mr. Shravan", role: "Founder" },
      { name: "Mr. Sameer", role: "Founder" },
      { name: "Mr. Prakyath", role: "Founder" },
    ],
  },
  {
    category: "Tech Team",
    description: "Engineering, systems architecture, and production-grade execution.",
    members: [
      { name: "Mr. Shravan", role: "Technology" },
      { name: "Mr. Shreyas", role: "Technology" },
    ],
  },
  {
    category: "Marketing Team",
    description: "Market strategy, growth systems, and brand communication.",
    members: [
      { name: "Mr. Swasthik", role: "Marketing" },
      { name: "Mr. Nandon", role: "Marketing" },
    ],
  },
  {
    category: "Data Analytics",
    description: "Insight systems, analytics workflows, and data intelligence.",
    members: [
      { name: "Ms. RIJINGTNGEN WARLARPIH", role: "Data Analytics" },
    ],
  },
];

const SOCIAL_LINKS = [
  { name: "Instagram", icon: "instagram", href: "#" },
  { name: "LinkedIn", icon: "linkedin", href: "#" },
  { name: "Facebook", icon: "facebook", href: "#" },
  { name: "X", icon: "x", href: "#" },
];

export default function Index() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-[#020617] text-white antialiased">
      <Hero active={active} />
      <Pricing />
      <Vision />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav({ active }) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-7 sm:px-6 md:py-9 lg:gap-6">
        <a href="#home" className="group flex h-11 shrink-0 items-center overflow-hidden">
          <BrandLogo className="h-9 w-32 sm:h-10 sm:w-40 lg:w-44" imageClassName="scale-[4.85]" />
          <span className="sr-only">{BRAND_WORDMARK}</span>
        </a>
        <nav className="hidden min-w-0 items-center justify-center gap-1 lg:flex xl:gap-3">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`whitespace-nowrap rounded-full px-3.5 py-2.5 text-sm font-bold tracking-tight transition-colors xl:px-5 ${
                active === n.id
                  ? "bg-white text-slate-950 shadow-lg shadow-cyan-500/10"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="shrink-0 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 sm:px-5"
        >
          Avail Services
        </a>
      </div>
    </header>
  );
}

function Hero({ active }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#020617]"
    >
      <Parallax speed={-0.08} className="pointer-events-none absolute inset-x-0 -top-24 h-[calc(100%+12rem)]">
        <div className="h-full w-full bg-[radial-gradient(70%_55%_at_75%_24%,rgba(34,211,238,0.24)_0%,transparent_68%),linear-gradient(135deg,rgba(2,6,23,0.96),rgba(15,23,42,0.9)_45%,rgba(2,6,23,1))]" />
      </Parallax>
      <Parallax speed={0.12} className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-25 md:block">
        <div className="h-full w-full bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.18)),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:100%_100%,56px_56px,56px_56px]" />
      </Parallax>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#020617] to-transparent" />
      <Nav active={active} />
      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-36 md:pb-40 md:pt-44">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-3 py-1 text-xs text-cyan-100 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              {COMPANY_NAME} is taking new projects
            </span>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Let us build, deploy &amp; manage your{" "}
              <span className="italic text-cyan-200/80">web presence.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base text-slate-300 md:text-lg">
              From a single landing page to full custom systems — we handle the website,
              the hosting and everything in between, so you can focus on your business.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                Avail Services
              </a>
              <a
                href="#pricing"
                className="rounded-full border border-cyan-300/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition-all hover:border-cyan-200/50 hover:bg-white/15"
              >
                See Pricing
              </a>
            </div>
          </div>
          <Parallax speed={0.08} className="relative flex min-h-[20rem] items-center justify-center md:min-h-[26rem]">
            <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl md:h-96 md:w-96" />
            <div className="pointer-events-none absolute h-40 w-[22rem] rounded-full bg-blue-500/15 blur-2xl md:h-52 md:w-[34rem]" />
            <BrandLogo
              className="relative h-24 w-[21rem] animate-[aquavern-float_6s_ease-in-out_infinite] sm:h-28 sm:w-[27rem] md:h-32 md:w-[34rem]"
              imageClassName="scale-[4.75]"
            />
          </Parallax>
        </div>
      </div>
    </section>
  );
}

function BrandLogo({ className = "", imageClassName = "" }) {
  return (
    <span className={`relative block shrink-0 overflow-hidden ${className}`}>
      <img
        src={LOGO_SRC}
        alt={BRAND_WORDMARK}
        className={`pointer-events-none absolute inset-0 h-full w-full origin-center object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.3)] ${imageClassName}`}
      />
    </span>
  );
}

function Parallax({ children, speed = 0.08, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!node || reduceMotion) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const movement = Math.max(Math.min((viewportCenter - elementCenter) * speed, 90), -90);
      node.style.transform = `translate3d(0, ${movement.toFixed(2)}px, 0)`;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Webpage",
      tag: "Design & build",
      price: "₹1,900",
      unit: "/ page",
      note: "₹1,000 flat for a single-page site.",
      features: ["Responsive design", "SEO basics", "Up to 2 revisions", "Delivered ready to ship"],
    },
    {
      name: "Hosting",
      tag: "Reliable & managed",
      price: "₹1k – 3k",
      unit: "/ year",
      note: "Subdomain on us at ₹200, custom domain extra.",
      features: ["Managed hosting", "SSL included", "Email forwarding", "Uptime monitoring"],
      featured: true,
    },
    {
      name: "Custom Systems",
      tag: "For your business",
      price: "Let's talk",
      unit: "",
      note: "Tailored builds — contact us for a quote.",
      features: ["Custom workflows", "Dashboards & admin", "Integrations", "Ongoing support"],
    },
  ];

  return (
    <section id="pricing" className="relative overflow-hidden border-t border-white/10 bg-[#020617] py-24 md:py-32">
      <Parallax speed={-0.05} className="pointer-events-none absolute inset-x-0 top-0 h-72 opacity-70">
        <div className="h-full w-full bg-[linear-gradient(180deg,rgba(34,211,238,0.13),transparent),linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)]" />
      </Parallax>
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Pricing" title="Simple, transparent pricing." subtitle="No surprises. Pay for what you need." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
                t.featured
                  ? "border-cyan-300/50 bg-cyan-300 text-slate-950 shadow-2xl shadow-cyan-500/20 md:-translate-y-2"
                  : "border-white/10 bg-white/[0.04] text-white backdrop-blur hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-xl hover:shadow-cyan-500/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs ${
                    t.featured ? "bg-slate-950/10 text-slate-950" : "bg-white/10 text-slate-300"
                  }`}
                >
                  {t.tag}
                </span>
              </div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{t.price}</span>
                <span className={t.featured ? "text-slate-950/70" : "text-slate-400"}>{t.unit}</span>
              </div>
              <p className={`mt-2 text-sm ${t.featured ? "text-slate-950/70" : "text-slate-400"}`}>
                {t.note}
              </p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${t.featured ? "bg-slate-950" : "bg-cyan-300"}`} />
                    <span className={t.featured ? "text-slate-950/90" : "text-slate-200"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                  t.featured
                    ? "bg-slate-950 text-white hover:opacity-90"
                    : "border border-white/10 hover:border-cyan-300/40 hover:bg-white/10"
                }`}
              >
                Get started →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vision() {
  const items = [
    { k: "Vision", v: "Make a polished web presence accessible to every small business and creator — without the agency price tag." },
    { k: "Goal", v: "Ship fast, host reliably, and stay around to maintain what we build. One partner for the whole stack." },
    { k: "Approach", v: "Modern tools, clean design, transparent pricing. We work like an in-house team for clients who don't have one." },
  ];
  return (
    <section id="vision" className="relative overflow-hidden bg-gradient-to-b from-[#020617] via-slate-950 to-[#03111f] py-24 md:py-32">
      <Parallax speed={0.06} className="pointer-events-none absolute inset-0 opacity-35">
        <div className="h-full w-full bg-[linear-gradient(115deg,transparent_20%,rgba(34,211,238,0.16)_48%,transparent_72%)]" />
      </Parallax>
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Vision & Goal" title={`Why we built ${COMPANY_NAME}.`} subtitle="A small studio with a focused mission." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.k} className="bg-slate-950/80 p-8 backdrop-blur">
              <div className="text-xs uppercase tracking-widest text-cyan-200/70">{it.k}</div>
              <p className="mt-4 text-lg leading-relaxed text-slate-200">{it.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/10 bg-[#020617] py-24 md:py-32">
      <Parallax speed={-0.06} className="pointer-events-none absolute inset-x-0 -top-20 h-[28rem]">
        <div className="h-full w-full bg-[radial-gradient(55%_45%_at_50%_0%,rgba(14,165,233,0.2),transparent_70%)]" />
      </Parallax>
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Our Team"
          title={`The operators behind ${COMPANY_NAME}.`}
          subtitle={`${COMPANY_NAME} brings founders, engineers, growth leads, and analytics specialists into one focused delivery unit.`}
        />
        <div className="mt-14 space-y-12">
          {TEAM_GROUPS.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 90}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur md:p-7">
                <div className="flex flex-col gap-2 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/70">
                      {group.category}
                    </div>
                    <p className="mt-2 max-w-2xl text-sm text-slate-400">{group.description}</p>
                  </div>
                  <div className="text-sm text-slate-500">{String(group.members.length).padStart(2, "0")} members</div>
                </div>
                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {group.members.map((member, memberIndex) => (
                    <TeamCard
                      key={`${group.category}-${member.name}`}
                      member={member}
                      index={memberIndex}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-[#020617] to-slate-950 py-24 md:py-32">
      <Parallax speed={0.05} className="pointer-events-none absolute inset-x-0 bottom-0 h-80 opacity-60">
        <div className="h-full w-full bg-[linear-gradient(0deg,rgba(34,211,238,0.16),transparent_70%)]" />
      </Parallax>
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Contact" title="Let's get your site live." subtitle={`Tell ${COMPANY_NAME} what you need. We usually reply within a day.`} />
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <form
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur md:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`New enquiry from ${data.get("name") || "website"}`);
              const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
              window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
            }}
          >
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" />
            <Field label="Message" name="message" placeholder="What are you building?" textarea />
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-white py-3 text-sm font-medium text-slate-950 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              Send message
            </button>
          </form>
          <div className="flex flex-col justify-between rounded-2xl border border-cyan-300/20 bg-cyan-300 p-8 text-slate-950 shadow-2xl shadow-cyan-500/20">
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-950/60">Reach us directly</div>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Prefer email? We're listening.
              </h3>
              <p className="mt-3 text-slate-950/70">
                Drop us a line and we'll get back with a plan and a quote.
              </p>
            </div>
            <div className="mt-10 space-y-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="block">
                <div className="text-xs uppercase tracking-widest text-slate-950/60">Email</div>
                <div className="mt-1 text-lg font-medium underline-offset-4 hover:underline">
                  {CONTACT_EMAIL}
                </div>
              </a>
              <a href="#" className="block">
                <div className="text-xs uppercase tracking-widest text-slate-950/60">Instagram</div>
                <div className="mt-1 text-lg font-medium underline-offset-4 hover:underline">
                  @aquaverntechnologies
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, textarea }) {
  const base =
    "mt-1.5 w-full rounded-lg border border-white/10 bg-slate-950/80 px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300";
  return (
    <label className="mb-4 block">
      <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
        {label}
      </span>
      {textarea ? (
        <textarea required name={name} placeholder={placeholder} rows={5} className={base} />
      ) : (
        <input required name={name} type={type} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs font-medium uppercase tracking-widest text-cyan-200/70">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-pretty text-slate-400 md:text-lg">{subtitle}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 text-sm text-slate-400 md:flex-row">
        <div>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-cyan-200">
            {CONTACT_EMAIL}
          </a>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function TeamCard({ member, index }) {
  const initials = member.name
    .replace(/^(Mr\.|Ms\.)\s+/i, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <Reveal delay={index * 70}>
      <article className="group relative h-full overflow-hidden rounded-2xl border border-cyan-300/15 bg-slate-950/70 p-5 shadow-xl shadow-black/20 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300/50 hover:shadow-cyan-500/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-cyan-200/30 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-xl font-semibold text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,0.18)] transition-transform duration-300 group-hover:scale-105">
            {initials}
          </div>
          <div className="mt-5 text-center">
            <h3 className="text-base font-semibold text-white">{member.name}</h3>
            <p className="mt-1 text-sm text-cyan-200/70">{member.role}</p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {SOCIAL_LINKS.map((social) => (
        <SocialIcon key={social.name} {...social} />
      ))}
    </div>
  );
}

function SocialIcon({ name, icon, href = "#" }) {
  return (
    <a
      href={href}
      aria-label={name}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/20"
    >
      <Icon type={icon} />
    </a>
  );
}

function Icon({ type }) {
  const common = "h-4 w-4";

  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.9H3.8v10.3h3.14V8.9ZM5.36 4.8a1.82 1.82 0 1 0 0 3.64 1.82 1.82 0 0 0 0-3.64Zm6.63 4.1H8.98v10.3h3.01v-5.4c0-1.42.27-2.8 2.04-2.8 1.74 0 1.76 1.63 1.76 2.89v5.31h3.01v-5.99c0-2.94-.63-5.2-4.07-5.2-1.65 0-2.76.91-3.21 1.77h-.04l-.01-.88Z" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
        <path d="M14.25 8.5V6.9c0-.78.52-.96.89-.96h2.26V2.1L14.29 2.08c-3.45 0-4.23 2.58-4.23 4.23V8.5H7.34v3.95h2.72V22h4.19v-9.55h3.47l.16-1.55.26-2.4h-3.89Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
      <path d="M13.79 10.47 20.82 2h-1.67l-6.1 7.35L8.18 2H2.56l7.37 11.11L2.56 22h1.67l6.44-7.77L15.82 22h5.62l-7.65-11.53Zm-2.28 2.75-.75-1.1L4.82 3.3h2.56l4.79 7.12.75 1.1 6.24 9.27H16.6l-5.09-7.57Z" />
    </svg>
  );
}
