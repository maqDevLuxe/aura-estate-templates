/* =============================================================================
   Section 13 — Client Testimonials
   ============================================================================= */

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Home Buyer, Manhattan",
    quote: "Vistara's virtual tours saved us countless trips. We toured 15 properties from our couch and found our dream penthouse in two weeks.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "James Rodriguez",
    role: "Real Estate Agent",
    quote: "Since listing with Vistara, my properties get 4x more inquiries. The VR tours let buyers fall in love before they even visit.",
    rating: 5,
    avatar: "JR",
  },
  {
    name: "Emily Chen",
    role: "International Buyer",
    quote: "I purchased my Miami villa from Singapore. The 360° tours were so detailed I felt like I walked through every room in person.",
    rating: 5,
    avatar: "EC",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 bg-primary/[0.03]">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-xs font-medium tracking-widest text-primary uppercase">Testimonials</span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4 text-foreground">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="bg-card rounded-xl p-8 card-elegant relative animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
          >
            <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" />
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 text-warm-gold fill-warm-gold" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-primary">
                {t.avatar}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
