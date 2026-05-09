'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: { vi: 'Giới thiệu', en: 'Introduction' }, href: '#introduction' },
    { name: { vi: 'Dự án', en: 'Projects' }, href: '#projects' },
    { name: { vi: 'Thành viên', en: 'Members' }, href: '#members' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
        className="navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '16px 24px',
          background: isScrolled
            ? 'rgba(7, 11, 20, 0.85)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(24px)' : 'none',
          borderBottom: isScrolled
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            style={{
              fontSize: '20px',
              fontWeight: 700,
              color: '#38BDF8',
              textDecoration: 'none',
              textShadow: '0 0 20px rgba(56, 189, 248, 0.5)',
            }}
          >
            LAB36
          </motion.a>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
          }} className="desktop-nav">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {t(item.name)}
              </NavLink>
            ))}

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '12px',
                color: '#38BDF8',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(56, 189, 248, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {language === 'vi' ? 'VN' : 'EN'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
            }}
          >
            <motion.div
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              style={{ width: 24, height: 20, position: 'relative' }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  style={{
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    height: 2,
                    background: '#fff',
                    borderRadius: 2,
                  }}
                  animate={{
                    top: isMobileMenuOpen
                      ? i === 1 ? 9 : 9
                      : i * 9,
                    rotate: isMobileMenuOpen
                      ? i === 0 ? 45 : i === 2 ? -45 : 0
                      : 0,
                    opacity: isMobileMenuOpen && i === 1 ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(7, 11, 20, 0.95)',
              backdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '32px',
            }}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: '28px',
                  fontWeight: 500,
                  color: '#fff',
                  textDecoration: 'none',
                }}
              >
                {t(item.name)}
              </motion.a>
            ))}

            {/* Language Toggle - Mobile */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '16px',
                color: '#38BDF8',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: '16px',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              {language === 'vi' ? 'Tiếng Việt' : 'English'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      style={{
        position: 'relative',
        fontSize: '15px',
        fontWeight: 500,
        color: 'rgba(255, 255, 255, 0.8)',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = '#38BDF8';
        e.currentTarget.style.textShadow = '0 0 20px rgba(56, 189, 248, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
        e.currentTarget.style.textShadow = 'none';
      }}
    >
      {children}
      <motion.span
        style={{
          position: 'absolute',
          bottom: -4,
          left: 0,
          width: '100%',
          height: 2,
          background: '#38BDF8',
          transformOrigin: 'left',
          scaleX: 0,
        }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
}
