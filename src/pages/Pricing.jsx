
import Navbar from "../components/Navbar";
import { FaCheck } from 'react-icons/fa';
import { FaCheckDouble } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';
import {LuCheckCheck} from "react-icons/lu";



import Footer from "../components/Footer";


const Pricing = () => {
    return(
        <>
        <div className="pricingcontainer">
            <div className="pricingsection1">
                <Navbar/>
                <div className="pricingtitle1">Packages & Pricing</div>
            </div>

            <div className="pricingsection2">
                <div className="pricingcontent1">We believe in transparent and competitive pricing to provide you 
with the best value for our services.
Our pricing plans are designed to cater to different needs and budgets,
ensuring flexibility and affordability for all.</div>
            </div>

            <div className="cardsection">
                <div className="cardsection2">
                <div className="prcard1">Choose Your Path To Success</div>

                <div className="prcard2">We offer a range of customizable packages to cater to the specific needs and goals of businesses.</div>
                <div className="row justify-content-center">
                 <div className="pricingcard col-sm-12 col-md-12 col-lg-4">
                        <div className="prcardtitle">Initial Package</div>
                        <div className="prcardtitle2">85,000 <br/> <span className="prcardtitle2span">MMK/mo</span></div>

                        <div className="prcardcnt">Looking for an affordable web solution? <br/> 
Our Initial Packages is suitable for you!</div>

<div className="facts">
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Up to 10 Web pages</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Device Responsiveness</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Standard Design</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Social Media Integration</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Messenger Chatbox Integration</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Standard Customer Support</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Standard VPS Hosting</div>

</div>
                    
                 </div>

                 <div className="pricingcard col-sm-12 col-md-12 col-lg-4">
                        <div className="prcardtitle">Recommended Package</div>
                        <div className="prcardtitle2">180,000<br/> <span className="prcardtitle2span">MMK/mo</span></div>

                        <div className="prcardcnt">Ready to take your online presence to the 
next level?  Our Recommended Package is 
perfect for you!</div>

<div className="facts">
    <div className="prcspan"><span><LuCheckCheck style={{ color: "var(--text-color4)", marginRight: "5px",}} size={25}/></span>All features in Initial Package</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Up to 50 Web pages</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Innovative Design</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Team Management System</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Content Management System</div>

    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Admin Portaln</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Push Notification</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Prioritized Customer Support</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Optimized VPS Hosting</div>
    

</div>
                    
                 </div>

                 <div className="pricingcard col-sm-12 col-md-12 col-lg-4">
                        <div className="prcardtitle">Premium Package</div>
                        <div className="prcardtitle2">300,000<br/> <span className="prcardtitle2span">MMK/mo</span></div>

                        <div className="prcardcnt">Looking for the ultimate online solution? 
Our Premium Package offers everything 
you need!</div>

<div className="facts">
<div className="prcspan"><span><LuCheckCheck style={{ color: "var(--text-color4)", marginRight: "5px",}} size={25}/></span>All features in Recommended Package</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Unlimited Web pages</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Custom Tailored Design</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Team Management System</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Admin Portal</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Push Notification</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Real Time Customer Support</div>
    <div className="prcspan"><span><FaCheck style={{ color: "green", marginRight: "10px"}}/></span>Premium VPS Hosting</div>

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

export default Pricing;