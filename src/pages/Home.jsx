import React from 'react';
import { useState } from 'react'
import Countdown from '../components/Countdown'
import IntroScreen from '../components/IntroScreen'
import StorySlider from '../components/StorySlider'
import FinaleAnimation from '../components/FinaleAnimation'
import CakeSection from '../components/CakeSection'
import EnvelopeSection from '../components/EnvelopeSection'
import EndingScreen from '../components/EndingScreen'

export default function Home() {
  const [stage, setStage] = useState('countdown')

  return (
    <div className="min-h-screen bg-black text-white">
      {stage === 'countdown' && <Countdown setStage={setStage} />}
      {stage === 'intro' && <IntroScreen setStage={setStage} />}
      {stage === 'story' && <StorySlider setStage={setStage} />}
      {stage === 'finale' && <FinaleAnimation setStage={setStage} />}
      {stage === 'cake' && <CakeSection setStage={setStage} />}
      {stage === 'envelope' && <EnvelopeSection setStage={setStage} />}
      {stage === 'ending' && <EndingScreen />}
    </div>
  )
}
