'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const quotes = [
    { en: 'Where ideas are tested, not just taught.', vi: 'Nơi ý tưởng được thử thách, không chỉ được dạy.' },
];

export default function Hero() {
    const { t } = useLanguage();
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [isEnglish, setIsEnglish] = useState(true);
    const [displayQuote, setDisplayQuote] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentQuote = isEnglish
            ? quotes[quoteIndex].en
            : quotes[quoteIndex].vi;

        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            if (displayQuote.length < currentQuote.length) {
                timeout = setTimeout(() => {
                    setDisplayQuote(currentQuote.slice(0, displayQuote.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 2500);
            }
        } else {
            if (displayQuote.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayQuote(displayQuote.slice(0, -1));
                }, 50);
            } else {
                setIsDeleting(false);
                // Toggle language after deleting
                if (isEnglish) {
                    setIsEnglish(false);
                } else {
                    setIsEnglish(true);
                    // Move to next quote (currently only 1, but ready for more)
                    setQuoteIndex((prev) => (prev + 1) % quotes.length);
                }
            }
        }

        return () => clearTimeout(timeout);
    }, [displayQuote, isDeleting, quoteIndex, isEnglish]);

    return (
        <section
            id="introduction"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: '120px 24px 80px',
            }}
        >
            {/* Background Glow Effects */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] as const }}
                style={{
                    textAlign: 'center',
                    maxWidth: '900px',
                    zIndex: 1,
                }}
            >
                {/* Pre-title */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#38BDF8',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        marginBottom: '24px',
                    }}
                >
                    LAB36
                </motion.p>

                {/* Typing Quote */}
                <div
                    style={{
                        minHeight: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '32px',
                    }}
                >
                    <h1
                        className="heading-xl"
                        style={{
                            fontSize: 'clamp(24px, 4vw, 48px)',
                            fontWeight: 500,
                            fontStyle: 'italic',
                        }}
                    >
                        "{displayQuote}
                        <span className="typing-cursor" />
                        "
                    </h1>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    style={{
                        display: 'inline-block',
                        padding: '8px 20px',
                        background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(56, 189, 248, 0.05) 100%)',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#38BDF8',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '24px',
                    }}
                >
                    chán à? code đi
                </motion.div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        fontSize: '18px',
                        lineHeight: 1.8,
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '48px',
                        maxWidth: '700px',
                        margin: '0 auto 48px',
                    }}
                >
                    {t({
                        vi: 'Xây dựng các công cụ thông minh với sự rõ ràng và chính xác.',
                        en: 'Building intelligent tools with clarity and precision.'
                    })}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    style={{
                        display: 'flex',
                        gap: '16px',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginTop: '48px',
                    }}
                >
                    <a href="#projects" className="btn-primary">
                        {t({ vi: 'Xem dự án', en: 'View Projects' })}
                    </a>
                    <a href="#members" className="btn-secondary">
                        {t({ vi: 'Gặp gỡ đội ngũ', en: 'Meet the Team' })}
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
