import { Link } from "wouter";
import { albums } from "@/data/albums";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SocialIcons from "@/components/SocialIcons";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white">
      <SEO 
        title="Nostalight9"
        description="ここは、現実と夢のあいだ。"
        image="/assets/images/ogp/nostalight9-ogp.jpg"
        url="https://nostalight9.com"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          {/* Dark Navy Overlay - Even lighter for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b2a]/30 via-[#0d1b2a]/35 to-[#0d1b2a] z-10"></div>
          
          {/* Hero Background Image - Masanobu & Sally Photo */}
          <img 
            src="/hero.webp" 
            alt="Nostalight9 - Sally and Masanobu"
            className="w-full h-full object-cover transform scale-105 brightness-110"
          />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight">
            Nostalight9
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 tracking-wide font-serif italic mb-12">
            ここは、現実と夢のあいだ。
          </p>
          <Link href="/discography" className="inline-block px-8 py-3 border border-white/30 hover:bg-white/10 transition-colors duration-300 tracking-wider text-sm">
            DISCOGRAPHY
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Social Media Icons */}
      <SocialIcons />

      {/* About Section */}
      <section className="container max-w-4xl mx-auto px-6 py-32">
        <div className="border-l-2 border-white/20 pl-8">
          <h2 className="font-serif text-3xl mb-6">About</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Nostalight9は、Sally（Vocal/Horns）とMasanobu（Guitar/Bass/Drums）による2人組ユニット。
          </p>
          <p className="text-gray-400 leading-relaxed">
            青い海と星空が交差する夜、失われた記憶の断片が音となって響く。
            静かでノスタルジックな宇宙の物語を紡ぎ続けている。
          </p>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="container max-w-6xl mx-auto px-6 py-32">
        <h2 className="font-serif text-4xl mb-16 text-center">Latest Releases</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.slice(0, 3).map((album) => (
            <Link key={album.id} href={`/album/${album.id}`} className="group block">
              <div className="aspect-square bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 mb-4 overflow-hidden">
                <img 
                  src={album.coverImage} 
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-serif text-xl mb-2 group-hover:text-gray-300 transition-colors">
                {album.title}
              </h3>
              <p className="text-sm text-gray-500">{album.releaseDate}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/discography" className="inline-block px-8 py-3 border border-white/30 hover:bg-white/10 transition-colors duration-300 tracking-wider text-sm">
            VIEW ALL RELEASES
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

