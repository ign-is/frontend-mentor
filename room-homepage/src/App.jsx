import { useState } from 'react'
import Header from './Header'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About />
    </>
  )
}

export default App
