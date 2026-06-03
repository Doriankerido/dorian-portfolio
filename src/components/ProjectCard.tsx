import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href: string
  cardColor: string
  textColor?: string
  isPlaceholder?: boolean
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  cardColor,
  textColor = '#FFFFFF',
  isPlaceholder,
}: ProjectCardProps) {
  const content = (
    <motion.div
      className={`group relative overflow-hidden rounded-xl ${isPlaceholder ? 'opacity-50 cursor-default' : 'cursor-pointer'}`}
      whileHover={isPlaceholder ? {} : { y: -6, boxShadow: '0 24px 64px rgba(26,26,24,0.14)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Colour block with centred title */}
      <div
        className="relative flex items-center justify-center"
        style={{ aspectRatio: '16/9', background: cardColor }}
      >
        <span
          className="font-display font-normal select-none px-6 text-center leading-none"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            color: textColor,
          }}
        >
          {title}
        </span>
        {!isPlaceholder && (
          <span className="absolute top-5 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-2xl" style={{ color: textColor }}>
            →
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-6 md:p-8 bg-surface">
        <p className="font-body text-base text-muted leading-relaxed mb-4">{description}</p>
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
