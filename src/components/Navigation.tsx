'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        // Check initial scroll position
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);

        if (href === '/') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    };

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ];

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) {
        return null;
    }

    const textColorClass = scrolled || !mounted
        ? 'text-gray-900 dark:text-white'
        : 'text-gray-900 dark:text-white';

    return (
        <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    href="/"
                    onClick={(e) => handleNavClick(e, '/')}
                    className="flex items-center z-20"
                >
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`self-center text-xl sm:text-2xl font-semibold whitespace-nowrap ${textColorClass}`}
                    >
                        Panji Nugroho
                    </motion.span>
                </Link>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden z-20 ${textColorClass} hover:bg-gray-100 dark:hover:bg-gray-700`}
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
                        className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto fixed md:relative left-0 right-0 top-[64px] md:top-auto bg-white/95 dark:bg-gray-900/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none shadow-lg md:shadow-none border-t border-gray-100 dark:border-gray-700 md:border-none z-10`}
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-0 md:flex-row md:space-x-8 md:mt-0">
                            {navigation.map((item) => (
                                <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className={`block py-3 px-4 text-base rounded-lg transition-colors duration-300 ${textColorClass} hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700/50 md:dark:hover:bg-transparent`}
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