import React from "react";

const InfoCard = ({ side, img, title, information }) => {
    return (
       <div className={`backdrop-blur-sm bg-white/80 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary-200/50 ${side === 'Left' ? 'md:mr-4' : 'md:ml-4'}`}>
            <div className="space-y-4">
                <p className="text-sm font-semibold text-primary-600 uppercase tracking-wide">{title}</p>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-neutral-800 leading-tight">{information}</h2>
            </div>
       </div>
    );
};

export default InfoCard;