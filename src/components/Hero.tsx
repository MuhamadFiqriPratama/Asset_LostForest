// Hero.tsx
'use client';

export default function Hero() {
  return (
    <section className="relative text-center py-48 px-6 overflow-hidden min-h-[90vh] flex items-center justify-center bg-[#020617]">
      
      {/* 1. Animated Mesh Gradient (Latar Belakang Bergerak) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-emerald-600/20 rounded-full blur-[120px] animate-[mix_15s_infinite_alternate]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[100px] animate-[mix_20s_infinite_alternate-reverse]"></div>
      </div>

      {/* 2. Glassmorphism & Grid Overlay */}
      <div className="absolute inset-0 z-[1] opacity-30" style={{ backgroundImage: 'linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      
      {/* 3. Animated SVG Wave (Bagian Bawah) */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-[1]">
        <svg className="relative block w-full h-[100px]" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(16, 185, 129, 0.1)" className="animate-[wave_25s_cubic-bezier(.55,.5,.45,.5)_infinite]" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(16, 185, 129, 0.05)" className="animate-[wave_10s_cubic-bezier(.55,.5,.45,.5)_infinite]" />
          </g>
        </svg>
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] text-white tracking-tighter drop-shadow-sm">
          Game Asset by<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 animate-gradient-x">
            Muhammad Fiqri Pratama
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed italic">
          Koleksi aset eksklusif hasil karya <span className="text-white font-semibold not-italic">Muhammad Fiqri Pratama</span>. 
          Siap digunakan untuk pengembangan proyek game.
        </p>

        {/* Tambahan Dekorasi Garis Fokus */}
        <div className="flex justify-center gap-4 opacity-50">
           <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-emerald-500"></div>
           <div className="h-1 w-1 rounded-full bg-emerald-500"></div>
           <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-emerald-500"></div>
        </div>
      </div>

      {/* Tambahkan CSS Global / Tailwind Config untuk Animasi Kustom */}
      <style jsx>{`
        @keyframes mix {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(10%, 10%) scale(1.1); }
        }
        @keyframes wave {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }
      `}</style>
    </section>
  );
}