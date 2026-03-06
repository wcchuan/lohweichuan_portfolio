import React, { useState } from 'react';
import FullScreenModal from './FullScreenModal';

const SEOEvidence = ({ seoEvidence }) => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <section className="bg-white py-24 px-6 border-b border-t border-slate-200">
            <div className="max-w-6xl mx-auto text-center" itemScope itemType="https://schema.org/ItemList">
                <div className="inline-block px-4 py-1 mb-6 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-green-100">Analytics & Marketing</div>
                <h2 className="text-3xl font-black mb-6 tracking-tight text-slate-900" itemProp="name">{seoEvidence.title}</h2>

                {seoEvidence.description && (
                    <p className="max-w-2xl mx-auto text-slate-500 mb-16 text-lg leading-relaxed">
                        {seoEvidence.description}
                    </p>
                )}

                <div className="grid md:grid-cols-3 gap-8 text-left mb-16">
                    {seoEvidence.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:-translate-y-1 transition duration-300" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-400 mb-6" itemProp="name">{metric.value}</div>
                            <h4 className="text-lg font-bold text-slate-900 mb-3" itemProp="alternateName">{metric.label}</h4>
                            <p className="text-slate-500 font-medium leading-relaxed text-sm" itemProp="description">{metric.description}</p>
                        </div>
                    ))}
                </div>

                {seoEvidence.images && seoEvidence.images.length > 0 && (
                    <div className="mt-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {seoEvidence.images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm cursor-pointer group"
                                    onClick={() => setSelectedImg(img)}
                                >
                                    <img
                                        src={img}
                                        alt={`Search Console Traffic ${idx + 1}`}
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <FullScreenModal
                image={selectedImg}
                onClose={() => setSelectedImg(null)}
            />
        </section>
    );
};

export default SEOEvidence;
