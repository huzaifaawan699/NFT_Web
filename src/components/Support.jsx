import React from 'react';
import Shopify from '../assets/shopify.png';
import Slack from '../assets/slack.png';
import Dropbox from '../assets/dropbox.png';
import Google from '../assets/google.png';

const Support = () => {
    return (
        <div className="bg-black py-12 px-4 md:px-8" id='support'>
            {/* Top Section */}
            <div className="text-center mb-12">
    <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
        Your <span className="text-red-500">Stream</span> Master
    </h1>
    <p className="text-white text-sm md:text-base leading-relaxed mb-4 animate-fade-in">
        The world of video games is packed with high and low, insane headshots, and epic raids. Armed with a game recorder, you can grab the best moments of your gaming life and share them online with peers across the planet.
    </p>
    <a href="#learn-more" className="inline-block bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 transition duration-300">
        Learn
    </a>
</div>


            {/* Videos Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 opacity-0 video-animate-1">
        <iframe
            className="w-full h-48 md:h-64"
            src="https://www.youtube.com/embed/EpW-r-6WzF0?si=FyIbu73rOXdJ77es"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        ></iframe>
    </div>
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 opacity-0 video-animate-2">
        <iframe
            className="w-full h-48 md:h-64"
            src="https://www.youtube.com/embed/PxzefZia4MM?si=cvDdJMYDqB6BHAoc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        ></iframe>
    </div>
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 opacity-0 video-animate-3">
        <iframe
            className="w-full h-48 md:h-64"
            src="https://www.youtube.com/embed/HfoVqap3ar4?si=cFIi5aUgfTS3nJ9q"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        ></iframe>
    </div>
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300 opacity-0 video-animate-4">
        <iframe
            className="w-full h-48 md:h-64"
            src="https://www.youtube.com/embed/NWez8uVm1ns?si=sjWnbfh7qepuy2NB"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        ></iframe>
    </div>
</div>


            {/* Our Partners Section */}
            <div className="text-center mt-12">
    <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
        Our Partners
    </h2>
    <div className="overflow-hidden">
        <div className="animate-slide-infinite">
            <img src={Shopify} alt="Shopify" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
            <img src={Slack} alt="Slack" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
            <img src={Dropbox} alt="Dropbox" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
            <img src={Google} alt="Google" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
        </div>
    </div>
</div>


        </div>
    );
};

export default Support;
