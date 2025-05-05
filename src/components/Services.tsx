import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from './ServiceCard';
import { 
  BarChart2, 
  TrendingUp, 
  Share2, 
  Search, 
  Bot, 
  Figma 
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: BarChart2,
      title: "Brand & Growth Strategy",
      description: "Your brand is more than a logo — it's how the market feels about you. I help you position it to win.",
      features: [
        "Brand identity and messaging frameworks",
        "GTM (go-to-market) strategy",
        "AI-assisted market & competitor research",
        "Scalable brand systems for growth"
      ],
      projects: [
        {
          name: "Tress Lounge Franchise Strategy",
          description: "Helped structure brand narrative and sales strategy for 75 franchise units at $600K CAD each"
        }
      ],
      iconColor: "bg-primary-600",
      bgColor: "bg-primary-700",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing & Lead Generation",
      description: "I build and optimize paid campaigns that don't just drive traffic — they drive revenue.",
      features: [
        "Facebook, Instagram & Google Ads",
        "AI-driven audience targeting & budget scaling",
        "Funnel creation + A/B testing",
        "AI-based lead scoring & filtering"
      ],
      projects: [
        {
          name: "Lead generation - Tress Lounge",
          description: "Lead generation strategy & automation for Tress Lounge"
        },
        {
          name: "Pre-launch campaign",
          description: "Pre-launch campaign strategy for ValidLeads.ai"
        }
      ],
      iconColor: "bg-accent-500",
      bgColor: "bg-accent-600",
    },
    {
      icon: Share2,
      title: "Social Media Management & Content Strategy",
      description: "Grow your social presence with content that educates, engages, and converts — powered by AI tools for speed & impact.",
      features: [
        "AI-assisted content calendar planning",
        "Reels scripting + editing (After Effects + CapCut)",
        "Engagement strategy and hashtag research",
        "Platform-specific optimization"
      ],
      projects: [
        {
          name: "ValidLeads.ai",
          description: "Built social content plan for ValidLeads.ai pre-launch"
        },
        {
          name: "StudioKhas",
          description: "Managed social content and boosted reach by 2M+ views"
        }
      ],
      iconColor: "bg-secondary-500",
      bgColor: "bg-secondary-600",
    },
    {
      icon: Search,
      title: "SEO & Website Optimization",
      description: "Rank higher, convert better — with a blend of human strategy and AI optimization.",
      features: [
        "Website audits (Technical + UX)",
        "AI-powered keyword research",
        "On-page & off-page SEO",
        "Google My Business optimization"
      ],
      projects: [
        {
          name: "VisualAccent (Darwin, Australia)",
          description: "Full-site audit and SEO strategy"
        },
        {
          name: "Tuff Glas",
          description: "SEO improvement & content for glass hardware"
        }
      ],
      iconColor: "bg-success-500",
      bgColor: "bg-success-600",
    },
    {
      icon: Bot,
      title: "AI Solutions for Marketing & Operations",
      description: "I help businesses integrate AI where it actually matters — to save time, improve results, and stay ahead.",
      features: [
        "Lead filtering AI agents (ValidLeads.ai)",
        "Workflow automation (Zapier, ChatGPT, CRMs)",
        "AI tools stack consultation",
        "Prompt Engineering for content, SEO, and sales"
      ],
      projects: [
        {
          name: "ValidLeads.ai",
          description: "Founder of AI-powered lead quality filter platform"
        },
        {
          name: "Internal Tools",
          description: "Integrated AI tools for internal use in multiple marketing campaigns"
        }
      ],
      iconColor: "bg-primary-600",
      bgColor: "bg-primary-700",
    },
    {
      icon: Figma,
      title: "Design & No-Code Setup",
      description: "Quick and beautiful setup that doesn't rely on developers. Just fast, functional, and optimized.",
      features: [
        "Figma wireframes for landing pages",
        "No-code tools for landing pages + forms",
        "Email marketing integration",
        "CRM setup (Zoho, Hubspot, Mailchimp)"
      ],
      projects: [
        {
          name: "ValidLeads.ai",
          description: "Figma design setup & landing page strategy"
        },
        {
          name: "Lead Capture",
          description: "Workflow automation for lead capture across multiple client projects"
        }
      ],
      iconColor: "bg-warning-500",
      bgColor: "bg-warning-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Services
          </h2>
          <div className="h-1 w-20 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From franchise brands to local service companies, I help you stand out, 
            get leads, and turn clicks into customers.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              projects={service.projects}
              iconColor={service.iconColor}
              bgColor={service.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;