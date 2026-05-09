'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    return (
        <footer style={{
            padding: '48px 24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            background: 'var(--bg-dark-secondary)',
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '24px',
                        textAlign: 'center',
                    }}
                >
                    {/* Logo */}
                    <div style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#38BDF8',
                        textShadow: '0 0 20px rgba(56, 189, 248, 0.3)',
                    }}>
                        LAB36
                    </div>

                    {/* Tagline */}
                    <p style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.5)',
                        maxWidth: '400px',
                    }}>
                        {t({
                            vi: 'Xây dựng các công cụ thông minh với sự rõ ràng và chính xác.',
                            en: 'Building intelligent tools with clarity and precision.'
                        })}
                    </p>

                    {/* Divider */}
                    <div style={{
                        width: '60px',
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.5), transparent)',
                    }} />

                    {/* Copyright */}
                    <p style={{
                        fontSize: '13px',
                        color: 'rgba(255, 255, 255, 0.3)',
                    }}>
                        © {currentYear} LAB36. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
