import { Link, useParams } from "wouter";
import Header from "@/components/Header";
import { albums } from "@/data/albums";
import { useState, useRef } from "react";
import Footer from "@/components/Footer";

export default function AlbumDetail() {
  const { id } = useParams<{ id: string }>();
  const album = albums.find((a) => a.id === id);
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  if (!album) {
    return (
      <div className="min-h-screen bg-[#0d1b2a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Album Not Found</h1>
          <Link href="/discography" className="text-gray-400 hover:text-white transition-colors">
              ← Back to Discography
            </Link>
        </div>
      </div>
    );
  }

  const handlePlayPause = (trackId: number, audioFile?: string) => {
    if (!audioFile) return;

    if (currentTrack === trackId && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (currentTrack !== trackId) {
        setCurrentTrack(trackId);
        if (audioRef.current) {
          audioRef.current.src = audioFile;
        }
      }
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={album.heroImage}
            alt={album.title}
            className="w-full h-full object-cover opacity-90"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.classList.add('bg-gradient-to-br', 'from-blue-900/30', 'to-purple-900/30');
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1b2a]/50 to-[#0d1b2a]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <p className="text-sm tracking-[0.3em] mb-4 text-gray-300 uppercase">
            {album.type} · {album.releaseDate}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight">
            {album.title}
          </h1>
        </div>
      </section>

      {/* Album Information */}
      <section className="container max-w-4xl mx-auto px-6 py-24">
        <div className="border-l-2 border-white/20 pl-8">
          <h2 className="font-serif text-2xl mb-4">About</h2>
          <p className="text-gray-400 leading-relaxed">
            {album.description}
          </p>
        </div>
      </section>

      {/* Track List & Audio Preview */}
      <section className="container max-w-4xl mx-auto px-6 py-24">
        <h2 className="font-serif text-3xl mb-12 text-center">Track List</h2>
        
        <div className="space-y-4">
          {album.tracks.map((track) => (
            <div
              key={track.id}
              className="group border border-white/10 hover:border-white/30 transition-all duration-300 p-6 rounded-sm bg-white/5 hover:bg-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-6">
                  <span className="text-gray-500 font-mono text-sm w-8">
                    {String(track.id).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg">{track.title}</h3>
                </div>
                <span className="text-gray-500 font-mono text-sm">
                  {track.duration}
                </span>
              </div>
              
              {/* Audio Player */}
              {track.audioFile && (
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handlePlayPause(track.id, track.audioFile)}
                    className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    {currentTrack === track.id && isPlaying ? (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                      </svg>
                    ) : (
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </button>
                  <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-white/50 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">Preview</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Credits Section */}
      <section className="container max-w-4xl mx-auto px-6 py-24">
        <div className="border-t border-white/10 pt-16 space-y-12">
          <div>
            <h2 className="font-serif text-2xl mb-8">Members</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-2 border-white/20 pl-6">
                <p className="text-sm text-gray-500 mb-2">Vocal / Horns</p>
                <p className="font-serif text-xl">Sally</p>
              </div>
              <div className="border-l-2 border-white/20 pl-6">
                <p className="text-sm text-gray-500 mb-2">Guitar / Bass / Drums</p>
                <p className="font-serif text-xl">Masanobu</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-8">Credits</h2>
            <div className="space-y-3 text-sm text-gray-400">
              <p>Produced, Written & Arranged by Nostalight9</p>
              <p>Recorded & Mixed at Blue Tape Studio</p>
              <p className="pt-4">℗ 2025 BLUE TAPE RECORDS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTrack(null);
        }}
      />
    </div>
  );
}

