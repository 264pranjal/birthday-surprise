import React from 'react'
import Home from './pages/Home'
import { Analytics } from "@vercel/analytics/next"

export default function App() {
  return (
    <>
      <Home />
      <Analytics />
    </>
  )
}