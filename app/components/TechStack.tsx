"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "AI & Intelligence",
    accent: "var(--gold)",
    items: [
      { name: "Claude (Anthropic)", note: "Opus · Sonnet · Haiku" },
      { name: "OpenAI", note: "GPT-4o · o3" },
      { name: "Gemini", note: "Google DeepMind" },
      { name: "Perplexity AI", note: "Real-time research" },
      { name: "Anthropic SDK", note: "Tool use · Caching · Agents" },
      { name: "LangChain", note: "Agent orchestration" },
      { name: "Vercel AI SDK", note: "Streaming · UI integration" },
    ],
  },
  {
    label: "Frontend",
    accent: "var(--rose)",
    items: [
      { name: "Next.js", note: "App Router · 14 & 15" },
      { name: "React", note: "Server & Client Components" },
      { name: "TypeScript", note: "Type-safe everything" },
      { name: "Tailwind CSS", note: "v3 & v4" },
      { name: "Framer Motion", note: "Animation & transitions" },
      { name: "shadcn/ui", note: "Component library" },
      { name: "Radix UI", note: "Accessible primitives" },
    ],
  },
  {
    label: "Backend & Data",
    accent: "var(--gold)",
    items: [
      { name: "Supabase", note: "Postgres · Auth · Storage · Edge" },
      { name: "Prisma", note: "ORM & migrations" },
      { name: "PostgreSQL", note: "Relational database" },
      { name: "Node.js", note: "API routes & serverless" },
      { name: "Python", note: "Scripting · AI pipelines" },
      { name: "Redis", note: "Caching & queues" },
      { name: "Drizzle ORM", note: "Lightweight type-safe ORM" },
    ],
  },
  {
    label: "Payments & Communication",
    accent: "var(--rose)",
    items: [
      { name: "Stripe", note: "Payments · Webhooks · Subscriptions" },
      { name: "Resend", note: "Transactional email" },
      { name: "Twilio", note: "SMS & voice" },
      { name: "SendGrid", note: "Email delivery" },
      { name: "Plaid", note: "Financial data" },
    ],
  },
  {
    label: "Deployment & DevOps",
    accent: "var(--gold)",
    items: [
      { name: "Vercel", note: "Hosting · CI/CD · Edge" },
      { name: "GitHub", note: "Version control" },
      { name: "Docker", note: "Containerization" },
      { name: "Cloudflare", note: "CDN · Workers · DNS" },
      { name: "AWS", note: "S3 · Lambda · EC2" },
    ],
  },
  {
    label: "Integrations & Automation",
    accent: "var(--rose)",
    items: [
      { name: "Zapier", note: "No-code automation" },
      { name: "Make (Integromat)", note: "Advanced workflows" },
      { name: "n8n", note: "Self-hosted automation" },
      { name: "Notion API", note: "Knowledge base integration" },
      { name: "Airtable", note: "Structured data & views" },
      { name: "Google Workspace", note: "Sheets · Docs · Drive APIs" },
      { name: "Slack API", note: "Team notifications & bots" },
    ],
  },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="py-28 md:py-36 px-8 md:px-12 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p
            className="text-[var(--rose-text)] text-xs font-sans font-semibold mb-4"
            style={{ letterSpacing: "0.2em" }}
          >
            TECH STACK
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] max-w-md leading-tight">
              Built with the best tools.
            </h2>
            <p className="text-[var(--taupe)] font-sans font-light text-base max-w-xs leading-relaxed">
              Full-stack AI development across the entire product lifecycle — from prototype to production.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <FadeIn key={cat.label} delay={ci * 0.08}>
              <div className="bg-[var(--warm-gray)] border border-[var(--border)] rounded-sm p-7 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: cat.accent }}
                  />
                  <p
                    className="text-xs font-sans font-semibold text-[var(--taupe)]"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    {cat.label.toUpperCase()}
                  </p>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item, ii) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: ci * 0.06 + ii * 0.04 }}
                      className="flex items-baseline justify-between gap-4 border-b border-[var(--border)] pb-3 last:border-0 last:pb-0"
                    >
                      <span className="font-serif text-sm font-medium text-[var(--charcoal)]">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-sans text-[var(--taupe)] shrink-0 text-right leading-tight">
                        {item.note}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-14 pt-10 border-t border-[var(--border)] flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-[var(--taupe)] font-sans font-light text-sm max-w-md leading-relaxed">
              Every tool is chosen intentionally. The goal is always a system that&apos;s lean, fast, and built to last.
            </p>
            <a
              href="#contact"
              className="block text-center md:inline-block text-sm font-sans font-medium text-[var(--charcoal)] border border-[var(--gold)] px-7 py-3.5 rounded-sm hover:bg-[var(--gold)] transition-all duration-300 shrink-0"
              style={{ letterSpacing: "0.05em" }}
            >
              Let&apos;s build together
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
