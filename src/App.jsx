import { useEffect, useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {

  }, [])

  return (
    <>
    <h1 className="text-red-500 text-3xl">
      Hello, Tailwind + Vite + React!
    </h1>
    <button onClick={() => setCount(prev => prev + 1)}>
      Testing {count}
    </button>
    </>
  )
}

export default App
