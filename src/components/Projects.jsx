import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const projects = [
    {
      title: 'Cricket Fielding Analysis',
      description: 'Comprehensive IPL fielding data analytics using Python. Analyzed player performance, identified trends, and visualized insights with interactive dashboards.',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Visualization'],
      github: 'https://github.com/sumitsuthar',
      demo: null,
      color: 'neon-cyan',
    },
    {
      title: 'Delhi AQI Analysis',
      description: 'Air Quality Index analysis and visualization project. Processed environmental data to identify pollution patterns and seasonal variations across Delhi.',
      image: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=800',
      tags: ['Python', 'NumPy', 'Data Analysis', 'Environmental Science'],
      github: 'https://github.com/sumitsuthar',
      demo: null,
      color: 'neon-lime',
    },
    {
      title: 'Portfolio Website',
      description: 'A futuristic, 3D animated portfolio website built with React, Three.js, and GSAP. Features particle effects, smooth scrolling, and WebGL animations.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      tags: ['React', 'Three.js', 'GSAP', 'Tailwind CSS', 'WebGL'],
      github: 'https://github.com/sumitsuthar',
      demo: '#',
      color: 'neon-cyan',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media performance. Built with modern web technologies and data visualization libraries.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      tags: ['React', 'Chart.js', 'REST API', 'Responsive Design'],
      github: 'https://github.com/sumitsuthar',
      demo: null,
      color: 'neon-lime',
    },
  ]

  return (
    <section id="projects" ref={ref} className="relative py-20 md:py-32 bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my work in data science, web development, and creative design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative interactive"
            >
              <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-all duration-500 transform hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-${hoveredIndex === index ? '90' : '60'} transition-opacity duration-300`} />
                  
                  {/* Overlay Links */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute inset-0 flex items-center justify-center gap-4"
                      >
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 glass rounded-full border border-neon-cyan hover:bg-neon-cyan hover:text-black transition-all duration-300"
                          >
                            <FaGithub className="text-2xl" />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 glass rounded-full border border-neon-lime hover:bg-neon-lime hover:text-black transition-all duration-300"
                          >
                            <FaExternalLinkAlt className="text-2xl" />
                          </a>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-xs font-medium rounded-full border ${
                          tagIndex % 2 === 0
                            ? 'bg-neon-cyan/10 border-neon-cyan/30 text-neon-cyan'
                            : 'bg-neon-lime/10 border-neon-lime/30 text-neon-lime'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3D Hover Effect Border */}
                <div className={`absolute inset-0 border-2 border-${project.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} 
                     style={{ 
                       transform: hoveredIndex === index ? 'translate(8px, 8px)' : 'translate(0, 0)',
                       transition: 'transform 0.3s ease'
                     }} 
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sumitsuthar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass border-2 border-neon-cyan text-neon-cyan font-bold rounded-full btn-neon hover:bg-neon-cyan hover:text-black transition-all duration-300 interactive"
          >
            <FaGithub className="text-xl" />
            View More on GitHub
          </a>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl float-slow" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-lime/5 rounded-full blur-3xl float-slow" />
    </section>
  )
}

export default Projects
