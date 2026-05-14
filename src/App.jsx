import { useEffect, useRef, useState } from "react";

const COMPANY_NAME = "AQUAVERN Technologies";
const BRAND_WORDMARK = "AQUAVERN";
const CONTACT_EMAIL = "aquaverntechnologies@gmail.com";
const LOGO_SRC = "/aquavern-wordmark.png";

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
      { name: "Mr. Sameeth", role: "Founder" },
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
      { name: "Mr. Nandan", role: "Marketing" },
    ],
  },
  {
    category: "Data Analytics",
    description: "Insight systems, analytics workflows, and data intelligence.",
    members: [
      { name: "Mrs. Rijingtngen Warlarpih", role: "Data Analytics" },
    ],
  },
];

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/aquaverntechnologies?igsh=MXU4NXdxZGhmMGhkdQ==",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/aquavern-technologies-12487140a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  { name: "X", icon: "x", href: "https://x.com/aquaverntech" },
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
    <div className="min-h-screen w-full overflow-x-hidden scroll-smooth bg-[#020617] text-white antialiased">
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
    <header className="absolute inset-x-0 top-0 z-50 w-full overflow-x-clip">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-5 sm:px-6 sm:py-7 md:py-9 lg:gap-6">
        <a href="#home" className="group flex min-w-0 shrink items-center">
          <BrandLogo className="h-9 w-[clamp(8rem,42vw,10.5rem)] sm:h-10 sm:w-44 lg:w-48" />
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
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-white px-3.5 py-2.5 text-center text-xs font-bold text-slate-950 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 sm:px-5 sm:text-sm"
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
      className="relative w-full overflow-hidden bg-[#020617]"
    >
      <Parallax speed={-0.08} className="pointer-events-none absolute inset-x-0 -top-24 h-[calc(100%+12rem)]">
        <div className="h-full w-full bg-[radial-gradient(70%_55%_at_75%_24%,rgba(34,211,238,0.24)_0%,transparent_68%),linear-gradient(135deg,rgba(2,6,23,0.96),rgba(15,23,42,0.9)_45%,rgba(2,6,23,1))]" />
      </Parallax>
      <Parallax speed={0.12} className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-25 md:block">
        <div className="h-full w-full bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.18)),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:100%_100%,56px_56px,56px_56px]" />
      </Parallax>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#020617] to-transparent" />
      <Nav active={active} />
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6 md:pb-40 md:pt-44">
        <div className="grid min-w-0 items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:gap-12">
          <div className="min-w-0 text-left">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-3 py-1 text-xs text-cyan-100 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              <span className="min-w-0 break-words">{COMPANY_NAME} is taking new projects</span>
            </span>
            <h1 className="mt-6 max-w-3xl text-balance text-[clamp(2.55rem,13vw,4.5rem)] font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Let us build, deploy &amp; manage your{" "}
              <span className="italic text-cyan-200/80">web presence.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base text-slate-300 md:text-lg">
              From a single landing page to full custom systems — we handle the website,
              the hosting and everything in between, so you can focus on your business.
            </p>
            <div className="mt-10 flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:items-center">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-slate-950 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                Avail Services
              </a>
              <a
                href="#pricing"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-300/20 bg-white/10 px-6 py-3 text-center text-sm font-medium text-white backdrop-blur transition-all hover:border-cyan-200/50 hover:bg-white/15"
              >
                See Pricing
              </a>
            </div>
          </div>
          <Parallax speed={0.08} className="relative flex min-h-[15rem] min-w-0 items-center justify-center sm:min-h-[18rem] md:min-h-[26rem]">
            <div className="pointer-events-none absolute h-56 w-56 max-w-[70vw] rounded-full bg-cyan-400/25 blur-3xl sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96" />
            <div className="pointer-events-none absolute h-36 w-[min(70vw,20rem)] rounded-full bg-blue-500/15 blur-2xl md:h-48 md:w-[min(40vw,30rem)] lg:h-52 lg:w-[min(36vw,34rem)]" />
            <div className="group/logo relative flex w-full max-w-[min(100%,34rem)] animate-[aquavern-float_6s_ease-in-out_infinite] items-center justify-center rounded-[1.65rem] border border-cyan-200/15 bg-black/70 px-4 py-8 shadow-[0_0_42px_rgba(34,211,238,0.22)] backdrop-blur-xl transition-all duration-500 hover:scale-[1.025] hover:border-cyan-200/30 hover:shadow-[0_0_64px_rgba(34,211,238,0.34)] sm:px-8 sm:py-10 md:rounded-[2rem]">
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_58%)] opacity-80 transition-opacity duration-500 group-hover/logo:opacity-100" />
              <BrandLogo className="relative h-[clamp(4.25rem,18vw,7rem)] w-full max-w-[34rem]" />
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}

function BrandLogo({ className = "" }) {
  return (
    <span className={`relative block min-w-0 shrink-0 overflow-hidden ${className}`}>
      <img
        src={LOGO_SRC}
        alt={BRAND_WORDMARK}
        className="block h-full w-full object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.3)]"
        draggable="false"
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
      name: "Basic Plan",
      tag: "Launch-ready",
      price: "₹10,000",
      unit: "",
      description: "Perfect for startups, portfolios, landing pages, and small business websites.",
      breakdown: [
        { label: "Development", value: "₹7,000" },
        { label: "Hosting & Maintenance", value: "₹3,000/year" },
      ],
      note: "Hosting costs may vary between ₹1,000–₹3,000 depending on requirements.",
      features: ["Responsive website build", "Hosting setup", "Maintenance-ready handoff", "Clean launch support"],
      cta: "Start with Basic",
      featured: true,
    },
    {
      name: "Custom Plan",
      tag: "Built to scope",
      price: "Custom",
      unit: "",
      description: "For businesses that need advanced pages, workflows, dashboards, integrations, or product-grade systems.",
      breakdown: [
        { label: "Strategy & Scope", value: "Included" },
        { label: "Build, Hosting & Support", value: "Quoted" },
      ],
      note: "Pricing is tailored after we understand your requirements, timeline, and technical depth.",
      features: ["Custom UI/UX systems", "Dashboards & admin panels", "Third-party integrations", "Ongoing support options"],
      cta: "Request a Quote",
    },
  ];

  return (
    <section id="pricing" className="relative w-full overflow-hidden border-t border-white/10 bg-[#020617] py-20 md:py-32">
      <Parallax speed={-0.05} className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] opacity-80">
        <div className="h-full w-full bg-[radial-gradient(55%_48%_at_50%_0%,rgba(34,211,238,0.2),transparent_70%),linear-gradient(180deg,rgba(15,23,42,0.88),transparent)]" />
      </Parallax>
      <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-48 w-[min(42rem,82vw)] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Pricing" title="Premium websites, simple plans." subtitle="Choose a focused launch package or scope a custom build with us." />
        <div className="mt-10 grid min-w-0 gap-5 sm:mt-14 lg:grid-cols-2 lg:gap-7">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`group relative flex min-w-0 flex-col overflow-hidden rounded-3xl border p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 sm:p-7 lg:p-8 ${
                t.featured
                  ? "border-cyan-200/35 bg-[linear-gradient(145deg,rgba(8,47,73,0.72),rgba(2,6,23,0.9)_46%,rgba(8,13,28,0.95))] shadow-[0_0_52px_rgba(34,211,238,0.2)] hover:border-cyan-200/55 hover:shadow-[0_0_70px_rgba(34,211,238,0.3)]"
                  : "border-white/10 bg-white/[0.045] shadow-2xl shadow-black/20 hover:border-cyan-300/35 hover:shadow-[0_0_48px_rgba(34,211,238,0.14)]"
              }`}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_28%,rgba(34,211,238,0.08)_58%,transparent)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl transition-opacity duration-500 group-hover:opacity-90 sm:h-44 sm:w-44" />
              <div className="relative flex min-w-0 flex-wrap items-center justify-between gap-3">
                <h3 className="min-w-0 text-xl font-semibold text-white sm:text-2xl">{t.name}</h3>
                <span
                  className="max-w-full rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs font-medium text-cyan-100"
                >
                  {t.tag}
                </span>
              </div>
              <p className="relative mt-5 min-h-14 text-sm leading-relaxed text-slate-300 sm:text-base">
                {t.description}
              </p>
              <div className="relative mt-7 flex min-w-0 flex-wrap items-end gap-x-2 gap-y-2">
                <span className="text-[clamp(2.6rem,14vw,4.2rem)] font-semibold leading-none tracking-tight text-white">{t.price}</span>
                {t.unit && <span className="pb-1 text-slate-400">{t.unit}</span>}
              </div>
              <div className="relative mt-7 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                {t.breakdown.map((item) => (
                  <div key={item.label} className="flex min-w-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 last:border-b-0">
                    <span className="text-sm text-slate-300">{item.label}</span>
                    <span className="shrink-0 text-right text-sm font-semibold text-cyan-100">{item.value}</span>
                  </div>
                ))}
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-cyan-100/75">
                {t.note}
              </p>
              <ul className="relative mt-7 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                    <span className="text-slate-200">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="relative mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-cyan-200/20 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                {t.cta}
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
    <section id="vision" className="relative w-full overflow-hidden bg-gradient-to-b from-[#020617] via-slate-950 to-[#03111f] py-20 md:py-32">
      <Parallax speed={0.06} className="pointer-events-none absolute inset-0 opacity-35">
        <div className="h-full w-full bg-[linear-gradient(115deg,transparent_20%,rgba(34,211,238,0.16)_48%,transparent_72%)]" />
      </Parallax>
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Vision & Goal" title={`Why we built ${COMPANY_NAME}.`} subtitle="A small studio with a focused mission." />
        <div className="mt-10 grid min-w-0 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-14 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.k} className="min-w-0 bg-slate-950/80 p-5 backdrop-blur sm:p-8">
              <div className="text-xs uppercase tracking-widest text-cyan-200/70">{it.k}</div>
              <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">{it.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative w-full overflow-hidden border-t border-white/10 bg-[#020617] py-20 md:py-32">
      <Parallax speed={-0.06} className="pointer-events-none absolute inset-x-0 -top-20 h-[28rem]">
        <div className="h-full w-full bg-[radial-gradient(55%_45%_at_50%_0%,rgba(14,165,233,0.2),transparent_70%)]" />
      </Parallax>
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Our Team"
          title={`The operators behind ${COMPANY_NAME}.`}
          subtitle={`${COMPANY_NAME} brings founders, engineers, growth leads, and analytics specialists into one focused delivery unit.`}
        />
        <div className="mt-10 space-y-8 sm:mt-14 sm:space-y-12">
          {TEAM_GROUPS.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 90}>
              <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur sm:p-5 md:p-7">
                <div className="flex min-w-0 flex-col gap-2 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/70 sm:tracking-[0.32em]">
                      {group.category}
                    </div>
                    <p className="mt-2 max-w-2xl text-sm text-slate-400">{group.description}</p>
                  </div>
                  <div className="shrink-0 text-sm text-slate-500">{String(group.members.length).padStart(2, "0")} members</div>
                </div>
                <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
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
    <section id="contact" className="relative w-full overflow-hidden bg-gradient-to-b from-[#020617] to-slate-950 py-20 md:py-32">
      <Parallax speed={0.05} className="pointer-events-none absolute inset-x-0 bottom-0 h-80 opacity-60">
        <div className="h-full w-full bg-[linear-gradient(0deg,rgba(34,211,238,0.16),transparent_70%)]" />
      </Parallax>
      <div className="pointer-events-none absolute left-1/2 top-24 h-56 w-[min(42rem,84vw)] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Contact" title="Let's get your site live." subtitle={`Tell ${COMPANY_NAME} what you need. We usually reply within a day with a practical next step.`} />
        <div className="mt-10 grid min-w-0 gap-6 sm:mt-14 md:grid-cols-2 md:gap-10">
          <form
            className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/25 hover:shadow-[0_0_48px_rgba(34,211,238,0.12)] sm:p-6 md:p-8"
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
              className="mt-2 min-h-12 w-full rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              Send message
            </button>
          </form>
          <div className="group relative flex min-w-0 flex-col justify-between overflow-hidden rounded-3xl border border-cyan-200/20 bg-[linear-gradient(145deg,rgba(8,47,73,0.72),rgba(2,6,23,0.92)_52%,rgba(3,7,18,0.98))] p-5 text-white shadow-[0_0_52px_rgba(34,211,238,0.16)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-200/40 hover:shadow-[0_0_70px_rgba(34,211,238,0.24)] sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(34,211,238,0.2),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.09),transparent_36%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="text-xs uppercase tracking-widest text-cyan-100/70">Reach us directly</div>
              <h3 className="mt-3 text-[clamp(1.65rem,8vw,2.25rem)] font-semibold leading-tight tracking-tight">
                Prefer email? We'll map the next step.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
                Share the type of site, timeline, and whether you want the Basic Plan or a custom build. We'll reply with a clear plan and quote.
              </p>
            </div>
            <div className="relative mt-10 space-y-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="block min-w-0 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-all duration-300 hover:border-cyan-200/35 hover:bg-white/[0.075]">
                <div className="text-xs uppercase tracking-widest text-cyan-100/60">Email</div>
                <div className="mt-1 break-all text-base font-semibold text-cyan-50 underline-offset-4 hover:underline sm:text-lg">
                  {CONTACT_EMAIL}
                </div>
              </a>
              <a href="https://www.instagram.com/aquaverntechnologies?igsh=MXU4NXdxZGhmMGhkdQ==" className="block min-w-0 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition-all duration-300 hover:border-cyan-200/35 hover:bg-white/[0.075]">
                <div className="text-xs uppercase tracking-widest text-cyan-100/60">Instagram</div>
                <div className="mt-1 break-words text-base font-semibold text-cyan-50 underline-offset-4 hover:underline sm:text-lg">
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
    "mt-1.5 block min-h-11 w-full min-w-0 rounded-lg border border-white/10 bg-slate-950/80 px-3.5 py-2.5 text-base text-white outline-none transition-colors placeholder:text-slate-500 focus:border-cyan-300 sm:text-sm";
  return (
    <label className="mb-4 block min-w-0">
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
    <div className="min-w-0 max-w-2xl">
      <div className="text-xs font-medium uppercase tracking-widest text-cyan-200/70">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-balance text-[clamp(2rem,10vw,3rem)] font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-pretty text-slate-400 md:text-lg">{subtitle}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full overflow-hidden border-t border-white/10 bg-[#020617] py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-4 text-center text-sm text-slate-400 sm:px-6 md:flex-row md:text-left">
        <div className="max-w-full break-words">© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</div>
        <div className="flex min-w-0 flex-col items-center gap-4 sm:flex-row">
          <a href={`mailto:${CONTACT_EMAIL}`} className="max-w-full break-all transition-colors hover:text-cyan-200">
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
        <div className="relative min-w-0">
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-cyan-200/30 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-xl font-semibold text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,0.18)] transition-transform duration-300 group-hover:scale-105">
            {initials}
          </div>
          <div className="mt-5 min-w-0 text-center">
            <h3 className="break-words text-base font-semibold text-white">{member.name}</h3>
            <p className="mt-1 text-sm text-cyan-200/70">{member.role}</p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
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
