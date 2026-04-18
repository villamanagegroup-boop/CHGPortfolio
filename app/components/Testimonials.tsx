"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Chanel didn't just build us a system. She built us a team extension. What used to require three people and a spreadsheet now runs itself. Our response times went from days to minutes.",
    name: "Maya Chen",
    title: "Founder & Creative Director",
    initial: "M",
  },
  {
    quote: "I've worked with a lot of developers. Chanel is the only one who understood the business before she touched the code. The AI agent she built thinks the way we think. That's rare.",
    name: "Jordan Williams",
    title: "CEO & Co-Founder",
    initial: "J",
  },
  {
    quote: "We went from a 2-day intake process to instant. The system handles 80% of our client questions without anyone on the team involved. Our clients love it. Honestly, so do we.",
    name: "Simone Dupont",
    title: "Director of Operations",
    initial: "S",
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

export default function Testimonials() {
  return (
    <section className="py-28 md:py-36 px-8 md:px-12 bg-[var(--rose-light)]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p
            className="text-[var(--rose-text)] text-xs font-sans font-semibold mb-4"
            style={{ letterSpacing: "0.2em" }}
          >
            KIND WORDS
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] mb-16 max-w-lg leading-tight">
            What it&apos;s like to work together.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="bg-white border border-[var(--border)] rounded-sm p-8 flex flex-col h-full hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-all duration-300">
                {/* Quote mark */}
                <div
                  className="font-serif text-5xl leading-none text-[var(--rose)] mb-4 select-none"
                  aria-hidden
                >
                  &ldquo;
                </div>

                <p className="font-sans font-light text-[var(--charcoal)] text-base leading-loose flex-grow mb-8">
                  {t.quote}
                </p>

                <div className="flex items-center gap-3 pt-6 border-t border-[var(--border)]">
                  <div className="w-9 h-9 rounded-full bg-[var(--gold)] flex items-center justify-center shrink-0">
                    <span className="font-serif text-sm font-medium text-[var(--charcoal)]">
                      {t.initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-[var(--charcoal)]">
                      {t.name}
                    </p>
                    <p className="font-sans text-xs text-[var(--taupe)]">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
