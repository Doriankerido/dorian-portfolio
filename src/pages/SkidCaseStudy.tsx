import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
}

const approach = [
  {
    num: '01',
    title: 'Discovery',
    body: 'Mapped the end-to-end scheduling workflow through stakeholder interviews and competitive analysis to identify key pain points in existing systems.',
  },
  {
    num: '02',
    title: 'User Definition',
    body: 'Defined three core user types — coordination managers, photographers, and venue owners — and built separate user journey maps for each.',
  },
  {
    num: '03',
    title: 'Wireframing',
    body: 'Designed and iterated on low-fi wireframes for the dual-view system (table + calendar), testing both with users to validate clarity and task completion.',
  },
  {
    num: '04',
    title: 'Design System',
    body: 'Built a component-based design system in Figma covering tables, calendar cards, status badges, and navigation — ensuring consistency across all 46 screens.',
  },
  {
    num: '05',
    title: 'Testing & Handoff',
    body: 'Conducted usability testing sessions on the high-fidelity prototype, refined based on feedback, and delivered final specs ready for development handoff.',
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
            Scheduling Management System with AI Capabilities for Photography Production Teams
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
              { label: 'Role', value: 'Lead Product Designer' },
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
              Skid is a scheduling management platform built for photography production teams, with AI-assisted capabilities.
              The core challenge was designing a system that coordinates photographers, venues,
              and shoot dates at scale — while keeping the experience simple for operators
              managing dozens of concurrent bookings.
            </p>
            <p className="font-body text-ink leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}>
              The result is a dual-view interface — table and calendar — that handles complex scheduling in one click, with full manual control at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 md:px-12 max-w-[1280px] mx-auto mb-28">
        <div className="grid md:grid-cols-[200px,1fr] gap-12 md:gap-20">
          <span className="font-mono text-[16px] tracking-widest uppercase text-muted mt-1 md:text-right">
            Challenge
          </span>
          <div className="max-w-[680px]">
            <p className="font-body text-ink leading-relaxed mb-5" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}>
              Scheduling in photography production is managed through a tangled mix of spreadsheets,
              WhatsApp groups, and manual tracking. Operators juggle dozens of venues, photographers,
              and shoot dates simultaneously — with no single source of truth.
            </p>
            <p className="font-body text-ink leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}>
              The brief: design a system that brings clarity to this chaos, built for speed and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-surface py-24 mb-28">
        <div className="px-6 md:px-12 max-w-[1280px] mx-auto">
          <span className="font-mono text-[16px] tracking-widest uppercase text-muted block mb-14">
            Approach
          </span>
          <div>
            {approach.map((step, i) => (
              <div
                key={step.num}
                className={`flex gap-8 md:gap-16 py-10 ${i < approach.length - 1 ? 'border-b border-accent/25' : ''}`}
              >
                <span
                  className="font-display font-semibold text-accent/50 leading-none shrink-0 select-none"
                  style={{ fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', width: '4.5rem' }}
                >
                  {step.num}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-xl md:text-2xl font-normal text-ink mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-body text-base md:text-lg text-muted leading-relaxed max-w-[560px]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 md:px-12 max-w-[1280px] mx-auto mb-8">
        <span className="font-mono text-[16px] tracking-widest uppercase text-muted block mb-10">
          Solution
        </span>
        <div className="max-w-[680px] mb-14">
          <p className="font-body text-ink leading-relaxed mb-5" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}>
            Skid delivers a unified scheduling dashboard where operators can manage the full
            production pipeline — from initial venue onboarding to completed shoots.
          </p>
          <p className="font-body text-ink leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)' }}>
            The table view gives a structured overview of all pending and planned visits, while
            the calendar view surfaces weekly photographer assignments at a glance. Status badges,
            avatar-coded photographers, and collapsible task sections make complex coordination
            instantly readable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <img
            src="/images/skid/skid-scheduled.png"
            alt="Skid — Scheduled tab with table and calendar"
            className="w-full rounded-xl object-cover shadow-xl"
            style={{ border: '1px solid rgba(200,184,154,0.2)' }}
          />
          <img
            src="/images/skid/skid-attention-required.png"
            alt="Skid — Attention Required tab"
            className="w-full rounded-xl object-cover shadow-xl"
            style={{ border: '1px solid rgba(200,184,154,0.2)' }}
          />
        </div>
        <p className="font-mono text-[16px] tracking-widest uppercase text-muted text-center mb-28">
          Dual-view interface — table and calendar sync in real time
        </p>
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
