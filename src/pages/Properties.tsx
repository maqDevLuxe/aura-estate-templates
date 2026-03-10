/* =============================================================================
   Properties Page — Advanced sidebar filtering UI
   Features: Sidebar filters (price, type, bedrooms, amenities), property grid
   ============================================================================= */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Search, SlidersHorizontal, MapPin, Bed, Bath, Maximize,
  Heart, Eye, X, ChevronDown, ChevronUp,
} from "lucide-react";
import Layout from "@/components/Layout";

/* ---------- Filter sidebar data ---------- */
const propertyTypes = ["All", "Apartment", "House", "Villa", "Penthouse", "Condo"];
const bedroomOptions = ["Any", "1", "2", "3", "4", "5+"];
const amenities = ["Pool", "Gym", "Parking", "Garden", "Smart Home", "VR Ready", "Concierge", "Rooftop"];
const priceRanges = [
  { label: "Any", min: 0, max: Infinity },
  { label: "$200K – $500K", min: 200000, max: 500000 },
  { label: "$500K – $1M", min: 500000, max: 1000000 },
  { label: "$1M – $3M", min: 1000000, max: 3000000 },
  { label: "$3M+", min: 3000000, max: Infinity },
];

/* ---------- Properties data ---------- */
const properties = [
  { id: 1, title: "Azure Tower Penthouse", location: "Manhattan, NY", price: 4250000, type: "Penthouse", beds: 4, baths: 3, sqft: 3200, hasVR: true, amenities: ["Pool", "Gym", "Concierge", "Smart Home"], image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop" },
  { id: 2, title: "Oceanview Modern Villa", location: "Malibu, CA", price: 8500000, type: "Villa", beds: 5, baths: 4, sqft: 5800, hasVR: true, amenities: ["Pool", "Garden", "Parking", "Smart Home"], image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" },
  { id: 3, title: "Downtown Luxury Loft", location: "San Francisco, CA", price: 1800000, type: "Apartment", beds: 2, baths: 2, sqft: 1400, hasVR: false, amenities: ["Gym", "Parking", "Concierge"], image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop" },
  { id: 4, title: "Coral Bay Estate", location: "Miami, FL", price: 12000000, type: "Villa", beds: 6, baths: 5, sqft: 8200, hasVR: true, amenities: ["Pool", "Garden", "Gym", "Smart Home", "Rooftop"], image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop" },
  { id: 5, title: "Urban Glass Condo", location: "Chicago, IL", price: 620000, type: "Condo", beds: 2, baths: 1, sqft: 950, hasVR: false, amenities: ["Gym", "Parking"], image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop" },
  { id: 6, title: "Hillcrest Modern House", location: "Beverly Hills, CA", price: 3200000, type: "House", beds: 4, baths: 3, sqft: 3800, hasVR: true, amenities: ["Pool", "Garden", "Parking", "Smart Home", "VR Ready"], image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop" },
];

const formatPrice = (n: number) =>
  "$" + (n >= 1000000 ? (n / 1000000).toFixed(1) + "M" : (n / 1000).toFixed(0) + "K");

const Properties = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedBeds, setSelectedBeds] = useState("Any");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [vrOnly, setVrOnly] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    type: true, price: true, bedrooms: true, amenities: true,
  });

  const toggleSection = (key: string) =>
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  const toggleAmenity = (a: string) =>
    setSelectedAmenities((prev) => prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]);
  const clearFilters = () => {
    setSearch(""); setSelectedType("All"); setSelectedBeds("Any");
    setSelectedPrice(0); setSelectedAmenities([]); setVrOnly(false);
  };

  const filtered = properties.filter((p) => {
    if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.location.toLowerCase().includes(search.toLowerCase())) return false;
    if (selectedType !== "All" && p.type !== selectedType) return false;
    if (selectedBeds !== "Any" && (selectedBeds === "5+" ? p.beds < 5 : p.beds !== Number(selectedBeds))) return false;
    const range = priceRanges[selectedPrice];
    if (p.price < range.min || p.price > range.max) return false;
    if (selectedAmenities.length && !selectedAmenities.every((a) => p.amenities.includes(a))) return false;
    if (vrOnly && !p.hasVR) return false;
    return true;
  });

  const activeFilterCount = (selectedType !== "All" ? 1 : 0) + (selectedBeds !== "Any" ? 1 : 0) + (selectedPrice !== 0 ? 1 : 0) + selectedAmenities.length + (vrOnly ? 1 : 0);

  const FilterSection = ({ title, sectionKey, children }: { title: string; sectionKey: string; children: React.ReactNode }) => (
    <div className="border-b border-border pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
      <button onClick={() => toggleSection(sectionKey)} className="flex items-center justify-between w-full text-sm font-semibold text-foreground mb-3">
        {title}
        {expandedSections[sectionKey] ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
      </button>
      {expandedSections[sectionKey] && children}
    </div>
  );

  return (
    <Layout>
      {/* --- Page Header --- */}
      <section className="py-16 gradient-hero relative">
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">Browse</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mt-2 mb-4 text-foreground">Properties</h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            Discover your perfect property with advanced filters and immersive virtual tours.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          {/* --- Toolbar --- */}
          <div className="flex items-center justify-between gap-4 mb-6 pt-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text" placeholder="Search properties..." value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground hidden sm:inline">{filtered.length} results</span>
              <Button variant="premium-outline" size="sm" className="lg:hidden gap-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <SlidersHorizontal className="w-4 h-4" /> Filters
                {activeFilterCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">{activeFilterCount}</span>
                )}
              </Button>
            </div>
          </div>

          <div className="flex gap-6">
            {/* --- Sidebar Filters --- */}
            <aside className={`${sidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-72 shrink-0`}>
              <div className="sticky top-20 bg-card rounded-xl p-5 card-elegant border border-border">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-sm font-semibold tracking-wider flex items-center gap-2 text-foreground">
                    <SlidersHorizontal className="w-4 h-4 text-primary" /> FILTERS
                  </h3>
                  {activeFilterCount > 0 && (
                    <button onClick={clearFilters} className="text-xs text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                      <X className="w-3 h-3" /> Clear all
                    </button>
                  )}
                </div>

                {/* VR Only Toggle */}
                <div className="flex items-center justify-between mb-5 p-3 rounded-lg bg-accent">
                  <span className="text-sm font-medium flex items-center gap-2 text-foreground">
                    <Eye className="w-4 h-4 text-secondary" /> VR Tours Only
                  </span>
                  <button onClick={() => setVrOnly(!vrOnly)} className={`w-10 h-5 rounded-full transition-colors duration-300 relative ${vrOnly ? "bg-primary" : "bg-border"}`}>
                    <span className={`absolute top-0.5 w-4 h-4 rounded-full transition-transform duration-300 ${vrOnly ? "translate-x-5 bg-primary-foreground" : "translate-x-0.5 bg-muted-foreground"}`} />
                  </button>
                </div>

                <FilterSection title="Property Type" sectionKey="type">
                  <div className="flex flex-wrap gap-1.5">
                    {propertyTypes.map((type) => (
                      <button key={type} onClick={() => setSelectedType(type)} className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${selectedType === type ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}>{type}</button>
                    ))}
                  </div>
                </FilterSection>

                <FilterSection title="Price Range" sectionKey="price">
                  <div className="space-y-1.5">
                    {priceRanges.map((range, i) => (
                      <button key={range.label} onClick={() => setSelectedPrice(i)} className={`w-full text-left px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 ${selectedPrice === i ? "bg-accent text-primary border border-primary/30" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>{range.label}</button>
                    ))}
                  </div>
                </FilterSection>

                <FilterSection title="Bedrooms" sectionKey="bedrooms">
                  <div className="flex gap-1.5">
                    {bedroomOptions.map((opt) => (
                      <button key={opt} onClick={() => setSelectedBeds(opt)} className={`flex-1 py-2 rounded-md text-xs font-medium transition-all duration-200 ${selectedBeds === opt ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}>{opt}</button>
                    ))}
                  </div>
                </FilterSection>

                <FilterSection title="Amenities" sectionKey="amenities">
                  <div className="grid grid-cols-2 gap-1.5">
                    {amenities.map((a) => (
                      <button key={a} onClick={() => toggleAmenity(a)} className={`px-2 py-1.5 rounded-md text-xs font-medium transition-all duration-200 ${selectedAmenities.includes(a) ? "bg-secondary/10 text-secondary border border-secondary/30" : "bg-muted text-muted-foreground hover:text-foreground"}`}>{a}</button>
                    ))}
                  </div>
                </FilterSection>
              </div>
            </aside>

            {/* --- Property Grid --- */}
            <div className="flex-1">
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-muted-foreground mb-4">No properties match your filters.</p>
                  <Button variant="premium-outline" size="sm" onClick={clearFilters}>Clear Filters</Button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  {filtered.map((property, i) => (
                    <div key={property.id} className="bg-card rounded-xl overflow-hidden card-elegant group animate-fade-in" style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}>
                      <div className="relative overflow-hidden">
                        <img src={property.image} alt={property.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-40" />
                        {property.hasVR && (
                          <span className="absolute top-3 left-3 px-2 py-1 rounded-md bg-primary text-primary-foreground text-xs font-medium flex items-center gap-1">
                            <Eye className="w-3 h-3" /> VR
                          </span>
                        )}
                        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/70 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
                          <Heart className="w-4 h-4 text-muted-foreground" />
                        </button>
                        <div className="absolute bottom-3 left-3">
                          <span className="font-display text-lg font-bold text-primary-foreground drop-shadow-md">{formatPrice(property.price)}</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-sm font-semibold mb-1 text-foreground">{property.title}</h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3"><MapPin className="w-3 h-3" /> {property.location}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5" /> {property.beds} Beds</span>
                          <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {property.baths} Baths</span>
                          <span className="flex items-center gap-1"><Maximize className="w-3.5 h-3.5" /> {property.sqft.toLocaleString()} ft²</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Properties;
