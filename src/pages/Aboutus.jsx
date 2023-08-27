import Navbar from "../components/Navbar";
import Aboutus1 from "../images/aboutus1.png";
import Aboutus2 from "../images/aboutus2.png";
import Footer from "../components/Footer";
import {motion} from "framer-motion";
const Aboutus = () => {
    return (
        <>
        <div className="aboutuscontainer" style={{ width: "100%", overflowX: "hidden"}}>
        <div className="pricingsection1">
                <Navbar/>
                <div className="pricingtitle1">About us</div>
            </div>

            <div className="aboutus1">
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                    <motion.div
initial={{ opacity: 0, x: -100 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ type: "linear", stiffness: 400, delay:0.1 }}

>
                        <img src={Aboutus1} alt="aboutusimg" className="aboutusimg1"/>
                        </motion.div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 aboutuscnt">
                    <motion.div
initial={{ opacity: 0, x: 100 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ type: "linear", stiffness: 400, delay:0.1 }}

>
                    <div>At <span className="aboutspan">DIGITAL INSECTS</span>, we are fueled by our passion for creating exceptional digital experiences that not only elevate brands but also drive tangible business growth. <br/><br/>

With an outstanding team of talented designers, developers, and strategists, we specialize in crafting personalized websites that go beyond expectations, effectively communicating your unique brand story while captivating your specific target audience. <br/>Our dedication to excellence ensures that every aspect of our work is tailored to your needs, helping you achieve remarkable online success.</div>
</motion.div>
                    </div>
                  </div>
                  </div>
            </div>

            <div className="aboutus2">
                <div className="aboutuscontainer2">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-12 col-lg-6 aboutuscnt2">
                        <motion.div
initial={{ opacity: 0, y: 100 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ type: "linear", stiffness: 400, delay:0.1 }}

>
                            <div>
                        We pride ourselves on delivering
the finest web services
through <span style={{ fontWeight: 400}}>collaborative teamwork!</span>
</div>
</motion.div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <img src={Aboutus2} alt="aboutus" className="aboutusimg2"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Aboutus;