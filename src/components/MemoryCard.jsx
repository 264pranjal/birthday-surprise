import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function MemoryCard({ memory }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '420px',
        height: '600px',
        perspective: '1200px',
      }}
    >
      {/* Card Wrapper */}
      <div
        onClick={() => setFlipped(!flipped)}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        {/* Flip Container */}
        <motion.div
          animate={{
            rotateY: flipped ? 180 : 0,
          }}
          transition={{
            duration: 0.8,
          }}
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* FRONT */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '35px',
              overflow: 'hidden',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              background: 'rgba(255,255,255,0.08)',
              boxShadow: '0 0 30px rgba(255,255,255,0.1)',
            }}
          >
            <img
              src={memory.image}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            {/* Bottom Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                padding: '20px',
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold',
              }}
            >
              Memory #{memory.id} ❤️
            </div>
          </div>

          {/* BACK */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '35px',
              padding: '35px',
              boxSizing: 'border-box',
              background:
                'linear-gradient(to bottom right, #1a001f, #330033)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              color: '#ffe6f7',
              fontSize: '1.3rem',
              lineHeight: '1.8',
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              boxShadow: '0 0 40px rgba(255,105,180,0.2)',
            }}
          >
            {memory.message}
          </div>
        </motion.div>
      </div>

      {/* Hint */}
      <motion.p
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          textAlign: 'center',
          marginTop: '20px',
          color: '#ffd6f2',
          fontSize: '1rem',
        }}
      >
        ✨ Tap card to reveal memory ✨
      </motion.p>
    </div>
  )
}