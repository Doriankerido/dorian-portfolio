import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  href: string
  isPlaceholder?: boolean
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  href,
  isPlaceholder,
}: ProjectCardProps) {
  const content = (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-surface cursor-pointer"
      whileHover={{ y: -6, boxShadow: '0 24px 64px rgba(26,26,24,0.12)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        {isPlaceholder ? (
          <div className="w-full h-full bg-surface flex items-center justify-center">
            <span className="font-mono text-xs text-muted tracking-widest uppercase">
              Coming Soon
            </span>
          </div>
        ) : (
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />
        )}
      </div>

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink mb-2 leading-snug">
              {title}
            </h3>
            <p className="font-body text-sm text-muted leading-relaxed">{description}</p>
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-accent-dark text-2xl shrink-0 mt-0.5">
            →
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-widest uppercase text-accent-dark bg-accent/20 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )

  if (isPlaceholder || href === '#') return content
  return <Link to={href}>{content}</Link>
}
