import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineItems = [
    {
      date: '2021 - 2025',
      title: 'B.Tech in Computer Science Engineering',
      institution: 'Parul University',
      description: 'Completed my degree with a CGPA of 6.71/10, focusing on web development and modern technologies.',
      type: 'education'
    },
    {
      date: 'December 2024 - March 2025',
      title: 'Web Developer',
      institution: 'MaMo TechnoLabs LLP',
      description: 'Worked as a web developer, developing responsive websites for clients.',
      type: 'experience'
    }
  ];

  return (
    <section id="timeline" className="section bg-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">My Journey</h2>
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
              className={`relative pl-8 pb-8 ${index !== timelineItems.length - 1 ? 'border-l-2 border-primary' : ''}`}
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <div className="space-y-2">
                <span className="text-primary font-semibold">{item.date}</span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-400">{item.institution}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 