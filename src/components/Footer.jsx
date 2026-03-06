import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-transparent py-12 border-t border-gray-800/50 relative z-10 backdrop-blur-sm">
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
                <Link
                    to="hero"
                    smooth={true}
                    duration={800}
                    className="mb-8 w-12 h-12 bg-surface rounded flex items-center justify-center border border-gray-800 text-gray-400 hover:border-primary hover:text-primary cursor-pointer transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transform hover:-translate-y-2"
                >
                    <FaArrowUp size={20} />
                </Link>

                <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-[0.3em] font-sans flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary animate-pulse"></span>
                    Portfolio.
                </h2>

                <div className="flex flex-wrap gap-6 mb-8 text-sm font-medium text-gray-400">
                    {['Home', 'About', 'Skills', 'Services', 'Contact'].map((item, idx) => (
                        <Link
                            key={idx}
                            to={item.toLowerCase()}
                            smooth={true}
                            duration={500}
                            className="hover:text-primary cursor-pointer transition-colors duration-300 uppercase tracking-[0.2em] text-[10px] font-bold"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <div className="flex space-x-6 mb-8 text-xl">
                    <a href="#" className="w-10 h-10 bg-surface rounded flex items-center justify-center border border-gray-800 text-gray-400 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all transform duration-300">
                        <FaGithub />
                    </a>
                    <a href="#" className="w-10 h-10 bg-surface rounded flex items-center justify-center border border-gray-800 text-gray-400 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all transform duration-300">
                        <FaLinkedin />
                    </a>
                    <a href="#" className="w-10 h-10 bg-surface rounded flex items-center justify-center border border-gray-800 text-gray-400 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all transform duration-300">
                        <FaTwitter />
                    </a>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>

                <p className="text-gray-500 text-sm tracking-wider font-light">
                    &copy; {new Date().getFullYear()} Nived Padikkal. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
