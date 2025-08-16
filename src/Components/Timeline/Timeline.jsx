import { motion } from 'framer-motion';
import './Timeline.css';
import parulLogo from '../../assets/images/parul.png';
import mamoLogo from '../../assets/images/mamo-logo.png.png';

const Timeline = () => {
  const timelineItems = [
    {
      date: '2021 - 2025',
      title: 'B.Tech in Computer Science Engineering',
      institution: 'Parul University',
      description: 'Focusing on web development and modern technologies, gaining hands-on experience in building responsive and user-friendly web applications.',
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
    <section className="timeline-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">MY JOURNEY</h2>
          <div className="w-24 h-1 bg-[#66FFE3] mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto timeline-container">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="timeline-card"
            >
              <div className="timeline-dot"></div>
              <div className="space-y-3">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {item.logo && (
                    <div className={`logo-container ${item.logoStyle}`}>
                      <img 
                        src={item.logo} 
                        alt={`${item.institution} logo`} 
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  )}
                  <p className="timeline-institution">{item.institution}</p>
                </div>
                <p className="timeline-description">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#66FFE3] hover:underline mt-2 inline-block"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 