'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const texts = ['Team', 'Code', 'Build', 'Create', 'Innovate'];

export default function Hero() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = texts[currentTextIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {
            if (displayText.length < currentWord.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                }, 120);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 80);
            } else {
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentTextIndex]);

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
                background: 'radial-gradient(circle, rgba(0, 255, 156, 0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(0, 255, 156, 0.05) 0%, transparent 70%)',
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
                        color: '#00ff9c',
                        textTransform: 'uppercase',
                        letterSpacing: '3px',
                        marginBottom: '24px',
                    }}
                >
                    TEAM 36 GROUP — TECH GROUP
                </motion.p>

                {/* Typing Text */}
                <h1
                    className="heading-xl"
                    style={{
                        marginBottom: '32px',
                    }}
                >
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>[</span>
                    <span
                        className="glow-text"
                        style={{
                            color: '#00ff9c',
                            minWidth: '200px',
                            display: 'inline-block',
                        }}
                    >
                        {displayText}
                    </span>
                    <span className="typing-cursor" />
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>]</span>
                </h1>

                {/* Subtext - English */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        fontSize: '18px',
                        lineHeight: 1.8,
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '16px',
                        maxWidth: '700px',
                        margin: '0 auto 16px',
                    }}
                >
                    An experimental tech collective building high-risk digital systems
                    powered by AI and humans.
                </motion.p>

                {/* Subtext - Vietnamese */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    style={{
                        fontSize: '16px',
                        lineHeight: 1.8,
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontStyle: 'italic',
                        maxWidth: '700px',
                        margin: '0 auto 48px',
                    }}
                >
                    Một nhóm công nghệ thử nghiệm, xây dựng hệ thống số rủi ro cao
                    kết hợp AI và con người.
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
                    }}
                >
                    <a href="#projects" className="btn-primary">
                        View Projects
                    </a>
                    <a href="#members" className="btn-secondary">
                        Meet the Team
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                        width: '24px',
                        height: '40px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '8px',
                    }}
                >
                    <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            width: '4px',
                            height: '8px',
                            background: '#00ff9c',
                            borderRadius: '2px',
                        }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
