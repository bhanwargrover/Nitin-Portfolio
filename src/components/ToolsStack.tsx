import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ToolCategory {
  name: string;
  tools: string[];
}

const ToolsStack: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toolCategories: ToolCategory[] = [
    {
      name: "AI & Automation",
      tools: ["ChatGPT", "Claude", "Zapier", "Midjourney"]
    },
    {
      name: "Design & Video",
      tools: ["Figma", "Canva", "Adobe After Effects", "CapCut"]
    },
    {
      name: "Ads & Analytics",
      tools: ["Meta Ads", "Google Ads", "GA4", "Tag Manager"]
    },
    {
      name: "SEO Tools",
      tools: ["SurferSEO", "Ubersuggest", "SEMrush"]
    },
    {
      name: "Social Tools",
      tools: ["Meta Suite", "Creator Studio", "Metricool"]
    },
    {
      name: "CRM & Email",
      tools: ["Mailchimp", "Zoho", "HubSpot"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="tools" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Tools & Stack I Work With
          </h2>
          <div className="h-1 w-20 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My toolkit combines industry-leading software with cutting-edge AI tools to deliver exceptional results.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {toolCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                {category.name}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.tools.map((tool, i) => (
                  <span 
                    key={i} 
                    className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsStack;