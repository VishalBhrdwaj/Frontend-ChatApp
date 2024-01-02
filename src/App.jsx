import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import BodyContainer from './components/BodyContainer'
import io from "socket.io-client"

function App() {
  const [count, setCount] = useState(0)
  const socket=io.connect("https://chatappbackend-6yl2.onrender.com");
  return (
    <>
    <Header/>
    <BodyContainer socket={socket}/>
    <Footer/>
    </>
  )
}

export default App
