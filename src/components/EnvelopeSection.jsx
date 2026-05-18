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
          'radial-gradient(circle at center, #14001f 0%, #000000 80%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      {/* Floating Particles */}
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 1, 0.3],
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
            background: '#ff99cc',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 15px #ff99cc',
          }}
        />
      ))}

      {/* See Gift Button */}
      {!opened && (
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpened(true)}
          style={{
            padding: '20px 45px',
            borderRadius: '50px',
            border: 'none',
            background:
              'linear-gradient(to right, #ff4da6, #ff66cc)',
            color: 'white',
            fontSize: '1.3rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow:
              '0 0 35px rgba(255,105,180,0.8)',
            zIndex: 10,
          }}
        >
          See Your Gift 🎁
        </motion.button>
      )}

      {/* Envelope */}
      {opened && (
        <motion.div
          initial={{
            y: 200,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          style={{
            position: 'relative',
            width: '320px',
            height: '220px',
            zIndex: 10,
          }}
        >
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
                '0 0 40px rgba(255,105,180,0.5)',
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
              delay: 0.5,
            }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '110px',
              background: '#ff4da6',
              clipPath:
                'polygon(0 0, 50% 100%, 100% 0)',
              transformOrigin: 'top',
              zIndex: 20,
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
              }}
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '280px',
                minHeight: '420px',
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                zIndex: 30,
                boxShadow:
                  '0 0 50px rgba(255,255,255,0.3)',
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
                  delay: 0.5,
                  duration: 2,
                }}
              >
                <h2
                  style={{
                    textAlign: 'center',
                    marginBottom: '25px',
                    color: '#ff4da6',
                  }}
                >
                  My Love ❤️
                </h2>

                <p style={{ lineHeight: '2' }}>
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
                </p>

                {/* Question */}
                <div
                  style={{
                    marginTop: '30px',
                    textAlign: 'center',
                  }}
                >
                  <h2
                    style={{
                      color: '#ff4da6',
                      marginBottom: '10px',
                    }}
                  >
                    Will You Go On A Date With Me? ❤️
                  </h2>

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
                    whileHover={{ scale: 1.08 }}
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
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    style={{
                      marginTop: '25px',
                      textAlign: 'center',
                      color: '#ff4da6',
                      fontWeight: 'bold',
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