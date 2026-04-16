// About.tsx
export default function About() {
  return (
    <section id="about" className="py-24 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 items-center">
          {/* Deskripsi Teks */}
          <div className="text-center space-y-6 max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Mengenal Proyek <br />
              {/* Highlight Style untuk Lost Forest */}
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-green-700 px-4">Lost Forest</span>
                <span className="absolute inset-0 bg-green-100 transform -skew-x-12 rounded-lg"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed italic">
              "Sebuah perjalanan melintasi rimbunnya misteri, di mana setiap langkah adalah perjuangan untuk bertahan hidup."
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Lost Forest adalah mahakarya pixel art yang membawa pemain ke kedalaman hutan terlarang. Di sini, Anda tidak hanya menjelajah, tetapi juga harus menghadapi berbagai makhluk mistis dengan sistem mekanik yang responsif dan visual yang memukau.
            </p>
          </div>

          {/* Gambar Preview Landscape */}
          <div className="w-full relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-video md:aspect-[21/9]">
              <img 
                src="https://placehold.co/1200x500/064e3b/ffffff?text=Lost+Forest+Landscape+Preview" 
                alt="Lost Forest Game Landscape" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-10 text-white">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                  <p className="font-mono text-sm uppercase tracking-widest opacity-80">Game Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}