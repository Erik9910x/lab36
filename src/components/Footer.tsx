'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();

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
                        color: '#00ff9c',
                        textShadow: '0 0 20px rgba(0, 255, 156, 0.3)',
                    }}>
                        LAB36
                    </div>

                    {/* Tagline */}
                    <p style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.5)',
                        maxWidth: '400px',
                    }}>
                        An experimental tech collective building AI-powered digital currency demos
                    </p>

                    {/* Divider */}
                    <div style={{
                        width: '60px',
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(0, 255, 156, 0.5), transparent)',
                    }} />

                    {/* Copyright */}
                    <p style={{
                        fontSize: '13px',
                        color: 'rgba(255, 255, 255, 0.3)',
                    }}>
                        © {currentYear} LAB36. All rights reserved.
                    </p>

                    {/* Warning */}
                    <p style={{
                        fontSize: '11px',
                        color: 'rgba(255, 100, 100, 0.6)',
                        maxWidth: '500px',
                        lineHeight: 1.6,
                    }}>
                        ⚠️ All projects are experimental and involve high risk.
                        This is not financial advice. Use at your own discretion.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
