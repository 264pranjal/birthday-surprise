import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Typewriter } from 'react-simple-typewriter'

const photos = [
  { id: 1, image: '/images/memories/memory1.jpg' },
  { id: 2, image: '/images/memories/memory2.jpg' },
  { id: 3, image: '/images/memories/memory3.jpg' },
  { id: 4, image: '/images/memories/memory4.jpg' },
  { id: 5, image: '/images/memories/memory5.jpg.JPG' },
  { id: 6, image: '/images/memories/memory6.jpg.JPG' },
  { id: 7, image: '/images/memories/memory7.jpg.JPG' },
  { id: 8, image: '/images/memories/memory8.jpg.JPG' },
  { id: 9, image: '/images/memories/memory9.jpg.JPG' },
  { id: 10, image: '/images/memories/memory10.jpg.JPG' },
  { id: 11, image: '/images/memories/memory11.jpg.JPG' },
  { id: 12, image: '/images/memories/memory12.jpg.JPG' },
  { id: 13, image: '/images/memories/memory13.jpg.JPG' },
  { id: 14, image: '/images/memories/memory14.jpg.JPG' },
  { id: 15, image: '/images/memories/memory15.jpg.JPG' },
]

export default function FinaleAnimation({ setStage }) {
  const [showBlast, setShowBlast] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowBlast(true)

      const duration = 7000
      const end = Date.now() + duration

      const interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval)
        }

        confetti({
          particleCount: 18,
          spread: 360,
          startVelocity: 45,
          ticks: 150,
          origin: {
            x: Math.random(),
            y: Math.random() * 0.7,
          },
        })
      }, 250)
    }, 4500)
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        background:
          'radial-gradient(circle at center, #220022 0%, #000000 85%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          width: '1000px',
          height: '1000px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,105,180,0.18), transparent)',
          filter: 'blur(120px)',
        }}
      />

      {/* Stars */}
      {[...Array(120)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2 + (i % 5),
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
            boxShadow: '0 0 10px white',
          }}
        />
      ))}

      {/* Shooting Stars */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shoot-${i}`}
          animate={{
            x: [-200, 1200],
            y: [0, 400],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 2,
          }}
          style={{
            position: 'absolute',
            top: `${Math.random() * 40}%`,
            left: '-200px',
            width: '180px',
            height: '2px',
            background:
              'linear-gradient(to right, white, transparent)',
            transform: 'rotate(25deg)',
          }}
        />
      ))}

      {/* Floating Hearts */}
      {[...Array(35)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          animate={{
            y: [-25, 25, -25],
            opacity: [0.3, 1, 0.3],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color: '#ff66cc',
            fontSize: `${15 + Math.random() * 20}px`,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* BEFORE BLAST */}
      {!showBlast &&
        photos.map((photo, index) => (
          <motion.img
            key={photo.id}
            src={photo.image}
            initial={{
              opacity: 0,
              scale: 0.2,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 360,
              x:
                Math.cos(index * 0.7) *
                (140 + index * 15),
              y:
                Math.sin(index * 0.7) *
                (140 + index * 15),
            }}
            transition={{
              duration: 4,
              delay: index * 0.18,
            }}
            style={{
              position: 'absolute',
              width: '120px',
              height: '160px',
              objectFit: 'cover',
              borderRadius: '24px',
              border: '3px solid rgba(255,255,255,0.2)',
              boxShadow:
                '0 0 30px rgba(255,255,255,0.3)',
            }}
          />
        ))}

      {/* FINAL REVEAL */}
      {showBlast && (
        <>
          {/* TOP PHOTO CAROUSEL */}
          <div
            style={{
              position: 'absolute',
              top: '4%',
              width: '100%',
              overflow: 'hidden',
              zIndex: 5,
            }}
          >
            <motion.div
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                display: 'flex',
                gap: '25px',
                width: 'max-content',
                paddingLeft: '20px',
              }}
            >
              {[...photos, ...photos].map((photo, index) => (
                <motion.img
                  key={`top-${index}`}
                  whileHover={{
                    scale: 1.08,
                    rotate: 2,
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4 + (index % 3),
                    repeat: Infinity,
                  }}
                  src={photo.image}
                  style={{
                    width: '140px',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '24px',
                    border: '3px solid rgba(255,255,255,0.15)',
                    boxShadow:
                      '0 0 30px rgba(255,255,255,0.25)',
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* BOTTOM PHOTO CAROUSEL */}
          <div
            style={{
              position: 'absolute',
              bottom: '4%',
              width: '100%',
              overflow: 'hidden',
              zIndex: 5,
            }}
          >
            <motion.div
              animate={{
                x: ['-50%', '0%'],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                display: 'flex',
                gap: '25px',
                width: 'max-content',
                paddingLeft: '20px',
              }}
            >
              {[...photos, ...photos].map((photo, index) => (
                <motion.img
                  key={`bottom-${index}`}
                  whileHover={{
                    scale: 1.08,
                    rotate: -2,
                  }}
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 4 + (index % 3),
                    repeat: Infinity,
                  }}
                  src={photo.image}
                  style={{
                    width: '140px',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '24px',
                    border: '3px solid rgba(255,255,255,0.15)',
                    boxShadow:
                      '0 0 30px rgba(255,255,255,0.25)',
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* CENTER GLASS CARD */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.4,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            style={{
              position: 'relative',
              zIndex: 20,
              padding: '55px 40px',
              borderRadius: '40px',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.15)',
              textAlign: 'center',
              maxWidth: '850px',
              boxShadow:
                '0 0 60px rgba(255,105,180,0.25)',
            }}
          >
            {/* GLOWING HEART */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              style={{
                fontSize: '60px',
                marginBottom: '20px',
                textShadow:
                  '0 0 30px #ff66cc, 0 0 60px #ff66cc',
              }}
            >
              ❤️
            </motion.div>

            {/* TITLE */}
            <motion.h1
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              style={{
                fontSize: '4.5rem',
                color: '#ffd6f2',
                fontWeight: 'bold',
                lineHeight: '1.4',
                textShadow:
                  '0 0 40px rgba(255,182,193,1)',
              }}
            >
              <Typewriter
                words={[
                  'HAPPY BIRTHDAY ❤️',
                  'MY GULAB JAMUN ❤️',
                  'MY FAVORITE PERSON ❤️',
                  'FOREVER YOURS ♾️',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.h1>

            {/* MESSAGE */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
              }}
              style={{
                marginTop: '30px',
                color: '#ffe6f7',
                fontSize: '1.5rem',
                lineHeight: '1.9',
                fontStyle: 'italic',
                whiteSpace: 'pre-line',
                minHeight: '160px',
              }}
            >
              <Typewriter
                words={[
                  `You are my favorite person,\nmy safest place,\nand the best thing that ever happened to me ❤️`,

                  `With you,\nevery ordinary moment\nbecomes magical ✨`,

                  `No matter what happens,\nI will always choose you ❤️`,
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={28}
                delaySpeed={2500}
              />
            </motion.div>

            {/* EXTRA LOVE LINE */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              style={{
                marginTop: '30px',
                color: '#ff9ed6',
                fontSize: '1.8rem',
                fontWeight: 'bold',
              }}
            >
              Forever Yours ♾️
            </motion.div>

            {/* BUTTON */}
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
                marginTop: '45px',
                padding: '18px 42px',
                borderRadius: '50px',
                border: 'none',
                background:
                  'linear-gradient(to right, #ff4da6, #ff66cc)',
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow:
                  '0 0 35px rgba(255,105,180,0.8)',
              }}
            >
              Reveal Your Cake 🎂
            </motion.button>
          </motion.div>
        </>
      )}
    </div>
  )
}