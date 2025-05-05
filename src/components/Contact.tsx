import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SendIcon, Mail, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Message failed. Try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-primary-800 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Scale Your Brand?
          </h2>
          <div className="h-1 w-20 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-primary-100 max-w-2xl mx-auto">
            Let's connect and discuss how we can help your business grow with smarter systems, 
            sharper content, and an edge in AI.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Contact Form */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-success-500/20 text-success-300 p-4 rounded-lg mb-4"
                  >
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-primary-100 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 bg-white/10 border border-primary-600 rounded-md text-white placeholder-primary-300"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-primary-100 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 bg-white/10 border border-primary-600 rounded-md text-white placeholder-primary-300"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-primary-100 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 bg-white/10 border border-primary-600 rounded-md text-white placeholder-primary-300"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-3 bg-accent-500 hover:bg-accent-600 rounded-md text-white font-medium transition-colors flex items-center"
                    >
                      <SendIcon className="w-4 h-4 mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="bg-primary-900/50 p-8">
                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-primary-200 uppercase tracking-wider mb-3">
                      Email
                    </h4>
                    <a href="mailto:grovernitin0428@gmail.com" className="flex items-center text-primary-100 hover:text-white transition-colors group">
                      <Mail className="w-5 h-5 mr-3 text-accent-400 group-hover:text-accent-300" />
                      grovernitin0428@gmail.com
                    </a>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary-200 uppercase tracking-wider mb-3">
                      Social Media
                    </h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.linkedin.com/in/nitingrover1616/"
                        className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href="https://www.instagram.com/nitinngrover/?igsh=MWsxMGU2MWdmbHhrNQ%3D%3D&utm_source=qr#"
                        className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary-200 uppercase tracking-wider mb-3">
                      Availability
                    </h4>
                    <p className="text-primary-100">
                      Currently accepting new clients for Q3 2024
                    </p>
                  </div>

                  <div className="pt-6 border-t border-primary-700/50">
                    <p className="text-primary-200 text-sm">
                      Looking forward to discussing how we can elevate your brand and drive measurable growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
