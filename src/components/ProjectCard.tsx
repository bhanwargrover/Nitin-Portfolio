import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { DivideIcon as LucideIcon, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  index: number;
  icon: LucideIcon;
  title: string;
  description: string[];
  bgColor: string;
  iconColor: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  index, 
  icon: Icon, 
  title, 
  description, 
  bgColor, 
  iconColor,
  link
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
      className={`${bgColor} rounded-xl overflow-hidden shadow-lg p-6 hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className={`${iconColor} w-12 h-12 rounded-full flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white flex items-center gap-1 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="text-sm">View Site</span>
        </a>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      
      <ul className="space-y-3">
        {description.map((item, i) => (
          <li key={i} className="flex items-start">
            <span className="bg-white/20 rounded-full p-1 mr-3 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-white/90 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProjectCard;