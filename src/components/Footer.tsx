import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Sparkles className="w-6 h-6 text-accent-400 mr-2" />
            <span className="font-display font-bold text-lg">MarketingPro</span>
          </div>
          
          <div>
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#tools" className="text-gray-400 hover:text-white transition-colors">
                  Tools
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 text-sm">
                Building brands that grow with strategy, content, and AI.
                From franchise brands to local service companies, I help you stand out,
                get leads, and turn clicks into customers.
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} MarketingPro. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;