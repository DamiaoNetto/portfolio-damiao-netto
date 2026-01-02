import Navbar from "./components/Navbar"
import  Hero from "./components/Hero"
import { About } from "./components/About";
import CardsTecnologias from "./components/CardsSkills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const App = () =>{
  return(
  <>
  <Navbar /> 
  <Hero /> 
  <About/>
  <CardsTecnologias />
  <Projects/>
  <Testimonials/>
  <Contact/>
  <Footer/>

  </>
  )

};

export default App