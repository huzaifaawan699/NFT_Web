import React from 'react';
import Rabit from '../assets/rabit.png';
import Settings from '../assets/settings.png';
import Record from '../assets/rec.png';
import Audio from '../assets/audio1.png';

const About = () => {
    return (
        <div className="bg-black py-12 px-4 md:px-8" id='about'>
            {/* Top Section */}
            <div className="text-center mb-12">
                <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
                    The Gaming 
                    <span className="text-red-500"> Pit-Shop</span>, Fueled By Passion
                </h1>
            </div>

            {/* Content Section */}
            <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-8">
                {/* Content and Icons Section */}
                <div className="flex flex-col space-y-8 md:w-1/2">
                    <div className="flex items-center space-x-6 md:space-x-8">
                        <div className="w-24 h-24 bg-black flex items-center justify-center rounded-full">
                            <img src={Rabit} alt="Icon 1" className="w-16 h-16" />
                        </div>
                        <div className="text-white text-center md:text-left">
                            <p className="text-sm md:text-base leading-relaxed infinite-slide">
                                Use NVIDIA @ NVENC @ and Intel @ HD Graphics Hardware acceleration to encode your video up to 400% faster.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6 md:space-x-8">
                        <div className="w-24 h-24 bg-black flex items-center justify-center rounded-full">
                            <img src={Settings} alt="Icon 2" className="w-16 h-16" />
                        </div>
                        <div className="text-white text-center md:text-left">
                            <p className="text-sm md:text-base leading-relaxed infinite-slide">
                                Customize overlays to monitor frame rate, bit count, file size, and other metrics in real-time.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6 md:space-x-8">
                        <div className="w-24 h-24 bg-black flex items-center justify-center rounded-full">
                            <img src={Record} alt="Icon 3" className="w-16 h-16" />
                        </div>
                        <div className="text-white text-center md:text-left">
                            <p className="text-sm md:text-base leading-relaxed infinite-slide">
                                Record gameplay in 4K and at up to 120 FPS.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6 md:space-x-8">
                        <div className="w-24 h-24 bg-black flex items-center justify-center rounded-full">
                            <img src={Audio} alt="Icon 4" className="w-16 h-16" />
                        </div>
                        <div className="text-white text-center md:text-left">
                            <p className="text-sm md:text-base leading-relaxed infinite-slide">
                                Save audio streams separately so you can easily edit out bloopers without affecting the game sounds.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Empty div for additional space */}
                <div className="hidden md:flex md:flex-col md:w-1/2"></div>
            </div>
        </div>
    );
};

export default About;
