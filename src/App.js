import {BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Homepage from "./pages/Home";
import Educationpage from "./pages/Education";
import Skillspage from "./pages/Skills";
import Experiencepage from "./pages/Experience";
import Profilepage from "./pages/Profile";
import Portfoliopage from "./pages/Portfolio";
import Contactpage from "./pages/Contact";
import Templatepage from "./pages/Template";



function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Templatepage/>}>
              <Route index element={<Homepage/>} />
              <Route exact path="/Education"  element={ <Educationpage/>}/>
              <Route exact path="/Skills"  element={ <Skillspage/>}/>
              <Route exact path="/Experience"  element={ <Experiencepage/>}/>
              <Route exact path="/Profile"  element={ <Profilepage/>}/>
              <Route exact path="/Portfolio"  element={ <Portfoliopage/>}/>
              <Route exact path="/Contact"  element={ <Contactpage/>}/>
            </Route>             
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
