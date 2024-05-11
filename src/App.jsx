import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects';
// import Achievements from './Pages/Achievements';
import ContactMe from './Pages/ContactMe';
import Footer from './Pages/Footer';


function App() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      {/* <Achievements /> */}
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
