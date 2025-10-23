import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conatiner from './Components/Conatiner'
import { Textarea } from "@/components/ui/textarea"
function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className="py-[120px]">
    <Conatiner>
<Textarea className={"min-h-[200px] overflow-y-scroll "} placeholder="Type your message here." />
    </Conatiner>
  </div>
  </>
  )
}

export default App
