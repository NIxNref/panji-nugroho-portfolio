'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative bg-white dark:bg-gray-900 min-h-screen flex items-center overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transform rotate-12 animate-pulse"></div>
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transform -rotate-12 animate-pulse"></div>
            </div>

            <div className="w-full max-w-screen-xl mx-auto px-4 py-32 lg:flex lg:items-center relative z-10">
                <div className="w-full mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block"
                        >
                            WELCOME TO MY PORTFOLIO
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
                        >
                            Hi, I&apos;m Panji Nugroho
                            <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl">Backend Developer</span>
                        </motion.h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mx-auto mt-4 max-w-xl text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8"
                    >
                        I build robust and scalable backend solutions with modern technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link
                            href="#projects"
                            className="group relative inline-flex items-center overflow-hidden rounded-full bg-blue-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-blue-600"
                        >
                            <span className="absolute -end-full transition-all group-hover:end-4">
                                <svg
                                    className="h-5 w-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>
                            <span className="text-sm font-medium transition-all group-hover:me-4">
                                View Projects
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 