'use client';

import { useState, useEffect, useCallback } from 'react';

export default function GameAssets() {
  const [assets, setAssets] = useState([
    {
      id: 1,
      category: "Karakter",
      name: "Main Character & Enemy Animation Pack",
      description: "Model karakter dengan tema adventure dan model enemy monster ataupun hewan yang buas. Sudah mencakup Animasi lengkap (idle, run, jump, attack).",
      currentImg: 0,
      images: [
        "Gif_pack/Main_Character_Walk.gif",
        "Gif_pack/Main_Character_Die.gif",
        "Gif_pack/Enemy_Attack.gif"
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
        "Gif_pack/Checkpoint.gif",
        "Gif_pack/Bg-Main_Lobby.png",
        "Gif_pack/Tilesets.png"
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
        "Gif_pack/Battery.gif",
        "Gif_pack/Heart.gif",
        "Gif_pack/Mushroom.gif"
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
        "Gif_pack/Condition_boost.gif",
        "Gif_pack/Pop_up.png",
        "Gif_pack/Button_berjajar.png"
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
      images: ["Gif_pack/Tampilan_Game_Lost_Forest_2.png"],
      specs: ["Format: PNG", "Size: 125 KB", "Pixel: Yes"],
      downloadUrl: "/Packaging.zip"
    }
  ]);

  const handleNext = useCallback((id: number) => {
    setAssets(prev => prev.map(a => 
      a.id === id ? { ...a, currentImg: (a.currentImg + 1) % a.images.length } : a
    ));
  }, []);

  const handlePrev = useCallback((id: number) => {
    setAssets(prev => prev.map(a => 
      a.id === id ? { ...a, currentImg: (a.currentImg - 1 + a.images.length) % a.images.length } : a
    ));
  }, []);

  useEffect(() => {
    const intervals = assets.map(asset => {
      if (asset.images.length > 1) {
        return setInterval(() => {
          handleNext(asset.id);
        }, 5000);
      }
      return null;
    });

    return () => {
      intervals.forEach(interval => interval && clearInterval(interval));
    };
  }, [handleNext, assets.length]);

  return (
    <section id="assets" className="py-12 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Katalog Aset Utama</h2>
          <p className="text-gray-500 text-base md:text-lg">Eksplorasi seluruh detail asset game Lost Forest</p>
        </div>

        <div className="space-y-24 md:space-y-40">
          {assets.map((asset) => (
            <div key={asset.id} className="flex flex-col lg:flex-row gap-8 md:gap-16 items-start">
              
              {/* Bagian Visual */}
              <div className="w-full lg:w-3/5 lg:sticky lg:top-28">
                <div className="relative group rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-xl bg-gray-50 border-2 md:border-4 border-white">
                  
                  <div className="aspect-video relative w-full overflow-hidden flex items-center justify-center">
                    {asset.images.map((img, idx) => {
                      // Penyesuaian Style Gambar - Dibuat lebih besar untuk Karakter
                      let imageStyle = "p-6 md:p-10 scale-100"; 
                      
                      if (asset.category === "Karakter") {
                        // Padding hampir 0 dan zoom 1.5x (150%) agar karakter sangat jelas
                        imageStyle = "p-0 md:p-2 scale-[1.5]"; 
                      } else if (asset.category === "Item") {
                        imageStyle = "p-12 md:p-20 scale-110"; 
                      } else if (asset.category === "UI Kit") {
                        imageStyle = "p-6 md:p-10 scale-100"; 
                      }

                      return (
                        <img
                          key={idx}
                          src={img}
                          style={{ imageRendering: 'pixelated' }} // Menjaga pixel art tetap tajam saat di-zoom
                          className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
                            idx === asset.currentImg ? 'opacity-100' : 'opacity-0'
                          } ${imageStyle}`}
                          alt={asset.name}
                        />
                      );
                    })}
                  </div>

                  {asset.images.length > 1 && (
                    <>
                      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 md:px-6 pointer-events-none">
                        <button 
                          onClick={() => handlePrev(asset.id)} 
                          className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 bg-white/60 md:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 md:text-white text-xl hover:bg-white hover:text-green-600 transition-all shadow-lg"
                        >
                          ←
                        </button>
                        <button 
                          onClick={() => handleNext(asset.id)} 
                          className="pointer-events-auto w-10 h-10 md:w-14 md:h-14 bg-white/60 md:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 md:text-white text-xl hover:bg-white hover:text-green-600 transition-all shadow-lg"
                        >
                          →
                        </button>
                      </div>
                      
                      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
                        {asset.images.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
                              idx === asset.currentImg ? 'w-6 md:w-8 bg-green-500 md:bg-white' : 'w-1.5 md:w-2 bg-gray-300 md:bg-white/40'
                            }`} 
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Bagian Detail Teks */}
              <div className="w-full lg:w-2/5 space-y-6 md:space-y-8">
                <div>
                  <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest border border-green-200">
                    {asset.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mt-4 md:mt-6 mb-3 md:mb-4 leading-tight">{asset.name}</h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {asset.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {asset.specs.map((spec, i) => (
                    <div key={i} className="p-3 md:p-4 bg-gray-50 rounded-xl md:rounded-2xl border border-gray-100 flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full shrink-0"></div>
                      <span className="text-xs md:text-sm font-medium text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a 
                    href={asset.downloadUrl}
                    download={`${asset.category}_Assets.zip`}
                    className="group relative flex items-center justify-center gap-3 md:gap-4 bg-gray-900 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-green-600 transition-all overflow-hidden shadow-xl"
                  >
                    <span className="relative z-10 flex items-center gap-2 md:gap-3">
                      <svg className="w-5 h-5 md:w-6 md:h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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