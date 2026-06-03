import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

const links = [
  {
    label: 'Email',
    value: 'doriankerido@gmail.com',
    href: 'mailto:doriankerido@gmail.com',
    external: false,
  },
  {
    label: 'Phone',
    value: '052-388-5876',
    href: 'tel:+972523885876',
    external: false,
  },
  {
    label: 'Instagram',
    value: '@doriankerido',
    href: 'https://instagram.com/doriankerido',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Dorian Kerido',
    href: 'https://linkedin.com/in/doriankerido',
    external: true,
  },
]

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-36 pb-32 px-6 md:px-12 max-w-[1280px] mx-auto"
    >
      <motion.span
        custom={0}
        variants={fadeUp}
        initial="initial"
        animate="animate"
        className="font-mono text-[11px] tracking-widest uppercase text-muted block mb-6"
      >
        Contact
      </motion.span>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="initial"
        animate="animate"
        className="font-display font-semibold text-ink leading-none mb-6"
        style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
      >
        Let's talk.
      </motion.h1>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="initial"
        animate="animate"
        className="font-body text-lg text-[#222222] max-w-[480px] leading-relaxed mb-20"
      >
        Open to new projects, collaborations, and opportunities.
        Feel free to reach out through any of the channels below.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[720px]">
        {links.map(({ label, value, href, external }, i) => (
          <motion.a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            custom={i + 3}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="group flex items-center justify-between bg-surface hover:bg-accent hover:text-white transition-all duration-300 rounded-2xl px-7 py-6"
          >
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-muted group-hover:text-white/60 transition-colors block mb-1">
                {label}
              </span>
              <span className="font-body text-base font-medium text-ink group-hover:text-white transition-colors">
                {value}
              </span>
            </div>
            <span className="text-accent group-hover:text-white text-xl transition-colors group-hover:translate-x-1 duration-300">
              →
            </span>
          </motion.a>
        ))}
      </div>
    </motion.main>
  )
}
