import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 text-center">
        <h1 className="font-serif text-5xl md:text-7xl mb-6">About</h1>
        <p className="text-gray-400 text-lg">Nostalight9の物語</p>
      </section>

      {/* Content Section */}
      <section className="container max-w-4xl mx-auto px-6 pb-32">
        {/* Japanese */}
        <div className="mb-24">
          <div className="border-l-2 border-white/20 pl-8 space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              Nostalight9は、Sally（Vocal/Horns）と Masanobu（Guitar/Bass/Drums）による2人組ユニット。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              青い海と星空が交差する夜、失われた記憶の断片が音になって響く。
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              エモーショナルなスカパンクとシネマティックな質感で、
              "現実と夢のあいだ"を旅する物語を紡いでいる。
            </p>
          </div>
        </div>

        {/* English */}
        <div className="mb-24">
          <div className="border-l-2 border-white/20 pl-8 space-y-6">
            <p className="text-gray-400 leading-relaxed">
              Nostalight9 is a duo: Sally (Vocal/Horns) and Masanobu (Guitar/Bass/Drums).
            </p>
            <p className="text-gray-400 leading-relaxed">
              Blending emotional ska-punk with cinematic textures, they craft stories that drift
              between reality and dreams—under the same blue night sky.
            </p>
          </div>
        </div>

        {/* Photo Section */}
        <div className="mb-24">
          <div className="max-w-2xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 opacity-20">📷</div>
                  <p className="text-gray-500 text-sm">Photo placeholder</p>
                  <p className="text-gray-600 text-xs mt-2">/assets/images/about/photo.webp</p>
                </div>
              </div>
              {/* Actual image will be placed here */}
              {/* <img 
                src="/assets/images/about/photo.webp" 
                alt="Nostalight9 – Sally and Masanobu, under the blue night sky."
                className="w-full h-full object-cover"
              /> */}
            </div>
          </div>
        </div>

        {/* Members */}
        <div className="border-t border-white/10 pt-16">
          <h2 className="font-serif text-3xl mb-12 text-center">Members</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/10 flex items-center justify-center">
                <span className="text-4xl opacity-30">♪</span>
              </div>
              <h3 className="font-serif text-2xl mb-2">Sally</h3>
              <p className="text-gray-500 text-sm">Vocal / Horns</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/10 flex items-center justify-center">
                <span className="text-4xl opacity-30">♪</span>
              </div>
              <h3 className="font-serif text-2xl mb-2">Masanobu</h3>
              <p className="text-gray-500 text-sm">Guitar / Bass / Drums</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

