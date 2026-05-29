import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function EnvelopeSection({ setStage }) {
  const [opened, setOpened] = useState(false)
  const [showLetter, setShowLetter] = useState(false)
  const [position, setPosition] = useState({
    top: '70%',
    left: '60%',
  })

  const [funnyText, setFunnyText] = useState('')

  const funnyMessages = [
    'Aisa nahi chalega 😌',
    'Only YES accepted ❤️',
    'Try harder mister 😭',
    'No option disabled by wife 💅',
    'Bhagna band kro 😂',
  ]

  useEffect(() => {
    if (opened) {
      setTimeout(() => {
        setShowLetter(true)
      }, 1200)
    }
  }, [opened])

  const moveButton = () => {
    const randomMessage =
      funnyMessages[
        Math.floor(Math.random() * funnyMessages.length)
      ]

    setFunnyText(randomMessage)

    setPosition({
      top: `${Math.random() * 75}%`,
      left: `${Math.random() * 75}%`,
    })
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        background:
          'linear-gradient(135deg, #0a0015 0%, #1a0030 50%, #000000 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
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
            'radial-gradient(circle, rgba(255,20,147,0.2), transparent)',
          filter: 'blur(100px)',
        }}
      />

      {/* Floating Particles */}
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-30, 30, -30],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            borderRadius: '50%',
            background: i % 2 === 0 ? '#ff99cc' : '#ffb6d9',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: i % 2 === 0 ? '0 0 15px #ff99cc' : '0 0 10px #ffb6d9',
          }}
        />
      ))}

      {/* Title Animation */}
      <motion.h1
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        style={{
          color: '#ffe6f7',
          fontSize: 'clamp(2rem, 5vw, 2.8rem)',
          marginBottom: '60px',
          textShadow: '0 0 30px rgba(255,182,193,0.8)',
          fontWeight: 'bold',
          zIndex: 5,
        }}
      >
        Your Special Gift Awaits 🎁✨
      </motion.h1>

      {/* Gift Box Animation */}
      {!opened && (
        <motion.div
          onClick={() => setOpened(true)}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
            },
            rotate: {
              duration: 4,
              repeat: Infinity,
            },
          }}
          style={{
            cursor: 'pointer',
            zIndex: 10,
            position: 'relative',
          }}
        >
          {/* Gift Box Glow */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            style={{
              position: 'absolute',
              width: '280px',
              height: '280px',
              borderRadius: '30px',
              background:
                'radial-gradient(circle, rgba(255,105,180,0.3), transparent)',
              filter: 'blur(50px)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />

          {/* Gift Box */}
          <motion.div
            style={{
              width: '200px',
              height: '200px',
              background: 'linear-gradient(135deg, #ff4da6, #ff66cc)',
              borderRadius: '20px',
              position: 'relative',
              boxShadow:
                '0 10px 40px rgba(255,105,180,0.5), inset 0 2px 10px rgba(255,255,255,0.2)',
              overflow: 'hidden',
            }}
          >
            {/* Gift Box Shine */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '40px',
                background:
                  'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
                borderRadius: '20px 20px 0 0',
              }}
            />

            {/* Ribbon - Horizontal */}
            <motion.div
              animate={{
                scaleX: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              style={{
                position: 'absolute',
                width: '100%',
                height: '35px',
                background: 'linear-gradient(to right, #ffb700, #ffd700)',
                top: '50%',
                transform: 'translateY(-50%)',
                boxShadow:
                  '0 0 20px rgba(255,183,0,0.6)',
              }}
            />

            {/* Ribbon - Vertical */}
            <motion.div
              animate={{
                scaleY: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              style={{
                position: 'absolute',
                width: '35px',
                height: '100%',
                background: 'linear-gradient(to bottom, #ffb700, #ffd700)',
                left: '50%',
                transform: 'translateX(-50%)',
                boxShadow:
                  '0 0 20px rgba(255,183,0,0.6)',
              }}
            />

            {/* Bow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              style={{
                position: 'absolute',
                width: '50px',
                height: '50px',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'radial-gradient(circle, #ffb700, #ffd700)',
                borderRadius: '50%',
                boxShadow:
                  '0 0 25px rgba(255,183,0,0.8), inset 0 2px 5px rgba(255,255,255,0.4)',
              }}
            />
          </motion.div>

          {/* Click Text */}
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            style={{
              marginTop: '30px',
              color: '#ffb6d9',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              zIndex: 5,
            }}
          >
            Click to open 👆
          </motion.p>
        </motion.div>
      )}

      {/* Envelope */}
      {opened && (
        <motion.div
          initial={{
            scale: 0.3,
            opacity: 0,
            y: 100,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
          style={{
            position: 'relative',
            width: '320px',
            height: '220px',
            zIndex: 10,
          }}
        >
          {/* Opening Sparkles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              initial={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: 0,
                scale: 0,
                x: Math.cos((i / 12) * Math.PI * 2) * 150,
                y: Math.sin((i / 12) * Math.PI * 2) * 150,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#ffb700',
                boxShadow: '0 0 15px #ffb700',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}

          {/* Envelope Body */}
          <div
            style={{
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(to bottom right, #ffb6d9, #ff66cc)',
              borderRadius: '20px',
              position: 'absolute',
              overflow: 'hidden',
              boxShadow:
                '0 0 40px rgba(255,105,180,0.5), inset 0 2px 15px rgba(255,255,255,0.3)',
            }}
          />

          {/* Envelope Shine */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '30px',
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
              borderRadius: '20px 20px 0 0',
              zIndex: 1,
            }}
          />

          {/* Envelope Flap */}
          <motion.div
            initial={{
              rotateX: 0,
            }}
            animate={{
              rotateX: -180,
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
            }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '110px',
              background: 'linear-gradient(to bottom, #ff4da6, #ff1080)',
              clipPath:
                'polygon(0 0, 50% 100%, 100% 0)',
              transformOrigin: 'top',
              zIndex: 20,
              boxShadow:
                '0 5px 20px rgba(0,0,0,0.3)',
            }}
          />

          {/* Letter */}
          {showLetter && (
            <motion.div
              initial={{
                y: 120,
                opacity: 0,
              }}
              animate={{
                y: -120,
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                type: 'spring',
                stiffness: 80,
              }}
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '280px',
                minHeight: '420px',
                background: 'linear-gradient(135deg, #fff5f8, #fffbfd)',
                borderRadius: '20px',
                padding: '30px',
                zIndex: 30,
                boxShadow:
                  '0 0 50px rgba(255,105,180,0.4), 0 10px 40px rgba(0,0,0,0.2)',
                color: '#330033',
                textAlign: 'left',
                overflow: 'hidden',
              }}
            >
              {/* Love Letter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 1.5,
                }}
              >
                <motion.h2
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(255,105,180,0.3)',
                      '0 0 35px rgba(255,105,180,0.6)',
                      '0 0 20px rgba(255,105,180,0.3)',
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  style={{
                    textAlign: 'center',
                    marginBottom: '25px',
                    color: '#ff4da6',
                    fontSize: '1.8rem',
                  }}
                >
                  My Love ❤️
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.2,
                  }}
                  style={{ lineHeight: '2', fontSize: '0.95rem' }}
                >
                  You somehow turned ordinary days
                  into my favorite memories.
                  <br />
                  <br />
                  Even after all this time,
                  my heart still gets excited
                  because of you.
                  <br />
                  <br />
                  And honestly…
                  <br />
                  <br />
                  I never want to stop making
                  memories with my sweet teddy bear ❤️
                </motion.p>

                {/* Question */}
                <div
                  style={{
                    marginTop: '30px',
                    textAlign: 'center',
                  }}
                >
                  <motion.h2
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1,
                      textShadow: [
                        '0 0 15px rgba(255,105,180,0.2)',
                        '0 0 25px rgba(255,105,180,0.5)',
                        '0 0 15px rgba(255,105,180,0.2)',
                      ],
                    }}
                    transition={{
                      scale: { delay: 1.5 },
                      opacity: { delay: 1.5 },
                      textShadow: {
                        duration: 2,
                        repeat: Infinity,
                      },
                    }}
                    style={{
                      color: '#ff4da6',
                      marginBottom: '10px',
                      fontSize: '1.3rem',
                    }}
                  >
                    Will You Go On A Date With Me? ❤️
                  </motion.h2>

                  <p
                    style={{
                      color: '#666',
                      marginBottom: '25px',
                    }}
                  >
                    The date will be planned
                    whenever we get time ✨
                  </p>

                  {/* YES */}
                  <motion.button
                    whileHover={{ scale: 1.12, boxShadow: '0 0 25px rgba(255,105,180,0.8)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setStage('ending')}
                    style={{
                      padding: '14px 28px',
                      borderRadius: '40px',
                      border: 'none',
                      background:
                        'linear-gradient(to right, #ff4da6, #ff66cc)',
                      color: 'white',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      marginRight: '15px',
                      boxShadow:
                        '0 0 20px rgba(255,105,180,0.5)',
                    }}
                  >
                    YES 😍
                  </motion.button>

                  {/* NO */}
                  <motion.button
                    onMouseEnter={moveButton}
                    animate={{
                      rotate: [0, 15, -15, 0],
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    style={{
                      position: 'fixed',
                      top: position.top,
                      left: position.left,
                      padding: '14px 28px',
                      borderRadius: '40px',
                      border: 'none',
                      background: '#555',
                      color: 'white',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                  >
                    NO 😏
                  </motion.button>
                </div>

                {/* Funny Message */}
                {funnyText && (
                  <motion.p
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      y: -20,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 20,
                    }}
                    style={{
                      marginTop: '25px',
                      textAlign: 'center',
                      color: '#ff4da6',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                      textShadow: '0 2px 10px rgba(255,105,180,0.3)',
                    }}
                  >
                    {funnyText}
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  )
}