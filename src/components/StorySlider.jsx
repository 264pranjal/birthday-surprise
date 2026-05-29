import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MemoryCard from './MemoryCard'

const memories = [
  {
    id: 1,
    image: '/images/memories/memory1.jpg',
    message: `The day I realized I’m never getting enough of aap 😭❤️`,
  },

  {
    id: 2,
    image: '/images/memories/memory2.jpg',
    message: `Aapke saath har normal moment bhi special lagta hai ✨`,
  },

  {
    id: 3,
    image: '/images/memories/memory3.jpg',
    message: `Still can’t believe this handsome banda is my husband 😌❤️`,
  },

  {
    id: 4,
    image: '/images/memories/memory4.jpg',
    message: `This was one of those moments where I just wanted time to stop 🥺`,
  },

  {
    id: 5,
    image: '/images/memories/memory5.jpg.JPG',
    message: `Aapki smile = my instant happiness button 😭💖`,
  },

  {
    id: 6,
    image: '/images/memories/memory6.jpg.JPG',
    message: `Every picture with aap automatically becomes my favorite 📸❤️`,
  },

  {
    id: 7,
    image: '/images/memories/memory7.jpg.JPG',
    message: `Mujhe aaj bhi aapse flirt karna utna hi pasand hai 😏💋`,
  },

  {
    id: 8,
    image: '/images/memories/memory8.jpg.JPG',
    message: `Aapke hugs honestly duniya ki safest jagah hain 🥺`,
  },

  {
    id: 9,
    image: '/images/memories/memory9.jpg.JPG',
    message: `9 months… and still obsessed with aap 😭❤️`,
  },

  {
    id: 10,
    image: '/images/memories/memory10.jpg.JPG',
    message: `Kabhi kabhi lagta hai aap cute hone ki overacting karte ho 😤❤️`,
  },

  {
    id: 11,
    image: '/images/memories/memory11.jpg.JPG',
    message: `Aapke bina literally sab boring lagta hai 🥺`,
  },

  {
    id: 12,
    image: '/images/memories/memory12.jpg.JPG',
    message: `This memory deserves replay forever ✨`,
  },

  {
    id: 13,
    image: '/images/memories/memory13.jpg.JPG',
    message: `Warning: birthday ke baad kisses aur cuddles aur increase hone wale hain 😌💋`,
  },

  {
    id: 14,
    image: '/images/memories/memory14.jpg.JPG',
    message: `Aap sirf husband nahi ho… mera comfort person ho ❤️`,
  },

  {
    id: 15,
    image: '/images/memories/memory15.jpg.JPG',
    message: `And this is just the beginning of our forever 🥹✨❤️`,
  },
]

export default function StorySlider({ setStage }) {
  const [current, setCurrent] = useState(0)

  const next = () => {
    if (current === memories.length - 1) {
      setStage('finale')
    } else {
      setCurrent(current + 1)
    }
  }

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background:
          'linear-gradient(to bottom, #000000, #12001f, #1e0033)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        padding: '20px',
      }}
    >
      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${15 + Math.random() * 20}px`,
            color: '#ff66cc',
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          color: '#ffd6f2',
          fontSize: '2.8rem',
          marginBottom: '30px',
          textAlign: 'center',
          fontWeight: 'bold',
          textShadow: '0 0 20px rgba(255,182,193,0.6)',
          zIndex: 10,
        }}
      >
        Our Beautiful Journey ❤️
      </motion.h1>

      {/* Animated Memory Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.7 }}
          style={{
            zIndex: 10,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <MemoryCard memory={memories[current]} />
        </motion.div>
      </AnimatePresence>

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginTop: '40px',
          zIndex: 10,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          style={{
            padding: '15px 35px',
            borderRadius: '50px',
            border: 'none',
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 20px rgba(255,255,255,0.1)',
          }}
        >
          ⬅ Back
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          style={{
            padding: '15px 35px',
            borderRadius: '50px',
            border: 'none',
            background:
              'linear-gradient(to right, #ff4da6, #ff66cc)',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 0 25px rgba(255,105,180,0.6)',
          }}
        >
          {current === memories.length - 1
            ? 'Final Surprise ✨'
            : 'Next ➡'}
        </motion.button>
      </div>

      {/* Progress */}
      <div
        style={{
          marginTop: '25px',
          color: '#ffd6f2',
          fontSize: '1rem',
          zIndex: 10,
        }}
      >
        Memory {current + 1} of {memories.length}
      </div>

      {/* Bottom Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-200px',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'rgba(255,105,180,0.12)',
          filter: 'blur(150px)',
        }}
      />
    </div>
  )
}