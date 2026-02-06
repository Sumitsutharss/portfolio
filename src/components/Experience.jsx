import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const experiences = [
    {
      type: 'work',
      title: 'Freelance Designer',
      organization: 'Fiverr',
      period: '2023 - Present',
      description: [
        'Completed 35+ successful projects with 100% client satisfaction',
        'Specialized in social media graphics, branding, and UI/UX design',
        'Delivered high-quality designs for clients across various industries',
        'Maintained 5-star rating with excellent client reviews',
      ],
      icon: <FaBriefcase />,
      color: 'neon-cyan',
    },
    {
      type: 'work',
      title: 'Social Media Manager',
      organization: 'Weekend UX',
      period: '2024 - Present',
      description: [
        'Manage and create 20+ social media posts weekly',
        'Developed content strategy resulting in 150% engagement increase',
        'Designed visually compelling graphics and marketing materials',
        'Analyzed metrics to optimize content performance',
      ],
      icon: <FaBriefcase />,
      color: 'neon-lime',
    },
    {
      type: 'education',
      title: 'BTech in Computer Science',
      organization: 'Parul Institute of Engineering & Technology',
      period: '2024 - 2028',
      description: [
        'Focused on Data Science and Machine Learning',
        'Active participant in coding competitions and hackathons',
        'Maintaining strong academic performance',
        'Member of technical clubs and societies',
      ],
      icon: <FaGraduationCap />,
      color: 'neon-cyan',
    },
  ]

  return (
    <section id="experience" ref={ref} className="relative py-20 md:py-32 bg-gradient-to-b from-black to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-lime to-neon-cyan transform -translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="glass p-6 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group interactive">
                    {/* Icon and Title */}
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`text-3xl text-${exp.color} group-hover:scale-110 transition-transform duration-300`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-bold text-white">
                          {exp.title}
                        </h3>
                        <p className={`text-${exp.color} font-medium`}>
                          {exp.organization}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <p className="text-gray-400 text-sm mb-4 font-medium">
                      {exp.period}
                    </p>

                    {/* Description */}
                    <ul className={`space-y-2 text-gray-300 text-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          {index % 2 === 0 ? (
                            <>
                              <span className="flex-1">{item}</span>
                              <span className={`text-${exp.color} mt-1`}>▸</span>
                            </>
                          ) : (
                            <>
                              <span className={`text-${exp.color} mt-1`}>▸</span>
                              <span className="flex-1">{item}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>

                    {/* Decorative Corner */}
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-16 h-16 border-t-2 border-${index % 2 === 0 ? 'l' : 'r'}-2 border-${exp.color}/20 rounded-t${index % 2 === 0 ? 'l' : 'r'}-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-neon-cyan to-neon-lime border-4 border-dark-bg neon-glow" />

                {/* Empty Space for Alternating Layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-heading font-bold mb-6 gradient-text">
            Achievements & Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Python for Data Science', org: 'Coursera', color: 'neon-cyan' },
              { title: 'Machine Learning A-Z', org: 'Udemy', color: 'neon-lime' },
              { title: 'Top Rated Seller', org: 'Fiverr', color: 'neon-cyan' },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="glass p-4 rounded-lg border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 interactive"
              >
                <p className="font-semibold text-white mb-1">{cert.title}</p>
                <p className={`text-sm text-${cert.color}`}>{cert.org}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated Background */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse float-slow" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-neon-lime/5 rounded-full blur-3xl animate-pulse float-slow" />
    </section>
  )
}

export default Experience
