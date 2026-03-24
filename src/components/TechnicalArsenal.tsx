import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const coreStack = [
  'Django/Wagtail (Enterprise CMS)',
  'AWS (Scalable Logic)',
  'DigitalOcean (Compute)',
  'Vercel (Edge Delivery)'
];

const strategicLeverage = [
  'n8n Automation',
  'Chapa Fintech',
  'AI-Augmented Workflows',
  'SSL/TLS Encryption + QR Authentication'
];

export default function TechnicalArsenal() {
  return (
    <motion.section
      id="arsenal"
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
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <span className="inline-flex designation-label border border-[var(--color-border)] px-3 py-1">
            The Arsenal
          </span>
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-6 text-4xl sm:text-5xl"
          >
            The Infrastructure
          </motion.h2>
          <p className="mt-8 text-base sm:text-lg leading-relaxed max-w-2xl">
            Core systems are selected for reliability, speed, and long-term scalability across enterprise and NGO operating environments.
          </p>
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mockup-card p-6 sm:p-8 lg:col-span-5"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <motion.h3
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="text-xl mb-3"
              >
                Core Stack
              </motion.h3>
              <ul className="space-y-2">
                {coreStack.map((item) => (
                  <li key={item} className="tech-mono text-xs sm:text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>

            <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
              <motion.h3
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="text-xl mb-3"
              >
                Strategic Leverage
              </motion.h3>
              <ul className="space-y-2">
                {strategicLeverage.map((item) => (
                  <li key={item} className="tech-mono text-xs sm:text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
