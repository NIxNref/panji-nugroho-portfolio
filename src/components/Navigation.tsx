'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`self-center text-2xl font-semibold whitespace-nowrap transition-colors duration-300 ${scrolled ? 'text-gray-900 dark:text-white' : 'text-white'
                            }`}
                    >
                        Panji Nugroho
                    </motion.span>
                </Link>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden transition-colors duration-300 ${scrolled
                        ? 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'
                        : 'text-white hover:bg-white/10'
                        }`}
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" />
                    )}
                </button>

                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
                    >
                        <ul className={`flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 transition-colors duration-300 ${scrolled
                            ? 'bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-lg md:bg-transparent'
                            : 'bg-transparent'
                            }`}>
                            {navigation.map((item) => (
                                <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`block py-2 pl-3 pr-4 rounded transition-colors duration-300 ${scrolled
                                            ? 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
                                            : 'text-gray-100 hover:bg-white/10 md:hover:bg-transparent md:hover:text-blue-400'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navigation; 