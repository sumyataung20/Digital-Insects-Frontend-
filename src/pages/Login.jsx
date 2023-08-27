import React from "react";
// import { localStorage } from "localStorage";
import logo from "../images/Logo 4.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import "../App.css";
import { useLoginMutation } from "../../redux/api/authApi";
// import { startLoading, finishLoading} from "../../redux/services/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addUser } from "../../redux/services/authSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const storedToken = localStorage.getItem('token'); // Retrieve the token from localStorage
const storedEmail = localStorage.getItem('email'); // Retrieve the email from localStorage
import { FiAlertTriangle } from "react-icons/fi";


const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('dgicadmin@mm.com');
  const [password, setPassword] = useState("password");
  const [ error, setError] = useState();
  const [ loading, setLoading ] = useState(false)

  

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const dispatch = useDispatch();


  const [login] = useLoginMutation();
  


  const loginHandler = async(e) => {
    e.preventDefault();
    const user = { email, password };
    try{    setLoading(true);
  
      const data  = await login(user);
      if(data?.error) {
        setError(data?.error?.data?.errors);
        localStorage.removeItem("user-info");

        dispatch(setError("Invalid email or password")); 
        // console.log(data?.error);
      }else{
        dispatch(addUser({ user: data?.user, token: data?.data.token }));
        localStorage.setItem(
          "user-info",
          JSON.stringify({ id: data?.data.id,token: data?.data.token, email: data?.data.email, name: data?.data.name, phone: data?.data.phone, user_role: data?.data.user_role, profile_image: data?.data.profile_image })
        );
        navigate("/");
        console.log(data?.data)
      }
    }
catch(error) {
      console.error("An error occurred: ", error)
    }finally{
      setLoading(false);
    }
  }



  


  return (
    <>
    <div className="logincontainer">
    <Navbar />
   
      <div className="container ">
     
  


        <div className="logintitle col-sm-12">
        
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="logintitle1">Digital Insects</div>

          <div className="logintitle2"> Login </div>
        </div>
        {error && (
  <div className="alert loginerror" role="alert">
     <span><FiAlertTriangle style={{color: "red", marginRight: "10px"}} size={25}/></span>{error}
  </div>
)}
        <div className="d-flex justify-content-center align-items-center">

          <form
            // onSubmit={(e) => {
            //   e.preventDefault();
            //   console.log("Form Submitted");
            //   handleLoginEvent();

            // }}

            onSubmit={loginHandler}
            style={{ marginTop: "10px" }}
          >

            <div className="d-block py-5">
              <label htmlfor="email">
                <AiTwotoneMail
                  style={{
                    color: "var(--text-color1)",
                    fontSize: "35px",
                    marginRight: "15px",
                    marginTop: "10px",
                  }}
                />
              </label>
              <input
                type="email"
                required
                placeholder="Email"
              
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid var(--text-color1)",
                  color: "var(--text-color4)",
                  padding: "10px 15px",
                }}
              />
            </div>

            <div className="d-block">
              <label htmlfor="password">
                <RiLockPasswordFill
                  style={{
                    color: "var(--text-color1)",
                    fontSize: "30px",
                    marginRight: "15px",
                  }}
                />
              </label>
              <input
                required
                type={passwordVisible ? "text" : "password"}
              
                onChange={(e) => {
                 
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid var(--text-color1)",
                  color: "var(--text-color4)",
                  padding: "10px 15px",
                }}
              />
              <span onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <RiEyeOffFill
                    style={{ color: "var(--text-color3)", fontSize: "18px" }}
                  />
                ) : (
                  <RiEyeFill style={{ fontSize: "18px" }} />
                )}
              </span>
            </div>

            <button
              style={{
                marginTop: "20px",
                padding: "8px 15px",
                width: "100%",
              }}
              className="loginbtn"
              disabled={loading}
              
            >
              {loading ? "Loading..." : "Login"}
            
            </button>





          </form>
        </div>
        <div className="loginfooter">
          Dont't have an account?{" "}
          <Link to="/register">
            <span className="registerspan">Register</span>
          </Link>
          here.
        </div>
      </div>
      <Footer/>
    </div>

    </>
  );
};

export default Login;