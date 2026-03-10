/* =============================================================================
   Section 11 — Prop-Tech Blog / News
   ============================================================================= */

import { ArrowRight, CalendarDays } from "lucide-react";

const posts = [
  {
    title: "The Future of Virtual Reality in Real Estate",
    excerpt: "How VR technology is reshaping property viewings and what it means for buyers and sellers in 2026.",
    date: "Mar 5, 2026",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=300&fit=crop",
  },
  {
    title: "Top 10 Luxury Markets for Virtual Tours",
    excerpt: "Discover the most sought-after luxury real estate markets adopting immersive virtual tour technology.",
    date: "Feb 28, 2026",
    category: "Market Insights",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
  },
  {
    title: "How 3D Floor Plans Increase Buyer Confidence",
    excerpt: "Research shows properties with interactive 3D floor plans see 60% more engagement from serious buyers.",
    date: "Feb 20, 2026",
    category: "Research",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
  },
];

const BlogSection = () => (
  <section className="py-24 gradient-soft">
    <div className="container mx-auto px-4">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-xs font-medium tracking-widest text-primary uppercase">Insights</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-foreground">
            Latest from Our Blog
          </h2>
        </div>
        <button className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          All Articles <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <article
            key={post.title}
            className="bg-card rounded-xl overflow-hidden card-elegant group cursor-pointer animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-card/90 backdrop-blur-sm text-xs font-medium text-primary">
                {post.category}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                <CalendarDays className="w-3 h-3" /> {post.date}
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
