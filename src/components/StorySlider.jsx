import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MemoryCard from './MemoryCard'

const memories = [
  {
    id: 1,
    image: '/images/memories/memory1.jpg',
    message: `Ek shuruaat jisne hme sirf milwaya hi nhi balki ek beautiful journey pe bhi le chala.

              Vo apki biodata website, apki pheli pics jo maine dekhi aur meri pheli pic jo apne dekhi.

              Aur phir aapne socha,
              "Ye to meri league se bahar hai."

              Toh bataiye Mr. Husband Ji...
              Kya ab bhi kahenge ki main aapki league se bahar hoon? 😌❤️`,
  },

  {
    id: 2,
    image: '/images/memories/memory2.jpg',
    message: `Chalo a hi gya pheli mulakat ka din. 
    Darte the jis din se, socha krte the kya hoga hm dono ki to ha hai, family ki ha hogi ki nhi. 
    Pr dekho kya hua, aapne toh meri family ko bhi apna liya, aur mujhe bhi apna liya.
    Fir jo journy shuru hui, usme har ek moment special tha, har ek memory priceless thi, aur har ek din ek nayi khushi lata rha.`
  },

  {
    id: 3,
    image: '/images/memories/memory3.jpg',
    message: `Hmari masti bhari video calls,hmari late night VCs. Hmari morning chats. Shadi se phele hr din ko mere khaas bnaya hai apne. `,
  },

  {
    id: 4,
    image: '/images/memories/memory4.jpg',
    message: `The 3rd meet in Delhi shoppping, jhn hm thoda sa shy the phele fir comfort me ate ate ek dusre ke sath time spend krne ke lia space dhundhne lage. 
    Sube sube hmare room me jb aap aye the me uth gai thi apki voice se hi. Yaad hai vo moments, papa ka mobile car se lene jana aur akele thoda ghumna.`,
  },

  {
    id: 5,
    image: '/images/memories/memory5.jpg',
    message: `Dhurandhar- First movie together, jhn hm dono ne ek dusre ke sath movie dekhne ka maza liya.You know what I mean.`,
  },

  {
    id: 6,
    image: '/images/memories/memory6.jpg',
    message: `Apko khana khilate hua jb mummy ne hmari pics li thi yaad hai ji.`,
  },

  {
    id: 7,
    image: '/images/memories/memory7.jpg',
    message: `Haldi pr pheli baar ek dusre ko dekhna shadi ki rasom me, full mast zone me rhena and vo apka I love you bolna.`,
  },

  {
    id: 8,
    image: '/images/memories/memory8.jpg',
    message: `Dance aur Engagament ke beech mera dhyaan rkhna aur sath me full enjoy krna. `,
  },

  {
    id: 9,
    image: '/images/memories/memory9.jpg',
    message: `A hi gya vo pal shadi hai hmari aaj stage pr itne free the ki baaton me lage the hm dono mast maze se. `,
  },

  {
    id: 10,
    image: '/images/memories/memory10.jpg',
    message: `Shuru kre honeymoon ki journey airport pr jake jo pasar gye the hm dono seating beds pr. `,
  },

  {
    id: 11,
    image: '/images/memories/memory11.jpg',
    message: `Harry potter bus ke jhatke to yaad hi honge ji, aur mera apko pyaar se dekhna bhi. Love you meri jaan ❤️`,
  },

  {
    id: 12,
    image: '/images/memories/memory12.jpg',
    message: `Mummy ke birthday pr ghr ki pheli visit after shadi and vo scooty pr ghumna apka aur mera, chat and burger khana aur mere hath ke prathe bhi pheli baar jb mera bnya hua kuch khaya tha apne. `,
  },

  {
    id: 13,
    image: '/images/memories/memory13.jpg',
    message: `Late night movie show and mera bolna papa se puch lu jau ki nhi, fir yaad aya ab to shadi ho gai hai ab to ja skti hu.😂`,
  },

  {
    id: 14,
    image: '/images/memories/memory14.jpg',
    message: `Lets play Carrom. 
    Yes yes I won every time. Kitna maza aya tha na hm south jakr carrom khel rhe the. `,
  },

  {
    id: 15,
    image: '/images/memories/memory15.jpg',
    message: `Apka surprise mere lia. Bhot bhot pyaar tha sachi me. Bhot maza aya tha apke sath hr jgh hi maza ata. 
    And apke surprises hmesha ek dm best hote sachi me. Love you soooo much. 🥹✨❤️`,
  },
]

export default function StorySlider({ setStage }) {
  const [current, setCurrent] = useState(0)

  const next = () => {
    if (current === memories.length - 1) {
      setStage('finale')
    } else {
      setCurrent(current + 1)
    }
  }

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1)
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background:
          'linear-gradient(to bottom, #000000, #12001f, #1e0033)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        padding: '20px',
      }}
    >
      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${15 + Math.random() * 20}px`,
            color: '#ff66cc',
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          color: '#ffd6f2',
          fontSize: '2.8rem',
          marginBottom: '30px',
          textAlign: 'center',
          fontWeight: 'bold',
          textShadow: '0 0 20px rgba(255,182,193,0.6)',
          zIndex: 10,
        }}
      >
        Our Beautiful Journey ❤️
      </motion.h1>

      {/* Animated Memory Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.7 }}
          style={{
            zIndex: 10,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            whiteSpace: 'pre-line',
            lineHeight: '1.8',
          }}
        >
          <MemoryCard memory={memories[current]} />
        </motion.div>
      </AnimatePresence>

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginTop: '40px',
          zIndex: 10,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          style={{
            padding: '15px 35px',
            borderRadius: '50px',
            border: 'none',
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 20px rgba(255,255,255,0.1)',
          }}
        >
          ⬅ Back
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          style={{
            padding: '15px 35px',
            borderRadius: '50px',
            border: 'none',
            background:
              'linear-gradient(to right, #ff4da6, #ff66cc)',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 0 25px rgba(255,105,180,0.6)',
          }}
        >
          {current === memories.length - 1
            ? 'Final Surprise ✨'
            : 'Next ➡'}
        </motion.button>
      </div>

      {/* Progress */}
      <div
        style={{
          marginTop: '25px',
          color: '#ffd6f2',
          fontSize: '1rem',
          zIndex: 10,
        }}
      >
        Memory {current + 1} of {memories.length}
      </div>

      {/* Bottom Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-200px',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'rgba(255,105,180,0.12)',
          filter: 'blur(150px)',
        }}
      />
    </div>
  )
}