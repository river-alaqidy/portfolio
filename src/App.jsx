import { useState, useEffect } from 'react'
import { cn } from './lib/utils'
import Header from './components/layout/Header'

function App() {

  const [mode, setMode] = useState('jrp')

  const modeStyles = {
    jrp: 'bg-off-white text-dark',
    exp: 'bg-dark text-off-white',
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [mode])

  return (
    <div className={cn('min-h-screen transition-colors duration-500 ease-in-out', modeStyles[mode])}>
      <Header mode={mode} setMode={setMode} />
    </div>
  )
}

export default App
