import React, { useState } from 'react';
import { RiEyeFill, RiEyeOffFill, RiLockPasswordFill } from 'react-icons/ri';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
Modal.setAppElement('#root');
import "./PasswordChangeForm.css"
import { MdClose } from 'react-icons/md';



const PasswordChangeModal = ({ isOpen, onClose }) => {
    const nav = useNavigate();
    const user = localStorage.getItem('user-info');


    const parsedUserData = JSON.parse(user);
    
  
    const userId = parsedUserData.id;
    const userToken = parsedUserData.token;

    console.log(userId,userToken)

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordVisible1, setPasswordVisible1] = useState(false);
    const [passwordVisible2, setPasswordVisible2] = useState(false);

  // const [passwordVisible1, setPasswordVisible1] = useState(false);
  // const [passwordVisible2, setPasswordVisible2] = useState(false);
    const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const togglePasswordVisibility2 = () => {
    setPasswordVisible2(!passwordVisible2);
  };


  const [apiResponse, setApiResponse] = useState(null);
const [errorMessage, setErrorMessage] = useState("");

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password do not match.");
      console.log("New password and confirm password do not match.");
      window.alert("New password and confirm password do not match.")
      return;
    }

    if(newPassword.length < 8) {
        window.alert("Password must be at least 8 characters")
    }
  
    setErrorMessage(""); // Clear previous error message
  
    const requestData = {
      current_password: currentPassword,
      new_password: newPassword,
      confirm_password: confirmPassword
    };
  
    try {
      const response = await fetch(`http://192.168.1.249:8000/api/change-password/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${userToken}`
        },
        body: new URLSearchParams(requestData).toString()
      });
  
      const responseData = await response.json();
      setApiResponse(responseData); // Store API response
  
      if (response.ok) {
        // Password changed successfully, handle any state updates or redirection if needed
        window.alert("Password changed Successfully");
        nav("/")
      } else {
        setErrorMessage(responseData.message || "Password change failed.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while changing the password.");
      console.error('Error changing password:', error);
    }
  };
  
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel="Password Change Modal"
    className="custom-modal"
    overlayClassName="custom-overlay"
  
    >
    <div className="password-change-modal ">
      <div className="text-center chgpasswordtitle">Change Password</div>
           <div className="form">
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
                    // type="password"
                    type={passwordVisible ? "text" : "password"}
                    value={currentPassword}
                    onChange={ (e) => setCurrentPassword(e.target.value)}
                    placeholder="Current password"
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
                    // type="password"
                    type={passwordVisible1 ? "text" : "password"}
                    value={newPassword}
                    onChange={ (e) => setNewPassword(e.target.value)}
                    placeholder="New password"
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
                    // type="password"
                    type={passwordVisible2 ? "text" : "password"}
                    value={confirmPassword}
                    onChange={ (e) => setConfirmPassword(e.target.value)}
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

<span onClick={togglePasswordVisibility2}>
                {passwordVisible2 ? (
                  <RiEyeOffFill
                    style={{ color: "var(--text-color3)", fontSize: "18px" }}
                  />
                ) : (
                  <RiEyeFill style={{ fontSize: "18px" }} />
                )}
              </span>

                </div>

            
                <button className="passwordsave" onClick={handleChangePassword}>Save</button>
                </div>
                <button onClick={onClose} style={{ position: "absolute", top: -8, right: -5}} className="closebtn">
                    <span><MdClose/></span>
                </button>
    </div>
    </Modal>
  );
};

export default PasswordChangeModal;
