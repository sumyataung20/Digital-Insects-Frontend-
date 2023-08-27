import Navbar from "../components/Navbar";
import cocacola from "../images/hd-white-coca-cola-logo-png-31625589646doptplxz4s-removebg-preview 1.png";
import kfc from "../images/kfc-kentucky-fried-chicken-logo-black-and-white-removebg-preview 1.png";
import puma from "../images/PUMA-Logo-01-1 1.png";
import nike from "../images/png-clipart-light-dock-icons-nike-white-nike-logo-thumbnail-removebg-preview 1.png";
import addidas from "../images/Untitled-removebg-preview 1.png";
import Footer from "../components/Footer";
const Projects = () => {
    return(
        <>
        <div className="projectcontainer" style={{ width: "100%", overflowX: "hidden"}}>
                    <div className="servicecontainer1">
            <Navbar/>
            <div className="servicetitle">Projects Gallery</div>
            </div>

            <div className="logoshow">
                <div className="trustdgic">They trust <span style={{ color: "var(--text-color1)", fontWeight: 900}}>"Digital Insects"</span></div>
  <div className=" d-flex justify-content-center align-items-center mx-auto logoshow2">
    <div className="">
        <a href="https://www.coca-colacompany.com/">
        <img src={cocacola} alt="logoshowlogo" className="logoshowlogo"/>
        </a>
    </div>
    <div className="">
    <a href="https://kfc.com.mm/">
        <img src={kfc} alt="logoshowlogo" className="logoshowlogo"/>
        </a>
    </div>
    <div className="">
    <a href="https://us.puma.com/us/en">
        <img src={puma} alt="logoshowlogo" className="logoshowlogo"/>
        </a>
    </div>
   
    <div className="">
    <a href="https://www.nike.com/">
        <img src={nike} alt="logoshowlogo" className="logoshowlogo"/>
        </a>
    </div>
    <div className="">
    <a href="https://www.adidas.com/us">
        <img src={addidas} alt="logoshowlogo" className="logoshowlogo"/>
        </a>
    </div>
  

  </div>
            </div>

            <div className="projectsection">

                More projects are coming soon...
            </div>
        </div>
        <Footer/>

        </>
     
    )
}

export default Projects;