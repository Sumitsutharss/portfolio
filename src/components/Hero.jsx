import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import gsap from 'gsap'

// Particle Network Background
function ParticleNetwork() {
  const ref = useRef()
  const particleCount = 2000

  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05
      ref.current.rotation.y -= delta * 0.075
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00FFD1"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  )
}

// Floating 3D Geometric Shape
function FloatingGeometry() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[3, 0, 0]}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#D2FF00"
        wireframe
        emissive="#D2FF00"
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

const Hero = () => {
  const titleRef = useRef(null)

  useEffect(() => {
    // Animate title on load
    gsap.from(titleRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
    })
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-12"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <ParticleNetwork />
          <FloatingGeometry />
        </Canvas>
      </div>

      {/* Matrix Code Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 glass rounded-full text-neon-cyan border border-neon-cyan/30 text-sm font-medium">
            Welcome to my digital space
          </span>
        </motion.div>

        <div ref={titleRef} className="overflow-hidden">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black mb-10 mt-4">
            <div className="gradient-text">SUMIT</div>
            <div className="gradient-text">SUTHAR</div>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mt-2"
        >
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-lime text-black font-bold rounded-full btn-neon neon-glow text-lg interactive"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/16JHpV-m-MALR_bJeyhHE0NFHCY1lxPsN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass border-2 border-neon-lime text-neon-lime font-bold rounded-full btn-neon neon-glow-lime text-lg interactive"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero
