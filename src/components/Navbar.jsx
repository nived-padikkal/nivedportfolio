import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Services', to: 'services' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <>
            {/* Left Sidebar - Navigation */}
            <nav className="fixed left-0 top-0 h-full w-20 hidden lg:flex flex-col justify-between items-center py-10 z-50 border-r border-gray-800/50 bg-background/80 backdrop-blur-sm">
                <a href="#" className="font-sans text-xl text-white font-bold tracking-[0.3em] uppercase hover:text-primary transition-colors -rotate-90 origin-center whitespace-nowrap mt-10">
                    Nived_
                </a>

                <div className="flex flex-col space-y-12 items-center text-xs mt-20">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="text-gray-500 hover:text-primary cursor-pointer transition-colors font-mono -rotate-90 origin-center tracking-[0.2em] uppercase hover:scale-110 transform whitespace-nowrap"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Bottom line decorator */}
                <div className="w-[1px] h-24 bg-gradient-to-t from-primary to-transparent"></div>
            </nav>

            {/* Right Sidebar - Status / Quick Contact */}
            <div className="fixed right-0 top-0 h-full w-20 hidden lg:flex flex-col justify-between items-center py-10 z-50 border-l border-gray-800/50 bg-background/80 backdrop-blur-sm">
                <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent"></div>

                <div className="flex flex-col items-center space-y-6">
                    <span className="font-mono text-primary text-[10px] rotate-90 whitespace-nowrap mb-24 tracking-[0.4em] uppercase">
                        STATUS_ <span className="text-white">ONLINE</span>
                    </span>
                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(0,255,136,0.6)] animate-pulse"></span>
                </div>

                <a href="mailto:contact@example.com" className="font-mono text-gray-500 text-xs rotate-90 origin-center hover:text-primary transition-colors tracking-[0.2em] mb-16 whitespace-nowrap uppercase">
                    Communicate
                </a>
            </div>

            {/* Mobile Top Navbar (Fallback for small screens) */}
            <nav className="fixed w-full lg:hidden z-50 top-0 bg-background/90 backdrop-blur-md border-b border-gray-800/50 py-4 px-6 flex justify-between items-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                <a href="#" className="font-sans text-xl text-white font-bold tracking-[0.2em] uppercase">
                    Nived_
                </a>
                <div className="flex space-x-4 overflow-x-auto pb-1 hide-scrollbar">
                    {navLinks.slice(0, 4).map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="text-gray-500 hover:text-primary cursor-pointer transition-colors font-mono text-[10px] tracking-[0.1em] uppercase whitespace-nowrap"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
