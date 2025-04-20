import { motion } from 'framer-motion';
import parulLogo from '../../assets/images/parul.png';
import mamoLogo from '../../assets/images/mamo-logo.png.png';

const Timeline = () => {
  const timelineItems = [
    {
      date: '2021 - 2025',
      title: 'B.Tech in Computer Science Engineering',
      institution: 'Parul University',
      description: 'Completed my degree with a CGPA of 6.71/10, focusing on web development and modern technologies.',
      type: 'education',
      logo: parulLogo,
      logoStyle: 'bg-white'
    },
    {
      date: 'December 2024 - March 2025',
      title: 'Web Developer',
      institution: 'MaMo TechnoLabs LLP',
      description: 'Worked as a web developer, developing responsive websites for clients.',
      type: 'experience',
      logo: mamoLogo,
      logoStyle: 'bg-black'
    }
  ];

  return (
    <section id="timeline" className="section bg-dark py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative pl-8 md:pl-10 pb-8 ${
                index !== timelineItems.length - 1 ? 'border-l-2 border-primary' : ''
              }`}
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <div className="space-y-2 md:space-y-3">
                <span className="text-primary font-semibold text-sm md:text-base">{item.date}</span>
                <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {item.logo && (
                    <div className={`rounded-lg p-1 ${item.logoStyle}`}>
                      <img 
                        src={item.logo} 
                        alt={`${item.institution} logo`} 
                        className="w-8 h-8 md:w-10 md:h-10 object-contain"
                      />
                    </div>
                  )}
                  <p className="text-gray-400 text-sm md:text-base">{item.institution}</p>
                </div>
                <p className="text-gray-300 text-sm md:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 