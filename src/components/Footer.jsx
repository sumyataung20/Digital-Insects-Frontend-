import "../App.css";
import {HiLocationMarker} from "react-icons/hi";
import {MdEmail} from "react-icons/md"
import {BsFillTelephoneFill} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
const footer = () => {
    return (
        <div className="footercontainer">
        <div className="container-fluid">
            <div className="footertitle1">Digital Insects</div>
            <div className="row">
            <div className="col-sm-6">
                {/* <div className="footertitle2">Location</div> */}
                <div className="footertitle3">
                    <span style={{ paddingRight: '10px'}}><HiLocationMarker style={{ color: "var(--icon-color)"}} size={22}/></span><span><a href="https://goo.gl/maps/5sdbaoRBAFg34RkK6" target="_blank" className="ataglink">No.19/20, 45th Street, Botahatung township,
Yangon, Myanmar</a>

</span>
                </div>

                <div className="footertitle3">
                    <span style={{ paddingRight: '10px'}}><MdEmail style={{ color: "var(--icon-color)"}} size={22}/></span><span><a href="mailto:info@digitalinsects.com" target="_blank"className="ataglink">info@digitalinsects.com</a></span>
                </div>

                <div className="footertitle3">
                    <span style={{ paddingRight: '10px'}}><BsFillTelephoneFill style={{ color: "var(--icon-color)"}} size={22}/></span><span><a href="tel:+959691501020"target="_blank" className="ataglink">+959 691 501 020</a></span>
                </div>
            </div>

            <div className="col-sm-6 footercontainer2" >
                <div className="footertitle4">
            Join our digital community today and be a part of the conversation.
 Follow us on social media to stay informed and engage with our team of 
 talented developers, designers, and strategists.
 </div>
 <div className="fbcontainer">
                <span className="footertitle5" > Like and follow us on:<a href="https://www.facebook.com/digitalinsects" target="_blank"><FaFacebook style={{ color: "var(--icon-color)", marginLeft: "5px", marginBottom: "5px"}} size={25}/></a></span>
                {/* <span><FaTwitter style={{ color: "var(--icon-color)", marginRight: "15px"}} size={25}/></span> 
                <span><RiInstagramFill style={{ color: "var(--icon-color)", marginRight: "15px"}} size={25}/></span>  */}
            </div>
            </div>

            </div>



            
        </div>
        <div className="text-end copyright">©Copyright 2023
All rights reserved. <br/> Powered by Digital Insects.</div>
        </div>
    )
}
export default footer;