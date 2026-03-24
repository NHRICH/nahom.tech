import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HeroSection() {
  return (
    <motion.section
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="pt-36 pb-24 section-rule"
    >
      <div className="shell editorial-grid">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7"
        >
          <span className="inline-flex designation-label border border-[var(--color-border)] px-3 py-1">
            Principal Systems Architect
          </span>
          <h1 className="mt-8 text-[3.1rem] sm:text-[4rem] lg:text-[5rem] font-bold leading-[0.94] uppercase gold-gradient-text">
            NAHOM MERHATSYON.
          </h1>
          <h2 className="mt-5 text-2xl sm:text-[1.5rem] font-medium font-sans text-[color-mix(in_oklab,var(--color-text)_88%,transparent)]">
            Architecting High-Stakes Infrastructure.
          </h2>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl text-[color-mix(in_oklab,var(--color-text)_70%,transparent)]">
            Leveraging the MIT Alumni Network and modern infrastructure to build high-stakes digital ecosystems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex px-6 py-3 font-medium cta-gold"
            >
              View Selected Works
            </a>
          </div>
        </motion.div>

        <motion.aside
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mockup-card w-full p-6 sm:p-8 lg:col-span-5"
        >
          <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted-base)]">Executive Snapshot</p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="mt-4 text-2xl sm:text-3xl"
            >
              Infrastructure Partner Positioning
            </motion.h3>
            <div className="mt-7 space-y-4">
              <div className="border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3">
                <p className="text-sm font-medium">NGO Infrastructure Programs</p>
              </div>
              <div className="border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3">
                <p className="text-sm font-medium">Fintech Integration Architectures</p>
              </div>
              <div className="border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3">
                <p className="text-sm font-medium">Enterprise ERP Ecosystems</p>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.section>
  );
}
