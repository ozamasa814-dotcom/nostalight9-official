import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-[#0d1b2a]/80 via-[#0d1b2a]/70 to-transparent backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl md:text-3xl text-white hover:text-white/80 transition-colors">
            Nostalight9
          </Link>

          {/* Navigation */}
          <nav className="flex gap-6 md:gap-8">
            <Link href="/discography" className="font-serif text-sm md:text-base text-white/90 hover:text-white transition-colors">
              Discography
            </Link>
            <Link href="/about" className="font-serif text-sm md:text-base text-white/90 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="font-serif text-sm md:text-base text-white/90 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="font-serif text-sm md:text-base text-white/90 hover:text-white transition-colors">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

