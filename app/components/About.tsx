"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const strengths = [
  {
    title: "Systems Thinking",
    desc: "I map complexity into clarity, whether that's an operations workflow, a business model, or an AI architecture.",
  },
  {
    title: "Vibe Coding",
    desc: "Code as a creative medium. I build products that work and feel, not just function, but resonate.",
  },
  {
    title: "Strategic Intuition",
    desc: "Equal parts analyst and artist. I understand why something works and what it needs to become.",
  },
  {
    title: "Human-Centered Design",
    desc: "Rooted in behavioral psychology, I build for how people actually think, not how we wish they did.",
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

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-8 md:px-12 bg-[var(--warm-gray)]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p
            className="text-[var(--rose-text)] text-xs font-sans font-semibold mb-4 tracking-widest"
            style={{ letterSpacing: "0.2em" }}
          >
            ABOUT
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] mb-14 max-w-xl leading-tight">
            Built for the work that matters.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Bio */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <p className="text-[var(--charcoal)] font-sans font-light text-base leading-loose">
                I started in psychology, studying how people make decisions, what
                drives behavior, and why the most logical solution isn&apos;t
                always the one people choose. That foundation changed how I see
                everything I build. Every system I design is really a question:
                will a real person actually use this?
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[var(--charcoal)] font-sans font-light text-base leading-loose">
                Today I operate at the intersection of strategy and execution,
                building AI-powered products, designing operations architectures,
                and helping ambitious founders and brands get their internal
                world to match their external vision.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-[var(--charcoal)] font-sans font-light text-base leading-loose">
                I call what I do &ldquo;vibe coding&rdquo;, not because it&apos;s casual,
                but because the code I write carries intention. There&apos;s craft
                behind the aesthetic. Systems that feel effortless took serious
                work to design that way.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="pt-4">
                <div className="w-10 h-px bg-[var(--gold)] mb-6" />
                <p className="text-[var(--taupe)] text-sm font-sans" style={{ letterSpacing: "0.05em" }}>
                  Founder, Hicks Virtual Solutions LLC
                  <br />
                  Founder, Stackd Studios AI
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Strengths */}
          <div className="space-y-5">
            {strengths.map((s, i) => (
              <FadeIn key={s.title} delay={0.1 + i * 0.08}>
                <div className="bg-white border border-[var(--border)] p-6 rounded-sm hover:border-[var(--rose)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(196,84,122,0.1)] transition-all duration-300 group">
                  <h3 className="font-serif text-lg font-medium text-[var(--charcoal)] mb-2 group-hover:text-[var(--rose)] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[var(--taupe)] text-sm font-sans font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
