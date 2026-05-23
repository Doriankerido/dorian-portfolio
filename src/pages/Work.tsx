import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: 'Skid',
    description:
      'AI-powered scheduling platform for photography production teams — dual-view interface, 46 screens, graduated with distinction.',
    tags: ['UX Design', 'Product', 'Research'],
    image: '/images/skid/skid-planning.png',
    href: '/work/skid',
  },
  {
    title: 'Project Two',
    description: 'Coming soon — next case study in progress.',
    tags: ['UX Design', 'Product'],
    image: '',
    href: '#',
    isPlaceholder: true,
  },
  {
    title: 'Project Three',
    description: 'Coming soon — next case study in progress.',
    tags: ['Research'],
    image: '',
    href: '#',
    isPlaceholder: true,
  },
]

const allTags = ['All', 'UX Design', 'Product', 'Research']

export default function Work() {
  const [active, setActive] = useState('All')

  const filtered = projects.filter(
    (p) => active === 'All' || p.tags.includes(active)
  )

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-36 pb-32 px-6 md:px-12 max-w-[1280px] mx-auto"
    >
      <span className="font-mono text-[11px] tracking-widest uppercase text-muted block mb-6">
        Work
      </span>
      <h1
        className="font-display font-semibold text-ink mb-16 leading-none"
        style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}
      >
        All Projects
      </h1>

      <div className="flex flex-wrap gap-3 mb-16">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`font-mono text-[11px] tracking-widest uppercase px-5 py-2.5 rounded-full border transition-all duration-200 ${
              active === tag
                ? 'bg-ink text-bg border-ink'
                : 'border-ink/25 text-ink hover:border-ink'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((p, i) => (
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
