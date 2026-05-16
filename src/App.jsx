import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

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
    <div className={`min-h-screen flex flex-col transition-colors duration-600 ${modeStyles[mode]}`}>
      <Header mode={mode} setMode={setMode} />
      <Footer mode={mode} />
    </div>
  )
}

export default App
