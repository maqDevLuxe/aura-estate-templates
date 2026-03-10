/* =============================================================================
   Section 2 — Hero: Interactive 360° panorama simulation with search bar
   Features: Mouse-move parallax on panoramic image, overlaid search, glassmorphism
   ============================================================================= */

import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Play, MapPin, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouse({ x, y });
    };
    const el = containerRef.current;
    el?.addEventListener("mousemove", handleMove);
    return () => el?.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* --- Panoramic background with parallax --- */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${mouse.x * -15}px, ${mouse.y * -10}px) scale(1.08)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
          alt="Luxury modern home with panoramic views"
          className="w-full h-full object-cover"
        />
      </div>

      {/* --- Gradient overlay --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-background" />

      {/* --- 360° indicator elements --- */}
      <div
        className="absolute top-1/4 right-[15%] w-20 h-20 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center animate-float"
        style={{
          transform: `translate(${mouse.x * 25}px, ${mouse.y * 15}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <span className="text-primary-foreground/60 text-xs font-medium">360°</span>
      </div>

      {/* --- Hero content --- */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/15 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground text-xs font-medium mb-8 animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          <Play className="w-3.5 h-3.5" />
          Immersive Virtual Property Tours
        </div>

        <h1
          className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-primary-foreground animate-fade-in"
          style={{
            animationDelay: "0.4s",
            opacity: 0,
            transform: `translate(${mouse.x * -3}px, ${mouse.y * -3}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          Discover Your
          <br />
          <span className="italic">Dream Home</span>
        </h1>

        <p
          className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          Experience luxury properties worldwide with our cutting-edge 360° virtual tours. Walk through every room before you visit.
        </p>

        {/* --- Search Bar (glassmorphism) --- */}
        <div
          className="max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          <div className="glass-strong rounded-2xl p-2 flex flex-col sm:flex-row gap-2">
            <div className="flex-1 flex items-center gap-2 px-4">
              <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Search by city, neighborhood, or address..."
                className="w-full h-11 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <Link to="/properties">
              <Button variant="premium" size="lg" className="w-full sm:w-auto gap-2">
                <Search className="w-4 h-4" /> Search
              </Button>
            </Link>
          </div>
        </div>

        {/* --- Quick links --- */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mt-6 animate-fade-in"
          style={{ animationDelay: "1s", opacity: 0 }}
        >
          {["Manhattan", "Beverly Hills", "Miami Beach", "San Francisco"].map((city) => (
            <span
              key={city}
              className="px-3 py-1 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 text-primary-foreground/70 text-xs cursor-pointer hover:bg-primary-foreground/20 transition-colors"
            >
              {city}
            </span>
          ))}
        </div>
      </div>

      {/* --- Bottom gradient --- */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* --- Scroll indicator --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.2s", opacity: 0 }}>
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90 animate-float" />
      </div>
    </section>
  );
};

export default HeroSection;
