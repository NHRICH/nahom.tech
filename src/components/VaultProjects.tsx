import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Monitor, Smartphone } from 'lucide-react';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const projects = [
  {
    id: 'doc',
    title: 'Daughters of Charity (DOC)',
    role: 'NGO Infrastructure Partner',
    metric: 'Impacting 392,499 lives.',
    copy: 'Digital transformation architecture for a global NGO with resilient cloud operations and governance-ready delivery.',
    tags: ['Django/Wagtail', 'NGO Digital Transformation', 'AWS'],
    details: ['Centralized content governance', 'Regional reporting consistency', 'Scalable infrastructure blueprint'],
    icon: <Globe size={18} className="text-[var(--color-accent-base)]" />,
    link: 'https://doccot.org',
    url: 'doccot.org',
    status: 'Operational',
    external: true,
    embedAllowed: false,
    embedMessage: 'Embedding disabled by doccot.org security headers.',
    snapshotSrc: 'https://image.thum.io/get/width/1600/crop/900/noanimate/https://doccot.org'
  },
  {
    id: 'av-events',
    title: 'AV Events',
    role: 'Fintech Integration Lead',
    metric: 'Live, secure payment ecosystem.',
    copy: 'A live-operational ticketing ecosystem engineered for real-time liquidity and biometric security in high-volume environments.',
    tags: ['Chapa Integration', 'Flutter', 'QR Authentication'],
    details: ['Payment flow hardening', 'QR identity checks', 'Operational reconciliation layer'],
    icon: <Smartphone size={18} className="text-[var(--color-accent-base)]" />,
    link: 'https://avyevents.com',
    url: 'avyevents.com',
    status: 'Operational',
    external: true,
    embedAllowed: false,
    embedMessage: 'Embedding disabled by avyevents.com security headers.',
    snapshotSrc: ''
  },
  {
    id: 'av-saas',
    title: 'Proprietary ERP Platform',
    role: 'Enterprise Systems Architect',
    metric: 'Live platform preview available.',
    copy: 'Operations infrastructure for manufacturing intelligence with protected workflows, governed data layers, and high-value internal IP.',
    tags: ['custom ERP', 'n8n Automation', 'Business Intelligence'],
    details: ['Inventory intelligence engine', 'Sales workflow orchestration', 'Cross-module reporting model'],
    icon: <Monitor size={18} className="text-[var(--color-accent-base)]" />,
    link: 'https://erp.avyevents.com',
    url: 'erp.avyevents.com',
    status: 'Access Restricted',
    external: true,
    embedAllowed: true,
    embedMessage: '',
    snapshotSrc: 'https://image.thum.io/get/width/1600/crop/900/noanimate/https://erp.avyevents.com'
  }
];

export default function VaultProjects() {
  return (
    <motion.section
      id="work"
      className="section-rule"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="shell">
        <div className="editorial-grid mb-12">
          <div className="lg:col-span-7">
            <span className="inline-flex designation-label border border-[var(--color-border)] px-3 py-1">
              Selected Work
            </span>
            <motion.h2
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-6 text-4xl sm:text-5xl"
            >
              The Evidence
            </motion.h2>
          </div>
          <p className="text-base sm:text-lg leading-relaxed lg:pt-8 lg:col-span-5">
            Each project demonstrates technical depth with production-grade architecture and measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((item, idx) => (
            <motion.article
              key={item.id}
              variants={reveal}
              initial="hidden"
              whileHover={{ y: -10 }}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="mockup-card work-card card-hover p-6 sm:p-7 flex flex-col relative overflow-hidden"
              data-cursor-grow
            >
              {item.external && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label={`Open ${item.title}`}
                />
              )}

              <span className="absolute right-5 top-5 z-20 text-[color-mix(in_oklab,var(--color-accent-base)_78%,transparent)] group-arrow pointer-events-none">
                <ArrowUpRight size={22} />
              </span>

              <div>
                <div className="flex justify-between items-start mb-5">
                  {item.icon}
                </div>

                <motion.h3
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="text-2xl mb-4"
                >
                  {item.title}
                </motion.h3>

                <p className="designation-label mb-3">
                  {item.role}
                </p>

                <p className="text-sm leading-relaxed mb-4 max-w-xl">
                  {item.id === 'doc' ? (
                    <>
                      {item.copy} <strong className="text-base">392,499</strong>
                    </>
                  ) : (
                    item.copy
                  )}
                </p>

                <p className="tech-mono text-xs mb-8 text-[var(--color-muted-base)]">
                  {item.metric}
                </p>

                <div className="block border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden relative z-0">
                  <div className="h-9 px-3 flex items-center justify-between border-b border-[var(--color-border)]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-accent-base)]/70" />
                      <span className="w-2 h-2 rounded-full bg-[var(--color-muted-base)]/40" />
                      <span className="w-2 h-2 rounded-full bg-[var(--color-muted-base)]/30" />
                    </div>
                    <span className="tech-mono text-[10px] text-[var(--color-muted-base)]">{item.url}</span>
                  </div>

                  <div className="relative h-48 sm:h-56 overflow-hidden bg-black/60">
                    {item.embedAllowed ? (
                      <div className="absolute inset-0 overflow-hidden">
                        <iframe
                          src={item.link}
                          title={`${item.title} live preview`}
                          loading="lazy"
                          className="absolute left-1/2 top-0 w-[1440px] h-[1024px] origin-top-left pointer-events-none [transform:translateX(-50%)_scale(0.23)] sm:[transform:translateX(-50%)_scale(0.28)] lg:[transform:translateX(-50%)_scale(0.27)]"
                          sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                          referrerPolicy="strict-origin-when-cross-origin"
                        />
                      </div>
                    ) : (
                      <div className="absolute inset-0">
                        {item.snapshotSrc ? (
                          <img
                            src={item.snapshotSrc}
                            alt={`${item.title} live snapshot`}
                            loading="lazy"
                            className="w-full h-full object-cover object-top pointer-events-none"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full bg-[linear-gradient(145deg,rgba(20,16,8,0.9),rgba(8,10,12,0.96))] p-3 flex flex-col justify-center">
                            <p className="tech-mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-accent-base)]">
                              Live preview unavailable
                            </p>
                            <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted-base)]">
                              External protections prevent remote preview rendering for this domain.
                            </p>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(4,5,6,0.58))]" />
                        <div className="absolute left-3 right-3 bottom-3 border border-[var(--color-border)] bg-black/55 px-2.5 py-2">
                          <p className="tech-mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-accent-base)]">
                            {item.snapshotSrc ? 'Iframe blocked by site security headers' : 'Direct open recommended'}
                          </p>
                          <p className="mt-1 text-[11px] leading-relaxed text-[var(--color-muted-base)]">
                            Click card to open the live site in a full tab.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="absolute right-3 bottom-3 inline-flex items-center gap-2 text-[10px] tech-mono uppercase tracking-[0.08em] text-[#2c9f60]">
                      <span className="w-2 h-2 rounded-full bg-[#2c9f60] animate-pulse" />
                      {item.embedAllowed
                        ? item.status === 'Operational'
                          ? 'LIVE PREVIEW: OPERATIONAL'
                          : 'LIVE PREVIEW: RESTRICTED'
                        : 'LIVE PREVIEW: LINK-ONLY'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="tech-mono text-xs border border-[var(--color-border)] px-2 py-1 text-[var(--color-muted-base)] uppercase tracking-[1px]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="hover-panel absolute inset-x-4 bottom-4 border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <p className="tech-mono text-[11px] uppercase text-[var(--color-muted-base)] mb-2">Architecture Notes</p>
                <ul className="space-y-1 text-xs">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
