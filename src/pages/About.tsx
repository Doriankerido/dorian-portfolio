import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

const meta = [
  { label: 'Currently', value: 'Available for new projects' },
  { label: 'Based in', value: 'Tel Aviv, Israel' },
  { label: 'Education', value: 'UX Design, 2026' },
  { label: 'Contact', value: 'Get in touch →', href: '/contact' },
]

export default function About() {
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
        className="font-mono text-[16px] tracking-widest uppercase text-muted block mb-6"
      >
        About
      </motion.span>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="initial"
        animate="animate"
        className="font-display font-semibold text-ink leading-none mb-20"
        style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
      >
        About
      </motion.h1>

      <div className="grid md:grid-cols-[1fr,320px] gap-16 md:gap-24 items-start">
        <div>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="font-body text-ink leading-relaxed mb-7"
            style={{ fontSize: 'clamp(1rem, 1.3vw, 1.2rem)' }}
          >
            Hi, I'm Dorian. I'm a UX designer who loves turning complex systems into experiences
            that feel effortless.
          </motion.p>
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="font-body text-ink leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.3vw, 1.2rem)' }}
          >
            I work at the intersection of user research, product thinking, and visual design —
            with a focus on building tools that people actually enjoy using. Whether it's a
            scheduling platform or a zero-to-one product, I bring the same obsession with
            clarity, detail, and purpose to every project.
          </motion.p>
        </div>

        <div className="space-y-8 md:pt-1">
          {meta.map(({ label, value, href }, i) => (
            <motion.div
              key={label}
              custom={i + 4}
              variants={fadeUp}
              initial="initial"
              animate="animate"
            >
              <span className="font-mono text-[16px] tracking-widest uppercase text-muted block mb-1.5">
                {label}
              </span>
              {href ? (
                <a
                  href={href}
                  className="font-body text-base text-ink hover:text-accent-dark transition-colors underline underline-offset-2"
                >
                  {value}
                </a>
              ) : (
                <span className="font-body text-base text-ink">{value}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  )
}
