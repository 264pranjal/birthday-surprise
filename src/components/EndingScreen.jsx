import React from 'react'
import { motion } from 'framer-motion'

export default function EndingScreen() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        background:
          'linear-gradient(to bottom, #020024, #090979, #000000)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      {/* Stars */}
      {[...Array(120)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + (i % 4),
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: 'white',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 12px white',
          }}
        />
      ))}

      {/* Floating Hearts */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40],
            opacity: [0.2, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            bottom: '-20px',
            color: '#ff66cc',
            fontSize: `${15 + Math.random() * 20}px`,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Moon Glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,255,255,0.8), rgba(255,255,255,0.1))',
          filter: 'blur(10px)',
        }}
      />

      {/* Final Quote */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 2,
        }}
        style={{
          zIndex: 10,
        }}
      >
        <motion.h1
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          style={{
            fontSize: '4rem',
            color: '#ffd6f2',
            fontWeight: 'bold',
            lineHeight: '1.5',
            textShadow:
              '0 0 35px rgba(255,182,193,0.9)',
          }}
        >
          And I’d choose you again
          <br />
          in every lifetime ❤️
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
            duration: 2,
          }}
          style={{
            marginTop: '40px',
            fontSize: '2rem',
            color: '#ffe6f7',
          }}
        >
          Forever Starts Again ✨
        </motion.p>
      </motion.div>
    </div>
  )
}