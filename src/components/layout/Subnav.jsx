import { useState, useEffect, useRef } from 'react'

function Subnav({ mode, links }) {
  const [activeHref, setActiveHref] = useState(links[0]?.href)
  const ticking = useRef(false)

  useEffect(() => {
    function onScroll() {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        if (window.scrollY < 10) {
          setActiveHref(links[0]?.href)
          ticking.current = false
          return
        }
        const OFFSET = 58 + 40
        let current = links[0]?.href
        links.forEach(({ href }) => {
          const el = document.querySelector(href)
          if (el && el.getBoundingClientRect().top <= OFFSET + 16) {
            current = href
          }
        })
        setActiveHref(current)
        ticking.current = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [links])

  const isJrp = mode === 'jrp'

  return (
    <ul
      className={`flex list-none m-0 p-0 sticky z-200 transition-colors duration-600 backdrop-blur-md ${
        isJrp
          ? 'bg-off-white/96 shadow-[0_1px_0_rgba(197,5,12,0.13)]'
          : 'bg-dark/96 shadow-[0_1px_0_rgba(196,154,46,0.18)]'
      }`}
      style={{ top: '58px' }}
    >
      {links.map(({ href, label }) => {
        const isActive = activeHref === href
        return (
          <li
            key={href}
            className={`border-r transition-colors duration-500 ${
              isJrp ? 'border-cardinal/13' : 'border-amber/18'
            }`}
          >
            <a
              href={href}
              className={`block text-[0.6rem] tracking-[0.1em] uppercase no-underline transition-colors duration-200 px-[clamp(1rem,2.5vw,2rem)] py-[0.9rem] ${
                isActive
                  ? isJrp
                    ? 'text-cardinal shadow-[inset_3px_0_0_#C5050C] bg-cardinal/4'
                    : 'text-amber shadow-[inset_3px_0_0_#C49A2E] bg-amber/5'
                  : isJrp
                  ? 'text-muted-light hover:text-cardinal'
                  : 'text-off-white/30 hover:text-amber'
              }`}
            >
              {label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Subnav