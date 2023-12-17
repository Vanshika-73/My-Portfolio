// import { Routes, Route } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
import Achievements from "./components/Achievements";
import Testimonials from './components/Testimonials';
const App = ()=> {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
         <Navbar/>
         <Hero/>
      </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Achievements/>
      {/* <Testimonials/> */}
      <Feedbacks/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
  )
}

export default App
