'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        name: 'Black MMO',
        risk: 'Extreme',
        riskClass: 'risk-extreme',
        description: 'High-stakes gaming platform with advanced betting mechanics and real-time multiplayer experiences.',
        liveUrl: 'https://casino36fun.vercel.app',
        githubUrl: 'https://github.com/Erik9910x/casino36fun',
        theme: 'Black / Neon',
    },
    {
        name: 'Titan Futures',
        risk: 'Very High',
        riskClass: 'risk-very-high',
        description: 'Demo futures trading platform with real-time market data, advanced charting, and simulated trading.',
        liveUrl: 'https://titanfutures.onrender.com/',
        githubUrl: 'https://github.com/Erik9910x/titan-futures',
        theme: 'Financial / Dark',
    },
    {
        name: 'MMO SIMULATOR',
        risk: 'Experimental',
        riskClass: 'risk-experimental',
        description: 'Make Money Online experience platform with challenge-based progression and pressure mechanics.',
        liveUrl: 'https://mmo-iydt.onrender.com/',
        githubUrl: 'https://github.com/Erik9910x/mmo',
        theme: 'Neutral Dark',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1] as const,
        },
    },
};

export default function Projects() {
    return (
        <section
            id="projects"
            className="section"
            style={{
                background: 'linear-gradient(180deg, var(--bg-dark-primary) 0%, var(--bg-dark-secondary) 50%, var(--bg-dark-primary) 100%)',
                position: 'relative',
            }}
        >
            {/* Background Accent */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '-20%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(0, 255, 156, 0.03) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '64px' }}
                >
                    <h2 className="heading-l" style={{ marginBottom: '16px' }}>
                        Our <span className="money-green glow-text">Projects</span>
                    </h2>
                    <p style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        High-risk digital experiments pushing the boundaries of web technology
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid-projects"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.name}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="glass-card"
                            style={{
                                padding: '32px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                            }}
                        >
                            {/* Header */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                flexWrap: 'wrap',
                                gap: '12px',
                            }}>
                                <h3 style={{
                                    fontSize: '22px',
                                    fontWeight: 600,
                                    color: '#fff',
                                }}>
                                    {project.name}
                                </h3>
                                <span className={`risk-tag ${project.riskClass}`}>
                                    {project.risk}
                                </span>
                            </div>

                            {/* Theme */}
                            <p style={{
                                fontSize: '13px',
                                color: 'rgba(255, 255, 255, 0.4)',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                            }}>
                                Theme: {project.theme}
                            </p>

                            {/* Description */}
                            <p style={{
                                fontSize: '15px',
                                color: 'rgba(255, 255, 255, 0.7)',
                                lineHeight: 1.7,
                                flex: 1,
                            }}>
                                {project.description}
                            </p>

                            {/* Buttons */}
                            <div style={{
                                display: 'flex',
                                gap: '12px',
                                marginTop: '8px',
                                flexWrap: 'wrap',
                            }}>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        minWidth: '120px',
                                        fontSize: '14px',
                                        padding: '10px 20px',
                                    }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                    View Live
                                </a>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        minWidth: '120px',
                                        fontSize: '14px',
                                        padding: '10px 20px',
                                    }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
