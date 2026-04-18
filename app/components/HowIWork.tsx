"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We start with your business, not the tech. I map your operations, identify bottlenecks, and define exactly what success looks like before we write a single line of code.",
  },
  {
    number: "02",
    title: "Build",
    desc: "I design and develop the system with intention, keeping you in the loop at every milestone. No black box. You'll see it take shape and can shape it with me.",
  },
  {
    number: "03",
    title: "Launch & Iterate",
    desc: "We ship, measure, and refine. The best systems improve with use. I stay close through launch to make sure everything runs exactly as intended — and gets better over time.",
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

export default function HowIWork() {
  return (
    <section className="py-28 md:py-36 px-8 md:px-12 bg-[var(--charcoal)]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p
            className="text-[var(--gold)] text-xs font-sans font-semibold mb-4"
            style={{ letterSpacing: "0.2em" }}
          >
            THE PROCESS
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-white leading-tight max-w-md">
              What working with me
              <br />
              actually looks like.
            </h2>
            <p className="text-white/50 font-sans font-light text-sm max-w-xs leading-relaxed">
              No guessing. No ghosting. Just a clear, collaborative process from first conversation to final launch.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="group relative border border-white/10 rounded-sm p-8 hover:border-[var(--gold)] transition-all duration-300 hover:-translate-y-1">
                <span className="font-serif text-[var(--gold)] text-sm font-medium mb-6 block opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {step.number}
                </span>
                <h3 className="font-serif text-2xl font-medium text-white mb-4 group-hover:text-[var(--gold)] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-white/50 font-sans font-light text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                  {step.desc}
                </p>
                {i < steps.length - 1 && (
                  <span className="hidden md:block absolute top-1/2 -right-3 text-[var(--gold)] text-lg opacity-30">→</span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-14 pt-10 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-white/50 font-sans font-light text-sm max-w-md leading-relaxed">
              Most projects move from discovery to launch in 4–8 weeks. Complex systems may take longer, but you&apos;ll always know where we are.
            </p>
            <a
              href="#contact"
              className="inline-block text-sm font-sans font-medium text-[var(--charcoal)] bg-[var(--gold)] px-7 py-3.5 rounded-sm hover:bg-white transition-colors duration-300 shrink-0 text-center"
              style={{ letterSpacing: "0.05em" }}
            >
              Start the conversation
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
