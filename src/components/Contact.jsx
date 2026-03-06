import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Provide your EmailJS Service ID, Template ID, and Public Key below.
        // For now, these are placeholders that the user will need to update.
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
            .then(() => {
                setLoading(false);
                setSuccess(true);
                formRef.current.reset();
                setTimeout(() => setSuccess(false), 5000);
            }, (err) => {
                setLoading(false);
                setError(true);
                setTimeout(() => setError(false), 5000);
                console.error(err);
            });
    };

    return (
        <section id="contact" className="py-20 bg-transparent relative border-t border-gray-800/50">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-sans text-white uppercase tracking-wider mb-2">Get In <span className="text-primary italic font-serif lowercase">Touch</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mt-4"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 bg-surface/80 backdrop-blur-md rounded border border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden relative font-mono p-8 md:p-12">
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>

                    <div className="lg:w-1/3" data-aos="fade-right">
                        <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary animate-pulse"></span>
                            Let's Connect
                        </h3>
                        <p className="text-gray-400 mb-8 font-light leading-relaxed text-sm">
                            <span className="text-primary font-bold mr-2">{">"}</span>Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group cursor-pointer">
                                <div className="w-12 h-12 bg-background rounded flex items-center justify-center border border-gray-800 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all">
                                    <FaEnvelope className="text-primary group-hover:text-white" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[10px] text-gray-500 tracking-[0.2em] uppercase mb-1">Email Me</h4>
                                    <p className="font-light text-sm text-gray-300">contact@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group cursor-pointer">
                                <div className="w-12 h-12 bg-background rounded flex items-center justify-center border border-gray-800 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all">
                                    <FaMapMarkerAlt className="text-primary group-hover:text-white" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[10px] text-gray-500 tracking-[0.2em] uppercase mb-1">Location</h4>
                                    <p className="font-light text-sm text-gray-300">San Francisco, CA</p>
                                </div>
                            </div>

                            <div className="pt-8 flex gap-4 border-t border-gray-800 mt-8">
                                <a href="#" className="w-10 h-10 bg-background rounded flex items-center justify-center text-gray-400 border border-gray-800 hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all duration-300">
                                    <FaLinkedin size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 bg-background rounded flex items-center justify-center text-gray-400 border border-gray-800 hover:text-primary hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all duration-300">
                                    <FaGithub size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3" data-aos="fade-left">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded border border-gray-800">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-2">Your Name</label>
                                    <input type="text" id="name" name="name" required className="w-full bg-surface text-white rounded border border-gray-800 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 py-3 px-4 outline-none transition-all duration-300 text-sm" placeholder="Nived Padikkal" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-2">Your Email</label>
                                    <input type="email" id="email" name="email" required className="w-full bg-surface text-white rounded border border-gray-800 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 py-3 px-4 outline-none transition-all duration-300 text-sm" placeholder="nived@example.com" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-2">Message</label>
                                <textarea id="message" name="message" rows="5" required className="w-full bg-surface text-white rounded border border-gray-800 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 py-3 px-4 outline-none transition-all duration-300 resize-none text-sm" placeholder="How can I help you?"></textarea>
                            </div>

                            <button type="submit" disabled={loading} className="w-full py-4 bg-primary/10 border border-primary hover:bg-primary hover:text-background text-primary font-bold rounded-sm hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transform hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-2 tracking-[0.2em] uppercase text-xs disabled:opacity-50 disabled:cursor-not-allowed">
                                {loading ? 'Transmitting...' : (
                                    <>
                                        ./Send_Payload <FaPaperPlane />
                                    </>
                                )}
                            </button>

                            {success && <p className="text-primary text-center text-xs tracking-widest uppercase font-medium mt-4">Transmission Successful</p>}
                            {error && <p className="text-red-500 text-center text-xs tracking-widest uppercase font-medium mt-4">Transmission Failed</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
