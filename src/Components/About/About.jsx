import { motion } from 'framer-motion';
import profileImage from '../../assets/images/khush-profile.jpg';

const About = () => {
  const skills = [
    'React.js', 'JavaScript', 'HTML5', 'CSS3', 
    'Responsive Design', 'UI/UX', 'Bootstrap',
    'Tailwind CSS', 'Version Control/Git', 'Web Performance',
    'Cross-Browser Compatibility'
  ];

  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={profileImage} 
                alt="Khush Mevada"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
              <p className="text-gray-300 mb-6">
                I'm Khush Hiteshkumar Mevada, a dedicated Web Developer passionate about creating responsive, 
                user-friendly websites with modern web technologies. My focus is on delivering exceptional 
                user experiences through clean, efficient front-end development.
              </p>
              <p className="text-gray-300">
                With a strong foundation in web technologies and a keen eye for design, I'm committed to 
                building modern, accessible, and performant web applications that make a difference.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-dark text-white px-4 py-2 rounded-full text-sm"
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
