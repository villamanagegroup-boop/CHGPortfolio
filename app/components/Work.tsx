"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "Stackd Studios",
    category: "Venture Studio / SaaS",
    description:
      "An AI-powered build lab and venture studio that takes ideas from concept to launch. Full product strategy, brand, and technical architecture.",
    outcome: "Idea to live product in under 6 weeks.",
    href: "https://www.stackdstudiosai.com",
    tags: ["Strategy", "Product", "AI"],
    accent: true,
    comingSoon: false,
  },
  {
    name: "Villa Concierge Co",
    category: "Insurance Operations Platform",
    description:
      "End-to-end operations system for an insurance relocation housing firm. Placements, billing, inventory, and client management in one clean interface.",
    outcome: "Replaced 3 separate tools with one unified platform.",
    href: "https://villa-group-conceirge2.vercel.app/",
    tags: ["Operations", "React", "Supabase"],
    accent: false,
    comingSoon: false,
  },
  {
    name: "Capital Core Dance Studio",
    category: "Brand Website",
    description:
      "A refined, performance-first website for Midlothian's premier dance studio. Designed for enrollment, community, and brand presence.",
    outcome: "Enrollment inquiries up significantly within the first month.",
    href: "https://www.capitalcoredance.com/",
    tags: ["Web Design", "Next.js", "Brand"],
    accent: false,
    comingSoon: false,
  },
  {
    name: "Evolution Production Co",
    category: "Entertainment Brand",
    description:
      "Website and brand system for a DMV-based hybrid touring ice and dance company. Built to carry the weight of a performance brand.",
    outcome: "Full brand site shipped in 2 weeks, zero revision rounds.",
    href: "https://www.epcperform.com/",
    tags: ["Brand", "Motion", "Web"],
    accent: false,
    comingSoon: false,
  },
  {
    name: "Seal the Leak",
    category: "Personal Growth App",
    description:
      "A daily clarity app and step-by-step reset program personalized to your energy archetype. Stop leaking and start living aligned.",
    outcome: "365 AI-personalized daily cards delivered on demand.",
    href: "https://nicolesprojectapp.vercel.app/",
    tags: ["AI", "Next.js", "Supabase"],
    accent: false,
    comingSoon: false,
  },
  {
    name: "FieldOS",
    category: "Operations System",
    description:
      "A field operations management system designed for service-based businesses who need real-time visibility into their teams and job pipelines.",
    outcome: "",
    href: "#",
    tags: ["SaaS", "Operations", "Design"],
    accent: false,
    comingSoon: true,
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

export default function Work() {
  return (
    <section id="work" className="py-28 md:py-36 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p
            className="text-[var(--rose-text)] text-xs font-sans font-semibold mb-4 tracking-widest"
            style={{ letterSpacing: "0.2em" }}
          >
            SELECTED WORK
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--charcoal)] mb-16 max-w-xl leading-tight">
            Things I&apos;ve built.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const isClickable = project.href !== "#" && !project.comingSoon;
            const Tag = isClickable ? "a" : "div";
            const linkProps = isClickable
              ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <FadeIn key={project.name} delay={i * 0.07} className="h-full">
                <Tag
                  {...linkProps}
                  className={`group flex flex-col h-full border rounded-sm p-7 transition-all duration-300 relative ${
                    project.accent
                      ? "bg-[var(--rose)] border-[var(--rose)] text-white hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(196,84,122,0.25)]"
                      : project.comingSoon
                      ? "bg-[var(--warm-gray)] border-[var(--border)] opacity-75"
                      : "bg-white border-[var(--border)] hover:border-[var(--gold)] cursor-pointer hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                  }`}
                >
                  {project.comingSoon && (
                    <span className="absolute top-4 right-4 text-[10px] font-sans font-medium px-2.5 py-1 rounded-full bg-[var(--accent-muted)] text-[var(--gold)] border border-[var(--gold)] border-opacity-20"
                      style={{ letterSpacing: "0.1em" }}
                    >
                      COMING SOON
                    </span>
                  )}

                  <p
                    className={`text-xs font-sans font-medium mb-5 ${
                      project.accent ? "text-white/60" : "text-[var(--taupe)]"
                    }`}
                    style={{ letterSpacing: "0.15em" }}
                  >
                    {project.category.toUpperCase()}
                  </p>

                  <h3
                    className={`font-serif text-xl font-medium mb-3 ${
                      project.accent
                        ? "text-white"
                        : project.comingSoon
                        ? "text-[var(--charcoal)]"
                        : "text-[var(--charcoal)] group-hover:text-[var(--gold)]"
                    } transition-colors duration-300`}
                  >
                    {project.name}
                  </h3>

                  <p
                    className={`text-sm font-sans font-light leading-relaxed flex-grow ${
                      project.accent ? "text-white/80" : "text-[var(--taupe)]"
                    }`}
                  >
                    {project.description}
                  </p>

                  {project.outcome && (
                    <p className={`text-xs font-sans font-medium mt-4 flex items-center gap-1.5 ${project.accent ? "text-white/90" : "text-[var(--gold)]"}`}>
                      <span>↑</span> {project.outcome}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-sm font-sans ${
                          project.accent
                            ? "bg-white/15 text-white"
                            : "bg-[var(--warm-gray)] text-[var(--taupe)]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {isClickable && (
                    <div
                      className={`mt-5 text-xs font-sans font-medium flex items-center gap-1.5 ${
                        project.accent ? "text-white" : "text-[var(--gold)]"
                      } group-hover:gap-3 transition-all duration-300`}
                    >
                      View project
                      <span>→</span>
                    </div>
                  )}
                </Tag>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
