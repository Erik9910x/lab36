'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const projectSeasons = [
    {
        season: 'Season 1',
        projects: [
            {
                name: 'Black MMO',
                description: 'Game mô phỏng jackpot và gamble giải trí với hiệu ứng casino hiện đại, cược ảo và nhiều chế độ thử vận may hấp dẫn.',
                descriptionEn: 'A modern jackpot and gamble simulation game featuring virtual betting, casino-inspired visuals, and exciting luck-based game modes.',
                liveUrl: 'https://casino36fun.vercel.app',
                githubUrl: 'https://github.com/Erik9910x/casino36fun',
                platforms: ['PC', 'Mobile', 'Tablet'],
            },
            {
                name: 'Titan Futures',
                description: 'Mô phỏng giao dịch futures chuyên nghiệp với chart realtime, phân tích thị trường và luyện trade bằng tài khoản ảo.',
                descriptionEn: 'A professional futures trading simulator with live charts, market analytics, and virtual trading for strategy practice.',
                liveUrl: 'https://titanfutures.onrender.com/',
                githubUrl: 'https://github.com/Erik9910x/titan-futures',
                platforms: ['PC', 'Tablet'],
            },
            {
                name: 'MMO SIMULATOR',
                description: 'Trải nghiệm MMO theo dạng challenge với hệ thống nhiệm vụ, level progression và cơ chế áp lực thời gian đầy kịch tính.',
                descriptionEn: 'A challenge-driven MMO experience with mission progression, competitive mechanics, and intense time-pressure gameplay.',
                liveUrl: 'https://mmo-iydt.onrender.com/',
                githubUrl: 'https://github.com/Erik9910x/mmo',
                platforms: ['PC', 'Mobile', 'Tablet'],
            },
        ],
    },
    {
        season: 'Season 2',
        projects: [
            {
                name: 'VibraX',
                description: 'VibraX là nền tảng âm nhạc hiện đại trên web, mang đến trải nghiệm nghe nhạc mượt mà, giao diện cao cấp và không gian âm thanh đắm chìm thế hệ mới.',
                descriptionEn: 'VibraX is a modern music web platform built for immersive listening, smooth streaming, and a premium next-gen audio experience.',
                liveUrl: 'https://tryvibrax.vercel.app/app',
                githubUrl: 'https://github.com/Erik9910x/vibraxv2',
                platforms: ['PC'],
            },
            {
                name: 'StudyTok',
                description: 'StudyTok là AI workspace giúp biến ghi chú và văn bản dài thành summary, flashcards, quiz và bộ ôn tập gọn gàng, hỗ trợ học tập online lẫn offline.',
                descriptionEn: 'StudyTok is an AI workspace that transforms long notes and documents into clean summaries, flashcards, quizzes, and smart study materials for both online and offline learning.',
                liveUrl: 'https://studytokx.vercel.app/',
                githubUrl: 'https://github.com/Erik9910x/studytok',
                platforms: ['PC', 'Mobile', 'Tablet'],
            },
            {
                name: 'Facebook Note Breaker',
                description: 'Facebook Note Breaker là tiện ích Chrome giúp viết ghi chú Facebook dài, cắt nhạc, nghe preview và tuỳ chỉnh thời gian hiển thị với trải nghiệm mượt mà và hiện đại.',
                descriptionEn: 'Facebook Note Breaker is a Chrome extension that lets users create long Facebook notes, trim music, preview audio, and customize display duration with a smooth modern experience.',
                liveUrl: 'https://fbnoteguide.vercel.app/',
                githubUrl: null,
                platforms: ['Extension (PC)'],
            },
            {
                name: 'Lab36QR Generator',
                description: 'QRGen là công cụ tạo mã QR hiện đại với giao diện tối giản, tốc độ xử lý nhanh và hỗ trợ tuỳ chỉnh linh hoạt. Dễ dàng tạo QR cho link, văn bản, WiFi và nhiều nội dung khác chỉ trong vài giây.',
                descriptionEn: 'QRGen is a modern QR code generator with a minimalist interface, fast processing speed, and flexible customization support. Easily create QR codes for links, text, WiFi, and various content in just seconds.',
                liveUrl: 'https://lab36qr.vercel.app/',
                githubUrl: 'https://github.com/Erik9910x/qrgen',
                platforms: ['PC', 'Mobile', 'Tablet'],
            },
            {
                name: 'SnakeX',
                description: 'SnakeX là tựa game rắn săn mồi hiện đại với nhiều chế độ chơi, bản đồ đa dạng và giao diện đậm chất neobrutalism. Trải nghiệm gameplay mượt mà, tùy biến cao và đầy tính giải trí ngay trên trình duyệt.',
                descriptionEn: 'SnakeX is a modern snake game with multiple game modes, diverse maps, and a neobrutalism-inspired interface. Experience smooth gameplay, high customization, and pure entertainment right in your browser.',
                liveUrl: 'https://lab36snakex.vercel.app/',
                githubUrl: 'https://github.com/Erik9910x/SnakeX',
                platforms: ['PC', 'Mobile', 'Tablet'],
            },
            {
                name: 'ReactX',
                description: 'ReactX for Facebook Stories nâng cấp trải nghiệm Facebook của bạn bằng cách cho phép thả cảm xúc bằng mọi emoji và xem Tin mà không bị phát hiện.',
                descriptionEn: 'ReactX for Facebook Stories enhances your Facebook experience by allowing you to react with any emoji and view Stories without being detected.',
                liveUrl: 'https://lab36reactx.vercel.app',
                githubUrl: null,
                platforms: ['Extension (PC)'],
            },
        ],
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
    const { t } = useLanguage();

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
                background: 'radial-gradient(circle, rgba(56, 189, 248, 0.03) 0%, transparent 70%)',
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
                        {t({ vi: 'Dự án của chúng tôi', en: 'Our' })} <span className="money-green glow-text">{t({ vi: '', en: 'Projects' })}</span>
                    </h2>
                </motion.div>

                {/* Projects by Season */}
                {projectSeasons.map((seasonData, seasonIndex) => (
                    <div key={seasonData.season} style={{ marginBottom: seasonIndex < projectSeasons.length - 1 ? '80px' : '0' }}>
                        {/* Season Header */}
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            style={{
                                fontSize: '28px',
                                fontWeight: 700,
                                color: '#38BDF8',
                                marginBottom: '32px',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                            }}
                        >
                            {seasonData.season}
                        </motion.h3>

                        {/* Projects Grid */}
                        <motion.div
                            className="grid-projects"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                        >
                            {seasonData.projects.map((project) => (
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
                                    </div>

                                    {/* Description */}
                                    <p style={{
                                        fontSize: '15px',
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        lineHeight: 1.7,
                                        flex: 1,
                                    }}>
                                        {t({
                                            vi: project.description,
                                            en: project.descriptionEn || project.description
                                        })}
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
                                        {project.githubUrl && (
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
                                        )}
                                    </div>

                                    {/* Platform Compatibility */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        marginTop: '12px',
                                        paddingTop: '12px',
                                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}>
                                        <span style={{
                                            fontSize: '12px',
                                            color: 'rgba(255, 255, 255, 0.5)',
                                            fontWeight: 500,
                                        }}>
                                            {t({ vi: 'Tương thích:', en: 'Compatible:' })}
                                        </span>
                                        <div style={{
                                            display: 'flex',
                                            gap: '6px',
                                            flexWrap: 'wrap',
                                        }}>
                                            {project.platforms.map((platform) => (
                                                <span
                                                    key={platform}
                                                    style={{
                                                        fontSize: '11px',
                                                        padding: '4px 10px',
                                                        background: 'rgba(56, 189, 248, 0.1)',
                                                        color: '#38BDF8',
                                                        borderRadius: '12px',
                                                        border: '1px solid rgba(56, 189, 248, 0.2)',
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {platform}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
