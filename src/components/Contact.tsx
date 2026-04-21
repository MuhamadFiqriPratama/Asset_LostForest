// Contact.tsx
export default function Contact() {
  const socialMedia = [
    { 
      name: "Instagram", 
      icon: "📸", 
      link: "https://www.instagram.com/mhmd_fiqq?utm_source=qr&igsh=cTI0MTR0MGVsdmx6" // Ganti dengan link Instagram kamu
    },
    { 
      name: "TikTok", 
      icon: "📱", 
      link: "https://www.tiktok.com/@onzyhn_?_r=1&_t=ZS-95hIWwdSozg" // Ganti dengan link TikTok kamu
    },
    { 
      name: "YouTube", 
      icon: "🎬", 
      link: "https://youtube.com/@muhamadfiqripratama7887?si=S0k-s0OseltbUCem" // Ganti dengan link YouTube kamu
    },
  ];

  return (
    <section id="contact" className="py-24 px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-[3rem] overflow-hidden shadow-3xl border border-gray-700/50">
        <div className="flex flex-col lg:flex-row">
          {/* Bagian Visual GIF */}
          <div className="lg:w-1/2 relative min-h-[500px] flex items-center justify-center bg-gray-900/30 overflow-hidden">
            <img 
              src="Gif_Chibi_Blue.GIF" 
              className="relative z-0 w-auto h-full max-h-[450px] object-contain opacity-90 transform scale-110" 
              alt="Contact Support" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-gray-900/60"></div>
            
            <div className="absolute inset-0 z-10 p-12 flex flex-col justify-end text-white">
              <h3 className="text-4xl font-bold mb-2">Contact Me</h3>
              <p className="text-gray-300 text-lg">Siap membantu proyek asset game Anda berikutnya.</p>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
            <div className="space-y-10">
              <div>
                <h4 className="text-green-500 font-bold uppercase tracking-widest text-sm mb-6">Informasi Kontak</h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-5 text-white group cursor-default">
                    <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center group-hover:bg-green-600 transition-all">👤</div>
                    <div><p className="text-gray-400 text-xs">Nama Lengkap</p><p className="text-xl font-bold group-hover:text-green-400">Muhammad Fiqri Pratama</p></div>
                  </div>
                  <div className="flex items-center gap-5 text-white group cursor-default">
                    <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center group-hover:bg-green-600 transition-all">📧</div>
                    <div><p className="text-gray-400 text-xs">Email</p><p className="text-xl font-bold group-hover:text-green-400">muhammadfiqripratama81@gmail.com</p></div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-green-500 font-bold uppercase tracking-widest text-sm mb-6">Ikuti Saya</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {socialMedia.map((social) => (
                    <a 
                      key={social.name}
                      href={social.link} 
                      target="_blank" // Membuka di tab baru
                      rel="noopener noreferrer" // Keamanan tambahan saat membuka link eksternal
                      className="flex items-center justify-center gap-3 bg-gray-700/50 py-4 rounded-2xl text-white font-bold transition-all border border-gray-600 hover:bg-green-600 hover:border-transparent hover:-translate-y-1"
                    >
                      <span>{social.icon}</span> {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}