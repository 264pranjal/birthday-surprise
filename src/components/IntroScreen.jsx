import React from 'react'
import { motion } from 'framer-motion'

export default function IntroScreen({ setStage }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background:
          'linear-gradient(to bottom, #000000, #1a0033, #33001a)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + i % 3,
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color: '#ff66cc',
            fontSize: `${20 + Math.random() * 20}px`,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
        }}
        style={{
          fontSize: '4rem',
          color: '#ffd6f2',
          fontWeight: 'bold',
          lineHeight: '1.4',
          textShadow: '0 0 25px rgba(255,182,193,0.8)',
          zIndex: 10,
        }}
      >
        Happy Birthday
        <br />
        My Dear Husband ❤️
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
          duration: 1,
        }}
        style={{
          marginTop: '20px',
          fontSize: '1.5rem',
          color: '#ffe6f7',
          zIndex: 10,
        }}
      >
        From Your Cute Rasmalai ✨
      </motion.p>

      {/* Button */}
      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setStage('story')}
        style={{
          marginTop: '50px',
          padding: '18px 45px',
          borderRadius: '50px',
          border: 'none',
          background:
            'linear-gradient(to right, #ff4da6, #ff66cc)',
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 0 30px rgba(255,105,180,0.7)',
          zIndex: 10,
        }}
      >
        Let Me Take You On A Ride ✨
      </motion.button>

      {/* Bottom Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'rgba(255,105,180,0.15)',
          filter: 'blur(120px)',
        }}
      />
    </div>
  )
}