import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './compo/navbar'
import Background from './compo/background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Background/>
      {/* <Navbar/> */}
      
    </div>
  )
}

export default App
