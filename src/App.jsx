import React, { useState } from 'react'; 
import { projects, info } from './data';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdWork, MdClose, MdZoomIn } from 'react-icons/md'; 
import resumePhoto from './assets/resume_photo.jpeg';

function App() {
  const [hoveredImg, setHoveredImg] = useState({});
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleHover = (projectIdx, img) => {
    setHoveredImg(prev => ({ ...prev, [projectIdx]: img }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-700 relative">
      
      {/* Full Screen Modal for Readability */}
      {fullScreenImage && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setFullScreenImage(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:scale-110 transition">
            <MdClose size={40} />
          </button>
          <img 
            src={fullScreenImage} 
            alt="Full size view" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-500" 
          />
        </div>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
          <span className="font-black text-xl tracking-tighter text-blue-600 uppercase">Loh Wei Chuan</span>
          <div className="flex gap-6 text-2xl text-slate-400">
            <a href="https://www.linkedin.com/in/wei-chuan-loh-2604482ab/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300"><FaLinkedin /></a>
            <a href="https://github.com/wcchuan" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors duration-300"><FaGithub /></a>
            <a href="https://wa.me/60126869735" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="hover:text-green-500 transition-colors duration-300"><FaWhatsapp /></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-12 text-left">
        <div>
          <div className="inline-block px-4 py-1 mb-6 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
            Available for Internship
          </div>
          <h1 className="text-6xl font-black mb-6 leading-tight tracking-tight text-slate-900">
            Bachelor of <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Computer Science</span>
          </h1>
          <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed font-medium">
            {info.education}. Specialized in building intelligent systems and mobile solutions.
          </p>
          <div className="flex flex-wrap gap-2">
            {info.skills.map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-white text-slate-600 rounded-lg text-sm font-bold border border-slate-200 shadow-sm">{skill}</span>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative group">
            <div className="w-80 h-80 bg-blue-500 absolute -inset-4 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-500"></div>
            <div className="w-64 h-64 bg-slate-900 relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl transition-transform duration-500 group-hover:rotate-2">
              <img src={resumePhoto} alt="Loh Wei Chuan" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="bg-slate-900 py-24 px-6 border-y border-slate-800">
        <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-3xl font-black mb-12 tracking-tight text-white">Professional Experience</h2>
          <div className="bg-slate-800/50 p-8 md:p-12 rounded-[3rem] border border-slate-700 relative">
            <div className="flex justify-between items-start flex-wrap gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white text-left">Frontend Developer Intern</h3>
                <p className="text-blue-400 font-bold uppercase text-xs tracking-widest mt-1 text-left">Global Connect Resources (GCR)</p>
              </div>
              <span className="text-slate-400 text-xs font-bold uppercase">May — Aug 2023</span>
            </div>
            <ul className="grid md:grid-cols-2 gap-6 text-slate-300 text-sm font-medium">
              <li className="flex gap-3 items-start"><span className="text-blue-500">✦</span> Developed client websites using React.js.</li>
              <li className="flex gap-3 items-start"><span className="text-blue-500">✦</span> Integrated decentralized storage via Pinata Cloud.</li>
              <li className="flex gap-3 items-start"><span className="text-blue-500">✦</span> Improved UI/UX responsiveness and accessibility.</li>
              <li className="flex gap-3 items-start"><span className="text-blue-500">✦</span> Managed version control using GitHub.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-black mb-16 tracking-tight text-left text-slate-900">Featured Projects</h2>
        <div className="flex flex-col gap-32">
          {projects.map((p, i) => {
            const isMobile = p.title.toLowerCase().includes('kongsi');
            
            return (
              <div key={i} className="grid lg:grid-cols-12 gap-16 items-start">
                {/* Info Side */}
                <div className="lg:col-span-5 text-left">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4 block">{p.category}</span>
                  <h3 className="text-4xl font-bold mb-6">{p.title}</h3>
                  <p className="text-slate-500 mb-10 leading-relaxed font-medium">{p.description}</p>
                  <div className="mb-10 text-left">
                    <h5 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 font-bold">Key Achievements</h5>
                    <ul className="space-y-4">
                      {p.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-slate-600 font-bold text-xs text-left">
                          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-[10px] flex-shrink-0">✓</div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-8 border-t border-slate-200">
                    {p.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white text-slate-400 text-[9px] rounded-lg font-black uppercase tracking-widest border border-slate-200 shadow-sm">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Gallery Side */}
                <div className="lg:col-span-7 w-full flex flex-col">
                  <div className="flex justify-center w-full">
                    <div 
                      onClick={() => hoveredImg[i] && setFullScreenImage(hoveredImg[i])}
                      className={`relative bg-slate-950 rounded-[2.5rem] overflow-hidden border-[14px] border-white shadow-2xl flex items-center justify-center ring-1 ring-slate-200 cursor-zoom-in transition-all duration-500 
                        ${isMobile ? 'aspect-[9/19] w-[280px]' : 'aspect-[16/10] w-full'}`}
                    >
                      {hoveredImg[i] ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <img 
                            src={hoveredImg[i]} 
                            alt="Preview" 
                            className={`w-full h-full animate-in fade-in duration-300 object-cover`} 
                          />
                          <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                            <MdZoomIn className="text-white" size={48} />
                          </div>
                        </div>
                      ) : (
                        <div className="text-center p-6 text-white">
                          <p className="text-[10px] font-black uppercase tracking-widest">Select a Thumbnail</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="grid grid-cols-6 gap-3 mt-10 w-full max-w-md mx-auto">
                    {p.uiScreenshots.map((img, idx) => (
                      <button 
                        key={idx} 
                        onMouseEnter={() => handleHover(i, img)} 
                        className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${hoveredImg[i] === img ? 'border-blue-600 scale-110 shadow-lg' : 'border-transparent opacity-40 hover:opacity-100'}`}
                      >
                        <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-24 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-white font-black text-3xl mb-4 uppercase tracking-tighter">Loh Wei Chuan</p>
          <p className="text-slate-400 font-medium mb-12 max-w-md mx-auto leading-relaxed text-sm text-center">
             Bachelor of Computer Science (Hons) in AI & Mobile Computing at Taylor's University.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {(info.certifications || []).map((cert, index) => (
              <button 
                key={index}
                onClick={() => setFullScreenImage(cert.image)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 transition-all group"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs font-black uppercase tracking-widest">{cert.name}</span>
                <MdZoomIn size={18} className="opacity-70" />
              </button>
            ))}
          </div>
          
          <p className="mt-20 text-[9px] text-slate-700 font-bold uppercase tracking-[0.5em] text-center">
            Developed with React & Rolldown © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;