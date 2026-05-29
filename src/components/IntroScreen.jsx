import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Howl } from 'howler'

export default function IntroScreen({ setStage }) {
  // Romantic Music
  useEffect(() => {
    const sound = new Howl({
      src: ['/music/romantic.mp3'], // add your music in public/music
      volume: 0.4,
      loop: true,
    })

    sound.play()

    return () => {
      sound.stop()
    }
  }, [])

  // Mobile vibration on click
  const handleClick = () => {
    if (navigator.vibrate) {
      navigator.vibrate(120)
    }

    setStage('story')
  }

  const floatingQuotes = [
    'You are my favorite feeling ❤️',
    'Forever starts with you ✨',
    'My safest place 🥺',
    'My sweet teddy bear 😭',
    'My Gulab Jamun ❤️',
  ]

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',

        background:
          'linear-gradient(-45deg, #000000, #1a0033, #33001a, #14001f)',

        backgroundSize: '400% 400%',
        animation: 'gradientMove 15s ease infinite',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      {/* ANIMATED STARS */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.6, 1],
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

      {/* FLOATING HEARTS */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.4, 1, 0.4],
            rotate: [0, 20, -20, 0],
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
            fontSize: `${18 + Math.random() * 22}px`,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* GLOWING MOON */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        style={{
          position: 'absolute',
          top: '70px',
          right: '70px',
          width: '130px',
          height: '130px',
          borderRadius: '50%',
          background: '#fff6cc',
          boxShadow: '0 0 100px #fff6cc',
        }}
      />

      {/* FLOATING LOVE QUOTES */}
      {floatingQuotes.map((quote, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
            color: 'rgba(255,255,255,0.25)',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            pointerEvents: 'none',
          }}
        >
          {quote}
        </motion.div>
      ))}

      {/* MAIN GLASS CARD */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        style={{
          position: 'relative',
          zIndex: 10,
          marginTop: '-370px',
          padding: '50px 35px',
          borderRadius: '35px',

          background: 'rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',

          border: '1px solid rgba(255,255,255,0.15)',

          boxShadow:
            '0 0 50px rgba(255,105,180,0.15)',
          maxWidth: '900px',
        }}
      >
        {/* HEADING */}
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            lineHeight: '1.4',
            color: '#ffd6f2',

            textShadow:
              '0 0 30px rgba(255,182,193,0.9)',
          }}
        >
          <Typewriter
            words={[
              'Happy Birthday ❤️',
              'My Dear Husband ❤️',
              'My Sweet Teddy Bear 😘',
              'My Gulab Jamun 😍❤️',
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={2200}
          />
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          style={{
            marginTop: '25px',
            color: '#ffe6f7',
            fontSize: '1.4rem',
            lineHeight: '1.8',
          }}
        >
          From Your Cute Rasmalai ✨
          <br />
          Let Me Take You On Our
          <br />
          Beautiful 9 Months Journey ❤️
        </motion.p>

        {/* BUTTON */}
        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          animate={{
            y: [0, -10, 0],

            boxShadow: [
              '0 0 20px rgba(255,105,180,0.4)',
              '0 0 45px rgba(255,105,180,0.9)',
              '0 0 20px rgba(255,105,180,0.4)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          onClick={handleClick}
          style={{
            marginTop: '45px',

            padding: '20px 45px',

            borderRadius: '50px',
            border: 'none',

            background:
              'linear-gradient(to right, #ff4da6, #ff66cc)',

            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 'bold',

            cursor: 'pointer',
          }}
        >
          Fasten your seatbelt the ride is going to start✨
        </motion.button>
      </motion.div>

      {/* BOTTOM GLOW */}
      <div
        style={{
          position: 'absolute',
          bottom: '-250px',

          width: '700px',
          height: '700px',

          borderRadius: '50%',

          background:
            'radial-gradient(circle, rgba(255,105,180,0.25), transparent)',

          filter: 'blur(120px)',
        }}
      />

      {/* Couple Silhouette */}
      <motion.div
        initial={{
          opacity: 0,
          y: 120,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.5,
          duration: 2,
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Moon Glow */}
          <div
            style={{
              position: 'absolute',
              bottom: '80px',
              width: '350px',
              height: '350px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255,255,255,0.18), transparent)',
              filter: 'blur(30px)',
            }}
          />

          {/* Ground Shadow */}
          <div
            style={{
              position: 'absolute',
              bottom: '-10px',
              width: '300px',
              height: '40px',
              background: 'rgba(0,0,0,0.45)',
              borderRadius: '50%',
              filter: 'blur(20px)',
            }}
          />

          {/* Couple PNG */}
          <motion.img
            src="/images/couple.png"
            alt="couple silhouette"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            style={{
              width: '420px',
              maxWidth: '90vw',
              objectFit: 'contain',
              filter:
                'drop-shadow(0 0 25px rgba(255,255,255,0.08))',
            }}
          />

          {/* Floating Heart */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            style={{
              position: 'absolute',
              top: '20%',
              fontSize: '40px',
              color: '#ff66cc',
              textShadow:
                '0 0 25px #ff66cc, 0 0 60px #ff66cc',
            }}
          >
            ❤️
          </motion.div>

          {/* Sparkles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.6, 1],
              }}
              transition={{
                duration: 2 + i % 3,
                repeat: Infinity,
              }}
              style={{
                position: 'absolute',
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 50}%`,
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'white',
                boxShadow: '0 0 15px white',
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* BOTTOM OVERLAY */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '250px',

          background:
            'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
        }}
      />
    </div>
  )
}