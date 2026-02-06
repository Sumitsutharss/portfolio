import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'sumitsutharmain@gmail.com',
      link: 'mailto:sumitsutharmain@gmail.com',
      color: 'neon-cyan',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 8799664983',
      link: 'tel:+918799664983',
      color: 'neon-lime',
    },
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/sutharsumitmain',
      color: 'neon-cyan',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      link: 'https://github.com/Sumitsutharss/',
      color: 'neon-lime',
    },
    {
      icon: <SiLeetcode />,
      label: 'LeetCode',
      link: 'https://leetcode.com/u/sumitsuthar26/',
      color: 'neon-cyan',
    },
    {
      icon: <SiCodeforces />,
      label: 'Codeforces',
      link: 'https://codeforces.com/profile/sumitsuthar',
      color: 'neon-lime',
    },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32 bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 glass rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group interactive"
                  whileHover={{ x: 10 }}
                >
                  <div className={`text-3xl text-${info.color} group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-heading font-bold mb-4 text-white">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3 p-4 glass rounded-xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group interactive"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`text-2xl text-${social.color} group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
                    </div>
                    <span className="text-white font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="mt-8"
            >
              <a
                href="https://drive.google.com/file/d/16JHpV-m-MALR_bJeyhHE0NFHCY1lxPsN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-neon-cyan to-neon-lime text-black font-bold rounded-full btn-neon neon-glow interactive"
              >
                <FaDownload className="text-xl" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-white/10">
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-neon-cyan to-neon-lime text-black font-bold rounded-full btn-neon interactive disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-neon-cyan/20 border border-neon-cyan/50 rounded-lg text-center"
                  >
                    <p className="text-neon-cyan font-medium">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-neon-lime/5 rounded-full blur-3xl animate-pulse" />
    </section>
  )
}

export default Contact
