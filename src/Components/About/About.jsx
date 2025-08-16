import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const skills = [
    'React.js', 'JavaScript', 'HTML5', 'CSS3', 
    'Responsive Design', 'UI/UX', 'Bootstrap',
    'Tailwind CSS', 'Version Control/Git', 'Web Performance',
    'Cross-Browser Compatibility'
  ];

  return (
    <section id="about" className="about-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">ABOUT ME</h2>
          <div className="w-24 h-1 bg-[#66FFE3] mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="skill-card">
              <h3 className="skill-title">Who am I?</h3>
              <p className="about-text">
                I'm <span className="highlight">Khush Mevada</span>, a dedicated Web Developer passionate about creating responsive, 
                user-friendly websites with modern web technologies. My focus is on delivering exceptional 
                user experiences through clean, efficient front-end development.
              </p>
              <p className="about-text">
                With a strong foundation in web technologies and a keen eye for design, I'm committed to 
                building modern, accessible, and performant web applications that make a difference.
              </p>
            </div>

            <div className="skill-card">
              <h3 className="skill-title">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
