import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  useEffect(() => {
    emailjs.init('Q9xeOpxXc_t63xq0r');
  }, []);

  const form = useRef();
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      await emailjs.sendForm(
        'service_1183@', // Service ID
        'template_rhxbv6j', // Template ID
        form.current,
        'Q9xeOpxXc_t63xq0r' // Public Key
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Message sent successfully! I will get back to you soon.' }
      });

      // Clear form
      form.current.reset();

    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'An error occurred. Please try again later.' }
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#2A2A2A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Send Me a Message</h2>
          <p className="text-gray-400">Have a question or want to work together?</p>
        </motion.div>
        
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#1E1E1E] border border-gray-700 focus:border-[#66FFE3] focus:ring-1 focus:ring-[#66FFE3] transition-colors text-white"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#1E1E1E] border border-gray-700 focus:border-[#66FFE3] focus:ring-1 focus:ring-[#66FFE3] transition-colors text-white"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">Your Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-[#1E1E1E] border border-gray-700 focus:border-[#66FFE3] focus:ring-1 focus:ring-[#66FFE3] transition-colors text-white resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            disabled={status.submitting}
            className="w-full py-3 px-6 rounded-lg bg-[#66FFE3] text-gray-900 font-semibold hover:bg-[#5CE6CC] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status.submitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {status.info.error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-2 bg-red-500/10 p-3 rounded-lg"
            >
              {status.info.msg}
            </motion.div>
          )}
          {status.submitted && !status.info.error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#66FFE3] text-sm mt-2 bg-[#66FFE3]/10 p-3 rounded-lg"
            >
              {status.info.msg}
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact; 