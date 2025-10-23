import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Analze from './Components/Layout/Analze'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Analze/>
  </>
  )
}

export default App
