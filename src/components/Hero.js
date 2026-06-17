import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center h-screen text-white bg-gradient-to-r from-orange-500 to-red-500">
      <motion.h1 className="text-5xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Hritik Kumar Yadav
      </motion.h1>
      <motion.h2 className="mt-4 text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        Medical Student • Mentor • Content Creator
      </motion.h2>
      <div className="mt-8">
        <motion.button className="px-4 py-2 m-2 text-white bg-blue-600 rounded" whileHover={{ scale: 1.1 }}>
          Explore My Journey
        </motion.button>
        <motion.button className="px-4 py-2 m-2 text-white bg-blue-600 rounded" whileHover={{ scale: 1.1 }}>
          Watch Content
        </motion.button>
        <motion.button className="px-4 py-2 m-2 text-white bg-blue-600 rounded" whileHover={{ scale: 1.1 }}>
          Contact Me
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
