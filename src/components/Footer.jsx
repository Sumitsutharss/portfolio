import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaLinkedin />, link: 'https://linkedin.com/in/sumitsuthar', label: 'LinkedIn' },
    { icon: <FaGithub />, link: 'https://github.com/sumitsuthar', label: 'GitHub' },
    { icon: <SiLeetcode />, link: 'https://leetcode.com/sumitsuthar', label: 'LeetCode' },
    { icon: <SiCodeforces />, link: 'https://codeforces.com/profile/sumitsuthar', label: 'Codeforces' },
    { icon: <FaEnvelope />, link: 'mailto:sumitsutharmain@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-heading font-bold gradient-text mb-4">
              Sumit Suthar
            </h3>
            <p className="text-gray-400 mb-4">
              Data Science Student & Freelance Designer crafting innovative solutions
              through code and creativity.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-xl text-gray-400 hover:text-neon-cyan transition-colors duration-300 interactive"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-lime transition-colors duration-300 interactive"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-heading font-bold text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-gray-400">
              <p>
                <a
                  href="mailto:sumitsutharmain@gmail.com"
                  className="hover:text-neon-cyan transition-colors duration-300 interactive"
                >
                  sumitsutharmain@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+918799664983"
                  className="hover:text-neon-lime transition-colors duration-300 interactive"
                >
                  +91 8799664983
                </a>
              </p>
              <p>Available for freelance work and collaborations</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Sumit Suthar. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> and lots of caffeine.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-lime to-neon-cyan" />
    </footer>
  )
}

export default Footer
