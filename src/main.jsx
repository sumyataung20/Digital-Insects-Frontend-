import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Blog from './pages/Blog.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Contactus from './pages/Contactus.jsx';
import Login from './pages/Login.jsx';
import Pricing from './pages/Pricing.jsx';
import Projects from './pages/Projects.jsx';
import Register from './pages/Register.jsx';
import Services from './pages/Services.jsx';
import Profile from "./pages/Profile.jsx";
import BlogDetail from './pages/BlogDetail.jsx';
import { Provider } from 'react-redux';
import { store } from "../redux/store.js"
import Dashboard from "./pages/Dashboard.jsx";
import AdminRouteGuard from "../redux/AdminRouteGuard.jsx";
import { BlogProvider } from './Context/BlogContext.jsx';
import { useEffect } from 'react';
import { useState } from 'react';
import { isAuthenticated, getUserRole } from '../redux/services/authSlice.js';
import NotFound from "./pages/404notfound";
import './index.css';

import { Router } from 'react-router-dom';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Routes, Route} from "react-router-dom";
import EditPost from './pages/EditPost.jsx';


// const [blogPosts, setBlogPosts] = useState([]);

//   useEffect(() => {
//     const fetchBlogData = async () => {
//       try {
//         const response = await fetch("https://dgicapi.axletechmm.com/api/posts");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setBlogPosts(data.data);
//         console.log(data);
//       } catch (error) {
//         console.error("Error fetching blog data:", error);
//       }
//     };

//     fetchBlogData();
//   }, []);
const router = createBrowserRouter([

 

  {
    path: "/",
    element: <App/>
  },

  {
    path: "blog",
    element: <Blog/>
  },

  {
    path: "/blog/:blogId",
    element: <BlogDetail/>
  },


  {
    path: "services",
    element: <Services/>
  },

  {
    path: "aboutus",
    element: <Aboutus/>
  },

  {
    path: "contactus",
    element: <Contactus/>
  },

  {
    path: "login",
    element: <Login/>
  },

  {
    path: "register",
    element: <Register/>
  },

  {
    path: "pricing",
    element: <Pricing/>
  },

  {
    path: "projects",
    element: <Projects/>
  },


  {
    path: "profile",
    element: <Profile/>
  },
  {
    path: "dashboard",
    element: isAuthenticated() && getUserRole() === "admin" ? (
      <Dashboard />
    ) : (
      <NotFound />
    )
  },

  {
    path: "editpost/:blogId",
    element: isAuthenticated() && getUserRole() === "admin" ? (
      <EditPost />
    ) : (
      <NotFound />
    )
  },



  // {
  //   path: "dashboard",
  //   element: <Dashboard/>
  // }


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}  >
      <BlogProvider>
      
      
    <RouterProvider router={router} />

 
 
    </BlogProvider>

    </Provider >
  </React.StrictMode>,
)
