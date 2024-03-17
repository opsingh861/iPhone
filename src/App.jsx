import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Highlights from './components/Highlights'
import Model from './components/Model'
import * as Sentry from '@sentry/react';
import Features from './components/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='bg-black'>
        <Navbar />
        <Hero />
        <Highlights />
        <Model />
        <Features />
      </main>
    </>
  )
}

export default Sentry.withProfiler(App);
