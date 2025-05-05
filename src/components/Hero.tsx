import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { ChevronDown, BarChart3, Target, Lightbulb } from 'lucide-react';
import HeroCanvas from './HeroCanvas';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 -z-10"></div>
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 opacity-40">
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <HeroCanvas />
          </Canvas>
        </Suspense>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 pt-16 pb-32 md:pt-36 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-blue text-sm font-bold mb-6">
              Digital Marketing Expert
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-blue leading-tight mb-6">
              I Build Brands That Grow — with Strategy, Content & AI.
            </h1>
            
            <p className="text-lg text-blue/90 mb-8 max-w-lg mx-auto md:mx-0">
              Combining digital marketing, automation, and brand strategy to help businesses scale smarter, faster, and stronger.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a 
                href="#services" 
                className="px-8 py-3 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-medium transition-colors"
              >
                Explore Services
              </a>
              
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full bg-white hover:bg-white/90 text-primary-900 font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="h-80 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full bg-accent-500/20 animate-pulse-slow"></div>
                      <div className="bg-accent-500 w-16 h-16 rounded-full flex items-center justify-center">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-10 -left-16 p-4 bg-white rounded-lg shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <BarChart3 className="w-6 h-6 text-primary-600 mb-2" />
                <p className="text-sm font-medium text-gray-900">Growth Strategy</p>
              </motion.div>
              
              <motion.div 
                className="absolute -top-10 -right-10 p-4 bg-white rounded-lg shadow-xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              >
                <Lightbulb className="w-6 h-6 text-accent-500 mb-2" />
                <p className="text-sm font-medium text-gray-900">AI Integration</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </div>
      
      {/* Animated Wave Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <div className="absolute h-20 w-[200%] bottom-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMjAiPgogICAgPHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0wLDEwIEMzMCwyMCA3MCwwIDEwMCwxMCBMMTAwLDIwIEwwLDIwIFoiPjwvcGF0aD4KICA8L3N2Zz4=')]
             bg-repeat-x bg-[length:100px_20px] animate-wave"></div>
      </div>
    </section>
  );
};

export default Hero;