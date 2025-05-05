import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { 
  Building, 
  Construction,
  Bot,
  MapPin,
  ExternalLink
} from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      icon: Building,
      title: "Tress Lounge – Franchise Sales System",
      description: [
        "Built a lead gen funnel for $600K franchise offer",
        "Helped with narrative building, objection handling scripts",
        "Created social strategy and content roadmap for 75-unit scaleup",
        "Delivered performance campaign structure and ad angles"
      ],
      bgColor: "bg-primary-700",
      iconColor: "bg-primary-500",
      link: "https://www.tresslounge.ca"
    },
    {
      icon: Construction,
      title: "Tuff Glas – B2B Brand Optimization",
      description: [
        "Audited existing digital footprint",
        "Implemented SEO + local strategy for niche glass hardware market",
        "Recommended website UX fixes and page-level SEO changes"
      ],
      bgColor: "bg-secondary-700",
      iconColor: "bg-secondary-500",
      link: "https://www.maneathesalon.com"
    },
    {
      icon: Bot,
      title: "ValidLeads.ai – AI SaaS Launch",
      description: [
        "Developed brand strategy, GTM roadmap, and full 30-day content plan",
        "Built Figma layout structure for social grid",
        "Worked on scriptwriting, launch video, and pre-sales funnel strategy",
        "Positioned as a lead qualification solution for B2B marketers"
      ],
      bgColor: "bg-accent-700",
      iconColor: "bg-accent-500",
      link: "http://Validleads.ai"
    },
    {
      icon: MapPin,
      title: "VisualAccent (Australia) – Local SEO & Social Launch",
      description: [
        "Targeted plumbers, cleaners, and other Darwin-based businesses",
        "Executed full-site audit and keyword mapping",
        "Created tailored SEO blog plan and service page improvements"
      ],
      bgColor: "bg-success-700",
      iconColor: "bg-success-500",
      link: "https://www.hiveworkscomics.com"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Projects & Case Studies
          </h2>
          <div className="h-1 w-20 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real results for real clients. These case studies showcase how my approach to digital marketing delivers measurable growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              index={index}
              icon={project.icon}
              title={project.title}
              description={project.description}
              bgColor={project.bgColor}
              iconColor={project.iconColor}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;