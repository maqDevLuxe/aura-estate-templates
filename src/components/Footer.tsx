/* =============================================================================
   Footer Component — Newsletter subscription + multi-column links
   Features: Newsletter form, social links, clean premium layout
   ============================================================================= */

import { useState } from "react";
import { Link } from "react-router-dom";
import { Building2, Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* --- Newsletter Section --- */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-foreground blur-[60px]" />
          </div>
          <div className="relative z-10 max-w-lg mx-auto">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Stay Updated
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Get the latest luxury listings and virtual tour launches delivered to your inbox.
            </p>
            {subscribed ? (
              <div className="flex items-center justify-center gap-2 text-primary-foreground animate-fade-in">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 h-11 px-4 rounded-lg bg-primary-foreground/15 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
                />
                <Button type="submit" className="h-11 bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-1">
                  Subscribe <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* --- Footer Links --- */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* --- Brand --- */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Building2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold">Vistara</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium virtual tour experiences for luxury real estate. Explore properties worldwide from your home.
            </p>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Explore</h4>
            <ul className="space-y-2.5">
              {["Home", "VR Tours", "Properties", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Services --- */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2.5">
              {["360° Virtual Tours", "3D Floor Plans", "Drone Photography", "Virtual Staging"].map((s) => (
                <li key={s}>
                  <span className="text-sm text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Contact --- */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" /> hello@vistara.io
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" /> +1 (555) 890-1234
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" /> San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom bar --- */}
        <div className="section-divider mt-10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Vistara. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <span key={item} className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
