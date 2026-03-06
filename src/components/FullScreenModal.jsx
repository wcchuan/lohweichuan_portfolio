import React from 'react';
import { MdClose } from 'react-icons/md';

const FullScreenModal = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <div
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <button
                className="absolute top-8 right-8 text-white hover:scale-110 transition"
                aria-label="Close full screen image"
            >
                <MdClose size={40} />
            </button>
            <img
                src={image}
                alt="Full size project view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-500"
            />
        </div>
    );
};

export default FullScreenModal;
