import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs,
    FaGitAlt, FaGithub, FaDocker
} from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';

const skillCategories = [
    {
        title: 'Frontend Development',
        skills: [
            { name: 'HTML', icon: <FaHtml5 className="text-[#e34c26]" />, level: 90 },
            { name: 'CSS', icon: <FaCss3Alt className="text-[#264de4]" />, level: 85 },
            { name: 'JavaScript', icon: <FaJs className="text-[#f7df1e]" />, level: 85 },
            { name: 'React', icon: <FaReact className="text-[#61dafb]" />, level: 80 },
        ],
    },
    {
        title: 'Backend Development',
        skills: [
            { name: 'Python', icon: <FaPython className="text-[#3776ab]" />, level: 90 },
            { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, level: 75 },
            { name: 'REST APIs', icon: <TbApi className="text-white" />, level: 85 },
        ],
    },
    {
        title: 'Tools & DevOps',
        skills: [
            { name: 'Git', icon: <FaGitAlt className="text-[#f05032]" />, level: 90 },
            { name: 'GitHub', icon: <FaGithub className="text-white" />, level: 90 },
            { name: 'VS Code', icon: <VscVscode className="text-[#007acc]" />, level: 95 },
            { name: 'Docker', icon: <FaDocker className="text-[#2496ed]" />, level: 70 },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-transparent relative border-t border-gray-800/50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-sans text-white uppercase tracking-wider mb-2">Technical <span className="text-primary italic font-serif lowercase">Skills</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIdx) => (
                        <div
                            key={catIdx}
                            className="bg-surface/80 backdrop-blur-md p-8 rounded border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(0,255,136,0.15)] hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 font-mono group"
                            data-aos="fade-up"
                            data-aos-delay={catIdx * 100}
                        >
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-800 pb-4 flex items-center gap-3 uppercase tracking-widest text-sm">
                                <span className="w-2 h-2 bg-primary group-hover:animate-pulse"></span>
                                {category.title}
                            </h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, idx) => {
                                    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
                                    return (
                                        <div key={idx} ref={ref} className="group">
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="flex items-center space-x-3 text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 uppercase tracking-widest">
                                                    <span className="text-xl group-hover:text-primary transition-colors duration-300">{skill.icon}</span>
                                                    <span>{skill.name}</span>
                                                </div>
                                                <span className="text-sm font-bold text-primary tracking-widest drop-shadow-[0_0_5px_rgba(0,255,136,0.5)]">{skill.level}%</span>
                                            </div>
                                            <div className="w-full h-[2px] bg-gray-900 overflow-hidden rounded-full">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-background via-accent to-primary relative"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: inView ? `${skill.level}%` : 0 }}
                                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                                >
                                                    <div className="absolute top-0 right-0 bottom-0 w-20 bg-white/40 blur-[2px] skew-x-[-20deg] transform -translate-x-full group-hover:translate-x-[200px] transition-transform duration-1000"></div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
