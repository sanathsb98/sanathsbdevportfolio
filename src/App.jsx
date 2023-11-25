import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
   
      <Footer />
     

    </>
  )
}

export default App
