import './App.css';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Lenis from '@studio-freight/lenis';

function App() {

  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)

  return (
    <>
      <Navbar />
      <Home />
   
      <Footer />
     

    </>
  )
}

export default App
