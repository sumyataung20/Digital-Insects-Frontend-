import React, { useState } from "react";
import Image1 from "../images/istockphoto-1253680296-612x612.jpg";
import Image2 from "../images/4550182926781_01_1260.jpg";
import Image3 from "../images/Bill.jpg";
import { useEffect } from "react";
import "./ImageSlider.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = ({ images }) => {
  // Define an array of image URLs
  // Add more image URLs as needed
  // State to keep track of the currently displayed image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle moving to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle moving to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Automatically move to the next slide every 3 seconds
    const interval = setInterval(nextSlide, 3000);

    // Clear the interval when the component unmounts or when currentIndex changes
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="image-slider">
         <button onClick={prevSlide} className="prevbutton"><FaChevronLeft size={25}/></button>
         <div className="imagecontainer">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="blogimgslider"/>
      </div>

     
      <button onClick={nextSlide} className="nextbtn"><FaChevronRight size={25}/></button>
    </div>
  );
};

export default ImageSlider;
