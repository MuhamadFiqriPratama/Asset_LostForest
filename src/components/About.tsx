// About.tsx
export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#fafaf9] overflow-hidden relative">
      {/* Elemen Dekoratif Latar Belakang */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-16 items-center">
          
          {/* Bagian Header & Deskripsi */}
          <div className="text-center space-y-8 max-w-4xl">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-green-50 border border-green-100 shadow-sm">
              <span className="text-green-700 text-sm font-bold tracking-[0.2em] uppercase">The Project Journey</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight leading-none">
              Mengenal <br />
              <span className="relative inline-block mt-4">
                <span className="relative z-10 text-emerald-800 italic">Lost Forest</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-green-400/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>
            </h2>

            <div className="relative py-4">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></span>
              <p className="text-2xl text-gray-700 font-medium italic leading-relaxed pt-6">
                "Sebuah perjalanan melintasi rimbunnya misteri, di mana setiap langkah adalah perjuangan untuk bertahan hidup."
              </p>
            </div>

            <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-gray-800">Lost Forest</strong> adalah perpaduan seni <span className="text-emerald-600 font-semibold">pixel art</span> klasik dengan mekanik modern yang responsif. Jelajahi ekosistem hutan yang hidup dan hadapi makhluk mistis.
            </p>
          </div>

          {/* Frame Showcase Gambar (16:9) */}
          <div className="w-full max-w-[1150px] relative group px-4"> 
            {/* Efek Cahaya di Belakang Frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-green-400/20 via-emerald-500/20 to-teal-400/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            {/* Frame Utama */}
            <div className="relative bg-gray-900 p-2 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] transform transition-all duration-500 group-hover:-translate-y-2">
              <div className="relative rounded-[2rem] overflow-hidden aspect-video border border-white/10">
                <img 
                  src="/Tampilan_Game_Lost Forest.png" 
                  alt="Lost Forest Game Play Preview" 
                  className="w-full h-full object-cover scale-100 group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out"
                />
                
                {/* Overlay Gradasi & Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
                
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </div>
                      <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/90">Resolution • 1080p</p>
                    </div>
                    <h3 className="text-white text-2xl font-bold">Forest Biome</h3>
                  </div>
                  
                  {/* Badge Pencapaian/Status Mini */}

                </div>
              </div>
            </div>

            {/* Aksen Sudut (Corner Accents) */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-emerald-500/30 rounded-tl-[3rem] -z-10 group-hover:-top-6 group-hover:-left-6 transition-all"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-emerald-500/30 rounded-br-[3rem] -z-10 group-hover:-bottom-6 group-hover:-right-6 transition-all"></div>
          </div>

          {/* Statistik Singkat/Fitur Utama */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
            {[
              { label: 'Art Style', value: 'Handcrafted Pixel Art' },
              { label: 'Mechanic', value: 'Responsive Combat' },
              { label: 'Platform', value: 'PC & Web Experience' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-gray-800 font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}