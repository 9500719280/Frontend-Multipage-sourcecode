import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Experience from "../pages/Experience";
import Profile from "../pages/Profile";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";



function Homepage(){
    return(
        <>
         <h3 className="s4">HOME</h3><br/>
         <Education/>
         <Skills/>
         <Experience/>
         <Profile/>
         <Portfolio/>
         <Contact/>
        </>

    )
}

export default Homepage;