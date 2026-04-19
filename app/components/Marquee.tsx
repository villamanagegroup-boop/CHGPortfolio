"use client";

const row1 = [
  "Next.js", "React", "TypeScript", "Supabase", "Claude AI",
  "Stripe", "Framer Motion", "Tailwind CSS", "Vercel", "Python",
  "OpenAI", "Node.js", "Prisma",
];

const row2 = [
  "Systems Thinking", "Vibe Coding", "AI Strategy", "Operations Design",
  "Product Architecture", "Human-Centered Design", "Creative Technology",
  "Full-Stack AI",
];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{
          animation: `marquee${reverse ? "-reverse" : ""} ${reverse ? 28 : 22}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 px-5 text-[10px] font-sans font-semibold text-white/80"
            style={{ letterSpacing: "0.2em" }}
          >
            {item.toUpperCase()}
            <span className="text-white/40 text-xs" aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="py-7 border-y border-[var(--rose)] bg-[var(--rose)] overflow-hidden space-y-3">
      <Row items={row1} />
      <Row items={row2} reverse />
    </div>
  );
}
