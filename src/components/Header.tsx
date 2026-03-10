/* =============================================================================
   Header Component — Transparent premium navbar
   Features: Glassmorphism on scroll, clean typography, responsive mobile menu
   ============================================================================= */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "VR Tours", path: "/vr-tours" },
  { label: "Properties", path: "/properties" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* --- Logo --- */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-md">
            <Building2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold tracking-wide text-foreground">
            Vistara
          </span>
        </Link>

        {/* --- Desktop Nav --- */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link text-sm font-medium tracking-wide pb-1 ${
                pathname === item.path
                  ? "text-primary active"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* --- CTA + Mobile toggle --- */}
        <div className="flex items-center gap-3">
          <Button variant="premium" size="sm" className="hidden md:inline-flex">
            Schedule Tour
          </Button>
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-border/50 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2.5 px-4 rounded-lg transition-colors ${
                  pathname === item.path
                    ? "bg-accent text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="premium" size="sm" className="mt-2">
              Schedule Tour
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
