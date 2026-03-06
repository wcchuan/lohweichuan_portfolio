import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Navigation = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
            <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
                <span className="font-black text-xl tracking-tighter text-blue-600 uppercase">Loh Wei Chuan</span>
                <div className="flex gap-6 text-2xl text-slate-400">
                    <a href="https://www.linkedin.com/in/wei-chuan-loh-2604482ab/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors duration-300" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="https://github.com/wcchuan" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors duration-300" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://wa.me/60126869735" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="hover:text-green-500 transition-colors duration-300" aria-label="WhatsApp"><FaWhatsapp /></a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
