import React, { useState, useEffect } from 'react';
import Performance from '../assets/pp1.jpg';
import Cross from '../assets/cross14.png';
import Cloud from '../assets/cl1.png';

const Downloads = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        {
            title: "Performance",
            imgSrc: Performance,
        },
        {
            title: "Cross-Platform",
            imgSrc: Cross,
        },
        {
            title: "Cloud Serving",
            imgSrc: Cloud,
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
        }, 3000); 
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="bg-black py-8" id='downloads'>
            <div className="container mx-auto flex flex-col items-center relative">
                {/* Introductory Text */}
                <div className="text-center mb-8 px-4">
                  <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-white">Why</span> <span className="text-red-600">GameStop?</span>
                  </h1>
                  <p className="text-white text-lg md:text-xl animate-slide-in hover:text-gray-300 transition-colors duration-300">
                   Choice of more than 100 million games around the globe.
                   </p>
                  </div>


                {/* Slider Container */}
                <div className="w-full md:w-4/5 lg:w-2/3 p-4 overflow-hidden relative">
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-black h-64 flex flex-col rounded-lg shadow-lg overflow-hidden mx-2"
                                style={{ minWidth: '100%' }}
                            >
                                <div className="h-4/5 bg-black flex pb-5 items-center justify-center">
                                    <img src={card.imgSrc} alt={card.title} className="h-full w-auto object-cover rounded-t-lg" />
                                </div>
                                <div className="h-1/5 bg-red-600 flex items-center justify-center">
                                    <h5 className="text-white text-lg font-bold">{card.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Downloads;
