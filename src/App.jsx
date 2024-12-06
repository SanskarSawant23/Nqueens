import { useState } from 'react'

import './App.css'
import { Chessboard } from './Components/Chessboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chessboard></Chessboard>
    </>
  )
}

export default App
