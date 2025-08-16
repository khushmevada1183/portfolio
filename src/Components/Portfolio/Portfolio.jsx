import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'YoungRights Trail',
      duration: 'Dec 2023 - Apr 2024',
      description: 'Developed a transformative platform to educate children about their rights in an engaging and interactive manner. The app ensures children enjoy learning about their rights until they fully understand them, leveraging technology like computers, smartphones, and IoT gadgets.',
      skills: ['Design', 'Frontend', 'HTML', 'CSS', 'JavaScript'],
      teamSize: 3,
      mentor: 'Mr. Amar Chandra',
      link: 'https://github.com/khushmevada1183/YoungRights-Trail'
    },
    {
      title: 'Learning Management System (LMS)',
      duration: 'Jan 2024 - Apr 2024',
      description: 'Developed a Learning Management System using the MEAN stack, focusing on UX design and frontend development. Created an intuitive interface for course management, communication, and collaboration, resulting in streamlined learning processes and increased user engagement.',
      skills: ['Frontend', 'UX Design', 'HTML', 'CSS', 'JavaScript', 'MEAN Stack'],
      teamSize: 4,
      mentor: 'Mr. Smaranjit Ghose',
      link: 'https://github.com/khushmevada1183/Learning-Management-System.git'
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">MY PROJECTS</h2>
          <div className="w-24 h-1 bg-[#66FFE3] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="project-card p-6"
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.duration}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="text-sm text-gray-400">
                <p>Team Size: {project.teamSize}</p>
                <p>Mentor: {project.mentor}</p>
                {project.link && (
                  <a
                    href={project.link}
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

export default Portfolio; 