import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
}

const solutions = [
  {
    num: '01',
    title: 'Onboarding',
    body: 'Confirms the details that most often go wrong — correct address, correct point of contact — and sends that contact a short video showing exactly how to prepare the space before the shoot.',
    img: null,
  },
  {
    num: '02',
    title: 'Photographer Hub',
    body: 'Centralizes invoicing, shoot history, and recurring issues per photographer, and defines each photographer\'s working zones and business-type preferences — so future assignments are matched automatically instead of guessed at.',
    img: null,
  },
  {
    num: '03',
    title: 'Auto-Assign',
    body: 'Photographers mark specific days as flexible; the system distributes those slots to restaurants automatically by urgency — closer to a walk-in queue than a fixed calendar. Scoped for larger, higher-complexity restaurants first.',
    img: { src: '/images/skid/skid-scheduled.png', alt: 'Skid — Auto-assign scheduling view' },
  },
  {
    num: '04',
    title: 'Cancellations',
    body: 'A dedicated hub replacing scattered chats — surfacing at-risk slots and notifying the right people immediately, instead of a scramble across threads.',
    img: { src: '/images/skid/skid-attention-required.png', alt: 'Skid — Cancellations and attention required view' },
  },
]

export default function SkidCaseStudy() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header */}
      <section className="pt-36 pb-16 px-6 md:px-12 max-w-[1280px] mx-auto">
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.span variants={fadeUp} className="font-mono text-[16px] tracking-widest uppercase text-muted block mb-6">
            Graduation Project · 2026
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display font-semibold text-ink leading-none mb-5"
            style={{ fontSize: 'clamp(4rem, 9vw, 9rem)' }}
          >
            Skid
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-body text-muted max-w-[600px] leading-snug mb-14"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}
          >
            Operations Platform — Food Photography Logistics
          </motion.p>

          <motion.div variants={fadeUp} className="mb-10">
            <a
              href="https://www.figma.com/proto/fKbhiRcvtv96cHwhv19RTw/Dorian-Skid-Gmar?node-id=766-11757&p=f&viewport=201%2C3088%2C0.3&t=U8ZOUdZTh4Qs41IZ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=766%3A11757&show-proto-sidebar=1&page-id=654%3A18035"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-mono text-[16px] tracking-widest uppercase bg-lemon text-ink px-8 py-4 rounded-full hover:bg-ink hover:text-lemon transition-all duration-300"
            >
              View Prototype <span>↗</span>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 border-t border-b border-accent/30 py-8"
          >
            {[
              { label: 'Type', value: 'Academic Graduation Project' },
              { label: 'Role', value: 'Product Designer' },
              { label: 'Duration', value: '3 months · 2026' },
              { label: 'Tools', value: 'Figma · User Research · Prototyping' },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className="font-mono text-[16px] tracking-widest uppercase text-muted block mb-1.5">
                  {label}
                </span>
                <span className="font-body text-base text-ink leading-snug">{value}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Hero image */}
      <div className="px-6 md:px-12 max-w-[1280px] mx-auto mb-28">
        <img
          src="/images/skid/skid-planning.png"
          alt="Skid planning interface — dual-view table and calendar"
          className="w-full rounded-2xl shadow-2xl"
          style={{
            border: '1px solid rgba(200,184,154,0.15)',
          }}
        />
      </div>

      {/* Overview */}
      <section className="px-6 md:px-12 max-w-[1280px] mx-auto mb-28">
        <div className="grid md:grid-cols-[200px,1fr] gap-12 md:gap-20">
          <span className="font-mono text-[16px] tracking-widest uppercase text-muted mt-1 md:text-right">
            Overview
          </span>
          <div className="max-w-[680px]">
            <p className="font-body text-ink leading-relaxed mb-5" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}>
              Skid coordinates food photography shoots for restaurants listed on Wolt.
              A small internal team manages the process — matching photographers with restaurants,
              tracking photographer payments and no-shows — mostly through chats, spreadsheets,
              and manual lists.
            </p>
            <p className="font-body text-ink leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}>
              Skid brings that coordination into one connected system.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="px-6 md:px-12 max-w-[1280px] mx-auto mb-28">
        <div className="grid md:grid-cols-[200px,1fr] gap-12 md:gap-20">
          <span className="font-mono text-[16px] tracking-widest uppercase text-muted mt-1 md:text-right">
            Challenges
          </span>
          <div className="max-w-[680px]">
            <h2 className="font-display font-normal text-ink mb-6 leading-tight" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>
              Everyone shows up unprepared
            </h2>
            <p className="font-body text-ink leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}>
              A shoot only works when the restaurant, the photographer, and the internal team are
              all aligned — and today none of that is guaranteed. Restaurants don't know what to
              expect. Photographers arrive to changed menus with no one on site. Cancellations and
              payment issues fall through the cracks with no single place to catch them.
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="bg-surface py-24 mb-28">
        <div className="px-6 md:px-12 max-w-[1280px] mx-auto">
          <div className="grid md:grid-cols-[200px,1fr] gap-12 md:gap-20">
            <span className="font-mono text-[16px] tracking-widest uppercase text-muted mt-1 md:text-right">
              Research
            </span>
            <div className="max-w-[680px]">
              <h2 className="font-display font-normal text-ink mb-6 leading-tight" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>
                Listening to both ends of the shoot
              </h2>
              <p className="font-body text-ink leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}>
                I interviewed scheduling coordinators, team leads, and freelance photographers
                to find out where it actually breaks. One issue came up in every single interview:
                restaurants are never truly ready when the photographer arrives — the clearest, most
                validated signal in the research. Three more recurring pains followed: unclear payment
                status, rigid scheduling windows, and cancellations with no real tools to manage them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="px-6 md:px-12 max-w-[1280px] mx-auto mb-28">
        <span className="font-mono text-[16px] tracking-widest uppercase text-muted block mb-4">
          Solutions
        </span>
        <h2 className="font-display font-normal text-ink mb-20 leading-tight" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)' }}>
          One system, four entry points
        </h2>

        <div className="space-y-28">
          {solutions.map((s, i) => (
            <div key={s.num} className={`${i < solutions.length - 1 ? 'pb-28 border-b border-accent/20' : ''}`}>
              <div className="flex gap-8 md:gap-16 mb-10">
                <span
                  className="font-display font-semibold text-accent/50 leading-none shrink-0 select-none"
                  style={{ fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', width: '4.5rem' }}
                >
                  {s.num}
                </span>
                <div className="pt-1 max-w-[580px]">
                  <h3 className="font-display text-2xl md:text-3xl font-normal text-ink mb-4 leading-tight">
                    {s.title}
                  </h3>
                  <p className="font-body text-base md:text-lg text-muted leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>

              {s.img ? (
                <img
                  src={s.img.src}
                  alt={s.img.alt}
                  className="w-full rounded-2xl shadow-xl"
                  style={{ border: '1px solid rgba(200,184,154,0.2)' }}
                />
              ) : (
                <div
                  className="w-full rounded-2xl flex items-center justify-center"
                  style={{
                    aspectRatio: '16/7',
                    border: '1.5px dashed rgba(59,21,213,0.15)',
                    background: 'rgba(59,21,213,0.03)',
                  }}
                >
                  <span className="font-mono text-[16px] tracking-widest uppercase text-muted/50">
                    Screenshot coming soon
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Next Project */}
      <Link to="/work" className="block bg-ink group">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-20 flex items-center justify-between">
          <div>
            <span className="font-mono text-[16px] tracking-widest uppercase text-white/35 block mb-3">
              Next Project →
            </span>
            <span
              className="font-display font-semibold text-white/70 group-hover:text-white transition-colors leading-none"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)' }}
            >
              Back to All Work
            </span>
          </div>
          <span className="text-white/30 text-4xl group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
            →
          </span>
        </div>
      </Link>
    </motion.main>
  )
}
