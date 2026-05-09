'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Members from '@/components/Members';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <Projects />
          <Members />
          <Footer />
        </motion.main>
      </AnimatePresence>
    </LanguageProvider>
  );
}
