import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Skid',
    description:
      'A system for coordinating food photography shoots for restaurants on delivery platforms - graduation project, from user research to a live prototype.',
    cardColor: '#3B15D5',
    textColor: '#FFF207',
    image: '/images/skid-planner/thumb.png',
    href: '/work/skid-planner',
  },
]

export default function Work() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-36 pb-32 px-6 md:px-12 max-w-[80rem] mx-auto"
    >
      <span className="font-mono text-[1rem] tracking-widest uppercase text-muted block mb-6">
        Work
      </span>
      <h1
        className="font-display font-semibold text-ink mb-16 leading-none"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
      >
        All Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </div>
    </motion.main>
  )
}
