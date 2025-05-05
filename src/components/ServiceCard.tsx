import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceProject {
  name: string;
  description: string;
}

interface ServiceCardProps {
  index: number;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  projects: ServiceProject[];
  iconColor: string;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  icon: Icon,
  title,
  description,
  features,
  projects,
  iconColor,
  bgColor,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className={`${bgColor} p-6`}>
        <div className={`${iconColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Includes
          </h4>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="bg-success-100 text-success-700 rounded-full p-1 mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Past Work
          </h4>
          <ul className="space-y-3">
            {projects.map((project, i) => (
              <li key={i} className="bg-gray-50 rounded-lg p-3">
                <p className="font-medium text-gray-800 text-sm">{project.name}</p>
                <p className="text-gray-600 text-xs mt-1">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;