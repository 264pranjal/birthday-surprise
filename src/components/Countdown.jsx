import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const messages = [
  'Every day with you still feels like magic ❤️',
  'Birthday aa raha hai… ready ho jao extra pampering ke liye 😌',
  'You became my safest place without even trying 🥹',
  'How are you becoming cuter every year, my sweet teddy bear? 😭',
  'Even the stars look softer when I think about you ✨',
]

export default function Countdown({ setStage }) {
  const targetDate = new Date('2026-06-09T00:00:00+05:30')

  const [timeLeft, setTimeLeft] = useState({})
  const [stars, setStars] = useState([])

  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
    }))

    setStars(generatedStars)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft(null)
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const message = messages[new Date().getDate() % messages.length]

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background:
          'linear-gradient(to bottom, #020024, #090979, #000000)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: star.delay,
          }}
          style={{
            position: 'absolute',
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: 'white',
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
        />
      ))}

      {/* Main Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            fontSize: '3rem',
            color: 'white',
            lineHeight: '1.4',
            fontWeight: 'bold',
            textShadow: '0 0 20px rgba(255,255,255,0.5)',
          }}
        >
          A Special Surprise Is Waiting For
          <br />
          <span style={{ color: '#ff8ad8' }}>
            My Gulab Jamun ❤️
          </span>
        </motion.h1>

        {/* Timer */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginTop: '50px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {timeLeft &&
            Object.entries(timeLeft).map(([label, value]) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                key={label}
                style={{
                  width: '120px',
                  padding: '25px',
                  borderRadius: '25px',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 0 20px rgba(255,255,255,0.1)',
                }}
              >
                <h2
                  style={{
                    fontSize: '3rem',
                    color: '#ffc0eb',
                  }}
                >
                  {value}
                </h2>

                <p
                  style={{
                    marginTop: '10px',
                    color: 'white',
                    textTransform: 'capitalize',
                  }}
                >
                  {label}
                </p>
              </motion.div>
            ))}
        </div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            marginTop: '40px',
            color: '#ffd6f2',
            fontSize: '1.3rem',
            fontStyle: 'italic',
            maxWidth: '700px',
          }}
        >
          {message}
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: timeLeft ? 1 : 1.08,
          }}
          whileTap={{ scale: 0.95 }}
          disabled={!!timeLeft}
        //disabled={false}
          onClick={() => setStage('intro')}
          style={{
            marginTop: '50px',
            padding: '18px 40px',
            borderRadius: '50px',
            border: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: timeLeft ? 'not-allowed' : 'pointer',
            background: timeLeft
              ? 'gray'
              : 'linear-gradient(to right, #ff4da6, #ff66cc)',
            // cursor: 'pointer',
            // background: 'linear-gradient(to right, #ff4da6, #ff66cc)',
            color: 'white',
            boxShadow: '0 0 20px rgba(255,105,180,0.5)',
          }}
        >
          Apna Surprise Dekhne Ke Liye Merko Click Kro ❤️
        </motion.button>
      </div>
    </div>
  )
}