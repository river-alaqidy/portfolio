import { useState, useEffect, useRef } from 'react'

function Subnav({ mode, links }) {
  const [activeHref, setActiveHref] = useState(links[0]?.href)
  const ticking = useRef(false)
  const isNavigating = useRef(false)
  const settleTimeout = useRef(null)

  useEffect(() => {
    function computeActive() {
      if (window.scrollY < 10) {
        setActiveHref(links[0]?.href)
        return
      }

      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2

      if (scrolledToBottom) {
        setActiveHref(links[links.length - 1]?.href)
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
    }

    function scheduleSettleCheck() {
      if (settleTimeout.current) clearTimeout(settleTimeout.current)
      settleTimeout.current = setTimeout(() => {
        isNavigating.current = false
        computeActive()
      }, 120)
    }

    function onScroll() {
      if (isNavigating.current) {
        // still mid programmatic scroll — push the "settled" check out
        // instead of highlighting off a transient in-flight position
        scheduleSettleCheck()
        return
      }
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        computeActive()
        ticking.current = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (settleTimeout.current) clearTimeout(settleTimeout.current)
    }
  }, [links])

  function handleClick(e, href) {
    e.preventDefault()
    setActiveHref(href)
    isNavigating.current = true

    // fallback in case scrollIntoView doesn't fire any scroll events
    // (e.g. clicking the section you're already at)
    if (settleTimeout.current) clearTimeout(settleTimeout.current)
    settleTimeout.current = setTimeout(() => {
      isNavigating.current = false
    }, 120)

    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    window.history.replaceState(null, '', window.location.pathname + window.location.search)
  }

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
            className={`flex-1 border-r transition-colors duration-500 ${
              isJrp ? 'border-cardinal/13' : 'border-amber/18'
            }`}
          >
            <a
              href={href}
              onClick={(e) => handleClick(e, href)}
              className={`block text-center text-[0.6rem] tracking-[0.1em] uppercase no-underline transition-colors duration-200 px-[clamp(1rem,2.5vw,2rem)] py-[0.9rem] ${
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