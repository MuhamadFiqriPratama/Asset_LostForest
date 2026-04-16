'use client';

import { useState } from 'react';

export default function GameAssets() {
  const [assets, setAssets] = useState([
    {
      id: 1,
      category: "Karakter",
      name: "Cyber Warrior Ultra Pack",
      description: "Model karakter humanoid premium dengan gaya cyberpunk. Paket ini mencakup rigging lengkap, tekstur PBR 4K, dan 12 animasi dasar (idle, run, jump, attack). Cocok untuk game action RPG atau shooter.",
      currentImg: 0,
      images: [
        "https://placehold.co/1200x800/064e3b/ffffff?text=Cyber+Warrior+Preview+1",
        "https://placehold.co/1200x800/065f46/ffffff?text=Cyber+Warrior+Preview+2",
        "https://placehold.co/1200x800/047857/ffffff?text=Cyber+Warrior+Preview+3"
      ],
      specs: ["Format: FBX, PNG", "Size: 45 MB", "Polygons: 25k", "Rigged: Yes"],
      downloadUrl: "#"
    },
    {
      id: 2,
      category: "Environment",
      name: "Lost Forest - Master Scene",
      description: "Environment set lengkap bertema hutan misterius. Sudah termasuk sistem pepohonan modular, ground textures, fog particles, dan lighting preset untuk Unity/Unreal Engine.",
      currentImg: 0,
      images: [
        "https://placehold.co/1200x800/1e3a1f/ffffff?text=Lost+Forest+Preview+1",
        "https://placehold.co/1200x800/2d4a22/ffffff?text=Lost+Forest+Preview+2",
        "https://placehold.co/1200x800/14532d/ffffff?text=Lost+Forest+Preview+3"
      ],
      specs: ["Format: UnityPackage, Blend", "Size: 120 MB", "PBR: Yes", "Modular: Yes"],
      downloadUrl: "#"
    },
    // Penambahan Kategori 3: Item/Senjata
    {
      id: 3,
      category: "Item & Senjata",
      name: "Legendary Melee Collection",
      description: "Koleksi senjata jarak dekat legendaris yang terdiri dari pedang, kapak, dan gada. Setiap senjata memiliki efek emisi (glow) yang dapat dikustomisasi warnanya.",
      currentImg: 0,
      images: [
        "https://placehold.co/1200x800/312e81/ffffff?text=Sword+Collection+1",
        "https://placehold.co/1200x800/3730a3/ffffff?text=Axe+Preview+2",
        "https://placehold.co/1200x800/4338ca/ffffff?text=Hammer+Preview+3"
      ],
      specs: ["Format: OBJ, GLB", "Size: 28 MB", "LODs: Included", "Textures: 2K"],
      downloadUrl: "#"
    },
    // Penambahan Kategori 4: UI Kit
    {
      id: 4,
      category: "UI Kit",
      name: "Fantasy RPG HUD Pack",
      description: "Antarmuka pengguna lengkap untuk game RPG. Termasuk HP/Mana bars, minimap frames, inventory slots, dan set ikon skill sebanyak 50+ buah dengan resolusi tinggi.",
      currentImg: 0,
      images: [
        "https://placehold.co/1200x800/831843/ffffff?text=Main+HUD+Layout",
        "https://placehold.co/1200x800/9d174d/ffffff?text=Inventory+UI+Design",
        "https://placehold.co/1200x800/be185d/ffffff?text=Skill+Icons+Preview"
      ],
      specs: ["Format: PSD, PNG", "Size: 65 MB", "Vector: Yes", "Slicing: Ready"],
      downloadUrl: "#"
    }
  ]);

  const handleNext = (id) => {
    setAssets(prev => prev.map(a => a.id === id ? { ...a, currentImg: (a.currentImg + 1) % a.images.length } : a));
  };

  const handlePrev = (id) => {
    setAssets(prev => prev.map(a => a.id === id ? { ...a, currentImg: (a.currentImg - 1 + a.images.length) % a.images.length } : a));
  };

  return (
    <section id="assets" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Katalog Aset Utama</h2>
          <p className="text-gray-500 text-lg">Eksplorasi detail aset unggulan kami langsung dari engine.</p>
        </div>

        <div className="space-y-40"> {/* Jarak antar kategori diperlebar agar fokus */}
          {assets.map((asset) => (
            <div key={asset.id} className="flex flex-col lg:flex-row gap-16 items-start">
              
              {/* Kiri: Slider Preview Besar */}
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

                  {/* Navigasi Manual */}
                  <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={() => handlePrev(asset.id)} className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white text-2xl hover:bg-white hover:text-green-600 transition-all shadow-2xl">←</button>
                    <button onClick={() => handleNext(asset.id)} className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white text-2xl hover:bg-white hover:text-green-600 transition-all shadow-2xl">→</button>
                  </div>

                  {/* Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {asset.images.map((_, idx) => (
                      <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === asset.currentImg ? 'w-8 bg-white' : 'w-2 bg-white/40'}`} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Kanan: Detail & Download */}
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
                  <p className="text-center text-gray-400 text-sm mt-4">Lisensi: Komersial & Personal</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}