import React from "react";
import logo from "../images/Logo 4.png"
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { useState } from "react";
import { MdPhone } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import "../App.css";
import { useRegisterMutation } from "../../redux/api/authApi";
import { addUser } from "../../redux/services/authSlice";
// import { startLoading, finishLoading} from "../../redux/services/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiAlertTriangle } from "react-icons/fi";
const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");
  const [confirm_password,setPasswordConfirmation] = useState("");
  const [register] = useRegisterMutation();
  
  const [ error, setError] = useState();
  const [ loading, setLoading ] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();




  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };


// const registerHandler = async (e) => {
//    try{ 
//     e.preventDefault();
//     setLoading(true);
//     const user = {name,email,password,confirm_password,phone};
//     const  data  = await register(user);
//     console.log(data);
//     if (data) {
//       setLoading(false);
//       navigate("/login"); 
      
//     } else{
//       setLoading(false);
//       setError(data?.error)
//       dispatch(setError ("Email has already been taken"));
//     }
//   }

//   catch(error){
//     setLoading(false)
//   }
    

// };


const registerHandler = async(e) => {
  e.preventDefault();
  const user = { name, email,phone, password, confirm_password,   };
  try{    setLoading(true);

    const data  = await register(user);
    if(data?.error) {
      setError(data?.error?.data?.errors);
      localStorage.removeItem("user-info");

      

      if(password !== confirm_password) {
        dispatch(setError("Confirm password field must match password"))
      } else{
        dispatch(setError("Email has already been taken"))
      }
      // console.log(data?.error);
    }else{
      dispatch(addUser({ user: data?.user, token: data?.data.token }));
      localStorage.setItem(
        "user-info",
        JSON.stringify({ id: data?.data.id,token: data?.data.token, email: data?.data.email, name: data?.data.name, phone: data?.data.phone, user_role: data?.data.user_role, profile_image: data?.data.profile_image })
      );
      navigate("/login");
      console.log(data?.data)

    
    }
  }
catch(error) {
    // console.error("An error occurred: ", error)
    console.log("error occurred")
  }finally{
    setLoading(false);
  }
}

// const registerHandler = async (e) => {
//   e.preventDefault();
//   const user = { name, email, phone, password, confirm_password };
//   try {
//     setLoading(true);

//     const data = await register(user);
//     if (data?.error) {
//       if (data.error.data.errors.email) {
//         dispatch(setError("Email has already taken"));
//       }
//       if (data.error.data.errors.password) {
//         dispatch(setError("Confirm password field must match password"));
//       }
//     } else {
//       dispatch(addUser({ user: data?.user, token: data?.data.token }));
//       localStorage.setItem(
//         "user-info",
//         JSON.stringify({ token: data?.data.token, email: data?.data.email })
//       );
//       navigate("/");
//       console.log(data?.data);
//     }
//   } catch (error) {
//     console.log("An error occurred: ", error);
//     // Handle other error conditions if needed
//   } finally {
//     setLoading(false);
//   }
// };






  return (
    <>
   
  
    <div className="logincontainer">
    <Navbar />
      <div className="container">
        <div className="logintitle col-sm-12">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="logintitle1">Digital Insects</div>

          <div className="logintitle2">Register</div>
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
            
            // }}
            onSubmit={registerHandler}

            style={{ marginTop: "10px" }}
          >
            <div className="d-block pt-5">
              <label for="username">
                <FaUser
                  style={{
                    color: "var(--text-color1)",
                    fontSize: "30px",
                    marginRight: "15px",
                    marginTop: "10px",
                  }}
                />
              </label>
              <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Username"
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
            <div className="d-block pt-4">
              <label for="email">
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
               required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
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

            <div className="d-block pt-4">
              <label for="phone">
                <MdPhone
                  style={{
                    color: "var(--text-color1)",
                    fontSize: "35px",
                    marginRight: "15px",
                    marginTop: "10px",
                  }}
                />
              </label>
              <input
               required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
                type="phone"
                placeholder="Phone"
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

            <div className="d-block pt-4">
              <label for="password">
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
                // type="password"
                type={passwordVisible ? "text" : "password"}
                value={password}
                onChange={ (e) => setPassword(e.target.value)}
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

            <div className="d-block pt-4">
              <label for="password">
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
                // type="password"
                type={passwordVisible1 ? "text" : "password"}
                value={confirm_password}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                placeholder="Confirm Password"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid var(--text-color1)",
                  color: "var(--text-color4)",
                  padding: "10px 15px",
                }}
              />
              <span onClick={togglePasswordVisibility1}>
                {passwordVisible1 ? (
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
              {loading ? "Loading..." : "Register"}
            
            </button>

          </form>
        </div>
        <div className="loginfooter" style={{ paddingBottom: "300px" }}>
          Already have an account?
          <Link to="/login">
            <span className="registerspan">Login</span>
          </Link>
          here.
        </div>
      </div>
      <Footer/>
    </div>
  
    </>
  );
};

export default Register;