/* =============================================================================
   Contact Page — Contact form, info cards, and FAQ section
   Features: Form with validation, contact info cards, FAQ accordion
   ============================================================================= */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import Layout from "@/components/Layout";

const contactInfo = [
  { icon: Mail, title: "Email Us", value: "hello@vistara.io", description: "We respond within 24 hours" },
  { icon: Phone, title: "Call Us", value: "+1 (555) 890-1234", description: "Mon–Fri, 9 AM – 6 PM EST" },
  { icon: MapPin, title: "Visit Us", value: "123 Innovation Drive", description: "San Francisco, CA 94105" },
];

const faqs = [
  { q: "How do VR tours work?", a: "Our VR tours use 360° high-resolution photography captured with professional equipment. You can navigate through properties using your browser, VR headset, or mobile device." },
  { q: "Is a VR headset required?", a: "No! Our tours work on any device with a web browser. A VR headset enhances the experience but is entirely optional." },
  { q: "How long does it take to create a tour?", a: "Most property tours are completed within 48 hours of the on-site photography session." },
  { q: "Can I share tours with others?", a: "Yes, every tour has a unique shareable link that works across all devices and platforms." },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputClass = "w-full h-10 px-4 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow";

  return (
    <Layout>
      {/* --- Header --- */}
      <section className="py-20 gradient-hero relative">
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-xs font-medium tracking-widest text-primary uppercase">Reach Out</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mt-2 mb-4 text-foreground">
            Get In Touch
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            Have questions about our VR tours or interested in listing your property? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* --- Contact Info Cards --- */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-card rounded-xl p-6 text-center card-elegant group hover:scale-[1.02] transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                  <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-sm font-semibold mb-1 text-foreground">{info.title}</h3>
                <p className="text-sm text-foreground font-medium">{info.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Form + FAQ --- */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-xl p-8 card-elegant border border-border">
              <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
                <MessageSquare className="w-5 h-5 text-primary" /> Send a Message
              </h2>
              {submitted ? (
                <div className="text-center py-12 animate-fade-in">
                  <CheckCircle2 className="w-12 h-12 text-soft-teal mx-auto mb-4" />
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground mb-4">We'll get back to you within 24 hours.</p>
                  <Button variant="premium-outline" size="sm" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
                    Send Another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">Name</label>
                      <input required className={inputClass} placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email</label>
                      <input required type="email" className={inputClass} placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Subject</label>
                    <input required className={inputClass} placeholder="How can we help?" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message</label>
                    <textarea required rows={5} className={`${inputClass} h-auto py-3 resize-none`} placeholder="Tell us more..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <Button type="submit" variant="premium" className="w-full gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-secondary" /> Frequently Asked
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-card rounded-xl card-elegant border border-border">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left p-5 flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{faq.q}</span>
                      {openFaq === i ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 animate-fade-in">
                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
