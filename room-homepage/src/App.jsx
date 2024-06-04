import { useState } from 'react'
import Header from './Header'
import About from './About'

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header 
        open={open} 
        setOpen={setOpen} 
      />
      <About />
    </>
  )
}

export default App
