import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
}

export default function Home() {
  return (
    <motion.main
      variants={stagger}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35 }}
    >
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 max-w-[1280px] mx-auto pt-28 pb-20">
        <motion.span
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[11px] tracking-widest uppercase text-muted mb-8 block"
        >
          UX Designer
        </motion.span>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-ink leading-[1.04] mb-8"
          style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}
        >
          Designing systems
          <br />
          <span className="text-accent-dark italic font-light">that feel human.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-lg text-[#222222] max-w-[480px] leading-relaxed mb-12"
        >
          I turn complex workflows into clear, purposeful experiences.
          <br />
          Currently open to new opportunities.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-3 font-mono text-[13px] tracking-widest uppercase text-ink bg-lemon px-8 py-4 rounded-full hover:bg-ink hover:text-lemon transition-all duration-300"
          >
            View Work <span>→</span>
          </Link>
        </motion.div>
      </section>

      {/* Selected Works */}
      <section className="px-6 md:px-12 max-w-[1280px] mx-auto pb-32">
        <div className="border-t border-accent/40 pt-16 mb-12 flex items-center justify-between">
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="font-mono text-[11px] tracking-widest uppercase text-muted"
          >
            Selected Works
          </motion.span>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <Link
              to="/work"
              className="font-mono text-[11px] tracking-widest uppercase text-accent-dark hover:text-ink transition-colors"
            >
              All Projects →
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard
              title="Skid"
              description="AI-powered scheduling platform for photography production teams — 46-screen Figma system, graduated with distinction."
              tags={['UX Design', 'Product', 'Research']}
              cardColor="#3B15D5"
              textColor="#FFF207"
              href="/work/skid"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard
              title="In Progress"
              description="New project coming soon."
              tags={['UX Design']}
              cardColor="#EAE2CB"
              textColor="#9B8E72"
              href="#"
              isPlaceholder
            />
          </motion.div>
        </motion.div>
      </section>
    </motion.main>
  )
}
