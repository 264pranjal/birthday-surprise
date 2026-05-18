import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

const photos = Array.from({ length: 15 }, (_, index) => ({
  id: index,
  image: `https://picsum.photos/300/400?random=${index + 1}`,
}))

export default function FinaleAnimation({ setStage }) {
  const [showBlast, setShowBlast] = useState(false)

  useEffect(() => {
    // Emotional Build Up
    setTimeout(() => {
      setShowBlast(true)

      // Massive Birthday Blast
      const duration = 6000
      const end = Date.now() + duration

      const interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval)
        }

        confetti({
          particleCount: 20,
          spread: 360,
          startVelocity: 45,
          ticks: 120,
          origin: {
            x: Math.random(),
            y: Math.random() * 0.6,
          },
        })
      }, 250)
    }, 5000)
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        background:
          'radial-gradient(circle at center, #1a001f 0%, #000000 80%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Glowing Stars */}
      {[...Array(120)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
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
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          animate={{
            y: [-30, 30, -30],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color: '#ff66cc',
            fontSize: `${15 + Math.random() * 25}px`,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Spiral Flying Memories */}
      {!showBlast &&
        photos.map((photo, index) => (
          <motion.img
            key={photo.id}
            src={photo.image}
            initial={{
              opacity: 0,
              scale: 0.2,
              x: 0,
              y: 0,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x:
                Math.cos(index * 0.8) *
                (150 + index * 12),
              y:
                Math.sin(index * 0.8) *
                (150 + index * 12),
              rotate: 360,
            }}
            transition={{
              duration: 4,
              delay: index * 0.2,
            }}
            style={{
              position: 'absolute',
              width: '120px',
              height: '160px',
              objectFit: 'cover',
              borderRadius: '20px',
              boxShadow:
                '0 0 30px rgba(255,255,255,0.3)',
              border: '3px solid rgba(255,255,255,0.2)',
            }}
          />
        ))}

{/* Birthday Blast */}
{showBlast && (
  <>
    {/* Orbiting Photos Around Text */}
{/* Top Sliding Carousel */}
<div
  style={{
    position: 'absolute',
    top: '5%',
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    zIndex: 5,
  }}
>
  <motion.div
    animate={{
      x: ['0%', '-50%'],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    }}
    style={{
      display: 'flex',
      gap: '20px',
      width: 'max-content',
    }}
  >
    {[...photos, ...photos].map((photo, index) => (
      <motion.img
        key={`top-${index}`}
        whileHover={{
          scale: 1.08,
        }}
        src={photo.image}
        style={{
          width: '130px',
          height: '170px',
          objectFit: 'cover',
          borderRadius: '20px',
          border: '3px solid rgba(255,255,255,0.2)',
          boxShadow:
            '0 0 25px rgba(255,255,255,0.25)',
        }}
      />
    ))}
  </motion.div>
</div>

{/* Bottom Sliding Carousel */}
<div
  style={{
    position: 'absolute',
    bottom: '5%',
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    zIndex: 5,
  }}
>
  <motion.div
    animate={{
      x: ['-50%', '0%'],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    }}
    style={{
      display: 'flex',
      gap: '20px',
      width: 'max-content',
    }}
  >
    {[...photos, ...photos].map((photo, index) => (
      <motion.img
        key={`bottom-${index}`}
        whileHover={{
          scale: 1.08,
        }}
        src={photo.image}
        style={{
          width: '130px',
          height: '170px',
          objectFit: 'cover',
          borderRadius: '20px',
          border: '3px solid rgba(255,255,255,0.2)',
          boxShadow:
            '0 0 25px rgba(255,255,255,0.25)',
        }}
      />
    ))}
  </motion.div>
</div>

    {/* Main Birthday Text */}
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.3,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      style={{
        textAlign: 'center',
        zIndex: 20,
        padding: '20px',
      }}
    >
      <motion.h1
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          fontSize: '5rem',
          color: '#ffd6f2',
          fontWeight: 'bold',
          lineHeight: '1.4',
          textShadow:
            '0 0 40px rgba(255,182,193,1)',
        }}
      >
        🎆 HAPPY BIRTHDAY 🎆
        <br />
        MY GULAB JAMUN ❤️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1,
        }}
        style={{
          marginTop: '30px',
          color: '#ffe6f7',
          fontSize: '1.7rem',
          fontStyle: 'italic',
        }}
      >
        You are my favorite miracle ✨
      </motion.p>

      {/* Reveal Cake Button */}
      <motion.button
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => setStage('cake')}
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        style={{
          marginTop: '50px',
          padding: '18px 40px',
          borderRadius: '50px',
          border: 'none',
          background:
            'linear-gradient(to right, #ff4da6, #ff66cc)',
          color: 'white',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow:
            '0 0 30px rgba(255,105,180,0.7)',
        }}
      >
        Click To Reveal Your Cake 🎂
      </motion.button>
    </motion.div>
  </>
)}

      {/* Giant Glow */}
      <div
        style={{
          position: 'absolute',
          width: '900px',
          height: '900px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,105,180,0.2), transparent)',
          filter: 'blur(120px)',
        }}
      />
    </div>
  )
}