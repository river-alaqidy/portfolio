import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {

  }, [])

  return (
    <>
    <h1 className="text-3xl font-bold text-blue-500">
      Hello, Tailwind + Vite + React!
    </h1>
    <button onClick={() => setCount(prev => prev + 1)}>
      Testing {count}
    </button>
    </>
  )
}

export default App
