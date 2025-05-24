'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center px-4">
            <div className="max-w-screen-xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Hi, I'm <span className="text-blue-600 dark:text-blue-500">Your Name</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                        Full Stack Developer crafting beautiful web experiences
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="#projects"
                            className="inline-flex items-center px-6 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center px-6 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        >
                            Get in Touch
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 