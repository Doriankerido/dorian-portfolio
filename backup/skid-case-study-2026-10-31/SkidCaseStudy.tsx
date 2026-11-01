import { motion } from 'framer-motion'
import { useEffect } from 'react'

const prooflines = [
  { label: 'restaurants photographed every month', value: '300' },
  { label: "stage in a restaurant's onboarding to Wolt", value: 'Longest' },
  { label: 'shoots lost or compromised by an unprepared venue', value: '1 in 4' },
]

const problemData = [
  { label: 'a shoot needs a second visit to finish', value: 'Weekly' },
  { label: 'roles flagged the same pain point, independently', value: '3/3' },
  { label: "most restaurants don't know what to expect", value: 'First shoot' },
]

const section3Prooflines = [
  { label: 'Monday, WhatsApp and manual lists, replaced by one flow', value: '3 → 1' },
  { label: 'Replaces the entire\nprep thread', value: '1 video' },
  { label: 'details left to memory', value: 'Zero' },
]

interface Props {
  imageOne?: string
  imageOneAlt?: string
  imageTwo?: string
  imageTwoAlt?: string
  imageResearch?: string
  imageResearchAlt?: string
  imageDesign?: string
  imageDesignAlt?: string
  imageHero?: string
  imageHeroAlt?: string
  imageBefore?: string
  imageBeforeAlt?: string
  imageAfter?: string
  imageAfterAlt?: string
}

export default function SkidCaseStudy({
  imageOne = '/images/skid/skid-onboarding-1.png',
  imageOneAlt = 'Skid onboarding - address confirmation',
  imageTwo = '/images/skid/skid-onboarding-2.png',
  imageTwoAlt = 'Skid onboarding - space setup',
  imageResearch = '',
  imageResearchAlt = 'Research - photographer preparing for a shoot',
  imageDesign = '',
  imageDesignAlt = 'A video of the final design',
  imageBefore = '',
  imageBeforeAlt = 'Before',
  imageHero = '/images/skid/skid-hero.png',
  imageHeroAlt = 'Skid - restaurant ready for photography',
  imageAfter = '',
  imageAfterAlt = 'After',
}: Props) {
  useEffect(() => {
    const html = document.documentElement
    html.style.scrollSnapType = 'y mandatory'
    return () => {
      html.style.scrollSnapType = ''
    }
  }, [])

  const snap: React.CSSProperties = { minHeight: '100svh', scrollSnapAlign: 'start' }

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <section className="flex items-center pt-24 pb-16" style={snap}>
        <div className="max-w-[80rem] mx-auto w-full px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 w-full items-center">

          {/* LEFT - text */}
          <div className="flex flex-col justify-center">
            <span className="font-clean text-[1rem] tracking-widest uppercase text-muted block mb-5">
              Skid
            </span>

            <h1
              className="font-clean font-semibold tracking-[-0.02em] text-ink leading-tight mb-6"
              style={{ fontSize: 'clamp(1.75rem, 3.1vw, 3rem)' }}
            >
              Getting a restaurant ready to be photographed.
            </h1>

            <div className="mb-10" style={{ maxWidth: '50ch' }}>
              <p
                className="font-clean text-ink leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.2vw, 1.15rem)' }}
              >
                SKID runs the operations behind food photography shoots for Wolt-listed
                restaurants - photographer assignment, venue preparation, payment status and
                cancellations.
              </p>
              <p
                className="font-clean text-ink leading-relaxed mt-3"
                style={{ fontSize: 'clamp(1rem, 1.2vw, 1.15rem)' }}
              >
                This case study covers what it takes to get a restaurant ready.
              </p>
            </div>

            {/* Prooflines - 2×2 grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 mb-10">
              {prooflines.map(({ label, value }) => (
                <div key={label}>
                  <span
                    className="font-clean font-semibold tracking-[-0.02em] text-ink leading-none block mb-1.5"
                    style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}
                  >
                    {value}
                  </span>
                  <span className="font-clean text-[1rem] tracking-wide text-muted block leading-snug whitespace-pre-line">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <span className="font-clean text-[1rem] tracking-wide text-muted block mb-3">
                Design and built with
              </span>
              <div className="flex items-center gap-5">
                <img src="/images/logos/figma.svg" alt="Figma" style={{ height: '1.5rem', width: 'auto', opacity: 0.55 }} />
                <img src="/images/logos/claude.svg" alt="Claude AI" style={{ height: '1.5rem', width: 'auto', opacity: 0.55 }} />
                <img src="/images/logos/wolt.png" alt="Wolt" style={{ height: '1.75rem', width: 'auto', opacity: 0.55 }} />
              </div>
            </div>
          </div>

          {/* RIGHT - hero image */}
          <div className="flex justify-center md:justify-end">
            <div
              className="rounded-2xl overflow-hidden w-full max-w-[28.75rem]"
              style={{
                aspectRatio: '3 / 4',
                background: 'var(--bg)',
              }}
            >
              {imageHero && (
                <img
                  src={imageHero}
                  alt={imageHeroAlt}
                  className="w-full h-full object-cover"
                  style={{ mixBlendMode: 'multiply' }}
                />
              )}
            </div>
          </div>

        </div>
        </div>
      </section>

      {/* Section 2 - The Problem & Opportunity */}
      <section className="flex items-center pt-24 pb-16" style={snap}>
        <div className="max-w-[80rem] mx-auto w-full px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 w-full items-center">

          {/* LEFT - research image (shows second on mobile) */}
          <div className="order-2 md:order-1 flex justify-center md:justify-start">
            <figure className="w-full max-w-[28.75rem]">
              <div
                className="rounded-2xl overflow-hidden w-full"
                style={{
                  aspectRatio: '3 / 4',
                  background: 'var(--surface)',
                  border: '1px solid rgba(200,184,154,0.3)',
                  boxShadow: '0 8px 32px rgba(26,20,10,0.10)',
                }}
              >
                {imageResearch && (
                  <img src={imageResearch} alt={imageResearchAlt} className="w-full h-full object-cover" />
                )}
              </div>
              <figcaption
                className="font-clean text-muted leading-snug mt-4 italic"
                style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)', maxWidth: '42ch' }}
              >
                One photographer prints the restaurant's dish list before every shoot - in case the venue doesn't know what's being shot. She isn't unusual; every person we interviewed had built a workaround like it.
              </figcaption>
            </figure>
          </div>

          {/* RIGHT - text (shows first on mobile) */}
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <span className="font-clean text-[1rem] tracking-widest uppercase text-muted block mb-5">
              The Problem & Opportunity
            </span>

            <h2
              className="font-clean font-semibold tracking-[-0.02em] text-ink leading-tight mb-8"
              style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2.2rem)' }}
            >
              Shoots rarely get cancelled. Usually the venue just isn't ready - bad table spot, no space to shoot - so photos come out weaker, or the shoot needs a second visit. The launch waits either way.
            </h2>

            <span className="font-clean text-[1rem] tracking-widest uppercase text-muted block mb-3">
              Target Users
            </span>
            <div
              className="font-clean text-ink leading-relaxed mb-10 flex flex-col gap-4"
              style={{ fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', maxWidth: '55ch' }}
            >
              <p><strong>Freelance photographers</strong> arrive to conditions they can't control, and their work gets judged on the result anyway.</p>
              <p><strong>Coordination managers</strong> juggle every detail a shoot depends on before ever making the call - and can't afford to miss one.</p>
              <p><strong>Venue owners</strong> are expected to be ready without ever being told what "ready" means - and every extra day before launch is a day they're not live on Wolt, not making money.</p>
            </div>

            <div className="grid grid-cols-3 gap-x-6 gap-y-6 border-t border-accent/30 pt-8">
              {problemData.map(({ label, value }) => (
                <div key={label}>
                  <span
                    className="font-clean font-semibold tracking-[-0.02em] text-ink leading-none block mb-1.5"
                    style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.2rem)' }}
                  >
                    {value}
                  </span>
                  <span className="font-clean text-[1rem] tracking-wide text-muted block leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
        </div>
      </section>
      {/* Section 3 - The Design */}
      <section className="flex items-center pt-24 pb-16" style={snap}>
        <div className="max-w-[80rem] mx-auto w-full px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 w-full items-center">

          {/* LEFT - text */}
          <div className="flex flex-col justify-center">
            <span className="font-clean text-[1rem] tracking-widest uppercase text-muted block mb-5">
              The Design
            </span>

            <h2
              className="font-clean font-semibold tracking-[-0.02em] text-ink leading-tight mb-4"
              style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2.2rem)' }}
            >
              One flow that gets every venue shoot-ready.
            </h2>

            <p
              className="font-clean text-ink leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1rem, 1.2vw, 1.15rem)', maxWidth: '50ch' }}
            >
              Coordinators stop chasing, photographers stop guessing, and the shoot only happens once.
            </p>

            <div className="grid grid-cols-3 gap-x-6 gap-y-8 mb-10 border-t border-accent/30 pt-8">
              {section3Prooflines.map(({ label, value }) => (
                <div key={label}>
                  <span
                    className="font-clean font-semibold tracking-[-0.02em] text-ink leading-none block mb-1.5"
                    style={{ fontSize: 'clamp(1.5rem, 2.2vw, 2.2rem)' }}
                  >
                    {value}
                  </span>
                  <span className="font-clean text-[1rem] tracking-wide text-muted block leading-snug whitespace-pre-line">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <span className="font-clean text-[1rem] tracking-wide text-muted block mb-3">
                Design and built with
              </span>
              <div className="flex items-center gap-5">
                <img src="/images/logos/figma.svg" alt="Figma" style={{ height: '1.5rem', width: 'auto', opacity: 0.55 }} />
                <img src="/images/logos/claude.svg" alt="Claude AI" style={{ height: '1.5rem', width: 'auto', opacity: 0.55 }} />
                <img src="/images/logos/wolt.png" alt="Wolt" style={{ height: '1.75rem', width: 'auto', opacity: 0.55 }} />
              </div>
            </div>
          </div>

          {/* RIGHT - two portrait screenshots */}
          <div className="flex justify-center md:justify-end">
            <div className="flex gap-4 w-full max-w-[31.25rem] items-start">
              {[
                { src: imageOne, alt: imageOneAlt },
                { src: imageTwo, alt: imageTwoAlt },
              ].map(({ src, alt }, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-2xl overflow-hidden"
                  style={{
                    aspectRatio: '9 / 19.5',
                    background: src ? undefined : 'var(--surface)',
                    border: '1px solid rgba(200,184,154,0.3)',
                    boxShadow: '0 8px 32px rgba(26,20,10,0.10)',
                    marginTop: i === 0 ? '2.5rem' : '0',
                  }}
                >
                  {src && (
                    <img src={src} alt={alt} className="w-full h-full object-cover" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
        </div>
      </section>
      {/* Section 4 - The Problem & Solution (Before / After) */}
      <section className="flex flex-col justify-center pt-24 pb-16" style={snap}>
        <div className="max-w-[80rem] mx-auto w-full px-6 md:px-12">

          {/* Text header */}
          <div className="mb-12">
            <span className="font-clean text-[1rem] tracking-widest uppercase text-muted block mb-5">
              The Problem & Solution
            </span>
            <h2
              className="font-clean font-semibold tracking-[-0.02em] text-ink leading-tight"
              style={{ fontSize: 'clamp(1.4rem, 2.2vw, 2.2rem)', maxWidth: '28ch' }}
            >
              The business now confirms its own readiness - no call, no waiting, no missed detail.
            </h2>
          </div>

          {/* Before / After images */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div>
              <span className="font-clean text-[1rem] tracking-widest uppercase text-muted block mb-4">
                Before
              </span>
              <div
                className="rounded-2xl overflow-hidden w-full"
                style={{
                  aspectRatio: '4 / 3',
                  background: 'var(--surface)',
                  border: '1px solid rgba(200,184,154,0.3)',
                  boxShadow: '0 8px 32px rgba(26,20,10,0.10)',
                }}
              >
                {imageBefore && (
                  <img src={imageBefore} alt={imageBeforeAlt} className="w-full h-full object-cover" />
                )}
              </div>
              <p
                className="font-clean text-muted leading-snug mt-4 italic"
                style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)', maxWidth: '42ch' }}
              >
                Coordination lived in Monday, WhatsApp threads and printed lists - with no shared sense of "ready."
              </p>
            </div>
            <div>
              <span className="font-clean text-[1rem] tracking-widest uppercase text-muted block mb-4 text-right">
                After
              </span>
              <div
                className="rounded-2xl overflow-hidden w-full"
                style={{
                  aspectRatio: '4 / 3',
                  background: 'var(--surface)',
                  border: '1px solid rgba(200,184,154,0.3)',
                  boxShadow: '0 8px 32px rgba(26,20,10,0.10)',
                }}
              >
                {imageAfter && (
                  <img src={imageAfter} alt={imageAfterAlt} className="w-full h-full object-cover" />
                )}
              </div>
              <p
                className="font-clean text-muted leading-snug mt-4 italic"
                style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)', maxWidth: '42ch' }}
              >
                One flow, one video - every venue walks in already knowing what to prepare.
              </p>
            </div>
          </div>

        </div>
      </section>
    </motion.main>
  )
}
