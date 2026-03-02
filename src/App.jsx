import { useState, useEffect } from 'react'
import { cn } from './lib/utils'
import Header from './components/layout/Header'

function App() {

  const [mode, setMode] = useState('jrp')

  const modeStyles = {
    jrp: 'bg-off-white text-dark', // light mode
    exp: 'bg-dark text-off-white', // dark mode
  }

  // when changing between jrp/exp, go to top of page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [mode])

  return (
    <div className={cn(
      "min-h-screen flex flex-col transition-colors duration-500",
      modeStyles[mode]
    )}>
      <Header mode={mode} setMode={setMode} />
    </div>
  )
}

export default App
