import img2 from "../images/3-4-view-laptop-on-table-mockup-with-eiffel-tower-figurine 1.png";
import img3 from "../images/Screenshot from 2023-07-03 15-40-43 1.png";
import cloud from "../images/cloudservices.png";
import img4 from "../images/service33.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
const Services = () => {
    return(
        <div className="servicecontainer" style={{ overflow: "hidden"}}>
            <div className="servicecontainer1">
            <Navbar/>
            <div className="servicetitle">Services</div>
            </div>


            <div className="service1">
                <div className="row service1container">
                    <div className="col-sm-12 col-md-6">
                    <motion.div
initial={{ opacity: 0, y: -50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ type: "spring", stiffness: 80 }}
  
>
                       <div className="servicetitle1">Welcome to our Website Design & <br/>
Development Services!</div>
</motion.div>
<motion.div
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ type: "spring", stiffness: 80 }}
  
>
<div className="servicetitle2">Discover the power of exceptional website design
and development. <br/> 

We create visually stunning websites that 
engage and captivate your audience,
delivering an unforgettable online experience.</div>
</motion.div>
                    </div>

                    <div className="col-sm-12 col-md-6">

                        <img src={img2} className="serviceimg1" />
                           
                        </div>
                </div>
            </div>

            <div className="service2">
                <div className="row service1container1">
                    <div className="col-sm-12 col-md-6 col-lg-7">
                    <motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ type: "spring"}}
>
                       <div className="servicetitle3">With our reliable maintenance and 
support services,</div>
<span className="servicetitle4">Ensure the smooth operation of your website.</span>
<div className="servicetitle5">Our dedicated team provides regular updates, security patches,
and technical assistance to keep your website running at its best.</div>
</motion.div>
                    </div>
                    
                    

                    <div className="col-sm-12 col-md-6 col-lg-5 my-auto">

                        <img src={img3} className="serviceimg2" />
                           
                        </div>
                </div>
            </div>

            <div className="service3">
                <div className="row service1container1">
                <div className="col-sm-12 col-md-6 col-lg-5 my-auto">

<img src={img4} className="serviceimg2" />
   
</div>
                    <div className="col-sm-12 col-md-6 col-lg-7">
                    <motion.div
initial={{ opacity: 0, y: -50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ type: "spring", stiffness: 80 }}
  
>
                        <div className="margintopservice">

                       <span className="servicetitle4" style={{ color: "#000", fontFamily: "Latolight"}}>Boost your online presence with our professional </span>
<span className="servicetitle3" style={{ color: "#8D6615"}}>Search Engine Optimization (SEO) services.</span>
</div>
</motion.div>
<motion.div
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ type: "spring", stiffness: 80 }}
  
>
<div className="servicetitle5 " style={{ color: "#000"}}>We optimize your website to improve its visibility on
search engines and drive targeted traffic to your business.</div>
</motion.div>
                    </div>


                </div>
            </div>

            <div className="service4">
                <div className="service1container1">
                    <div className="lastservicecontent ">
                    <motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ type: "spring"}}
>
                        <div className="servicetitle5  yourtextshadow" style={{ padding: "10px 15px"}}>With our seamless <span className="servicetitle3">website hosting and domain
registration services</span>, <br/>
streamline your online presence.</div>
<div className="servicetitle5 servicetitle6 yourtextshadow" style={{ padding: "10px 15px"}}>We offer reliable hosting solutions and 
efficient domain registration to ensure<br/> your website is 
up and running smoothly.</div>
</motion.div>
                    </div>

                </div>
                <img src={cloud} alt="cloud" className="cloud"/>

            </div>

           <Footer/>
        </div>
    )
}

export default Services;