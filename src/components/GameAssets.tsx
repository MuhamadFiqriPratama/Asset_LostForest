'use client';

import { useState } from 'react';

export default function GameAssets() {
  const [assets, setAssets] = useState([
    {
      id: 1,
      category: "Karakter",
      name: "Main Character & Enemy Animation Pack",
      description: "Model karakter dengan tema adventure dan model enemy monster ataupun hewan yang buas. Sudah mencakup Animasi lengkap (idle, run, jump, attack).",
      currentImg: 0,
      images: [
        "https://placehold.co/1200x800/064e3b/ffffff?text=Cyber+Warrior+Preview+1",
        "https://placehold.co/1200x800/065f46/ffffff?text=Cyber+Warrior+Preview+2",
        "https://placehold.co/1200x800/047857/ffffff?text=Cyber+Warrior+Preview+3"
      ],
      specs: ["Format: PNG", "Size: 188 KB", "Pixel: Yes"],
      downloadUrl: "/Character.zip"
    },
    {
      id: 2,
      category: "Environment",
      name: "Block Set, Background, dan Obstacle Pack",
      description: "Environment set lengkap bertema hutan misterius. Termasuk Background (Foreground, Midground, Background), Block set dengan rerumputan hijau, serta obstacle yang harus dilewati pemain.",
      currentImg: 0,
      images: [
        "https://placehold.co/1200x800/1e3a1f/ffffff?text=Lost+Forest+Preview+1",
        "https://placehold.co/1200x800/2d4a22/ffffff?text=Lost+Forest+Preview+2",
        "https://placehold.co/1200x800/14532d/ffffff?text=Lost+Forest+Preview+3"
      ],
      specs: ["Format: PNG", "Size: 212 KB", "Pixel: Yes"],
      downloadUrl: "/Environment.zip"
    },
    {
      id: 3,
      category: "Item",
      name: "Item Interaktif",
      description: "Berisi item yang dibutuhkan game dan juga animasi packnya seperti senjata dan equipment lainnya.",
      currentImg: 0,
      images: [
        "https://placehold.co/1200x800/312e81/ffffff?text=Sword+Collection+1",
        "https://placehold.co/1200x800/3730a3/ffffff?text=Axe+Preview+2",
        "https://placehold.co/1200x800/4338ca/ffffff?text=Hammer+Preview+3"
      ],
      specs: ["Format: PNG", "Size: 48,6 KB", "Pixel: Yes"],
      downloadUrl: "/Item.zip"
    },
    {
      id: 4,
      category: "UI Kit",
      name: "Button, Popup, dan UI Pack",
      description: "Berisi UI pack seperti button, popup, dan juga UI mendasar pada game untuk meningkatkan user experience.",
      currentImg: 0,
      images: [
        "https://placehold.co/1200x800/831843/ffffff?text=Main+HUD+Layout",
        "https://placehold.co/1200x800/9d174d/ffffff?text=Inventory+UI+Design",
        "https://placehold.co/1200x800/be185d/ffffff?text=Skill+Icons+Preview"
      ],
      specs: ["Format: PNG", "Size: 83,3 KB ", "Pixel: Yes"],
      downloadUrl: "/UI.zip"
    },
    {
      id: 5,
      category: "Package",
      name: "All asset download package",
      description: "Seluruh asset yang sudah mencangkup, karakter, Environment, Item, dan UI pack yang sudah dikemas dalam satu file zip.",
      currentImg: 0,
      images: [
        "https://placehold.co/1200x800/4c1d95/ffffff?text=Explosion+VFX+Preview",
        "https://placehold.co/1200x800/5b21b6/ffffff?text=Slash+Effect+Animation",
        "https://placehold.co/1200x800/6d28d9/ffffff?text=Dust+Particles+Preview"
      ],
      specs: ["Format: PNG", "Size: 125 KB", "Pixel: Yes"],
      downloadUrl: "/Package.zip"
    }
  ]);

  const handleNext = (id: number) => {
    setAssets(prev => prev.map(a => a.id === id ? { ...a, currentImg: (a.currentImg + 1) % a.images.length } : a));
  };

  const handlePrev = (id: number) => {
    setAssets(prev => prev.map(a => a.id === id ? { ...a, currentImg: (a.currentImg - 1 + a.images.length) % a.images.length } : a));
  };

  return (
    <section id="assets" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Katalog Aset Utama</h2>
          <p className="text-gray-500 text-lg">Eksplorasi seluruh detail asset game The Forest</p>
        </div>

        <div className="space-y-40">
          {assets.map((asset) => (
            <div key={asset.id} className="flex flex-col lg:flex-row gap-16 items-start">
              
              {/* Bagian Visual/Slider */}
              <div className="lg:w-3/5 w-full lg:sticky lg:top-28">
                <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100 border-4 border-gray-50">
                  <div className="aspect-[16/10] relative">
                    {asset.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                          idx === asset.currentImg ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                        }`}
                        alt={asset.name}
                      />
                    ))}
                  </div>

                  {/* Navigasi Panah */}
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={() => handlePrev(asset.id)} className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white text-2xl hover:bg-white hover:text-green-600 transition-all shadow-2xl">←</button>
                    <button onClick={() => handleNext(asset.id)} className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white text-2xl hover:bg-white hover:text-green-600 transition-all shadow-2xl">→</button>
                  </div>

                  {/* Indikator Titik */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {asset.images.map((_, idx) => (
                      <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === asset.currentImg ? 'w-8 bg-white' : 'w-2 bg-white/40'}`} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bagian Detail Teks */}
              <div className="lg:w-2/5 w-full space-y-8">
                <div>
                  <span className="px-5 py-2 bg-green-100 text-green-700 rounded-full text-xs font-black uppercase tracking-widest border border-green-200">
                    {asset.category}
                  </span>
                  <h3 className="text-4xl font-bold text-gray-900 mt-6 mb-4">{asset.name}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {asset.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {asset.specs.map((spec, i) => (
                    <div key={i} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a 
                    href={asset.downloadUrl}
                    download={`${asset.category}_Assets.zip`}
                    className="group relative flex items-center justify-center gap-4 bg-gray-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-green-600 transition-all overflow-hidden shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Full Assets
                    </span>
                    <div className="absolute inset-0 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}