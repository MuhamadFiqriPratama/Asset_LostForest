// Hero.tsx
'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const images = [
    "https://placehold.co/1920x1080/064e3b/ffffff?text=Game+Scene+1",
    "https://placehold.co/1920x1080/065f46/ffffff?text=Game+Scene+2",
    "https://placehold.co/1920x1080/047857/ffffff?text=Game+Scene+3"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative text-center py-48 px-6 overflow-hidden min-h-[80vh] flex items-center justify-center bg-black">
      {/* Background Image Slider dengan Blur */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-40' : 'opacity-0'}`}
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px)' // Efek blur sesuai permintaan
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-2xl">
          Koleksi Aset Game by <br />
          <span className="text-green-400">Muhammad Fiqri Pratama</span>
        </h2>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-lg">
          Kembangkan imajinasimu dengan aset visual premium yang dirancang khusus untuk pengembang game indie.
        </p>
      </div>
    </section>
  );
}