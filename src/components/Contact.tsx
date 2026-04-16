// Contact.tsx
export default function Contact() {
  const socialMedia = [
    { name: "Instagram", icon: "📸", link: "#" },
    { name: "TikTok", icon: "📱", link: "#" },
    { name: "YouTube", icon: "🎬", link: "#" },
  ];

  return (
    <section id="contact" className="py-24 px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto bg-gray-800 rounded-[3rem] overflow-hidden shadow-3xl border border-gray-700/50">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img src="https://placehold.co/800x1200/1e1b4b/ffffff?text=Connect+with+Me" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Contact Support" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
            <div className="relative z-10 p-12 h-full flex flex-col justify-end text-white">
              <h3 className="text-4xl font-bold mb-4">Contact Me</h3>
              <p className="text-gray-300 text-lg">Siap membantu proyek asset game Anda berikutnya.</p>
            </div>
          </div>

          <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
            <div className="space-y-10">
              <div>
                <h4 className="text-green-500 font-bold uppercase tracking-widest text-sm mb-6">Informasi Kontak</h4>
                <div className="space-y-6">
                  {/* Hover diubah menjadi Green-600 */}
                  <div className="flex items-center gap-5 text-white group cursor-default">
                    <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center group-hover:bg-green-600 transition-all">👤</div>
                    <div><p className="text-gray-400 text-xs">Nama Lengkap</p><p className="text-xl font-bold group-hover:text-green-400">Muhammad Fiqri Pratama</p></div>
                  </div>
                  <div className="flex items-center gap-5 text-white group cursor-default">
                    <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center group-hover:bg-green-600 transition-all">📧</div>
                    <div><p className="text-gray-400 text-xs">Email</p><p className="text-xl font-bold group-hover:text-green-400">hello@gameassets.com</p></div>
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