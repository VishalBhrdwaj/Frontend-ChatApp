import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import BodyContainer from './components/BodyContainer'
import io from "socket.io-client"
const socket=io.connect("https://chatappbackend-6yl2.onrender.com");
function App() {
  
  return (
    <>
    <Header/>
    <BodyContainer socket={socket}/>
    <Footer/>
    </>
  )
}

export default App
