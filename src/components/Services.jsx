import React from 'react';
import { FaLaptopCode, FaPython, FaServer, FaSpider, FaDatabase } from 'react-icons/fa';

const servicesList = [
    {
        title: 'Website Development',
        description: 'Modern, responsive, and SEO-optimized websites built with React and Tailwind CSS.',
        icon: <FaLaptopCode size={40} className="text-[#10b981]" />
    },
    {
        title: 'Python Automation',
        description: 'Custom scripts to automate repetitive tasks, saving hours of manual work.',
        icon: <FaPython size={40} className="text-[#34d399]" />
    },
    {
        title: 'API Development',
        description: 'Scalable and secure RESTful APIs designed for seamless frontend integration.',
        icon: <FaServer size={40} className="text-[#10b981]" />
    },
    {
        title: 'Web Scraping',
        description: 'Reliable extraction of dynamic web data using Python, BeautifulSoup, and Selenium.',
        icon: <FaSpider size={40} className="text-[#34d399]" />
    },
    {
        title: 'Backend Architecture',
        description: 'Robust server-side logic and database design using Node.js or Python.',
        icon: <FaDatabase size={40} className="text-[#10b981]" />
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-transparent relative border-t border-gray-800/50 flex flex-col items-center">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-sans text-white uppercase tracking-wider mb-2">Service <span className="text-primary italic font-serif lowercase">Offerings</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesList.map((service, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                            className="group bg-surface/80 backdrop-blur-sm p-8 rounded border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-gradient-to-br hover:from-surface-hover hover:to-primary/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,255,136,0.15)] hover:border-primary/50 relative overflow-hidden font-mono"
                        >
                            {/* Decorative Circle */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 opacity-50"></div>

                            <div className="mb-6 relative z-10 p-4 bg-background inline-block rounded border border-gray-800 group-hover:border-primary/50 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white border-b border-gray-800 pb-2 mb-4 relative z-10 group-hover:text-primary transition-colors tracking-widest uppercase text-sm">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 font-light leading-relaxed relative z-10 text-sm">
                                <span className="text-primary font-bold mr-2">{">"}</span>{service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
