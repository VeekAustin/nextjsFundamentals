const testimonials = [
  {
    id: 1,
    name: "Amara Osei",
    role: "Founder, BrightScale",
    avatar: "AO",
    text: "Victor built our entire marketing site in two weeks. Clean code, fast delivery, and he actually understood what we were trying to communicate to customers. Will work with him again without hesitation.",
    rating: 5,
  },
  {
    id: 2,
    name: "Kofi Mensah",
    role: "Junior Developer",
    avatar: "KM",
    text: "The mentorship sessions with Victor changed how I approach learning. He doesn't just give you answers — he teaches you to think through problems. My React skills improved dramatically in 2 months.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sade Williams",
    role: "CTO, Novu Labs",
    avatar: "SW",
    text: "We brought Victor in for a consulting engagement to review our Next.js architecture. His suggestions were practical and well-reasoned. He understood our constraints and didn't recommend overkill solutions.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Tetteh",
    role: "Product Manager",
    avatar: "DT",
    text: "Victor is the rare developer who can speak the language of design and business. He asked smart questions before touching a single line of code, and the result showed that clearly.",
    rating: 5,
  },
  {
    id: 5,
    name: "Efua Asante",
    role: "Startup Advisor",
    avatar: "EA",
    text: "I've recommended Victor to three founders in my network. Every one of them came back to me saying the same thing: he just gets it. Reliable, honest, and genuinely skilled.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-xs tracking-[0.2em] uppercase text-green-500 font-medium mb-3">Social proof</p>
      <h1 className="font-[Syne,sans-serif] text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight text-[#e8f5ea] mb-3">
        What People Say
      </h1>
      <p className="text-[#5a7a60] text-base leading-relaxed mb-12 max-w-md">
        Honest feedback from people I've worked with — founders, developers, and teams.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a2e1e]">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-[#0a0f0b] p-8 flex flex-col gap-5 hover:bg-[#0f1a11] transition-colors duration-150">

            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-green-400 text-xs">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-sm text-[#5a7a60] leading-[1.8] flex-1">"{t.text}"</p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#1a2e1e]">
              <div className="w-9 h-9 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-[0.6rem] font-bold text-green-400 tracking-wide font-[Syne,sans-serif] shrink-0">
                {t.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#e8f5ea] font-[Syne,sans-serif]">{t.name}</p>
                <p className="text-xs text-[#2a4a2e]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-[#2a4a2e] text-center">
        100% satisfaction
      </p>
    </div>
  );
}