import React from 'react';
import resumePhoto from '../assets/resume_photo.jpg';

const Hero = ({ info }) => {
    return (
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
                <div className="flex flex-col gap-4">
                    {Object.entries(info.skillsMatrix).map(([category, skills]) => (
                        <div key={category} className="text-left">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">{category}</span>
                            <div className="flex flex-wrap gap-2">
                                {skills.map(skill => (
                                    <span key={skill} className="px-3 py-1.5 bg-white text-slate-600 rounded-lg text-sm font-bold border border-slate-200 shadow-sm">{skill}</span>
                                ))}
                            </div>
                        </div>
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
    );
};

export default Hero;
