import { useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../utils/useMediaQuery';
import avatar from '/avatar.png?url';

const navMotion = {
  visible: {
    opacity: 1,
    transation: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

export default function Navbar() {
  const [toggled, setToggled] = useState<boolean>(false);
  const matches = useMediaQuery('(min-width: 1280px)');
  
  return (
    <nav className="relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16">
      <svg 
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width={250} 
        height={4} 
        viewBox="0 0 250 4" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L428 2" strokeWidth={2} stroke="#282828" strokeLinecap="round" />
      </svg>

      <div>
        <img src={avatar} alt="Profile picture of author" className="h-12 w-auto block" />
      </div>

      <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold">
        <a href="/" title="Homepage">Joe Doe</a>
      </h1>

      {matches && (
        <div className="flex gap-12">
          <a href="/" title="Home">Home</a>
          <a href="/" title="Services">Services</a>
          <a href="/" title="Contact">Contact</a>
        </div>
      )}

      {!matches && (
        <div 
          onClick={() => setToggled(prev => !prev)}
          className="space-y-1.5 cursor-pointer z-50 xl:hidden"
        >
          <motion.span 
            animate={{ 
              rotateZ: toggled ? 45 : 0, 
              y: toggled ? 8 : 0 
            }} 
            className="block h-0.5 w-8 bg-black"></motion.span>
          <motion.span 
            animate={{ width: toggled ? 0 : 24 }} 
            className="block h-0.5 w-6 bg-black"></motion.span>
          <motion.span 
            animate={{ 
              rotateZ: toggled ? -45 : 0, 
              y: toggled ? -8 : 0, 
              width: toggled ? 32 : 16 
            }
            }className="block h-0.5 w-4 bg-black"></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <motion.div 
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="fixed z-10 flex justify-center items-center bg-white bottom-0 left-0 w-full h-screen">
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col text-center gap-12">
              <motion.a variants={itemMotion} href="/" title="Home">Home</motion.a>
              <motion.a variants={itemMotion} href="/" title="Services">Services</motion.a>
              <motion.a variants={itemMotion} href="/" title="Contact">Contact</motion.a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}
