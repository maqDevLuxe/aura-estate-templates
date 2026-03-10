/* =============================================================================
   Home Page — Premium Prop-Tech Platform with 14 Sections
   Scroll-triggered reveal animations on each section
   ============================================================================= */

import HeroSection from "@/components/home/HeroSection";
import AgenciesSection from "@/components/home/AgenciesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import MetricsSection from "@/components/home/MetricsSection";
import TourDemoSection from "@/components/home/TourDemoSection";
import FeaturedPropertiesSection from "@/components/home/FeaturedPropertiesSection";
import VideoSection from "@/components/home/VideoSection";
import StatsSection from "@/components/home/StatsSection";
import BlogSection from "@/components/home/BlogSection";
import PlatformPreviewSection from "@/components/home/PlatformPreviewSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ScrollReveal from "@/components/ScrollReveal";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* 1. Navbar is in Layout/Header */}
      {/* 2. Hero — no scroll reveal needed, it's above the fold */}
      <HeroSection />

      {/* 3. Featured Real Estate Agencies */}
      <ScrollReveal>
        <AgenciesSection />
      </ScrollReveal>

      {/* 4. Immersive VR Features */}
      <ScrollReveal>
        <FeaturesSection />
      </ScrollReveal>

      {/* 5. How It Works */}
      <ScrollReveal>
        <HowItWorksSection />
      </ScrollReveal>

      {/* 6. Property Viewing Metrics */}
      <ScrollReveal>
        <MetricsSection />
      </ScrollReveal>

      {/* 7. Interactive Tour Demo */}
      <ScrollReveal>
        <TourDemoSection />
      </ScrollReveal>

      {/* 8. Featured VR Properties Grid */}
      <ScrollReveal>
        <FeaturedPropertiesSection />
      </ScrollReveal>

      {/* 9. High-res Promo Video Area */}
      <ScrollReveal>
        <VideoSection />
      </ScrollReveal>

      {/* 10. Platform Statistics */}
      <ScrollReveal>
        <StatsSection />
      </ScrollReveal>

      {/* 11. Prop-Tech Blog/News */}
      <ScrollReveal>
        <BlogSection />
      </ScrollReveal>

      {/* 12. Platform Interface Preview */}
      <ScrollReveal>
        <PlatformPreviewSection />
      </ScrollReveal>

      {/* 13. Client Testimonials */}
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      {/* 14. Newsletter & Footer are in Layout/Footer */}
    </Layout>
  );
};

export default Index;
