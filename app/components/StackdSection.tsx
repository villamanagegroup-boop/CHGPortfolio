"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const offerings = [
  {
    title: "AI Agent Development",
    desc: "Custom AI agents built for your specific workflows, from lead qualification and onboarding to internal ops and customer support.",
  },
  {
    title: "Workflow Automation",
    desc: "End-to-end automation that connects your tools, eliminates manual steps, and lets your team focus on the work that actually requires them.",
  },
  {
    title: "AI-Powered Product Builds",
    desc: "Full-stack products with AI baked in from the ground up. Not bolted on, designed around it.",
  },
  {
    title: "Strategy & Systems Design",
    desc: "Before the build: mapping your operations, identifying the right AI applications, and designing an architecture that scales with you.",
  },
];

const agents = [
  {
    name: "Lead Qualification Agent",
    desc: "Scores inbound leads in real time, routes hot prospects to your team, and follows up with cold ones automatically.",
  },
  {
    name: "Client Onboarding Agent",
    desc: "Walks new clients through intake, collects documents, answers FAQs, and sets up accounts without anyone on your team lifting a finger.",
  },
  {
    name: "Customer Support Agent",
    desc: "Handles your most common support questions 24/7, escalates complex issues to humans, and logs everything.",
  },
  {
    name: "Content Creation Agent",
    desc: "Drafts social posts, emails, blog content, and ad copy from a brief — in your voice, on brand, every time.",
  },
  {
    name: "Sales Outreach Agent",
    desc: "Researches prospects, personalizes outreach messages, and sequences follow-ups until someone responds.",
  },
  {
    name: "Scheduling & Booking Agent",
    desc: "Manages your calendar, confirms appointments, sends reminders, and handles reschedules without the back-and-forth.",
  },
  {
    name: "Operations Monitor",
    desc: "Watches your dashboards and data feeds, flags anomalies, and sends alerts before small problems become big ones.",
  },
  {
    name: "Document Processing Agent",
    desc: "Reads contracts, invoices, intake forms, and reports. Extracts key data, summarizes, and routes to the right place.",
  },
  {
    name: "Internal Knowledge Agent",
    desc: "Answers your team's questions using your SOPs, docs, and policies. No more digging through Notion or Slack.",
  },
  {
    name: "Data & Reporting Agent",
    desc: "Pulls reports from your tools, summarizes trends, and delivers clean insights to your inbox on whatever cadence you need.",
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

export default function StackdSection() {
  return (
    <section className="overflow-hidden">

      {/* ── Top block: intro + offerings — white bg ── */}
      <div className="py-28 md:py-36 px-8 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* Left */}
            <div>
              <FadeIn>
                <p
                  className="text-[var(--rose-text)] text-xs font-sans font-semibold mb-4"
                  style={{ letterSpacing: "0.2em" }}
                >
                  BUILD WITH STACKD STUDIOS
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] mb-8 leading-tight">
                  Ready to build with
                  <br />
                  <em className="text-[var(--rose)] not-italic">AI at the core?</em>
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-[var(--taupe)] font-sans font-light text-base leading-loose mb-6">
                  Through Stackd Studios, I work with founders and growing businesses to design and build AI-powered systems that actually move the needle. Not demos. Not experiments. Production-grade work that runs your operations, serves your customers, and grows with your team.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-[var(--taupe)] font-sans font-light text-base leading-loose mb-10">
                  Every engagement starts with understanding your business deeply before we write a single line of code. The best AI systems are designed around how your business actually works, not retrofitted to a template.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.stackdstudiosai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-sans font-medium text-[var(--charcoal)] bg-[var(--gold)] px-7 py-3.5 rounded-sm hover:bg-[var(--charcoal)] hover:text-white transition-colors duration-300 text-center"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    Build with Stackd
                  </a>
                  <a
                    href="#contact"
                    className="inline-block text-sm font-sans font-medium text-[var(--charcoal)] border border-[var(--border)] px-7 py-3.5 rounded-sm hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300 text-center"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    Start a conversation
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right — offering cards */}
            <div className="space-y-4">
              {offerings.map((item, i) => (
                <FadeIn key={item.title} delay={0.1 + i * 0.08}>
                  <div className="border border-[var(--border)] bg-[var(--warm-gray)] p-6 rounded-sm hover:border-[var(--gold)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(232,184,75,0.12)] transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-1 h-10 bg-[var(--gold)] rounded-full shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      <div>
                        <h3 className="font-serif text-lg font-medium text-[var(--charcoal)] mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-[var(--taupe)] text-sm font-sans font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── AI Agents block — gold-light bg ── */}
      <div className="py-24 px-8 md:px-12 bg-[var(--gold-light)]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p
              className="text-[var(--rose-text)] text-xs font-sans font-semibold mb-4"
              style={{ letterSpacing: "0.2em" }}
            >
              AI AGENTS WE BUILD
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-[var(--charcoal)] leading-tight max-w-md">
                What a custom agent
                <br />
                can do for your business.
              </h2>
              <p className="text-[var(--taupe)] font-sans font-light text-sm max-w-xs leading-relaxed">
                Every agent is built specifically for your workflow. Not a chatbot wrapper — a real system.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {agents.map((agent, i) => (
              <FadeIn key={agent.name} delay={i * 0.05}>
                <div className="group border border-[var(--border)] bg-white rounded-sm p-5 hover:border-[var(--gold)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(232,184,75,0.15)] transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--rose)] shrink-0" />
                    <h3 className="font-serif text-base font-medium text-[var(--charcoal)] group-hover:text-[var(--gold)] transition-colors duration-300">
                      {agent.name}
                    </h3>
                  </div>
                  <p className="text-[var(--taupe)] text-xs font-sans font-light leading-relaxed pl-3.5">
                    {agent.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-14 pt-10 border-t border-[var(--border)] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="font-serif text-[var(--taupe)] text-sm italic">
                Stackd Studios — AI-Powered Build Lab & Venture Studio
              </p>
              <a
                href="https://www.stackdstudiosai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans font-medium text-[var(--gold)] hover:text-[var(--charcoal)] transition-colors duration-300 flex items-center gap-2"
                style={{ letterSpacing: "0.1em" }}
              >
                STACKDSTUDIOSAI.COM <span>→</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

    </section>
  );
}
