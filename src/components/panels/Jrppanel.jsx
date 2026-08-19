import { useEffect, useRef } from 'react'
import Subnav from '../layout/Subnav'
import { rotations, prodevCards, skillGroups, jrpSubnav } from '../../data/jrp'

const badgeClass = {
  done:   'bg-cardinal/8 text-cardinal',
  active: 'bg-cardinal text-white',
  next:   'border border-cardinal/13 text-muted-light',
}

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

function ContentSection({ id, label, children }) {
  return (
    <Reveal>
      <section
        id={id}
        className="px-[clamp(2rem,7vw,7rem)] py-[clamp(3rem,5.5vw,5.5rem)] grid gap-[2rem] md:gap-[5rem] items-start border-t border-cardinal/8 grid-cols-1 md:grid-cols-[160px_1fr]"
        style={{ scrollMarginTop: "96px" }}
      >
        <p className="text-[1rem] tracking-[0.12em] uppercase font-medium text-cardinal pt-[0.3rem] static md:sticky"
           style={{ top: 'calc(58px + 38px + 12px)' }}>
          {label}
        </p>
        <div>{children}</div>
      </section>
    </Reveal>
  )
}

function JrpHero() {
  return (
    <div
      className="px-[clamp(2rem,7vw,7rem)] py-[clamp(3.5rem,7vw,6rem)] grid gap-[5rem] items-end border-b border-cardinal/13"
      style={{ gridTemplateColumns: '1fr 1fr' }}
    >
      {}
      <div>
        <p className="text-[0.72rem] tracking-[0.12em] uppercase font-medium text-cardinal mb-[1.4rem] flex items-center gap-[0.7rem]">
          <span className="inline-block w-[22px] h-px bg-cardinal" />
          Current · UW–Madison IT Program
        </p>
        <h1 className="text-[clamp(2.8rem,5.5vw,5rem)] font-light leading-[1.06] tracking-[-0.03em] text-dark mb-[1.3rem]">
          Job Rotation<br />
          <em className="italic text-cardinal not-italic" style={{ fontStyle: 'italic' }}>Program</em>
        </h1>
        <p className="text-[1rem] leading-[1.78] text-muted-light max-w-[400px] mb-[2rem]">
          A structured two-year journey across four IT disciplines at the
          university — learning how large technical organizations work from the
          inside, six months at a time.
        </p>
      </div>

      {}
      <div className="flex flex-col border border-cardinal/13 rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(197,5,12,0.07)]">
        {rotations.map((r) => (
          <div
            key={r.num}
            className="grid items-center gap-[1.2rem] px-6 py-[1.1rem] border-b border-cardinal/13 last:border-b-0 hover:bg-cardinal/2 transition-colors duration-200"
            style={{ gridTemplateColumns: 'auto 1fr auto' }}
          >
            <span className="text-[0.62rem] tracking-[0.08em] text-cardinal opacity-70">{r.num}</span>
            <span className="text-[0.95rem] font-light text-dark">{r.title}</span>
            <span className={`text-[0.5rem] tracking-[0.1em] uppercase px-[0.55rem] py-[0.18rem] rounded-full ${badgeClass[r.badge]}`}>
              {r.badge === 'done' ? 'Complete' : r.badge === 'active' ? 'Active' : 'Upcoming'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Rotations() {
  return (
    <ContentSection id="jrp-rotations" label="Rotations">
      <div className="flex flex-col">
        {rotations.map((r) => (
          <div
            key={r.num}
            className="grid gap-[2rem] items-start py-8 border-b border-cardinal/13 last:border-b-0"
            style={{ gridTemplateColumns: '48px 1fr auto' }}
          >
            <p className="text-[0.62rem] tracking-[0.08em] text-cardinal pt-[0.4rem]">{r.num}</p>
            <div>
              <h3 className="text-[1.35rem] font-normal text-dark mb-[0.3rem]">{r.title}</h3>
              <p className="text-[0.58rem] tracking-[0.06em] text-muted-light mb-[0.8rem]">{r.period}</p>
              <p className="text-[0.95rem] leading-[1.73] text-dark/52 max-w-[500px]">{r.desc}</p>
            </div>
            <div className="pt-[0.4rem]">
              <span className={`text-[0.5rem] tracking-[0.1em] uppercase px-[0.55rem] py-[0.18rem] rounded-full ${badgeClass[r.badge]}`}>
                {r.badge === 'done' ? 'Complete' : r.badge === 'active' ? 'Active' : 'Upcoming'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ContentSection>
  )
}

function AboutJrp() {
  return (
    <ContentSection id="jrp-about" label="About the JRP">
      <p className="text-[1.05rem] leading-[1.82] text-dark/58 max-w-[600px]">
        The{' '}
        <strong className="text-dark font-medium">
          UW–Madison IT Job Rotation Program
        </strong>{' '}
        is a competitive two-year program placing recent graduates inside
        different IT disciplines across the university. Each six-month rotation
        is a full immersion — you join the team, take on real work, and rotate
        out with a new perspective on how large technical organizations
        function.
        <br />
        <br />
        The program is designed to produce professionals who understand IT not
        as a single function but as an interconnected set of disciplines. By
        the end, participants have worked alongside support engineers,
        developers, network administrators, and systems architects.{' '}
        <em className="italic text-cardinal">Selection is competitive</em> —
        the program accepts a small cohort each year from UW–Madison's CS and
        engineering programs.
      </p>
    </ContentSection>
  )
}

function ProDev() {
  return (
    <ContentSection id="jrp-prodev" label="Professional Dev">
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))' }}
      >
        {prodevCards.map((c) => (
          <div
            key={c.name}
            className="bg-cream rounded-[14px] p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 hover:bg-white"
          >
            <p className="text-[0.54rem] tracking-[0.18em] uppercase text-cardinal mb-[0.55rem]">{c.type}</p>
            <p className="text-[1rem] font-normal text-dark mb-[0.35rem]">{c.name}</p>
            <p className="text-[0.56rem] tracking-[0.04em] text-muted-light leading-[1.6]">{c.detail}</p>
          </div>
        ))}
      </div>
    </ContentSection>
  )
}

function Skills() {
  return (
    <ContentSection id="jrp-skills" label="Skills">
      <div className="flex flex-col gap-[1.8rem]">
        {skillGroups.map((g) => (
          <div key={g.title}>
            <p className="text-[0.58rem] tracking-[0.18em] uppercase text-cardinal mb-[0.7rem]">{g.title}</p>
            <div className="flex flex-wrap gap-2">
              {g.tags.map((t) => (
                <span
                  key={t}
                  className="text-[0.6rem] tracking-[0.08em] uppercase px-[0.72rem] py-[0.3rem] rounded-full border border-cardinal/13 text-muted-light cursor-default transition-colors duration-200 hover:border-cardinal hover:text-cardinal"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ContentSection>
  )
}

function JrpPanel({ active }) {
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

      <JrpHero />
      <Subnav mode="jrp" links={jrpSubnav} />
      <Rotations />
      <AboutJrp />
      <ProDev />
      <Skills />
    </div>
  )
}

export default JrpPanel