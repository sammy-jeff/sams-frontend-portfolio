import './App.css'
import About from './Components/About'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Projects from './Components/Projects'

const App = () => {
  return (
    <div className='App'>
      <Home />
      <Nav />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
