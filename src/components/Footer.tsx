import { motion } from 'framer-motion';
import { Github, Linkedin, Lock, LockOpen, Mail, MessageCircle } from 'lucide-react';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      className="section-rule"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="shell">
        <div className="editorial-grid gap-10">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl lg:col-span-7"
          >
            <motion.h2
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl mb-4"
            >
              Initiate Deployment
            </motion.h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Engagements are structured for leadership teams that require high-tier systems architecture. Discuss how to scale your operations without technical debt.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:nahommerhatsyon@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 font-medium cta-gold"
                data-cursor-grow
              >
                <Mail size={16} /> Contact via Gmail
              </a>
              <a
                href="https://wa.me/251000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 cta-gold"
                data-cursor-grow
              >
                <MessageCircle size={16} /> Quick Connect
              </a>
              <a
                href="https://linkedin.com/in/nahom-merhatsyon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 cta-gold"
                data-cursor-grow
              >
                <Linkedin size={16} /> Connect on LinkedIn
              </a>
              <a
                href="https://github.com/NHRICH"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm hover:text-[var(--color-accent-base)] transition-colors"
                data-cursor-grow
              >
                <Github size={16} />
                <span className="relative inline-flex items-center justify-center w-4 h-4">
                  <Lock size={14} className="absolute opacity-100 group-hover:opacity-0 transition-opacity" />
                  <LockOpen size={14} className="absolute opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
                View Github Vault
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mockup-card p-6 sm:p-8 lg:col-span-5"
          >
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-muted-base)]">Contract Alignment</p>
            <motion.h3
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mt-4 text-3xl"
            >
              NGO &amp; ERP Engagements
            </motion.h3>
            <p className="mt-4 text-sm leading-relaxed">
              Built for organizations that require architectural clarity, measurable delivery milestones, and secure operational scaling.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 text-xs uppercase tracking-[0.14em] text-[var(--color-muted-base)] pt-6">
          &copy; {new Date().getFullYear()} Nahom Merhatsyon. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}
