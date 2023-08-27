import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import {BsFillDashCircleFill} from "react-icons/bs";
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles
import DOMPurify from "dompurify"
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const Dashboard= () => {

    const [selectedImages, setSelectedImages] = useState([]);
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const nav = useNavigate();

  const getAdminToken = () => {
    const userInfoString = localStorage.getItem("user-info");
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      return userInfo.token;
    }
    return null; // If there's no user-info in localStorage or if parsing fails, return null
  };
  
  const adminToken = getAdminToken();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create FormData object and add title, description, and images
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    for (const image of selectedImages) {
      formData.append("images[]", image);
    }
// 
    try {
      const response = await fetch("https://dgic.axletechmm.com/api/posts", {
        method: "POST",
        body: formData,
  
  headers: {
    Authorization: `Bearer ${adminToken}`, // Include the token in the "Authorization" header
  },
});

      if (response.ok) {
        // window.alert("Post Created Successfully");

        Swal.fire({
          icon: 'success',
          title: 'Done!',
          text: 'Post Created successfully',
          customClass: {
            container: 'alert-responsive', // Apply the responsive class
        
          },
          confirmButtonColor: "#B09546"
        });
        nav("/blog")
        // Post was successful, do something (e.g., show success message)
      
      } else {
        // Post failed, handle error (e.g., show error message)
     
      }
    } catch (error) {
      // console.error("Error while creating post:", error);

      Swal.fire({
        icon: 'warning',
        title: 'Oops!',
        text: 'Error while creating post',
        customClass: {
          container: 'alert-responsive', // Apply the responsive class
      
        },
        confirmButtonColor: "#B09546"
      });
    }
  };





    const handleImageChange = (event) => {
      const imageFiles = event.target.files;
      setSelectedImages([...selectedImages, ...imageFiles]);
    };

    // console.log(selectedImages)
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
      };
    

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

      
  

    const renderSelectedImages = () => {
      return selectedImages.map((image, index) => (
        <div key={index} className="ImageContainer">
          <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
          <span
            className="DeleteButton"
        
            onClick={() => handleRemoveImage(index)}
          >
            <BsFillDashCircleFill size={25} style={{color: "red"}}/>
          </span>
        </div>
      ));
    };

    const handleRemoveImage = (index) => {
      const updatedSelectedImages = selectedImages.filter((_, i) => i !== index);
      setSelectedImages(updatedSelectedImages);
    };
    

    // const cleanHtml = (html) => {
    //   return DOMPurify.sanitize(html);
    // };
    
    return(
        <>
       <div clasName="Dashboard" style={{ backgroundColor: "rgba(29, 28, 28, 1)", width: "100%", overFlowX: "hidden"}}>
        <Navbar/>

        <div className="Dashboardcontainer">
            <div className="Dashboardtitle">Create Blog</div>
<form onSubmit={handleSubmit}>


<div className="ImageUploadContainer">
              <label htmlFor="fileInput" className="ImageUploadCard">

                    <span className="PlusSign">+</span>
                    <span>Upload Image</span>

              </label>
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleImageChange}
                multiple
                required
                style={{ display: "none"}}
              />
            </div>

            <div className="UploadedImagesContainer">{renderSelectedImages()}</div>

            <div className="Dashboardtitle1">Add Title</div>
            <input className="admininput" type="text"  value={title}
              onChange={handleTitleChange}required />

            <div className="Dashboardtitle1">Add Content</div>
            <textarea className="admininput2"value={description}
              onChange={handleDescriptionChange}  required ></textarea>

            <br/>
            <button type="submit" className="postcreatebtn">Create</button>
            </form>
         </div>
       </div>
       <Footer/>
       </>
    )
}

export default Dashboard;


