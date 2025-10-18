import { Link } from "wouter";
import Header from "@/components/Header";
import { albums } from "@/data/albums";
import Footer from "@/components/Footer";

export default function Discography() {
  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 text-center">
        <h1 className="font-serif text-5xl md:text-7xl mb-6">Discography</h1>
        <p className="text-gray-400 text-lg">全{albums.length}作品</p>
      </section>

      {/* Albums Grid */}
      <section className="container max-w-6xl mx-auto px-6 pb-32">
        <div className="space-y-24">
          {albums.map((album, index) => (
            <div
              key={album.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Album Cover */}
              <div className="w-full md:w-1/2">
                <Link href={`/album/${album.id}`} className="block group">
                  <div className="aspect-square bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
                    <img 
                      src={album.coverImage} 
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              </div>

              {/* Album Info */}
              <div className="w-full md:w-1/2 space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-2 tracking-wider">
                    {album.releaseDate} · {album.type.toUpperCase()}
                  </p>
                  <Link href={`/album/${album.id}`} className="group">
                    <h2 className="font-serif text-4xl mb-4 group-hover:text-gray-300 transition-colors">
                      {album.title}
                    </h2>
                  </Link>
                  <p className="text-gray-400 leading-relaxed">
                    {album.description}
                  </p>
                </div>

                <div className="border-l-2 border-white/20 pl-6">
                  <p className="text-sm text-gray-500 mb-2">TRACKS</p>
                  <p className="text-2xl font-serif">{album.tracks.length} songs</p>
                </div>

                <Link href={`/album/${album.id}`} className="inline-block px-6 py-2 border border-white/30 hover:bg-white/10 transition-colors duration-300 tracking-wider text-sm">
                    VIEW DETAILS
                  </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

