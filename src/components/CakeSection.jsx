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
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,0,128,0.25), transparent)',
          filter: 'blur(120px)',
        }}
      />

      {/* Sparkles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
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
            boxShadow: '0 0 12px white',
          }}
        />
      ))}

      {/* Heading */}
      <motion.h1
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        style={{
          color: '#ffd6f2',
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          textShadow:
            '0 0 30px rgba(255,182,193,0.9)',
          marginBottom: '30px',
          zIndex: 10,
        }}
      >
        Your Dream Mustang Cake 🎂🏎️
      </motion.h1>

      {/* Cake Container */}
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
          duration: 1.5,
        }}
        style={{
          position: 'relative',
          width: '450px',
          height: '320px',
          zIndex: 10,
        }}
      >
        {/* Cake Base */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '360px',
            height: '90px',
            borderRadius: '40px',
            background:
              'linear-gradient(to right, #ff66cc, #ff1a75)',
            boxShadow:
              '0 0 45px rgba(255,105,180,0.7)',
          }}
        />

        {/* Mustang PNG */}
        <motion.img
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          src="/images/mustang.png"
          alt="Mustang Cake"
          style={{
            width: '420px',
            maxWidth: '95vw',
            position: 'absolute',
            bottom: '35px',
            left: '50%',
            transform: 'translateX(-50%)',
            filter:
              'drop-shadow(0 0 35px rgba(255,105,180,0.8))',
            zIndex: 5,
          }}
        />

        {/* Candles */}
        {!blown &&
          [...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '25px',
                left: `${105 + i * 50}px`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 20,
              }}
            >
              {/* Flame */}
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
                  width: '18px',
                  height: '28px',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, #ffdd55, orange)',
                  boxShadow:
                    '0 0 25px orange',
                }}
              />

              {/* Candle */}
              <div
                style={{
                  width: '10px',
                  height: '40px',
                  background: '#ffe6f7',
                  borderRadius: '10px',
                  marginTop: '-5px',
                }}
              />
            </div>
          ))}

        {/* Smoke */}
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
                y: -120,
              }}
              transition={{
                duration: 3,
              }}
              style={{
                position: 'absolute',
                top: '35px',
                left: `${105 + i * 50}px`,
                width: '25px',
                height: '25px',
                borderRadius: '50%',
                background:
                  'rgba(255,255,255,0.35)',
                filter: 'blur(10px)',
                zIndex: 20,
              }}
            />
          ))}
      </motion.div>

      {/* Button */}
      {!blown && (
        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={handleBlowCandles}
          style={{
            marginTop: '140px',
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
            zIndex: 10,
          }}
        >
          Blow The Candles 🕯️
        </motion.button>
      )}

      {/* Make A Wish */}
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
            duration: 1.2,
          }}
          style={{
            marginTop: '140px',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          <h2
            style={{
              color: '#ffe6f7',
              fontSize: '3rem',
              textShadow:
                '0 0 25px rgba(255,182,193,0.9)',
            }}
          >
            Make A Wish ❤️
          </h2>

          <p
            style={{
              marginTop: '15px',
              color: '#ffd6f2',
              fontSize: '1.2rem',
            }}
          >
            May all your dreams shine brighter ✨
          </p>
        </motion.div>
      )}
    </div>
  )
}