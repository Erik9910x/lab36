'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const members = [
    {
        name: 'Gia Bảo',
        role: 'Main developer',
        socials: {
            facebook: 'https://facebook.com/erik9910',
            github: 'https://github.com/Erik9910x/',
        },
    },
    {
        name: 'Minh Phú',
        role: 'Contributor',
        socials: {
            facebook: 'https://www.facebook.com/trphu1605',
        },
    },
    {
        name: 'Nhật Tùng',
        role: 'Contributor',
        socials: {
            facebook: 'https://www.facebook.com/nhat.tung.947853',
        },
    },
    {
        name: 'Minh Hùng',
        role: 'Contributor',
        socials: {
            facebook: 'https://www.facebook.com/minh.hung.cao.150438',
        },
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1] as const,
        },
    },
};

export default function Members() {
    return (
        <section
            id="members"
            className="section"
            style={{
                position: 'relative',
            }}
        >
            {/* Background Accent */}
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '-15%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(0, 255, 156, 0.04) 0%, transparent 70%)',
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
                        The <span className="money-green glow-text">Team</span>
                    </h2>
                    <p style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        maxWidth: '400px',
                        margin: '0 auto'
                    }}>
                        The people behind the experiments
                    </p>
                </motion.div>

                {/* Members Grid */}
                <motion.div
                    className="grid-members"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {members.map((member) => (
                        <MemberCard key={member.name} member={member} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

interface Member {
    name: string;
    role: string;
    socials: {
        facebook?: string;
        github?: string;
    };
}

function MemberCard({ member }: { member: Member }) {
    const [isHovered, setIsHovered] = useState(false);
    const [showMobileSheet, setShowMobileSheet] = useState(false);

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    return (
        <>
            <motion.div
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setShowMobileSheet(true)}
                style={{
                    padding: '32px 24px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Avatar */}
                <motion.div
                    animate={{
                        boxShadow: isHovered
                            ? '0 0 40px rgba(0, 255, 156, 0.3)'
                            : '0 0 20px rgba(0, 255, 156, 0.1)'
                    }}
                    style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(0, 255, 156, 0.2) 0%, rgba(0, 255, 156, 0.05) 100%)',
                        border: '2px solid rgba(0, 255, 156, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        fontSize: '24px',
                        fontWeight: 600,
                        color: '#00ff9c',
                    }}
                >
                    {getInitials(member.name)}
                </motion.div>

                {/* Name */}
                <h3 style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    marginBottom: '4px',
                    color: '#fff',
                }}>
                    {member.name}
                </h3>

                {/* Role */}
                <p style={{
                    fontSize: '14px',
                    color: member.role === 'Main developer' ? '#00ff9c' : 'rgba(255, 255, 255, 0.5)',
                    fontWeight: member.role === 'Main developer' ? 500 : 400,
                    marginBottom: '20px',
                }}>
                    {member.role}
                </p>

                {/* Social Icons - Desktop (fade in on hover) */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                    className="desktop-socials"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '16px',
                    }}
                >
                    {member.socials.facebook && (
                        <SocialLink
                            href={member.socials.facebook}
                            icon="facebook"
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}
                    {member.socials.github && (
                        <SocialLink
                            href={member.socials.github}
                            icon="github"
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}
                </motion.div>
            </motion.div>

            {/* Mobile Bottom Sheet */}
            {showMobileSheet && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowMobileSheet(false)}
                    className="mobile-sheet-overlay"
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 1001,
                        display: 'none',
                    }}
                >
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 25 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'var(--bg-dark-secondary)',
                            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '24px 24px 0 0',
                            padding: '32px 24px 48px',
                        }}
                    >
                        {/* Handle */}
                        <div style={{
                            width: '40px',
                            height: '4px',
                            background: 'rgba(255, 255, 255, 0.3)',
                            borderRadius: '2px',
                            margin: '0 auto 24px',
                        }} />

                        {/* Content */}
                        <div style={{ textAlign: 'center' }}>
                            <p style={{
                                fontSize: '18px',
                                fontWeight: 600,
                                marginBottom: '8px'
                            }}>
                                {member.name}
                            </p>
                            <p style={{
                                fontSize: '14px',
                                color: 'rgba(255, 255, 255, 0.5)',
                                marginBottom: '24px',
                            }}>
                                {member.role}
                            </p>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                            }}>
                                {member.socials.facebook && (
                                    <a
                                        href={member.socials.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary"
                                        style={{ justifyContent: 'center' }}
                                    >
                                        <FacebookIcon />
                                        Facebook
                                    </a>
                                )}
                                {member.socials.github && (
                                    <a
                                        href={member.socials.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary"
                                        style={{ justifyContent: 'center' }}
                                    >
                                        <GitHubIcon />
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            <style jsx global>{`
        @media (max-width: 768px) {
          .desktop-socials {
            display: none !important;
          }
          .mobile-sheet-overlay {
            display: block !important;
          }
        }
      `}</style>
        </>
    );
}

function SocialLink({
    href,
    icon,
    onClick
}: {
    href: string;
    icon: 'facebook' | 'github';
    onClick?: (e: React.MouseEvent) => void;
}) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.7)',
                transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00ff9c';
                e.currentTarget.style.color = '#00ff9c';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
            }}
        >
            {icon === 'facebook' ? <FacebookIcon /> : <GitHubIcon />}
        </motion.a>
    );
}

function FacebookIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );
}

function GitHubIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );
}
