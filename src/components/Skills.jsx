import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPython, FaJava, FaGitAlt, FaFigma, FaDatabase, FaChartLine } from 'react-icons/fa'
import { SiPandas, SiNumpy, SiScikitlearn, SiCanva, SiAdobephotoshop, SiGoogleanalytics } from 'react-icons/si'

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const skillCategories = [
    {
      title: 'Data Science',
      icon: <FaChartLine />,
      color: 'neon-cyan',
      barClass: 'from-neon-cyan to-neon-lime',
      skills: [
        { name: 'Pandas', icon: <SiPandas />, level: 58 },
        { name: 'NumPy', icon: <SiNumpy />, level: 57 },
        { name: 'Matplotlib', icon: <FaChartLine />, level: 60 },
        { name: 'Seaborn', icon: <FaChartLine />, level: 56 },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 55 },
      ],
    },
    {
      title: 'Programming',
      icon: <FaDatabase />,
      color: 'neon-lime',
      barClass: 'from-neon-cyan to-neon-lime',
      skills: [
        { name: 'C++', icon: <FaDatabase />, level: 80 },
        { name: 'Python', icon: <FaPython />, level: 60 },
        { name: 'Java', icon: <FaJava />, level: 70 },
        { name: 'HTML/CSS', icon: <FaDatabase />, level: 80 },
        { name: 'Git', icon: <FaGitAlt />, level: 80 },
      ],
    },
    {
      title: 'Design',
      icon: <FaFigma />,
      color: 'neon-cyan',
      barClass: 'from-neon-cyan to-neon-lime',
      skills: [
        { name: 'Photoshop', icon: <SiAdobephotoshop />, level: 90 },
        { name: 'Canva', icon: <SiCanva />, level: 95 },
        { name: 'Figma', icon: <FaFigma />, level: 85 },
      ],
    },
    {
      title: 'Marketing',
      icon: <SiGoogleanalytics />,
      color: 'neon-lime',
      barClass: 'from-neon-cyan to-neon-lime',
      skills: [
        { name: 'Social Media', icon: <SiGoogleanalytics />, level: 90 },
        { name: 'SEO', icon: <SiGoogleanalytics />, level: 85 },
        { name: 'Analytics', icon: <SiGoogleanalytics />, level: 88 },
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="relative py-20 md:py-32 bg-gradient-to-b from-dark-bg to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A diverse toolkit combining technical expertise with creative thinking
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group interactive"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`text-4xl text-${category.color} group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="group/skill"
                  >
                    {/* Skill Name and Icon */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-${category.color}`}>{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${category.barClass} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-${category.color}/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className={`absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-${category.color}/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Always learning, always growing. Currently exploring Advanced Machine Learning & Deep Learning
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 glass rounded-full text-neon-cyan border border-neon-cyan/30 text-sm">
              Machine Learning
            </span>
            <span className="px-4 py-2 glass rounded-full text-neon-lime border border-neon-lime/30 text-sm">
              Deep Learning
            </span>
            <span className="px-4 py-2 glass rounded-full text-neon-cyan border border-neon-cyan/30 text-sm">
              Computer Vision
            </span>
            <span className="px-4 py-2 glass rounded-full text-neon-lime border border-neon-lime/30 text-sm">
              NLP
            </span>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse float-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-lime/5 rounded-full blur-3xl animate-pulse float-slow" />
    </section>
  )
}

export default Skills
