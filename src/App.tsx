import { useState } from 'react'
import './App.css'
import Player from './components/Player'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Player />        
    </>
  )
}

export default App
