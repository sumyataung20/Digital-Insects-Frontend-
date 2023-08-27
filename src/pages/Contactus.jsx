import Navbar from "../components/Navbar";
import teamwork from "../images/power-of-teamwork 1(1).png";
import Footer from "../components/Footer";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
const Contactus = () => {
    const form = useRef();

    const sendEmail = (e) => {
        // e.preventDefault();

        emailjs.sendForm('service_1328pub', 'template_srorw2t', form.current, 'ff15yZ7g_usKsYOlz')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")

        }), (error) => {
            console.log(error.text)
        }
    }

    return (
        <>

        <div className="contactuscontainer" style={{  width: "100%",overflowX: "hidden"}}>
        <div className="servicecontainer1">
            <Navbar/>
            <div className="servicetitle">Contact us</div>
            </div>

            <div className="contact2 justify-content-center">
                <div className="container-fluid">
                <motion.div
initial={{opacity: 0 , y:100}}
whileInView={{opacity: 1, y:0}}
transition={{ type: "tween",duration:0.5}}

>
                <div className="contact2title1">“We are ready to give you the best service possible”
 Our dedicated team is here to help you every step of the way. Reach out to us today and let's start a conversation!</div>
 </motion.div>

 <div className="contactimgcontainer">
    <img src={teamwork} alt="teamwork1" className="teamwork"/>
 </div>
            </div>
            </div>

            <div className="contact3">
                <div className="container-fluid-contact">
                    <div className="form-container">
                        <form ref={form} onSubmit={sendEmail} style={{ width: "90%"}}>
                            <div className="text-center contactformtitle">We want to hear from you!</div>
                            <div className="inputcontainer">
                            <label className="contactlabel">Name</label><br/>
                            <input type="text" name="user_name" className="contactinput" style={{width: "100%"}}/>
                            </div>

                            <div className="inputcontainer">
                            <label className="contactlabel">Email</label><br/>
                            <input type="Email" name="user_email" className="contactinput"/>
                            </div>

                            <div className="inputcontainer1">
              
                            <textarea className="contactinput1" name="message" placeholder="Enter your message here"></textarea>
                            </div>

                        <button className="contactbtn" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="contact4">
                <div className="container-fluidcontact">
               <div className="contact4title text-center">
Feel free to reach out to us through the provided contact form or email address, and 
our team will get back to you as soon as possible.</div>

<div className="contact-cardcontainer">
    <div className="row">
        <div className="col-sm-12 col-md-4">
    <div className="contact-card">
        <div className="contactcardtitle">By Phone</div>

        <div className="contactcardcnt">09 691 501 020

</div>
<div className="contactcardcnt">Monday - Friday ( 9am to 5pm)</div>
    </div>
    </div>
    <div className="col-sm-12 col-md-4">
    <div className="contact-card">
        <div className="contactcardtitle">By Email</div>


<div className="contactcardcnt contactemail">info@digitalinsects.com </div>
    </div>
    </div>
    <div className="col-sm-12 col-md-4">
    <div className="contact-card">
        <div className="contactcardtitle">Like & Follow us on: </div>


<div className="contactcardcnt contactemail">Facebook: Digital Insects</div>
    </div>
    </div>
    </div>
</div>
            </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Contactus;