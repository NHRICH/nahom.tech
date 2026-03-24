import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Mission() {
  return (
    <motion.section
      id="about"
      className="section-rule"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="shell editorial-grid">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <span className="inline-flex designation-label border border-[var(--color-border)] px-3 py-1">
            About
          </span>
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-6 text-4xl sm:text-5xl"
          >
            The Principal Perspective
          </motion.h2>
          <p className="mt-8 text-base sm:text-lg leading-relaxed max-w-2xl">
            I do not build websites. I architect autonomous systems. Based in Mekelle, I lead technical development for specialized organizations that require robust infrastructure and predictable execution. My approach combines rigorous engineering logic with rapid deployment strategies. As a member of the MIT Alumni network, I bridge the gap between complex computational challenges and scalable software solutions.
          </p>
        </motion.div>

        <motion.aside
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mockup-card p-6 sm:p-8 lg:col-span-5"
        >
          <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted-base)]">Execution Priorities</p>
          <ul className="mt-5 space-y-3 text-[var(--color-text)]">
            <li className="pl-3 border-l border-[var(--color-border)]">Architectural rigor before implementation</li>
            <li className="pl-3 border-l border-[var(--color-border)]">Predictable deployment and operational continuity</li>
            <li className="pl-3 border-l border-[var(--color-border)]">Scalable systems mapped to leadership outcomes</li>
          </ul>
        </motion.aside>
      </div>
    </motion.section>
  );
}
