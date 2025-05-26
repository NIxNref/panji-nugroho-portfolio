'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

const skills = {
    mainSkills: [
        { name: 'HTML', icon: '/icons/html5.svg' },
        { name: 'CSS', icon: '/icons/css3.svg' },
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'Java', icon: '/icons/java.svg' },
        { name: 'Node.js', icon: '/icons/nodejs.svg' },
        { name: 'C#', icon: '/icons/csharp.svg' },
        { name: 'Kotlin', icon: '/icons/kotlin.svg' },
        { name: 'GitHub', icon: '/icons/github.svg' },
        { name: 'Git', icon: '/icons/git.svg' },
        { name: 'Kali Linux', icon: '/icons/kali.svg' },
        { name: 'npm', icon: '/icons/npm.svg' },
        { name: 'PHP', icon: '/icons/php.svg' },
        { name: 'Python', icon: '/icons/python.svg' },
        { name: 'Laravel', icon: '/icons/laravel.svg' },
    ],
    frameworks: [
        { name: 'Flutter', icon: '/icons/flutter.svg' },
        { name: 'Laravel', icon: '/icons/laravel.svg' },
        { name: 'Next.js', icon: '/icons/nextjs.svg' },
        { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
        { name: '.NET', icon: '/icons/dotnet.svg' },
    ]
};

const SkillCarousel = ({ items }: { items: typeof skills.mainSkills }) => {
    const controls = useAnimation();
    const itemWidth = 100; // Width of each item in pixels
    const gap = 24; // Gap between items in pixels
    const totalWidth = items.length * (itemWidth + gap);

    useEffect(() => {
        const animate = async () => {
            await controls.start({
                x: [-totalWidth / 2, totalWidth / 2],
                transition: {
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }
            });
        };
        animate();
    }, [controls, totalWidth]);

    return (
        <div className="overflow-hidden relative w-full">
            <motion.div
                className="flex items-center space-x-6"
                animate={controls}
                style={{ width: `${totalWidth}px` }}
            >
                {[...items, ...items].map((skill, index) => (
                    <motion.div
                        key={`${skill.name}-${index}`}
                        className="flex flex-col items-center group flex-shrink-0"
                        style={{ width: `${itemWidth}px` }}
                    >
                        <div className="w-16 h-16 relative mb-3 p-3 rounded-xl bg-white dark:bg-gray-700 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                fill
                                className="p-1 object-contain filter dark:invert"
                            />
                        </div>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {skill.name}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-800"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-800"></div>
        </div>
    );
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        My Skills
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Technologies I work with
                    </p>
                </motion.div>

                <div className="space-y-16">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                            Main Technologies
                        </h3>
                        <SkillCarousel items={skills.mainSkills} />
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                            Framework & Libraries
                        </h3>
                        <SkillCarousel items={skills.frameworks} />
                    </div>
                </div>
            </div>
        </section>
    );
} 