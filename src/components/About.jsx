import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

// Animated 3D Sphere
function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#00FFD1"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

// Counter Animation Component
const Counter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (inView) {
      let start = 0
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref} className="text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  )
}

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const stats = [
    { value: 35, suffix: '+', label: 'Projects Completed' },
    { value: 2, suffix: '+', label: 'Years Experience' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px]"
          >
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <AnimatedSphere />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            </Canvas>

            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-72 h-72 glass rounded-full border border-neon-cyan/30 flex items-center justify-center neon-glow float-slow">
                <img
                  src="/logo.png"
                  alt="Sumit Suthar logo"
                  className="w-100 h-100 object-contain"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-neon-lime rounded-lg animate-pulse" />
            <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-neon-cyan rounded-full animate-pulse" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a <span className="text-neon-cyan font-semibold">BTech student</span> at{' '}
                <span className="text-neon-lime font-semibold">Parul Institute of Engineering & Technology</span>{' '}
                (2024-2028), passionate about leveraging data to solve real-world problems.
              </p>
              
              <p>
                My journey combines the analytical power of{' '}
                <span className="text-neon-cyan font-semibold">data science</span> with the
                creative flair of <span className="text-neon-lime font-semibold">design</span>,
                allowing me to build solutions that are both functional and visually stunning.
              </p>
              
              <p>
                From analyzing IPL fielding data to visualizing air quality trends, I thrive
                on turning complex datasets into actionable insights and compelling stories.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="text-center glass p-4 rounded-lg border border-neon-cyan/20"
                >
                  <Counter end={stat.value} suffix={stat.suffix} />
                  <p className="text-sm text-gray-400 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
