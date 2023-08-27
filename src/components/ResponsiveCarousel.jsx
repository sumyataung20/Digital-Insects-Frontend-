import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel"; // Import the Carousel component
import image1 from "../images/Bill.jpg";
import image2 from "../images/mark.jpg";
import image3 from "../images/Elon.jpg";
import image4 from "../images/Albert_Einstein_Head.jpg"
import image5 from "../images/stevejob.jpg"
import image6 from "../images/Matt_Mullenweg.jpg"
import "./ResponsiveCarousel.css"
// Import other images or data for your slider

const ResponsiveCarousel = () => {
  return (
<Carousel autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} >
      <div class>
        <div className="carousel-image">
          <img src={image1} alt="Slide 1" />
        </div>
        <div className="carousel-text-container">
            <p className="carousel-title">Bill Gates (Co-founder of Microsoft)</p>
            <p className="carousel-content">"It's fine to celebrate success, 
but it is more important to heed the lessons of failure." 

                                                            </p>
          </div>
      </div>
      <div>
        <div className="carousel-image">
          <img src={image2} alt="Slide 2" />
        </div>
        <div className="carousel-text-container">
            <p className="carousel-title">Mark Zuckerberg (Co-founder of Facebook)

                                                                                                                       </p>
            <p className="carousel-content">"The biggest risk is not taking any risk. In a world that is changing quickly, 
the only strategy that is guaranteed to fail is not taking risks." 

                                                                                                                       

                                                            </p>
          </div>
      </div>
      <div>
        <div className="carousel-image">
          <img src={image3} alt="Slide 3" />
        </div>
        <div className="carousel-text-container">
            <p className="carousel-title">Elon Musk (Owner of twitter)</p>
            <p className="carousel-content">"It is possible for ordianary people to choose to be extraordinary" 

                                                            </p>
          </div>
      </div>

      <div>
        <div className="carousel-image">
          <img src={image4} alt="Slide 3" />
        </div>
        <div className="carousel-text-container">
            <p className="carousel-title">Albert Einstein (Scientist, Nobel Prize Winner)</p>
            <p className="carousel-content">"Everything should be as simple as possible, but not simpler" 

                                                            </p>
          </div>
      </div>
      <div>
        <div className="carousel-image">
          <img src={image5} alt="Slide 3" />
        </div>
        <div className="carousel-text-container">
            <p className="carousel-title">Steve Jobs (Co-founder of Apple Computer,Inc)</p>
            <p className="carousel-content">"Innovations distinguish between a leader and a follower" 

                                                            </p>
          </div>
      </div>
      <div>
        <div className="carousel-image">
          <img src={image6} alt="Slide 3" />
        </div>
        <div className="carousel-text-container">
            <p className="carousel-title">Matt Mullenweg (Founder of WordPress)</p>
            <p className="carousel-content">"Technology is best when it brings people together" 

                                                            </p>
          </div>
      </div>


      
    </Carousel>
  );
};

export default ResponsiveCarousel;
