'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Monitor scroll untuk Back to Top dan Active Link
  useEffect(() => {
    const handleScroll = () => {
      // Tombol Back to Top
      setShowBackToTop(window.scrollY > 300);

      // Logika Active Link berdasarkan posisi scroll
      const sections = ['home', 'about', 'assets', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
      // Jika di paling atas, set ke home
      if (window.scrollY < 100) setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // PERBAIKAN: Menggunakan HTMLElement agar kompatibel dengan h1, a, dan button
  const handleNavClick = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false); // Tutup menu mobile jika terbuka

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Offset agar tidak tertutup navbar
          behavior: 'smooth'
        });
      }
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Assets', id: 'assets' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <h1 
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-800 cursor-pointer"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          GameAssets
        </h1>

        {/* Desktop Menu */}
        <div className="space-x-8 font-medium text-gray-600 hidden md:flex items-center">
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative py-1 transition-colors duration-300 ${
                activeSection === item.id ? 'text-green-600' : 'hover:text-green-600 text-gray-600'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 transition-all duration-300 ${
                activeSection === item.id ? 'w-full' : 'w-0'
              }`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600">
          <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
        </button>

        {/* Mobile Dropdown */}
        <div className={`absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-500 ease-in-out overflow-hidden md:hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-6 space-y-4 font-medium">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`${activeSection === item.id ? 'text-green-600' : 'text-gray-600'}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Back to Top */}
      <button
        onClick={(e) => handleNavClick(e, 'home')}
        className={`fixed bottom-8 right-8 z-[100] p-4 bg-green-600 text-white rounded-2xl shadow-2xl transition-all duration-500 hover:bg-green-700 hover:-translate-y-2 ${
          showBackToTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
        }`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}