import { useEffect, useRef } from 'react'
import Subnav from '../layout/Subnav'
import { expEntries, sideProjects, expSubnav, expHeroPreview } from '../../data/exp'

function Reveal({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          obs.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: 'translateY(14px)', transition: 'opacity 0.55s ease, transform 0.55s ease' }}
    >
      {children}
    </div>
  )
}

function ContentSection({ id, label, children, noBorder = false }) {
  return (
    <Reveal>
      <section
        id={id}
        className={`px-[clamp(2rem,7vw,7rem)] py-[clamp(3rem,5.5vw,5.5rem)] grid gap-[2rem] md:gap-[5rem] items-start grid-cols-1 md:grid-cols-[160px_1fr] ${
          noBorder ? '' : 'border-t border-amber/10'
        }`}
        style={{ scrollMarginTop: "96px" }}
      >
        <p
          className="text-[1rem] tracking-[0.12em] uppercase font-medium text-amber/65 pt-[0.3rem] static md:sticky"
          style={{ top: 'calc(58px + 38px + 12px)' }}
        >
          {label}
        </p>
        <div>{children}</div>
      </section>
    </Reveal>
  )
}

function ExpHero() {
  return (
    <div
      className="px-[clamp(2rem,7vw,7rem)] py-[clamp(3.5rem,7vw,6rem)] grid gap-[5rem] items-end border-b border-amber/18"
      style={{ gridTemplateColumns: '1fr 1fr' }}
    >
      {}
      <div className="text-center">
        
        <h1 className="text-[clamp(2.8rem,5.5vw,5rem)] font-light leading-[1.06] tracking-[-0.03em] text-off-white mb-[1.3rem]">
          Professional<br />
          <em className="text-amber" style={{ fontStyle: 'italic' }}>Experience</em>
        </h1>
        <p className="text-[1rem] leading-[1.78] text-off-white/38 max-w-[400px] mb-[2rem] mx-auto">
          Background outside the Job Rotation Program, including web development, 
          a capstone project, teaching, and projects.

        </p>
      </div>

      {}
      <div className="flex flex-col border border-amber/18 rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
        {expHeroPreview.map((row) => (
          <div
            key={row.title}
            className="px-[1.8rem] py-[1.3rem] border-b border-amber/18 last:border-b-0 hover:bg-amber/4 transition-colors duration-200 cursor-default"
          >
            <p className="text-[0.52rem] tracking-[0.16em] uppercase text-amber/60 mb-[0.35rem]">
              {row.type}
            </p>
            <p className="text-[0.98rem] font-light text-off-white/70">
              {row.title}{' '}
              <em className="italic text-off-white/35">{row.em}</em>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ExpEntry({ entry }) {
  return (
    <div
      className="grid gap-[3rem] items-start pt-0 border-b border-amber/10 last:border-b-0"
      style={{ gridTemplateColumns: '1fr auto' }}
    >
      <div>
        <p className="text-[0.56rem] tracking-[0.18em] uppercase text-amber/65 mb-[0.55rem]">
          {entry.type}
        </p>
        <h2 className="text-[1.5rem] font-normal text-off-white leading-[1.15] mb-[0.3rem]">
          {entry.title}{' '}
          <em className="italic text-off-white/38">{entry.titleEm}</em>
        </h2>
        <p className="text-[0.58rem] tracking-[0.08em] text-off-white/25 mb-[1.1rem]">
          {entry.org}
        </p>
        <ul className="flex flex-col gap-[0.7rem] mb-[1.3rem] max-w-[560px]">
          {entry.bullets.map((b, i) => (
            <li
              key={i}
              className="text-[0.95rem] leading-[1.65] text-off-white/42 pl-[1.1rem] relative before:content-['•'] before:absolute before:left-0 before:text-amber/40"
            >
              {b}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-[0.45rem]">
          {entry.chips.map((c) => (
            <span
              key={c}
              className="text-[0.54rem] tracking-[0.1em] uppercase px-[0.62rem] py-[0.24rem] rounded-full border border-amber/20 text-amber/55 cursor-default transition-colors duration-200 hover:border-amber hover:text-amber"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      <span className="text-[0.6rem] tracking-[0.1em] text-amber/40 whitespace-nowrap pt-[0.3rem]">
        {entry.year}
      </span>
    </div>
  )
}

function SideProjects() {
  return (
    <Reveal>
      <section
        id="exp-projects"
        className="px-[clamp(2rem,7vw,7rem)] py-[clamp(3rem,5.5vw,5.5rem)] border-t border-amber/10"
        style={{ background: 'rgba(196,154,46,0.03)', scrollMarginTop: "96px" }}
      >
        {}
        <div
          className="grid gap-[5rem] mb-8"
          style={{ gridTemplateColumns: '160px 1fr' }}
        >
          <p className="text-[1rem] tracking-[0.12em] uppercase text-amber/45 pt-[0.3rem]">
            Side Projects
          </p>
          <p className="text-[0.68rem] tracking-[0.04em] text-off-white/32 leading-[1.72] max-w-[540px]">
            Things I build in my free time — nothing production-scale, but good
            enough to show how I think and what I'm curious about. Full source
            on{' '}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-amber/55 border-b border-amber/25 no-underline hover:text-amber hover:border-amber transition-colors duration-200"
            >
              GitHub ↗
            </a>
          </p>
        </div>

        {}
        <div
          className="grid gap-[5rem]"
          style={{ gridTemplateColumns: '160px 1fr' }}
        >
          <div /> {}
          <div className="flex flex-col">
            {sideProjects.map((p, i) => (
              <div
                key={p.name}
                className={`flex items-baseline justify-between gap-8 py-[1.1rem] border-b border-amber/8 transition-colors duration-200 group ${
                  i === 0 ? 'border-t border-amber/8' : ''
                }`}
              >
                <div className="flex items-baseline gap-[1.2rem] flex-1 min-w-0">
                  <span className="text-[1rem] font-light text-off-white/55 whitespace-nowrap group-hover:text-off-white/80 transition-colors duration-200">
                    {p.name}
                  </span>
                  <span className="text-[0.58rem] tracking-[0.03em] text-off-white/22 overflow-hidden text-ellipsis whitespace-nowrap group-hover:text-off-white/38 transition-colors duration-200">
                    {p.desc}
                  </span>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-[0.54rem] tracking-[0.1em] uppercase text-amber/35">
                    {p.lang}
                  </span>
                  <a
                    href={p.href || '#'}
                    className="text-[0.58rem] tracking-[0.1em] uppercase text-amber/40 border border-amber/15 rounded-full px-[0.6rem] py-[0.2rem] no-underline transition-colors duration-200 hover:text-amber hover:border-amber/50"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}

function ExpPanel({ active }) {
  return (
    <div
      className="flex flex-col"
      style={{
        display: active ? 'flex' : 'none',
        animation: active ? 'panelIn 0.45s ease forwards' : undefined,
      }}
    >
      <style>{`
        @keyframes panelIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <ExpHero />
      <Subnav mode="exp" links={expSubnav} />

      {expEntries.map((entry) => (
        <ContentSection key={entry.id} id={entry.id} label={entry.sectionLabel}>
          <ExpEntry entry={entry} />
        </ContentSection>
      ))}

      <SideProjects />
    </div>
  )
}

export default ExpPanel