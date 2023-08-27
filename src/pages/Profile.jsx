


import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { FaUser } from 'react-icons/fa'; 
import Footer from "../components/Footer";
import userimg from "../images/default-user-image.png";
// import { FaUser } from "react-icons/fa";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { MdPhone } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import {MdModeEdit} from "react-icons/md"
import PasswordChangeModal from "../components/PasswordChangeForm";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Profile = () => {
        
const user = localStorage.getItem('user-info');

// Parse the JSON data
const parsedUserData = JSON.parse(user);

// Access the 'id' property
const userId = parsedUserData.id;
const userToken = parsedUserData.token;
// console.log(userToken)

const nav = useNavigate();

// console.log(userId); 


        const [name, setName] = useState(parsedUserData ? parsedUserData.name : "");
        const [email, setEmail] = useState(parsedUserData ? parsedUserData.email : "");
        const [phone, setPhone] = useState(parsedUserData ? parsedUserData.phone : "");
        const [image, setImage] = useState(parsedUserData ? parsedUserData.profile_image: "");

        const[editedName, setEditedName] = useState("");
        const[editedEmail, setEditedEmail] = useState("");
        const[editedPhone, setEditedPhone] = useState("");
        const [editedImage, setEditedImage] = useState(null)



    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setEditedImage(file);
    
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file); // Read the file and convert to base64
      }
    };
    
    const readFileAsBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    };
    

    


    const handleSave = async () => {
      setEditedName("");
      setEditedEmail("");
      setEditedPhone("")

      if(!editedName && !editedEmail && !editedPhone && !editedImage) {
                      Swal.fire({
      icon: 'warning',
      title: 'Oops!',
      text: 'Please edit your profile first',
      customClass: {
        container: 'alert-responsive', // Apply the responsive class
    
      },
      confirmButtonColor: "#B09546"
    });
      }
    
      if(editedName || editedPhone || editedImage || editedPhone) {
      const formData = new FormData();
    
      if (editedName) {
        formData.append('name', editedName);
      } else {
        formData.append('name', parsedUserData.name); // Retain old value
      }
    
      if (editedEmail) {
        formData.append('email', editedEmail);
      } else {
        formData.append('email', parsedUserData.email); // Retain old value
      }
    
      if (editedPhone) {
        formData.append('phone', editedPhone);
      } else {
        formData.append('phone', parsedUserData.phone); // Retain old value
      }
    
      const base64ImageData = editedImage ? await readFileAsBase64(editedImage) : null;
      if (editedImage) {
        formData.append('profile_image', editedImage);
      } else {
        formData.append('profile_image', parsedUserData.profile_image); // Retain old value
      }
      try {
        const response = await fetch(`https://dgic.axletechmm.com/api/profile-edit/${userId}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
          body: formData, // Send the FormData object
        });
    
        if (response.ok) {
          // console.log(response);
          const existingUserData = JSON.parse(localStorage.getItem('user-info'));
          const mergedUserData = {
            ...existingUserData,
            name: editedName || parsedUserData.name,
            email: editedEmail || parsedUserData.email,
            phone: editedPhone || parsedUserData.phone,
            profile_image: base64ImageData || parsedUserData.profile_image,
          };


          // console.log(typeof editedImage)
          setName(mergedUserData.name);
          setEmail(mergedUserData.email);
          setPhone(mergedUserData.phone);
          setImage(mergedUserData.profile_image);
    
          localStorage.setItem('user-info', JSON.stringify(mergedUserData));
          // window.alert('User data changed successfully');
              Swal.fire({
      icon: 'success',
      title: 'Done!',
      text: 'User data has changed successfully',
      customClass: {
        container: 'alert-responsive', // Apply the responsive class
    
      },
      confirmButtonColor: "#B09546"
    });
        } else {
          console.error('Profile update failed');
        }
      } catch (error) {
        console.error('Error updating profile:', error);
      }
      }


    };
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePasswordChangeClick = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
    
    return (
        <>
        
       <div className="Profilecontainer" style={{ position: "relative"}}>
        <Navbar/>
 <div className="profile1background">
            <div className="Profile1">
            <div className="Profiletitle"><FaUser style={{ color: "#DCBB5B", marginRight: "10px"}}/> <span>Profile</span></div>
    
            <div className="mx-auto justify-content-center profilecontent">
                <div className="d-flex mt-5">
                  <div className="profileimagecontainer">
                <label htmlFor="profile-image">
                  <div className="profile-image-wrapper">
                    <img
                      src={ image || userimg }
                      alt="user"
                      className="userprofileimg"
                    />
                  </div>
                </label>
                <input
  type="file"
  id="profile-image"
  onChange={handleImageChange}
  style={{ display: "none" }}
/>


<span className="editpencil"><MdModeEdit size={22}/></span>
               </div>
              

    <div>
    <div className="profilename">{name}</div>
    <div className="profileemail">{email}</div>
    <div className="profileemail">{phone}</div>
    </div>
                </div>
            </div>
    
            <div className="editprofile mx-auto">
                <div className="edittitle">
                <div className="Profiletitle2"><MdModeEdit style={{ color: "#DCBB5B", marginRight: "10px"}}/> <span>Edit Profile</span></div>
                <div className="d-flex justify-content-center align-items-center">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // console.log("Form Submitted");
                  handleSave();
                
                }}
              
    

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
                  value={editedName}
                  onChange={(e) => {setEditedName(e.target.value)}}
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
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
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
                  value={editedPhone}
                  onChange={(e) => setEditedPhone(e.target.value)}
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

    


    

    
                <button
                  style={{
                    marginTop: "40px",
                    padding: "8px 15px",
                    width: "100%",
                  }}
                  className="loginbtn editsavebtn"
                  
            
                >
               
                 Save
                </button>

                <div>

                <div className="chgpassword" onClick={handlePasswordChangeClick}>Change Password?</div>

              
<div className="">
<PasswordChangeModal isOpen={isModalOpen} onClose={handleCloseModal}  /></div>

                

                </div>
    
              </form>
            </div>
                </div>
            </div>
           </div>
           </div>
           <Footer/>
       </div>

     
        </>
    )
}

export default Profile;
