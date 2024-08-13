import React from 'react';

const Footer = () => {
    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll animation
        });
    };

    return (
        <footer className="bg-black text-white py-12 px-4 relative overflow-hidden animate-fadeInUp">
            {/* Blurred red line */}
            <div className="absolute inset-x-0 top-0 h-1 bg-red-600 blur-sm"></div>

            <div className="container mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 wow-title">
        Don't Miss Any of Those <span className="text-red-600">"WOW!"</span> Moments
       </h1>
       <p className="text-sm md:text-base mb-8 leading-relaxed truncate-lines">
        Start Capturing with one just one click!
        Read More: <a href="https://www.gamestop.com/" className="text-blue-400">https://www.gamestop.com/</a>
       @ Game GameStop 2022
       </p>


                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Signup for News and Special Offers</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full max-w-xs py-2 px-4 rounded-l-md text-gray-800 outline-none focus:ring-2 focus:ring-red-600 transition-transform duration-300 ease-in-out"
                        />
                        <button 
                            onClick={scrollToTop} // Trigger scroll to top on click
                            className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-r-md transition duration-300 transform hover:scale-105 animate-bounce"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                    <p className="text-sm mb-4">For inquiries, please reach out via email:</p>
                    <a href="mailto:info@example.com" className="text-blue-400 hover:underline transition duration-300">
                        Huzaifamalik2023@gmail.com
                    </a>
                </div>

                <div className="mb-6">
                    <button 
                        onClick={scrollToTop} // Trigger scroll to top on click
                        className="bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded transition duration-300 transform hover:scale-105 animate-bounce"
                    >
                        Downloads
                    </button>
                </div>

                <div className="text-sm md:text-base mb-6">
                    <p className="mb-2">&copy; 2024 The Gaming Pit-Shop. All rights reserved.</p>
                    <p>Powered by Huzaifa Fiaz</p>
                </div>
            </div>

            {/* Back to Home Pointer */}
            <div 
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer hover:text-red-500 transition duration-300 animate-bounce"
                onClick={scrollToTop}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-10 w-10" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </div>
        </footer>
    );
}

export default Footer;
