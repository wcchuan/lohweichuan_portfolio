import React from 'react';
import { MdZoomIn } from 'react-icons/md';

const Footer = ({ info, setFullScreenImage }) => {
    return (
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
                            aria-label={`View certification: ${cert.name}`}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 transition-all group"
                        >
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></span>
                            <span className="text-xs font-black uppercase tracking-widest">{cert.name}</span>
                            <MdZoomIn size={18} className="opacity-70" aria-hidden="true" />
                        </button>
                    ))}
                </div>

                <p className="mt-20 text-[9px] text-slate-700 font-bold uppercase tracking-[0.5em] text-center">
                    Developed with React & Rolldown © 2026
                </p>
            </div>
        </footer>
    );
};

export default Footer;
