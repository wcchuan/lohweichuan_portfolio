import React from 'react';

const Experience = () => {
    return (
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
                        <li className="flex gap-3 items-start"><span className="text-blue-500" aria-hidden="true">✦</span> Developed client websites using React.js.</li>
                        <li className="flex gap-3 items-start"><span className="text-blue-500" aria-hidden="true">✦</span> Integrated decentralized storage via Pinata Cloud.</li>
                        <li className="flex gap-3 items-start"><span className="text-blue-500" aria-hidden="true">✦</span> Improved UI/UX responsiveness and accessibility.</li>
                        <li className="flex gap-3 items-start"><span className="text-blue-500" aria-hidden="true">✦</span> Managed version control using GitHub.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
