import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaTerminal, FaCode } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

const TerminalMockup = () => {
    return (
        <div className="w-full max-w-lg mx-auto bg-surface/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 shadow-[0_0_30px_rgba(0,255,136,0.1)] font-mono text-xs sm:text-sm text-left">
            {/* Top Bar */}
            <div className="bg-[#0a0e17] px-4 py-3 flex items-center gap-2 border-b border-gray-800">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-gray-500 text-[10px] flex items-center gap-2 uppercase tracking-widest"><FaTerminal /> root@crypto-terminal:~</span>
            </div>
            {/* Terminal Body */}
            <div className="p-4 md:p-6 text-primary min-h-[250px] leading-relaxed whitespace-pre-wrap">
                <p className="text-gray-500">Last login: {new Date().toLocaleDateString()} on ttys000</p>
                <p className="mt-2"><span className="text-gray-400">root@crypto</span>:<span className="text-accent">~/protocol</span>$ ./init.sh</p>
                <div className="mt-2 text-gray-300">
                    <Typewriter
                        words={[
                            '> Accessing identity matrix...\n> Name: Nived Padikkal\n> Role: Full Stack Developer\n> Location: Undisclosed\n> Status: ONLINE_█',
                            '> Loading primary skills:\n> - JavaScript / React\n> - Python / Automation\n> - API Architecture\n> Ready for input_█'
                        ]}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={50}
                        deleteSpeed={30}
                        delaySpeed={3000}
                    />
                </div>
            </div>
        </div>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20">
            <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 mt-10">

                {/* Left Side Info */}
                {/* Left Side Info */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
                    <div className="bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-xs font-mono tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> NETWORK ACTIVE
                    </div>

                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-sans text-white mb-4 tracking-tight uppercase">
                        Nived <br /><span className="text-primary font-serif italic text-4xl md:text-5xl">Padikkal</span>
                    </h1>

                    <div className="h-[1px] w-32 bg-gradient-to-r from-primary to-transparent mb-8"></div>

                    <h2 className="text-lg md:text-xl text-gray-400 mb-8 font-light max-w-xl leading-relaxed">
                        Full Stack Web Developer crafting high-performance, secure, and scalable architectures for the modern web.
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 mb-12">
                        <Link to="services" smooth={true} duration={500} offset={-50}>
                            <button className="relative inline-flex items-center justify-center px-8 py-3.5 font-sans tracking-wider text-sm text-background transition-all duration-300 bg-primary border border-primary hover:bg-white hover:border-white hover:text-background rounded-sm focus:outline-none group overflow-hidden uppercase">
                                <span className="mr-2">Explore Services</span>
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 opacity-10 rotate-12 group-hover:-translate-x-40 ease bg-white"></span>
                            </button>
                        </Link>
                        <Link to="contact" smooth={true} duration={500} offset={-50}>
                            <button className="px-8 py-3.5 font-sans tracking-wider text-sm border border-gray-600 text-gray-300 hover:border-primary hover:text-primary rounded-sm transform transition-all duration-300 uppercase bg-surface/50 backdrop-blur-sm">
                                Open Comms
                            </button>
                        </Link>
                    </div>

                    {/* Socials */}
                    <div className="flex space-x-4 mt-8">
                        <a href="#" className="w-10 h-10 rounded border border-gray-800 bg-surface flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"><FaGithub size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded border border-gray-800 bg-surface flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"><FaLinkedin size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded border border-gray-800 bg-surface flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all duration-300"><FaEnvelope size={18} /></a>
                    </div>
                </div>

                {/* Right Side Terminal Mockup */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <TerminalMockup />
                </div>

            </div>

            {/* Scroll indicator - Static now */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none opacity-50">
                <span className="text-gray-500 font-mono text-[10px] tracking-[0.2em] uppercase mb-4">Scroll to discover</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;
