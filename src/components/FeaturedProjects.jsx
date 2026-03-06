import React from 'react';
import { MdZoomIn } from 'react-icons/md';

const FeaturedProjects = ({ projects, hoveredImg, handleHover, setFullScreenImage }) => {
    return (
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
                                                <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-[10px] flex-shrink-0" aria-hidden="true">✓</div>
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
                                                    alt={`${p.title} preview`}
                                                    loading="lazy"
                                                    className={`w-full h-full animate-in fade-in duration-300 object-cover`}
                                                />
                                                <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity" aria-hidden="true">
                                                    <MdZoomIn className="text-white" size={48} />
                                                </div>
                                            </div>
                                        ) : p.uiScreenshots && p.uiScreenshots.length === 0 ? (
                                            <div className="text-center p-6 text-white">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Creative Production Ongoing</p>
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
                                    {p.uiScreenshots && p.uiScreenshots.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onMouseEnter={() => handleHover(i, img)}
                                            aria-label={`View ${p.title} screenshot ${idx + 1}`}
                                            className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${hoveredImg[i] === img ? 'border-blue-600 scale-110 shadow-lg' : 'border-transparent opacity-40 hover:opacity-100'}`}
                                        >
                                            <img src={img} alt={`Thumbnail ${idx + 1}`} loading="lazy" className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FeaturedProjects;
