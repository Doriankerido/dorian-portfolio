import { useEffect } from 'react'
import { motion, MotionConfig } from 'framer-motion'

const PROTOTYPE_URL = 'https://claude.ai/artifact/1RKpsnWPgqmFxNRk7Xfo5r'

// Wide illustration under the Problem heading. Set src (e.g. '/images/skid-planner/problem.png') to replace the placeholder.
const PROBLEM_IMAGE = { src: '', alt: '' }

function PrototypeLink({ className = '' }: { className?: string }) {
  return (
    <a
      href={PROTOTYPE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 font-mono text-[1rem] tracking-widest uppercase bg-lemon text-ink px-8 py-4 rounded-full hover:bg-ink hover:text-lemon focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink transition-colors duration-300 ${className}`}
    >
      View prototype
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="w-[1em] h-[1em] shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 11 11 5" />
        <path d="M6 5h5v5" />
      </svg>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

function Shot({
  src,
  alt,
  caption,
  w,
  h,
  maxW,
  priority,
}: {
  src: string
  alt: string
  caption?: string
  w: number
  h: number
  maxW?: number
  priority?: boolean
}) {
  return (
    <figure className="w-full" style={maxW ? { maxWidth: `${maxW}rem` } : undefined}>
      <div
        className="rounded-2xl overflow-hidden w-full"
        style={{
          background: 'var(--surface)',
          border: '1px solid rgba(200,184,154,0.3)',
          boxShadow: '0 8px 32px rgba(26,20,10,0.10)',
        }}
      >
        <img
          src={src}
          alt={alt}
          width={w}
          height={h}
          className="w-full h-auto block"
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
      {caption && (
        <figcaption
          className="font-clean text-muted leading-snug mt-4 italic"
          style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)', maxWidth: '52ch' }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

const eyebrow = 'font-clean font-medium text-[0.6875rem] tracking-widest uppercase text-muted block mb-5'
const h2Class = 'font-clean font-semibold tracking-[-0.02em] text-ink leading-tight mb-8 [text-wrap:balance]'
const h2Style = { fontSize: 'clamp(1.5rem, 2.8vw, 2.8rem)', maxWidth: '30ch' }
const bodyText = { fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', maxWidth: '55ch' }
const sectionInner = 'max-w-[80rem] mx-auto w-full px-6 md:px-12'

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
}

export default function SkidPlanner() {
  // Slide-by-slide scrolling on large screens: one scroll gesture moves exactly one slide, in every browser.
  // CSS snapping (index.css, .snap-slides) stays as the fallback for keyboard and touch. Slide mode switches
  // itself off whenever a slide would not fit the window, so content is never unreachable.
  useEffect(() => {
    const html = document.documentElement
    const desktop = window.matchMedia('(min-width: 1024px) and (min-height: 640px)')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const slides = () => Array.from(document.querySelectorAll<HTMLElement>('.slide'))

    const sync = () => {
      const fits = slides().every((el) => el.offsetHeight <= window.innerHeight + 2)
      html.classList.toggle('snap-slides', desktop.matches && fits)
    }

    const HARD_LOCK = 600
    let hardLockUntil = 0
    let inMomentum = false
    let lastTime = 0
    let lastAbs = 0
    let travelled = 0

    const stops = () => {
      const tops = slides().map((el) => Math.round(el.getBoundingClientRect().top + window.scrollY))
      const bottom = html.scrollHeight - window.innerHeight
      return bottom > tops[tops.length - 1] + 1 ? [...tops, bottom] : tops
    }

    const onWheel = (e: WheelEvent) => {
      if (!html.classList.contains('snap-slides') || e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return
      e.preventDefault()

      const now = performance.now()
      const abs = Math.abs(e.deltaY)
      const quiet = now - lastTime > 100
      const accelerating = abs >= 20 && abs > lastAbs * 1.5
      lastTime = now
      lastAbs = abs

      if (now < hardLockUntil) return
      // After a slide change, ignore the tail of the same swipe; a pause or a fresh push starts a new gesture.
      if (inMomentum && !quiet && !accelerating) return
      inMomentum = false
      if (quiet) travelled = 0

      travelled += e.deltaY
      if (Math.abs(travelled) < 24) return
      const direction = travelled > 0 ? 1 : -1
      travelled = 0

      const points = stops()
      let current = 0
      points.forEach((point, i) => {
        if (Math.abs(point - window.scrollY) < Math.abs(points[current] - window.scrollY)) current = i
      })
      const next = Math.min(points.length - 1, Math.max(0, current + direction))
      if (next === current) return
      hardLockUntil = now + HARD_LOCK
      inMomentum = true
      window.scrollTo({ top: points[next], behavior: reduceMotion.matches ? 'auto' : 'smooth' })
    }

    sync()
    const settle = window.setTimeout(sync, 600)
    window.addEventListener('resize', sync)
    window.addEventListener('load', sync)
    document.fonts?.ready.then(sync)
    window.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      window.clearTimeout(settle)
      window.removeEventListener('resize', sync)
      window.removeEventListener('load', sync)
      window.removeEventListener('wheel', onWheel)
      html.classList.remove('snap-slides')
    }
  }, [])

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <MotionConfig reducedMotion="user">
      <div className="slide lg:min-h-[100svh] lg:flex lg:flex-col lg:justify-center">
      {/* Hero */}
      <section className="pt-32 lg:pt-[5.5rem] pb-12 lg:pb-6">
        <div className={sectionInner}>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)] gap-10 lg:gap-12 items-center">
            <div
              className="order-2 w-full max-w-full lg:w-[var(--hero-w)] lg:justify-self-end"
              style={{ '--hero-w': 'max(18rem, min(60vw, calc((100svh - 29rem) * 1.6)))' } as React.CSSProperties}
            >
              <Shot
                src="/images/skid-planner/1-planning-week.png"
                alt="Skid planning screen: weekly board with photographer cards, venue rows and a month calendar"
                w={2880}
                h={1800}
                priority
              />
            </div>

            <div className="order-1 flex flex-col justify-center">
              <h1
                className="font-display font-semibold text-ink leading-none mb-5"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 8rem)' }}
              >
                Skid
              </h1>
              <p
                className="font-clean text-muted leading-snug mb-8"
                style={{ fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)', maxWidth: '24ch' }}
              >
                A system for coordinating food photography shoots.
              </p>
              <PrototypeLink className="self-start" />
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="pb-16 lg:pb-6">
        <div className={sectionInner}>
          <div className="bg-surface rounded-2xl px-6 py-10 md:px-12 md:py-6">
            <span className="font-clean font-medium text-[0.6875rem] tracking-widest uppercase text-muted block mb-4">
              Background
            </span>
            <div
              className="font-clean text-ink leading-relaxed flex flex-col gap-4"
              style={{ fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', maxWidth: '90ch' }}
            >
              <p>
                <strong className="font-semibold">Skid</strong> is a system for coordinating food
                photography shoots for restaurants on delivery platforms like Wolt. It
                covers the work around a shoot: assigning photographers, tracking payments and
                handling cancellations.
              </p>
              <p>
                This was my graduation project. Photoshoot scheduling was done by hand across
                disconnected tools, which caused <strong className="font-semibold">missed
                bookings</strong> and delayed onboarding. I interviewed a coordinator, a team lead
                and two freelance photographers to see where the process breaks, then designed
                the <strong className="font-semibold">planning screen</strong> that replaces the
                manual sorting.
              </p>
            </div>
            <span className="font-clean font-medium text-[0.6875rem] tracking-widest uppercase text-muted block mt-4">
              Graduation project | 2026 | Product designer
            </span>
          </div>
        </div>
      </section>

      </div>

      {/* 1. Problem */}
      <section className="slide py-16 md:py-24 lg:py-0 lg:pt-[7rem] lg:pb-8 lg:flex lg:flex-col">
        <motion.div {...reveal} className={`${sectionInner} lg:flex-1 lg:flex lg:flex-col lg:min-h-0`}>
          <span className={eyebrow}>The Problem</span>
          <h2 className={`${h2Class} !mb-5`} style={{ ...h2Style, maxWidth: '46ch' }}>
            Manual photoshoot scheduling caused missed bookings and delayed onboarding
          </h2>
          <p
            className="font-clean text-ink leading-relaxed mb-10 lg:mb-6"
            style={{ fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', maxWidth: '75ch' }}
          >
            Photoshoot scheduling was done by hand across several disconnected tools: a
            general-purpose task tracker, a chat app and a loose list in a folder. Photographers
            kept their own spreadsheets or paper lists. The task tracker was not built for
            scheduling, so coordinators sorted requests by geography and photographer
            availability, then called to confirm. I watched this cause missed bookings and stress
            for the people using it. A large part of onboarding time ended up spent on
            scheduling photoshoots, which delays the business going live.
          </p>

          {PROBLEM_IMAGE.src ? (
            <img
              src={PROBLEM_IMAGE.src}
              alt={PROBLEM_IMAGE.alt}
              className="w-full h-auto block lg:flex-1 lg:min-h-0 lg:object-contain"
              loading="lazy"
              decoding="async"
            />
          ) : (
            // TODO: add the Problem illustration (set PROBLEM_IMAGE.src above).
            <div
              className="w-full rounded-2xl flex items-center justify-center lg:flex-1 lg:min-h-0 lg:!aspect-auto"
              style={{
                aspectRatio: '21 / 9',
                border: '1.5px dashed rgba(59,21,213,0.25)',
                background: 'rgba(59,21,213,0.03)',
              }}
            >
              <span className="font-clean text-[1rem] tracking-wide text-muted">
                TODO: Problem illustration
              </span>
            </div>
          )}
        </motion.div>
      </section>

      {/* 2. Solution */}
      <section className="slide py-16 md:py-24 lg:py-0 lg:pt-[6rem] lg:pb-8 lg:flex lg:flex-col lg:justify-center">
        <motion.div {...reveal} className={sectionInner}>
          <span className={eyebrow}>The solution</span>
          <h2 className={`${h2Class} !mb-5`} style={{ ...h2Style, maxWidth: '46ch' }}>
            A planning screen that replaces the manual sorting.
          </h2>
          <p
            className="font-clean text-ink leading-relaxed mb-8"
            style={{ fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', maxWidth: '75ch' }}
          >
            I designed a single planning screen that replaces the manual sorting. Requests that
            need scheduling appear in one place, and each photographer has a day card with a
            capacity limit (small and medium menus take one slot, large two, extra large three, up
            to three per day), so coordinators can see at a glance which days are full and which
            still have room. A calendar shows every date as &ldquo;needs scheduling&rdquo;,
            &ldquo;scheduled&rdquo; or &ldquo;ready&rdquo;, and an &ldquo;Add venues&rdquo; panel
            suggests nearby venues, filters by recently added, and shows each menu&rsquo;s build
            status before it is placed on a day. Day, week and month views give coordinators and
            photographers the same picture, so there&rsquo;s no more switching between tools to
            find out who is available where.
          </p>
          <div>
            <PrototypeLink />
          </div>
        </motion.div>
      </section>

      {/* 3. Results */}
      <section className="slide pt-16 md:pt-24 pb-24 md:pb-32 lg:pt-[6rem] lg:pb-8 lg:flex lg:flex-col lg:justify-center">
        <motion.div {...reveal} className={sectionInner}>
          <span className={eyebrow}>Business Results</span>
          <h2 className={h2Class} style={h2Style}>
            In progress.
          </h2>

          <p className="font-clean text-ink leading-relaxed" style={bodyText}>
            The prototype is currently being tested with real users.
          </p>
        </motion.div>
      </section>
      </MotionConfig>
    </motion.main>
  )
}
