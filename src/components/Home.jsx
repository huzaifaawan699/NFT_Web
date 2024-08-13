import React from 'react';
import character from '../assets/character.png';
import Game from '../assets/Game.png';

const Home = () => (
  <div className="bg-black-500 py-16" id="home">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
  <img
    src={character}
    alt="character"
    className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
  />
</div>


      {/* Content Section */}
      <div className="md:w-1/2 text-center md:text-left">
  <h1
    className="text-4xl md:text-5xl pt-20 font-bold leading-tight mb-6 transform translate-x-full opacity-0 transition-all duration-700 ease-in-out delay-300 animate-slideIn"
  >
    The{" "}
    <span className="text-white-500 hover:text-black">Gaming</span>{" "}
    <span className="text-red-500">Pit-Shop</span>, Fueled By{" "}
    <span className="text-white-500 hover:text-black">Passion</span>
  </h1>
  <p
    className="text-black-700 text-lg leading-relaxed mb-6 transform translate-x-full opacity-0 transition-all duration-700 ease-in-out delay-500 animate-slideIn"
  >
    GameStop is a lightweight and free streaming and game recording software to
    PCs that lets you capture and stream gameplay of a full-screen window desktop
    with one click and no lags.
  </p>




        <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col items-center">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full mb-4">
       Download
       </button>
       <img
         src={Game}
         alt="Game"
         className="w-24 h-auto mt-2 rounded-lg shadow-lg"
         />
        </div>
      </div>
      </div>
    </div>
  </div>
);

export default Home;
