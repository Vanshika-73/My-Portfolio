import { Routes, Route } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
const App = ()=> {
  //2.40.22
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
      {/* <Feedbacks/> */}
      <div className="relative z-0">
        <Contact/>
        {/* <StarsCanvas/> */}
      </div>
    </div>
  )
}

export default App
