import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const messages = [
  'Aap har saal aur zyada cute kaise ho jaate ho? 😭',
  'Every day with you still feels like magic ❤️',
  'Birthday aa raha hai… ready ho jaiye extra pampering ke liye 😌',
  'Aap bina try kiye hi meri safest place ban gaye 🥹',
  'Aapke baare mein sochu toh stars bhi zyada pretty lagte hain ✨',
  'Kabhi kabhi lagta hai aap husband kam, full-time distraction zyada ho 😏',
  'Warning: Birthday ke baad kisses ki quantity dangerously increase hone wali hai 💋',
  'Aapke hugs honestly meri therapy hain 🥺❤️',
  'Aaj bhi jab aap mujhe apna bolte ho toh blush aa jata hai 😭',
  'Mujhe aaj bhi aapke saath flirt karna utna hi pasand hai 😌',
  'You + Me = permanently obsessed situation 💞',
  'Dil aaj bhi bolta hai — “ye handsome banda mera husband kaise ban gaya?” 😭',
  'Aapki voice mere worst days bhi better bana deti hai ❤️',
  'Aapke bina ghar ghar nahi lagta 🥹',
  'Sach bolu toh aap har saal aur zyada hot lagne lagte ho 😮‍💨🔥',
  'Official notice: birthday boy deserves unlimited cuddles tonight 😌',
  'Aapki smile meri favorite addiction hai ❤️',
  'Pata nahi kaise… but aapke saath boring days bhi romantic lagte hain ✨',
  'Forever aapko irritate karna hi meri love language hai 😭❤️',
  'Bas ek problem hai… aap itne cute kyun ho? Control hi nahi hota 😏💋',
  'Aapko pata hai? Aaj bhi mera favorite place sirf aapki baahon mein hi hai 🥺❤️',
  'Birthday boy ko officially warning — aaj extra romance, extra teasing aur extra kisses milne wali hain 😏💋'
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

const today = new Date()
const startDate = new Date('2026-05-19')
const diffDays = Math.floor(
  (today - startDate) / (1000 * 60 * 60 * 24)
)

const message =
  messages[(diffDays + 1) % messages.length]

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