import { useState } from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Features from './components/Features'
import Articles from './components/Articles'
import Footer from './components/Footer'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Header />
    <Features />
    <Articles />
    <Footer />
    </>
  )
}

export default App
