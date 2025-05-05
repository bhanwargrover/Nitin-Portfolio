import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Loader: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-900 to-primary-700 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          className="flex items-center justify-center mb-8"
        >
          <Sparkles className="text-white w-16 h-16" />
        </motion.div>
        
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
            Digital Marketing Expert
          </h2>
          <div className="h-1 w-20 bg-accent-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-primary-100 max-w-md mx-auto">
            Building brands that grow with strategy, content & AI
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;