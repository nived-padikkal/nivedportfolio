import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';

const About = () => {
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

    const stats = [
        { label: 'Projects Completed', value: 45, suffix: '+' },
        { label: 'Technologies Used', value: 20, suffix: '+' },
        { label: 'Coding Hours', value: 1500, suffix: '+' },
    ];

    return (
        <section id="about" className="py-20 bg-transparent relative border-t border-gray-800/50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-sans text-white uppercase tracking-wider mb-2">About <span className="text-primary italic font-serif lowercase">me</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mt-4"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Profile Image */}
                    <div className="lg:w-1/3" data-aos="fade-right">
                        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.3} glareColor="#00ff88" glarePosition="all" className="w-64 h-64 mx-auto rounded-lg">
                            <div className="relative w-full h-full rounded-lg p-[1px] bg-gradient-to-tr from-primary via-transparent to-primary/30 shadow-[0_0_30px_rgba(0,255,136,0.15)] group overflow-hidden">
                                <div className="w-full h-full rounded-lg bg-surface flex items-center justify-center relative z-10 transition-colors duration-500 group-hover:bg-surface-hover backdrop-blur-sm">
                                    {/* Fallback image */}
                                    <span className="text-gray-400 text-6xl group-hover:scale-110 transition-transform duration-500">👨‍💻</span>
                                </div>
                                <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </Tilt>
                    </div>

                    {/* Intro Content */}
                    <div className="lg:w-2/3" data-aos="fade-left">
                        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} transitionSpeed={2000} className="h-full">
                            <div className="bg-surface/80 backdrop-blur-md p-8 rounded-lg border border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] font-mono hover:border-primary/50 transition-all duration-500 group relative overflow-hidden h-full">
                                {/* Subtle scanline effect on hover */}
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent -translate-y-full group-hover:animate-[scanline_2s_linear_infinite] opacity-0 group-hover:opacity-100 pointer-events-none z-0"></div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
                                        <span className="w-2 h-2 bg-primary animate-pulse"></span>
                                        Professional Overview
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-8 font-light text-sm md:text-base selection:bg-primary/30">
                                        <span className="text-primary font-bold mr-2">{">"}</span> I am a highly motivated versatile developer specializing in building exceptional digital experiences.
                                        With a strong foundation in both front-end aesthetics and back-end logic, I engineer modern software solutions that solve real-world problems.
                                    </p>

                                    <div className="mb-10">
                                        <h4 className="text-gray-500 font-semibold mb-4 uppercase tracking-[0.2em] text-[10px] border-b border-gray-800 pb-2">Core Competencies</h4>
                                        <div className="flex flex-wrap gap-3 mt-4">
                                            {['Web Development', 'Python Programming', 'Process Automation', 'RESTful APIs'].map((item, idx) => (
                                                <span key={idx} className="px-4 py-2 bg-background border border-gray-800 text-gray-300 hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all duration-300 rounded-sm text-[10px] tracking-widest uppercase cursor-crosshair">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Animated Counters */}
                                    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        {stats.map((stat, idx) => (
                                            <div key={idx} className="text-center p-6 bg-background rounded-sm border border-gray-800 group-hover:border-gray-700 hover:!border-primary/50 hover:bg-surface transition-all duration-300 transform hover:-translate-y-1">
                                                <h4 className="text-3xl font-bold text-primary mb-2 font-mono drop-shadow-[0_0_8px_rgba(0,255,136,0.4)]">
                                                    {inView ? <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} /> : '0'}
                                                </h4>
                                                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
