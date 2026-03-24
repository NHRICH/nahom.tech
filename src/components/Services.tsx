import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const services = [
  {
    title: 'Custom ERP Development',
    summary: 'End-to-end management systems tailored to manufacturing and retail.'
  },
  {
    title: 'Fintech & Payment Integration',
    summary: 'Secure implementation of local and international payment gateways (Chapa/Stripe).'
  },
  {
    title: 'NGO Digital Infrastructure',
    summary: 'Robust, high-security platforms designed for international compliance and impact tracking.'
  }
];

export default function Services() {
  return (
    <motion.section
      id="services"
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
            Services
          </span>
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-6 text-4xl sm:text-5xl"
          >
            Strategic Technical Services
          </motion.h2>
          <p className="mt-8 text-base sm:text-lg leading-relaxed max-w-2xl">
            Engagements are designed for organizations that need systems architecture, secure delivery, and long-term scalability.
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
          <div className="space-y-5">
            {services.map((service) => (
              <article key={service.title} className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <motion.h3
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="text-2xl"
                >
                  {service.title}
                </motion.h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed">{service.summary}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}