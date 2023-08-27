import "../App.css";
import React from 'react';
import logo from "../images/Logo 4.png"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { logoutUser } from "../../redux/services/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../redux/services/authSlice";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

import Swal from "sweetalert2";
const Navbar = () => {
 const nav = useNavigate();
//  const userCookie = Cookies.get("user");
//  const user = userCookie ? JSON.parse(userCookie) : null;
//  const token = Cookies.get("token");
 const dispatch = useDispatch();

 const [colorChange, setColorchange] = useState(false);
    const userStorage = localStorage.getItem("user-info");
    const user = userStorage ? JSON.parse(userStorage) : null;

  // const user = useSelector((state) => state.authSlice.user);
    // const {user} = useSelector((state) => state.user);
    // const {token} = useSelector((state) => state.user);

    // console.log(token);
    // console.log(user?.name);
    // console.log(user?.email);

    
    // const handleLogout = () => {
    //   dispatch(logoutUser()); // Dispatch the logoutUser action to clear the token and email from localStorage
    //   Alert();
    //   // window.location.reload();
    //   // console.log("Logged out");
      
    // };

    const handleLogout = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will be redirected',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#B09546',
        confirmButtonText: 'Okay',
        confirmButtonColor: "#d33"
      }).then(function (result) {
        if (result.isConfirmed) {
          dispatch(removeUser()); // Dispatch the logoutUser action to clear the token and email from localStorage
       
          window.location.reload();
          window.location.href = "/";

          nav("/")
         
       

          console.log('Logged out');
        }
      });
    };
    
  
    const [isSmallScreen, setIsSmallScreen] = useState(false);


    const changeNavbarColor = () => {
        if (window.scrollY > 0) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };

    
    window.addEventListener('scroll', changeNavbarColor);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1200);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <>
 <div className="navposition" style={{ position: "fixed", zIndex: 100}} >
  <div>
  <div className="navbar navbar-expand-xl transparent shadow-5-strong" > 
  {/* <nav className={colorChange ? 'navbar colorChange' : 'navbar'}> */}
  <nav className={`navbar ${colorChange ? 'colorChange' : ''}${isSmallScreen ? ' colorChange' : ''}`}>
  
      <div className="container-fluid">
      <a className="navbar-brand logo-container " href="/">
      <img src={logo} alt="logo" className="logo" style={{}}/>
      </a>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav111" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> */}
      <button
              className="navbar-toggler ml-auto custom-toggler navbutton"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
        <span className="navbar-toggler-icon"></span>
      
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="item" style={{ marginRight: "10px"}}>Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/services" className="item" style={{ marginRight: "10px"}}>Services</Link>
          </li>
          <li className="nav-item">
          <Link to="/pricing" className="item" style={{ marginRight: "10px"}}>Pricing</Link>
          </li>
          <li className="nav-item">
          <Link to="/projects" className="item" style={{ marginRight: "10px"}}>Our Projects</Link>
          </li>
          <li className="nav-item">
          <Link to="/blog" className="item" style={{ marginRight: "10px"}}>News & Blog</Link>
          </li>
          <li className="nav-item">
          <Link to="/aboutus" className="item" style={{ marginRight: "10px"}}>About us</Link>
          </li>
          <li className="nav-item">
          <Link to="/contactus" className="item" style={{ marginRight: "10px"}}>Contact us</Link>
          </li>
        </ul>
        <ul className="navbar-nav">
             {user  ? (
                     <>
                               <li className="nav-item">
          <Link to="/profile" className="item" style={{ marginRight: "10px"}}>Profile</Link>
          </li>
          <li className="nav-item">
          <span onClick={handleLogout} className="item" style={{ marginRight: "10px", backgroundColor: "transparent", outline: "none", border: "none"}}>Log out</span>
          </li>
                     </>
           ) : (
             <>
                       <li className="nav-item">
          <Link to="/login" className="item" style={{ marginRight: "10px"}}>Login</Link>
          </li>
          <li className="nav-item register">
          <Link to="/register" className="item" style={{ marginRight: "10px"}}>Get Started</Link>
          </li>
          </>
           )}


        </ul>
        
                    
      </div>
      </div>
      </nav>
      </div>
  </div>
 </div>

 
    </>
  );
}

export default Navbar;


