import { useState, useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import About from './components/layout/About'
import JrpPanel from './components/panels/Jrppanel.jsx'
import ExpPanel from './components/panels/Exppanel.jsx'

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
    <div className={`min-h-screen flex flex-col transition-colors duration-600 ${modeStyles[mode]}`}>
      <Header mode={mode} setMode={setMode} />

      <main className="flex flex-col flex-1">
        <JrpPanel active={mode === 'jrp'} />
        <ExpPanel active={mode === 'exp'} />
        <About mode={mode} />
      </main>

      <Footer mode={mode} />
    </div>
  )
}

export default App
