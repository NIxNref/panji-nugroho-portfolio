'use client';

import { motion } from 'framer-motion';
import ProjectList from './ProjectList';

type Project = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    liveUrl: string | null;
    githubUrl: string | null;
    tags: string;
};

const Projects = ({ projects }: { projects: Project[] }) => {
    return (
        <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Here are some of my recent works
                    </p>
                </motion.div>

                <ProjectList projects={projects} />
            </div>
        </section>
    );
};

export default Projects; 