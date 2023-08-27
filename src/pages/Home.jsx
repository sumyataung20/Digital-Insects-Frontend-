import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
import  sec2Img from "../images/dgic.png";
import { Link } from "react-router-dom";
import service1 from "../images/service1.png";
import service2 from "../images/service2.png";
import service3 from "../images/service3.png";
import service4 from "../images/service4.png";
import service5 from "../images/service5.png"
import webdev from "../images/webdev.png";
import webmaintain from "../images/webmaintenance.png";
import seo from "../images/seo.png";
import hosting from "../images/hosting.png";
import frontend from "../images/frontend.png";
// import { FaCheckCircle } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import backend from "../images/Group 160.png";
import { MdDoneAll } from 'react-icons/md';
import { motion } from "framer-motion";

const Home = () => {

    const navigate = useNavigate();
    return (
        <>
         
        <div className="homecontainer">
        <Navbar/>
     
        <div className="container-fluid">
           
        <div className="titlecontainerhome">
        <motion.div
initial={{ opacity: 0, y: -50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ type: "spring", stiffness: 250 }}
  
>
        <div className="title1">
        GROW YOUR BUSINESS WITH OUR TEAM
        </div>
        </motion.div>

        <motion.div
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ type: "linear", stiffness: 400, delay:0.1 }}

>
        <div className="title2">“Reach out today for a complimentary consultation and 
discover the transformative power of our web services to propel your business to new heights."</div>
</motion.div>
<div className="homebuttoncontainer" >
<motion.div
      className="box"
      initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
        <button className="homebutton" onClick={() => navigate('/register')}>Get Started</button>
        </motion.div>


</div>
</div>

        </div>
        </div>

        {/* Section2 */}

        <div className="section2">
            <div className="container-fluid">
                <div className="row">
            
                <div className="col-md-6 col-sm-12">
                <div className="sec2title1">
                Expert Web Development Team for Your Digital Success
                </div>

                <div className="sec2title2">
                At <span className="span1">“Digital Insects”</span>, we specialize in crafting dynamic and
interactive digital experiences that captivate users and
drive business growth.
                </div>

                <div>
                    <Link to="/contactus">
                    <motion.div
      className="box"
      whileHover={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 100, damping:10 }}
    >
                    <button className="sec2btn">Meet our team</button>
                    </motion.div>
                    </Link>
                </div>
                </div>

                <div className="col-md-6 col-sm-12">
                <motion.div
initial={{ opacity: 0, x: 100 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ type: "spring", stiffness: 100 }}
  
>
                    <img src={sec2Img} className="sec2img" />
                    </motion.div>
                </div>
                </div>
            </div>
        </div>

        {/* Section3  */}

        <div className="section3">
            <div className="container-fluid">
            <div className="section3title">Why your business needs a website?</div>
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div className="card">
                        <img src={service1} alt="service1" className="sec3img"/>

                        <div className="sec3title1">Increased online presence</div>

                        <div className="sec3title2" >A website provides a platform for your 
business to be visible to 
potential customers online,
which can increase your 
reach and attract more customers.</div>
                    </div>
                    </div>


<div className="col-lg-4 col-md-4">
                    <div className="card">
                        <img src={service2} alt="service1" className="sec3img"/>

                        <div className="sec3title1">Improved credibility
</div>

                        <div className="sec3title2" >
 Having a professional-looking website can
 enhance your business's credibility
 and help establish trust with 
potential customers.</div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-md-4">


                    <div className="card">
                        <img src={service3} alt="service1" className="sec3img"/>

                        <div className="sec3title1">Better customer engagement
</div>

                        <div className="sec3title2" >
                        A website can offer a range of tools and 
features to engage with customers, 
such as contact forms, 
social media integration,live chat, 
and more.</div>
                    </div>
                    </div>
               
            </div>

            <div className="row row2">
                <div className="col-lg-6 col-md-6">
            <div className="card">
                        <img src={service4} alt="service1" className="sec3img"/>

                        <div className="sec3title1">Enhanced marketing opportunities
</div>

                        <div className="sec3title2" >
                        A website can serve as powerful marketing tool, providing opportunities for SEO,
 email marketing, content marketing,
 and other digital marketing tactics.</div>
                    </div>
                    </div>

                    <div className="col-lg-6 col-md-6">

                    <div className="card">
                        <img src={service5} alt="service1" className="sec3img"/>

                        <div className="sec3title1">Increased revenue potential
</div>

                        <div className="sec3title2" >
                        A website can help you reach new markets
 and customers, leading to increased
 revenue  and business growth.</div>
                    </div>
                    </div>
            </div>
            </div>
        </div>

        {/* Section4 */}

        <div className="section4">
            <div className="container-fluid1">

            <div className="row d-flex justify-content-center align-items-center">
                
                <div className="col-sm-12 col-md-6 col-lg-4"> 
                <motion.div
initial={{ opacity: 0, y: -50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ type: "spring", stiffness: 80 }}
  
>
                <img src={webdev} className="sec4img"/>
                </motion.div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-8 sec4content">
                <motion.div
initial={{ opacity: 0, scale: 0.5}}
whileInView={{ opacity: 1, scale: 1 }}
transition={{ type: "spring", stiffness: 80 }}
  
>

                    <div className="sec4title1">Website design and Development</div>
                    <div className="sec4title2">Our team create custom websites 
tailored to your specific needs and goals.</div>
</motion.div>

                </div>
            </div>
          
            </div>
        </div>
{/* 
Section5 */}
        <div className="section5">
            <div className="container-fluid1">
            <div className="row d-flex justify-content-center align-items-center">
        

                <div className="col-sm-12 col-md-6 col-lg-8 sec4content">
                <motion.div
initial={{ opacity: 0,  x: -100}}
whileInView={{ opacity: 1, x: 0}}
transition={{ type: "spring", stiffness: 80 }}
  
>
                    <div className="sec4title1">Website Maintenance and Support
</div>
                    <div className="sec4title2">Our team provide ongoing website maintence and support 
to ensure your website stays up-to-date and secured</div>
</motion.div>
                </div>
                

                <div className="col-sm-12 col-md-6 col-lg-4"> 
                <motion.div
initial={{ opacity: 0, x: 100}}
whileInView={{ opacity: 1, x: 0 }}
transition={{ type: "spring", stiffness: 80}}

>
                <img src={webmaintain} className="sec5img"/>
                </motion.div>
                </div>
                
            </div>
            </div>
        </div>

        {/* section6  */}

        <div className="section6">
            <div className="container-fluid1">
            <div className="row d-flex justify-content-center align-items-center">
        
            <div className="col-sm-12 col-md-6 col-lg-4"> 
            <motion.div
initial={{ opacity: 0, y: -50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ type: "spring", stiffness: 80 }}
  
>
                <img src={seo} className="sec5img"/>
                </motion.div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8 sec4content">
                <motion.div
initial={{ opacity: 0, y: 100}}
whileInView={{ opacity: 1, y: 0 }}
transition={{ type: "spring",stiffness: 80}}
>
                    <div className="sec4title1">Search Engine Optimization (SEO)

</div>
                    <div className="sec4title2">Our team use proven SEO strategies to improve
 your search engine rankings and 
drive more traffic to your website.</div>
</motion.div>
                </div>


            </div>
            </div>
        </div>
      
    {/* section7  */}

    <div className="section4">
            <div className="container-fluid1">
            <div className="row d-flex justify-content-center align-items-center">


                <div className="col-sm-12 col-md-6 col-lg-8 sec4content">
                <motion.div
initial={{ opacity: 0, y: 100}}
whileInView={{ opacity: 1, y: 0}}
transition={{ type: "spring", stiffness: 80 }}
  
>

                    <div className="sec4title1">Website Hosting and Domain Registration</div>
                    <div className="sec4title2">Our team offer reliable website hosting and domain registration
 services to ensure your website stays online and accessible.</div>
</motion.div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4"> 
                <motion.div
initial={{ opacity: 0, y: 100}}
whileInView={{ opacity: 1, y: 0}}
transition={{ type: "spring", stiffness: 80 }}
  
>

                <img src={hosting} className="sec7img"/>
                </motion.div>
               
                </div>
            </div>
            </div>
        </div>
        
        {/* section8  */}

        <div className="section8">
        <div className="container-fluid8">
            <div className="row ">

               <div className="col-sm-12 col-md-6 col-lg-5">
               <motion.div
initial={{opacity: 0 ,scale: 0.8}}
whileInView={{opacity: 1, scale: 1}}
transition={{ type: "tween"}}

>
                <img src={frontend} className="sec8img"/>
                </motion.div>
               </div>

               <div className="col-sm-12 col-md-6 col-lg-7">
               <motion.div
initial={{ opacity:0, scale: 0.5}}
whileInView={{ opacity: 1, scale: 1}}
transition={{ type: "tween", duration:0.5 }}

>
                  <div className="sec8title1">Enjoy fully integrated marketing solutions</div>
                  <div className="sec8title2">From social media to push notifications and <br/>
live chat, “Digital Insects” is fully packed with all you <br/>
need to boost your online activity.</div>

<div className="sec8title3">
    <div className="sec8title4"><span><BsCheckCircle size={20} style={{color: "#000"}}/></span> Plan, monitor, and analyze your social accounts in one place.</div>
    <div className="sec8title4"><span><BsCheckCircle size={20} style={{color: "#000"}}/></span> Send push notifications anywhere on the web.</div>
    <div className="sec8title4"><span><BsCheckCircle size={20} style={{color: "#000"}}/></span> Chat with visitors and turn them into leads and customers.</div>
    <div className="sec8title4"><span><BsCheckCircle size={20} style={{color: "#000"}}/></span> Track links to measure the effectiveness of your campaigns.</div>
</div>
</motion.div>
               </div>
               
            </div>
        </div>
        </div>

        {/* section9 */}
        <div className="section9">
        <div className="container-fluid9">
            <div className="row d-flex justify-content-center align-items-center">


               <div className="col-sm-12 col-md-6 col-lg-7 sec9content1 ">
               <motion.div
initial={{opacity: 0 ,scale: 0.5, x:-100}}
whileInView={{opacity: 1,scale: 1, x:0}}
transition={{ type: "tween", duration: 0.5}}

>
                  <div className="sec9title1">Powerful Backend</div>
                  <div className="sec9title2">The most business oriented website builder
need to boost your online activity.</div>
<div className="sec9title5">Connected to hundreds of business apps 
out-of-the-box.</div>
<div className="sec8title3">
    <div className="sec9title4"><span><MdDoneAll size={25} style={{color: "#E8BA5C", paddingRight: "5px"}}/></span>Social Marketing</div>
    <div className="sec9title4"><span><MdDoneAll size={25} style={{color: "#E8BA5C", paddingRight: "5px"}}/></span>Recruitment</div>
    <div className="sec9title4"><span><MdDoneAll size={25} style={{color: "#E8BA5C", paddingRight: "5px"}}/></span>Events</div>
    <div className="sec9title4"><span><MdDoneAll size={25} style={{color: "#E8BA5C", paddingRight: "5px"}}/></span>Sales</div>
    <div className="sec9title4"><span><MdDoneAll size={25} style={{color: "#E8BA5C", paddingRight: "5px"}}/></span>Accounting</div>
    <div className="sec9title4"><span><MdDoneAll size={25} style={{color: "#E8BA5C", paddingRight: "5px"}}/></span>Marketing Automation</div>
    <div className="sec9title4"><span><MdDoneAll size={25} style={{color: "#E8BA5C", paddingRight: "5px"}}/></span>Inventory</div>

</div>
</motion.div>
               </div>

               <div className="col-sm-12 col-md-6 col-lg-5 sec9content1">
               <motion.div
initial={{opacity: 0 , x:100}}
whileInView={{opacity: 1, x:0}}
transition={{ type: "tween",duration:0.5}}

>
                <img src={backend} className="sec9img"/>
                </motion.div>
               </div>
            </div>
        </div>
        </div>


{/* Section11  */}
        <div className="section11">
             <div className="container-fluid">
                <div className="sec11content">
                <div className="sec11title1">What Makes <span className="sec11span">“Digital Insects”</span> Different?</div>
                <div className="sec11title2">Digital Insects is a leading web development company, dedicated to crafting innovative, user-friendly, and visually stunning websites.</div>
                <div className="sec11title2">With our team of talented developers, designers, and strategists, we create tailored solutions that align perfectly with your vision and business goals.</div>
                <div className="sec11title2">From responsive website design to e-commerce solutions, we offer comprehensive services to help your business thrive in the digital world.</div>
                </div>

              
                <Link to="/aboutus">
                <motion.div
      className="box"
      whileHover={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
                <button className="sec11btn">About Us</button>
</motion.div>
                </Link>

             </div>
        </div>
        
        <Footer/>
       
        </>
    )
}


export default Home;