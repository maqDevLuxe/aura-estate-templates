/* =============================================================================
   Section 8 — Featured VR Properties Grid
   ============================================================================= */

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Bed, Bath, Eye, ArrowRight } from "lucide-react";

const properties = [
  {
    title: "The Meridian Penthouse",
    location: "Manhattan, NY",
    price: "$4.25M",
    beds: 4,
    baths: 3,
    hasVR: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  },
  {
    title: "Pacific Coast Villa",
    location: "Malibu, CA",
    price: "$8.5M",
    beds: 5,
    baths: 4,
    hasVR: true,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
  },
  {
    title: "Bayfront Modern Loft",
    location: "San Francisco, CA",
    price: "$1.8M",
    beds: 2,
    baths: 2,
    hasVR: true,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  },
  {
    title: "Coral Bay Estate",
    location: "Miami, FL",
    price: "$12M",
    beds: 6,
    baths: 5,
    hasVR: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
  {
    title: "Hillcrest Residence",
    location: "Beverly Hills, CA",
    price: "$3.2M",
    beds: 4,
    baths: 3,
    hasVR: false,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
  },
  {
    title: "Skyline Tower Suite",
    location: "Chicago, IL",
    price: "$2.1M",
    beds: 3,
    baths: 2,
    hasVR: true,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
  },
];

const FeaturedPropertiesSection = () => (
  <section className="py-24 gradient-soft">
    <div className="container mx-auto px-4">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-xs font-medium tracking-widest text-primary uppercase">Curated Selection</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-foreground">
            Featured Properties
          </h2>
        </div>
        <Link to="/properties" className="hidden sm:inline-flex">
          <Button variant="premium-outline" className="gap-2">
            View All <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((p, i) => (
          <div
            key={p.title}
            className="bg-card rounded-xl overflow-hidden card-elegant group animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
          >
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-40" />
              {p.hasVR && (
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
                  <Eye className="w-3 h-3" /> VR Tour
                </span>
              )}
              <div className="absolute bottom-3 left-3">
                <span className="font-display text-lg font-bold text-primary-foreground drop-shadow-md">{p.price}</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-base font-semibold mb-1 text-foreground">{p.title}</h3>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
                <MapPin className="w-3 h-3" /> {p.location}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" /> {p.beds} Beds</span>
                <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {p.baths} Baths</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 sm:hidden">
        <Link to="/properties">
          <Button variant="premium-outline" className="gap-2">
            View All Properties <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedPropertiesSection;
