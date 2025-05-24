'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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

                <div className="space-y-12">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                            Main Technologies
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6">
                            {skills.mainSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center group"
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
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                            Framework & Libraries
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
                            {skills.frameworks.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center group"
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 