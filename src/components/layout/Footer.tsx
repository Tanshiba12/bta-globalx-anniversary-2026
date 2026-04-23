import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, ArrowUpRight } from "lucide-react";

// ===== INLINED: FooterLink =====
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <span
        className="group flex items-center gap-1.5 text-[11px] font-bold tracking-[0.3em] uppercase transition-colors duration-200 cursor-pointer"
        style={{ color: "rgba(255,255,255,0.3)" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.85)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color = "rgba(255,255,255,0.3)"; }}
      >
        {children}
        <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden" style={{ background: "#050510" }}>
      {/* Top gradient border */}
      <div className="h-px w-full" style={{
        background: "linear-gradient(90deg, transparent 0%, #552A9B 25%, #FF678B 50%, #FFD641 75%, transparent 100%)"
      }} />

      {/* Background orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-[0.07]"
          style={{ background: "radial-gradient(ellipse, #552A9B, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      {/* Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-14">

          {/* Col 1: Brand */}
          <div className="flex flex-col gap-6">
            {/* Logo text */}
            <div>
              <h3
                className="font-black tracking-[0.15em] leading-none mb-1"
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.5) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                BTA <span style={{
                  background: "linear-gradient(135deg, #FFD641, #FF678B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>GLOBALX</span>
              </h3>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
                3rd Anniversary & Excellence Awards 2026
              </p>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}>
              Celebrating a legacy of excellence. Recognizing the visionaries, entrepreneurs, and leaders of tomorrow.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Facebook size={15} />, href: "#" },
                { icon: <Instagram size={15} />, href: "#" },
                { icon: <Youtube size={15} />, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,214,65,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#FFD641";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-5">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.2)" }}>
              Navigate
            </p>
            <FooterLink href="#section-2">Event Details</FooterLink>
            <FooterLink href="#section-3">Newsroom</FooterLink>
            <FooterLink href="#section-5">Event Timeline</FooterLink>
            <FooterLink href="#section-6">Register Now</FooterLink>
            <FooterLink href="#section-9">Excellence Awards</FooterLink>
            <FooterLink href="/admin">Admin Portal</FooterLink>
          </div>

          {/* Col 3: Contact + Event Info */}
          <div className="flex flex-col gap-5">
            <p className="text-[10px] font-black tracking-[0.4em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.2)" }}>
              Contact
            </p>

            <a href="mailto:btaglobalx@gmail.com"
              className="flex items-start gap-3 group"
              style={{ color: "rgba(255,255,255,0.35)" }}>
              <Mail size={14} className="mt-0.5 flex-none group-hover:text-white transition-colors" />
              <span className="text-sm font-medium transition-colors group-hover:text-white">btaglobalx@gmail.com</span>
            </a>

            <a href="tel:+60143646786"
              className="flex items-start gap-3 group"
              style={{ color: "rgba(255,255,255,0.35)" }}>
              <Phone size={14} className="mt-0.5 flex-none group-hover:text-white transition-colors" />
              <span className="text-sm font-medium transition-colors group-hover:text-white">+601 4364 6786</span>
            </a>

            {/* Event pill */}
            <div className="mt-4 p-4 rounded-2xl" style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#FF678B" }} />
                <span className="text-[10px] font-bold tracking-[0.35em] uppercase" style={{ color: "#FF678B" }}>
                  Upcoming
                </span>
              </div>
              <p className="text-white font-bold text-sm mb-0.5">August 1st, 2026</p>
              <p className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
                Sheraton Johor Bahru, Malaysia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} BTA GlobalX Anniversary. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
            <FooterLink href="/updates">Updates</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}