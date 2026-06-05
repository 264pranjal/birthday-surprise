import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)]
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
        overflowX: 'hidden',
        position: 'relative',
        background: 'linear-gradient(-45deg, #000000, #1a0033, #33001a, #14001f)',
        backgroundSize: '400% 400%',
        animation: 'gradientMove 15s ease infinite',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      {/* ANIMATED STARS */}
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
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
            zIndex: 1,
          }}
        />
      ))}

      {/* FLOATING PARTICLES */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
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
            zIndex: 1,
          }}
        />
      ))}

      {/* FLOATING LOVE WORDS */}
      {[
        'I LOVE YOU',
        'Meri Jaan',
        'My Cutie Teddy',
        'My lovely Husband ji',
        'My lifeline',
      ].map((word, i) => (
        <motion.div
          key={`word-${i}`}
          animate={{
            y: [-15, 15, -15],
            opacity: [0.15, 0.4, 0.15],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: `${8 + i * 18}%`,
            top: `${12 + i * 14}%`,
            color: 'rgba(255, 182, 193, 0.3)',
            fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
            fontStyle: 'italic',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            textShadow: '0 0 10px rgba(255,182,193,0.2)',
            zIndex: 1,
          }}
        >
          {word}
        </motion.div>
      ))}

      {/* Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          color: '#ffe6f7',
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          marginBottom: '40px',
          textShadow: '0 0 30px rgba(255,182,193,0.8)',
          fontWeight: 'bold',
          zIndex: 5,
        }}
      >
        Your Special Gift Awaits 🎁✨
      </motion.h1>

      {/* INTERACTIVE CONTAINER */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '40px',
          width: '100%',
          maxWidth: '900px',
          minHeight: '400px',
          zIndex: 10,
          position: 'relative'
        }}
      >
        {/* Gift Box / Envelope wrapper */}
        <div style={{ position: 'relative', width: '320px', height: '280px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {!opened && (
            <motion.div
              onClick={() => setOpened(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                y: { duration: 3, repeat: Infinity },
                rotate: { duration: 4, repeat: Infinity },
              }}
              style={{ cursor: 'pointer', zIndex: 10, position: 'relative' }}
            >
              {/* Gift Box Glow */}
              <div style={{
                  position: 'absolute', width: '260px', height: '260px', borderRadius: '30px',
                  background: 'radial-gradient(circle, rgba(255,105,180,0.3), transparent)',
                  filter: 'blur(40px)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              }} />

              {/* Gift Box */}
              <div style={{
                  width: '180px', height: '180px', background: 'linear-gradient(135deg, #ff4da6, #ff66cc)',
                  borderRadius: '20px', position: 'relative', boxShadow: '0 10px 40px rgba(255,105,180,0.5)', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '30px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)' }} />
                <div style={{ position: 'absolute', width: '100%', height: '30px', background: 'linear-gradient(to right, #ffb700, #ffd700)', top: '50%', transform: 'translateY(-50%)' }} />
                <div style={{ position: 'absolute', width: '30px', height: '100%', background: 'linear-gradient(to bottom, #ffb700, #ffd700)', left: '50%', transform: 'translateX(-50%)' }} />
                <div style={{ position: 'absolute', width: '45px', height: '45px', top: '-10px', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, #ffb700, #ffd700)', borderRadius: '50%' }} />
              </div>
              <p style={{ marginTop: '20px', color: '#ffb6d9', fontSize: '1rem', fontWeight: 'bold' }}>Click to open 👆</p>
            </motion.div>
          )}

          {opened && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              style={{ position: 'absolute', width: '320px', height: '220px', zIndex: 10 }}
            >
              {/* Envelope Body */}
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(to bottom right, #ffb6d9, #ff66cc)', borderRadius: '20px', position: 'absolute', boxShadow: '0 0 30px rgba(255,105,180,0.4)' }} />
              
              {/* Envelope Flap */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{ rotateX: -180 }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{
                  position: 'absolute', width: '100%', height: '110px', background: 'linear-gradient(to bottom, #ff4da6, #ff1080)',
                  clipPath: 'polygon(0 0, 50% 100%, 100% 0)', transformOrigin: 'top', zIndex: 20,
                }}
              />
            </motion.div>
          )}
        </div>

        {/* LETTER - Appears perfectly next to or below envelope seamlessly */}
        <AnimatePresence>
          {opened && showLetter && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
              style={{
                width: '95vw',
                maxWidth: '450px',
                background: 'linear-gradient(135deg, #fff5f8, #fffbfd)',
                borderRadius: '25px',
                padding: '35px 30px',
                boxShadow: '0 15px 40px rgba(255,105,180,0.3), 0 10px 30px rgba(0,0,0,0.15)',
                color: '#330033',
                textAlign: 'left',
              }}
            >
              <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#ff4da6', fontSize: '1.6rem' }}>
                My Love ❤️
              </h2>

              <p
  style={{
    lineHeight: '2',
    fontSize: '1rem',
    marginBottom: '10px',
    whiteSpace: 'pre-line',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#4a004a',
  }}
>
{`ना चाँद की ख्वाहिश है,
ना सितारों का अरमान है,

मेरी हर दुआ में बस
तुम्हारा नाम है।

सफर छोटा हो या लंबा,
बस हाथ तुम्हारा साथ हो,

हर जन्मदिन, हर मौसम,
मेरे हिस्से में तुम्हारा प्यार हो।

तुम मिले तो लगा,
रब ने फुर्सत से लिखी है मेरी कहानी,

और उसके हर खूबसूरत पन्ने पर,
बस तुम ही तुम हो।

आज तुम्हारे जन्मदिन पर
बस इतनी सी दुआ है मेरी,

तुम्हारी हर मुस्कान सलामत रहे,
और तुम्हारा हर सपना पूरा हो।

Happy Birthday Husband Ji ❤️

Forever Yours,
Pranjal`}
</p>

<div
  style={{
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '2rem',
  }}
>
  ❤️ 🎂 ❤️
</div>

              <div style={{ textAlign: 'center' }}>
                <h3 style={{ color: '#ff4da6', marginBottom: '5px', fontSize: '1.25rem' }}>
                  Will You Go On A Date With Me? ❤️
                </h3>
                <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '20px' }}>
                  The date will be planned whenever we get time ✨
                </p>

                {/* YES */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStage('ending')}
                  style={{
                    padding: '12px 28px', borderRadius: '40px', border: 'none',
                    background: 'linear-gradient(to right, #ff4da6, #ff66cc)',
                    color: 'white', fontWeight: 'bold', cursor: 'pointer', marginRight: '15px',
                    boxShadow: '0 4px 15px rgba(255,105,180,0.4)',
                  }}
                >
                  YES 😍
                </motion.button>

                {/* NO */}
                <motion.button
                  onMouseEnter={moveButton}
                  style={{
                    position: funnyText ? 'fixed' : 'relative',
                    top: funnyText ? position.top : 'auto',
                    left: funnyText ? position.left : 'auto',
                    padding: '12px 28px', borderRadius: '40px', border: 'none',
                    background: '#555', color: 'white', fontWeight: 'bold', cursor: 'pointer',
                    zIndex: 999
                  }}
                >
                  NO 😏
                </motion.button>
              </div>

              {/* Funny Message */}
              {funnyText && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    marginTop: '20px', textAlign: 'center', color: '#ff4da6',
                    fontWeight: 'bold', fontSize: '1rem',
                  }}
                >
                  {funnyText}
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}