import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "WEB DEVELOPMENT",
      subtitle: "React & Next.js",
      description: "Creating modern and responsive web applications using React.js and Next.js. Building user-friendly interfaces with clean and efficient code.",
    },
    {
      title: "UI/UX DESIGN",
      subtitle: "Figma & Adobe XD",
      description: "Designing intuitive user interfaces and experiences. Creating wireframes, prototypes, and visual designs that engage and delight users.",
    },
    {
      title: "FRONTEND DEVELOPMENT",
      subtitle: "HTML, CSS & JavaScript",
      description: "Building responsive websites with modern technologies. Implementing clean, maintainable code with focus on performance and accessibility.",
    }
  ];

  return (
    <section className="services-section bg-[#2A2A2A] py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-white">WHAT I DO</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="service-card bg-[#1E1E1E] rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <h4 className="text-2xl text-white mb-6 font-script">{service.subtitle}</h4>
                <p className="text-gray-400 text-lg">{service.description}</p>
              </div>
              <div className="absolute bottom-0 right-0 p-4 opacity-10">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-white"></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 