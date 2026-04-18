"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

        <FadeIn delay={0.4}>
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
