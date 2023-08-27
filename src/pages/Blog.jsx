import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect, useContext } from "react";
import Mark from "../images/mark.jpg";
import Bill from "../images/Bill.jpg"
import Blogimg from "../images/3-4-view-laptop-on-table-mockup-with-eiffel-tower-figurine 1.png"
import "../App.css";
import React from 'react';
import ResponsiveCarousel from "../components/ResponsiveCarousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import BlogDetail from "./BlogDetail";

import { Routes, Route } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";

const Blog = () => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
 
  const isAdmin = userInfo && userInfo.user_role === "admin";
  const nav  = useNavigate();

  const blogPosts = useContext(BlogContext);

  
  return(
        <>
        <div className="blogcontainer" style={{ width: "100%", overflowX: "hidden"}}>
            <Navbar/>

            <div className="blog-container1">
                <div className="blogcontainertitle">
                    <div className="blogcontainertitlemain">News & Blogs</div>

                    <div>"Discover insightful articles and thought-provoking opinions from our team of experts in our news and blog section."</div>
                </div>
            </div>

            <div className="blogcardscontainer">
        {isAdmin && (
          <div>
            <button className="dashboardbtn"onClick={() => {
  nav("/dashboard"); // Redirect to the dashboard page
  window.location.reload(); // Refresh the page
}}>
              Dashboard
            </button>
          </div>
        )}
        <div className="row ">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="blog-card-link col-sm-12 col-md-12 col-lg-6" style={{ textDecoration: "none"}}>
            <div key={post.id} className="">
              <div className="blogcard">
                <div className="d-flex">
                  <div className="blogimgcontainer">
                
  {post.images.length > 0 && (
    <img src={post.images[0].url} className="blogimg" alt="Blog Cover" />
  )}
                    
                  </div>
                  <div>
                    <div className="blogtitle">{post.title}</div>
                    <div className="blogcontent truncate-text">{post.description}</div>
                    <span className="blogviews">
                      {post.view_count} views{" "}
                      <span className="circle"></span> {post.created_at}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            </Link>

            
          ))}




        </div>
      </div>


            <div className="blogslider">

<ResponsiveCarousel/>

            </div>
            </div>
        
       <Footer/>

 
        </>
        
        
)
    }


export default Blog;