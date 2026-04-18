"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const agents = [
  { name: "Lead Qualification Agent", desc: "Scores inbound leads in real time, routes hot prospects to your team, and follows up with cold ones automatically." },
  { name: "Client Onboarding Agent", desc: "Walks new clients through intake, collects documents, answers FAQs, and sets up accounts without anyone on your team lifting a finger." },
  { name: "Customer Support Agent", desc: "Handles your most common support questions 24/7, escalates complex issues to humans, and logs everything." },
  { name: "Content Creation Agent", desc: "Drafts social posts, emails, blog content, and ad copy from a brief — in your voice, on brand, every time." },
  { name: "Sales Outreach Agent", desc: "Researches prospects, personalizes outreach messages, and sequences follow-ups until someone responds." },
  { name: "Scheduling & Booking Agent", desc: "Manages your calendar, confirms appointments, sends reminders, and handles reschedules without the back-and-forth." },
  { name: "Operations Monitor", desc: "Watches your dashboards and data feeds, flags anomalies, and sends alerts before small problems become big ones." },
  { name: "Document Processing Agent", desc: "Reads contracts, invoices, intake forms, and reports. Extracts key data, summarizes, and routes to the right place." },
  { name: "Internal Knowledge Agent", desc: "Answers your team's questions using your SOPs, docs, and policies. No more digging through Notion or Slack." },
  { name: "Data & Reporting Agent", desc: "Pulls reports from your tools, summarizes trends, and delivers clean insights to your inbox on whatever cadence you need." },
  { name: "Project Management Agent", desc: "Tracks task progress, sends status updates to stakeholders, flags blockers, and keeps projects on deadline without manual check-ins." },
  { name: "Invoice & Billing Agent", desc: "Generates invoices, sends payment reminders, logs receipts, and follows up on overdue accounts so nothing falls through the cracks." },
];

const services = [
  {
    number: "01",
    title: "Systems Architecture",
    desc: "Designing the internal operating system of your business: workflows, automations, data structures, and integrations that scale without adding headcount.",
  },
  {
    number: "02",
    title: "AI Strategy & Integration",
    desc: "Not just plugging in tools. Building AI into the core of your product or operations in a way that creates real leverage, from prompt engineering to full agent systems.",
  },
  {
    number: "03",
    title: "Business Design",
    desc: "Strategy meets execution. I help founders clarify their model, package their offer, and build the infrastructure to deliver consistently and profitably.",
  },
  {
    number: "04",
    title: "Vibe Coding / Product Build",
    desc: "Full-stack product development with intention. I build web apps, internal tools, and SaaS products that are technically solid and aesthetically cohesive.",
  },
  {
    number: "05",
    title: "Operations & Growth",
    desc: "Turning a working business into a well-oiled one. SOPs, team systems, client experience design, and the infrastructure that lets you grow without chaos.",
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

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 px-8 md:px-12 bg-[var(--warm-gray)]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p
            className="text-[var(--rose-text)] text-xs font-sans font-semibold mb-4 tracking-widest"
            style={{ letterSpacing: "0.2em" }}
          >
            EXPERTISE
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] max-w-md leading-tight">
              How I can help.
            </h2>
            <p className="text-[var(--taupe)] font-sans font-light text-base max-w-xs leading-relaxed">
              I work best with founders and operators who are ready to build and want someone who can think strategically and execute technically.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.07}>
              <div className="group bg-white border-l-2 border-transparent hover:border-[var(--gold)] border border-[var(--border)] p-7 md:p-8 flex flex-col md:flex-row md:items-start gap-6 transition-all duration-300 rounded-sm hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <span className="font-serif text-[var(--gold)] text-sm font-medium shrink-0 pt-1">
                  {service.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-[var(--charcoal)] mb-3 group-hover:text-[var(--gold)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[var(--taupe)] font-sans font-light text-sm leading-relaxed max-w-2xl">
                    {service.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* AI Agents subsection */}
        <FadeIn delay={0.4}>
          <div className="mt-20 pt-16 border-t border-[var(--border)]">
            <p className="text-[var(--rose-text)] text-xs font-sans font-semibold mb-4" style={{ letterSpacing: "0.2em" }}>
              AI AGENTS WE BUILD
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-[var(--charcoal)] leading-tight max-w-md">
                What a custom agent
                <br />can do for your business.
              </h3>
              <p className="text-[var(--taupe)] font-sans font-light text-sm max-w-xs leading-relaxed">
                Every agent is built specifically for your workflow — not a chatbot wrapper, a real system.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {agents.map((agent, i) => (
                <FadeIn key={agent.name} delay={i * 0.04}>
                  <div className="group border border-[var(--border)] bg-white rounded-sm p-5 hover:border-[var(--gold)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(232,184,75,0.15)] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--rose)] shrink-0" />
                      <h4 className="font-serif text-base font-medium text-[var(--charcoal)] group-hover:text-[var(--gold)] transition-colors duration-300">
                        {agent.name}
                      </h4>
                    </div>
                    <p className="text-[var(--taupe)] text-xs font-sans font-light leading-relaxed pl-3.5">
                      {agent.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-12 pt-10 border-t border-[var(--border)]">
            <p className="text-[var(--taupe)] font-sans font-light text-sm mb-4">
              Interested in working together?
            </p>
            <a
              href="#contact"
              className="inline-block text-sm font-sans font-medium text-[var(--charcoal)] border border-[var(--gold)] px-7 py-3.5 rounded-sm hover:bg-[var(--gold)] transition-all duration-300"
              style={{ letterSpacing: "0.05em" }}
            >
              Start a conversation
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
