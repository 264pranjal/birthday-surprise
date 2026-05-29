import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function CakeSection({ setStage }) {
  const [blown, setBlown] = useState(false)

  const vibratePhone = () => {
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200])
    }
  }

  const handleBlowCandles = () => {
    setBlown(true)
    vibratePhone()

    setTimeout(() => {
      setStage('envelope')
    }, 4500)
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        background:
          'linear-gradient(to bottom, #050010, #170021, #000000)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
      }}
    >
      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          width: '900px',
          height: '900px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,0,128,0.15), transparent)',
          filter: 'blur(120px)',
        }}
      />

      {/* STARS */}
      {[...Array(70)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'white',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px white',
          }}
        />
      ))}

      {/* HEADING */}
      <motion.h1
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{
          opacity: 1,
          y: 0,
          textShadow: [
            '0 0 25px rgba(255,182,193,0.8)',
            '0 0 40px rgba(255,182,193,1)',
            '0 0 25px rgba(255,182,193,0.8)',
          ],
        }}
        transition={{
          duration: 1,
          textShadow: {
            duration: 3,
            repeat: Infinity,
          },
        }}
        style={{
          color: '#ffd6f2',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 'bold',
          textAlign: 'center',
          textShadow:
            '0 0 25px rgba(255,182,193,0.8)',
          zIndex: 10,
          marginBottom: '12px',
        }}
      >
        Your Dream Rolls Royace Cake 🎂🏎️ <br />
        With this I wish you achieve your dream of owning a Rolls Royace one day! 😘
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [0, -8, 0],
        }}
        transition={{
          delay: 0.7,
          duration: 1,
          y: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        style={{
          color: '#ffd6f2',
          fontSize: 'clamp(1rem, 3vw, 1.8rem)',
          marginBottom: '20px',
          zIndex: 10,
          textAlign: 'center',
        }}
      >
        Made with love for my favorite person ❤️
      </motion.p>

      {/* MAIN CAKE AREA */}
      <motion.div
        initial={{
          scale: 0.7,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        style={{
          position: 'relative',
          width: '500px',
          height: '320px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        {/* SOFT GLOW */}
        <div
          style={{
            position: 'absolute',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,20,147,0.22), transparent)',
            filter: 'blur(70px)',
            zIndex: 1,
          }}
        />

        {/* MUSTANG */}
        <motion.img
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          src="/images/rolls royace.png"
          alt="rolls royace"
          style={{
            width: '320px',
            maxWidth: '90vw',
            position: 'absolute',
            bottom: '55px',
            filter:
              'drop-shadow(0 0 25px rgba(255,105,180,0.7))',
            zIndex: 5,
          }}
        />

        {/* CANDLES */}
        {!blown &&
          [...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '70px',
                left: `${160 + i * 42}px`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 20,
              }}
            >
              {/* FLAME */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                }}
                style={{
                  width: '14px',
                  height: '22px',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, #ffdd55, orange)',
                  boxShadow:
                    '0 0 18px orange',
                }}
              />

              {/* CANDLE */}
              <div
                style={{
                  width: '8px',
                  height: '28px',
                  background: '#fff',
                  borderRadius: '10px',
                  marginTop: '-4px',
                }}
              />
            </div>
          ))}

        {/* SMOKE */}
        {blown &&
          [...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0.8,
                y: 0,
              }}
              animate={{
                opacity: 0,
                y: -90,
              }}
              transition={{
                duration: 3,
              }}
              style={{
                position: 'absolute',
                top: '90px',
                left: `${160 + i * 42}px`,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background:
                  'rgba(255,255,255,0.35)',
                filter: 'blur(10px)',
                zIndex: 20,
              }}
            />
          ))}
      </motion.div>

      {/* BUTTON */}
      {!blown && (
        <motion.button
          whileHover={{
            scale: 1.06,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={handleBlowCandles}
          style={{
            marginTop: '5px',
            padding: '16px 38px',
            borderRadius: '50px',
            border: 'none',
            background:
              'linear-gradient(to right, #ff4da6, #ff66cc)',
            color: 'white',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow:
              '0 0 30px rgba(255,105,180,0.7)',
            zIndex: 10,
          }}
        >
          Blow The Candles 🕯️
        </motion.button>
      )}

      {/* WISH SECTION */}
      {blown && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          style={{
            marginTop: '20px',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              textShadow: [
                '0 0 20px rgba(255,182,193,0.8)',
                '0 0 35px rgba(255,182,193,1)',
                '0 0 20px rgba(255,182,193,0.8)',
              ],
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              textShadow: {
                duration: 2.5,
                repeat: Infinity,
              },
            }}
            style={{
              color: '#ffe6f7',
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              textShadow:
                '0 0 20px rgba(255,182,193,0.8)',
            }}
          >
            Make A Wish ❤️
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: [0, -5, 0],
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              y: {
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            style={{
              marginTop: '12px',
              color: '#ffd6f2',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            }}
          >
            May all your dreams shine brighter ✨
          </motion.p>
        </motion.div>
      )}
    </div>
  )
}