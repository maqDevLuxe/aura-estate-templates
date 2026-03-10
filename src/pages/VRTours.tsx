/* =============================================================================
   VR Tours Page — Showcases virtual tour experiences
   Features: Tour cards with hover effects, category filters, featured tour
   ============================================================================= */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Eye, Clock, MapPin, Star } from "lucide-react";
import Layout from "@/components/Layout";

const categories = ["All", "Luxury", "Modern", "Penthouse", "Villa"];

const tours = [
  {
    id: 1, title: "Skyline Penthouse", location: "Manhattan, NY", duration: "12 min",
    views: "24.5K", rating: 4.9, category: "Penthouse", featured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  },
  {
    id: 2, title: "Modern Glass Villa", location: "Malibu, CA", duration: "8 min",
    views: "18.2K", rating: 4.8, category: "Villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
  {
    id: 3, title: "Minimalist Loft", location: "San Francisco, CA", duration: "6 min",
    views: "12.1K", rating: 4.7, category: "Modern",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  },
  {
    id: 4, title: "Oceanfront Estate", location: "Miami, FL", duration: "15 min",
    views: "31.8K", rating: 5.0, category: "Luxury",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
  },
  {
    id: 5, title: "Urban Sky Loft", location: "Chicago, IL", duration: "9 min",
    views: "8.4K", rating: 4.6, category: "Modern",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
  },
  {
    id: 6, title: "Royal Penthouse Suite", location: "Beverly Hills, CA", duration: "18 min",
    views: "42.3K", rating: 4.9, category: "Luxury",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
  },
];

const VRTours = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? tours : tours.filter((t) => t.category === activeCategory);
  const featured = tours.find((t) => t.featured);

  return (
    <Layout>
      {/* --- Hero Banner --- */}
      <section className="py-20 gradient-hero relative">
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">Explore</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mt-2 mb-4 text-foreground">
            Virtual Tours
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            Immerse yourself in stunning properties from the comfort of your home. Each tour is captured in ultra-high-definition 360°.
          </p>
        </div>
      </section>

      {/* --- Featured Tour --- */}
      {featured && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-xs font-medium tracking-widest text-primary uppercase mb-6">Featured Tour</h2>
            <div className="bg-card rounded-xl overflow-hidden card-elegant grid lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors shadow-lg">
                    <Play className="w-7 h-7 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-warm-gold fill-warm-gold" />
                  <span className="text-sm font-medium text-foreground">{featured.rating}</span>
                  <span className="text-xs text-muted-foreground">• {featured.views} views</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-2 text-foreground">{featured.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{featured.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.duration}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Experience this breathtaking penthouse with panoramic city views, designer interiors, and a private rooftop terrace.
                </p>
                <Button variant="premium" className="w-fit gap-2">
                  <Play className="w-4 h-4" /> Start Tour
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* --- Category Filters --- */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- Tour Grid --- */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((tour, i) => (
              <div
                key={tour.id}
                className="bg-card rounded-xl overflow-hidden card-elegant group animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                <div className="relative overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-card/90 backdrop-blur-sm text-xs font-medium text-primary">
                    {tour.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold mb-1 text-foreground">{tour.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{tour.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-warm-gold fill-warm-gold" />
                      <span className="text-xs font-medium text-foreground">{tour.rating}</span>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Eye className="w-3 h-3" /> {tour.views}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VRTours;
