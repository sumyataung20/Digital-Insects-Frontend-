import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import {BsFillDashCircleFill} from "react-icons/bs";
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const EditPost = () => {
  const { blogId } = useParams();
  console.log(blogId)

  const existingPosts = JSON.parse(localStorage.getItem("blogData"));
  const existingPost = existingPosts.find((post) => post.id === parseInt(blogId));
  console.log(existingPost);

  const [title, setTitle] = useState(existingPost.title);
  const [description, setDescription] = useState(existingPost.description);
  const [selectedImages, setSelectedImages] = useState(existingPost.images.map(image => image.url));
  const [selectedImagesUrls, setSelectedImagesUrls] = useState([]);

  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editselectedImages, setEditSelectedImages] = useState([]);
  const [images, setImages] = useState(existingPost.images);
  const [deletedImageIds, setDeletedImageIds] = useState([]);


 console.log(title);
 console.log(description);
 console.log(selectedImages)


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
console.log(adminToken)


const handleImageChange = (event) => {
  const selectedFiles = Array.from(event.target.files);
  const selectedImagesWithTempIds = selectedFiles.map((file, index) => ({
    id: null,
    url: URL.createObjectURL(file),
  }));
  
  // Remove IDs and update state with pure image files
  const pureImageFiles = selectedImagesWithTempIds.map(image => image.url);
  setSelectedImages(prevSelectedImages => [...prevSelectedImages, ...selectedFiles]);
  setEditSelectedImages(prevSelectedImages => [...prevSelectedImages, ...selectedFiles]);
  console.log(pureImageFiles);
};

// const renderSelectedImages = () => {
//   if (!selectedImages) {
//     return null; // or some loading indicator
//   }
//   return selectedImages.map((image, index) => (
//     <div key={index} className="ImageContainer">
//       <img src={image} alt={`Image ${index}`} />
//       <span className="DeleteButton" onClick={() => handleDeleteImage(image)}>
//       <BsFillDashCircleFill size={25} style={{ color: 'red' }} />
//       </span>
//     </div>
//   ));
// };

const renderSelectedImages = () => {
  if (!selectedImages) {
    return null; // or some loading indicator
  }
  
  return selectedImages.map((image, index) => {
    if (typeof image === "string") {
      // If it's a URL (existing image)
      return (
        <div key={index} className="ImageContainer">
          <img src={image} alt={`Image ${index}`} />
          <span className="DeleteButton" onClick={() => handleDeleteImage(image)}>
            <BsFillDashCircleFill size={25} style={{ color: 'red' }} />
          </span>
        </div>
      );
    } else if (image instanceof File) {
      // If it's a File (newly added image)
      const imageUrl = URL.createObjectURL(image);
      return (
        <div key={index} className="ImageContainer">
          <img src={imageUrl} alt={`Image ${index}`} />
          <span className="DeleteButton" onClick={() => handleDeleteImage(image)}>
            <BsFillDashCircleFill size={25} style={{ color: 'red' }} />
          </span>
        </div>
      );
    }
    return null; // Handle other cases if needed
  });
};


const handleTitleChange = (event) => {
  setTitle(event.target.value);
  setEditTitle(event.target.value);
};

const handleDescriptionChange = (event) => {
  setDescription(event.target.value);
  setEditDescription(event.target.value)
};


const handleDeleteImage = (urlToDelete) => {
  const matchingImage = images.find(image => image.url === urlToDelete);

  setSelectedImages(prevSelectedImages =>
    prevSelectedImages.filter(imageUrl => imageUrl !== urlToDelete)
  );
  if (matchingImage) {
    setDeletedImageIds(prevDeletedImageIds => [...prevDeletedImageIds, matchingImage.id]);
    console.log(deletedImageIds)
  }
};




console.log(title);
console.log(description);
console.log(selectedImages);
console.log(deletedImageIds)


const handleUpdate = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  


  if(editTitle) {
    formData.append("title", editTitle)
  }else{
    formData.append("title", existingPost.title)
  }

  if(editDescription) {
    formData.append("description", editDescription)
  } else{
    formData.append("description", existingPost.description)
  }



  for (const file of editselectedImages) {
    if(file) {
    formData.append("added_images[]", file);
  } else{
    formData.append("added_images[]", existingPost.images)
  }
}

  if(deletedImageIds) {
    formData.append("deleted_images[]", deletedImageIds)
  } else{
    formData.append("deleted_images[]", [])
  }


  try {
    const response = await fetch(`https://dgic.axletechmm.com/api/posts/${blogId}`, {
      method: "POST",
      headers: {
 
        Authorization: `Bearer ${adminToken}`,
      },
      body: formData,
    });



  if (response.ok) {
    console.log(response);
    window.location.reload();
    window.location.reload();
    
    const existingPosts = JSON.parse(localStorage.getItem("blogData"));
    
    const updatedPosts = existingPosts.map((post) => {
      if (post.id === parseInt(blogId)) {
        return {
          ...post,
          title: editTitle || post.title,
          description: editDescription || post.description,
          images: editselectedImages || post.images,
        };
      }
      return post;
    });
  
    localStorage.setItem("blogData", JSON.stringify(updatedPosts));
    
    // Find the updated post by its ID
    const mergedBlogData = updatedPosts.find((post) => post.id === parseInt(blogId));
  
    console.log(mergedBlogData);
    
    // Update your component state with the merged data
    setTitle(mergedBlogData.title);
    setDescription(mergedBlogData.description);
    setSelectedImages(mergedBlogData.images);

    Swal.fire({
      icon: 'success',
      title: '',
      text: 'Blog data has updated successfully',
      customClass: {
        container: 'alert-responsive', // Apply the responsive class
    
      },
      confirmButtonColor: "#B09546"
    });

  } else{
    console.log("Error updating blog")
  }

  
    

  } catch (error) {
    console.error("Error while updating post:", error);
  }
};

console.log(title);
console.log(description);
console.log(selectedImages);
console.log(deletedImageIds)


return (
  <>
         <div clasName="Dashboard" style={{ backgroundColor: "rgba(29, 28, 28, 1)", width: "100%", overFlowX: "hidden"}}>
        <Navbar/>

        <div className="Dashboardcontainer">
            <div className="Dashboardtitle">Update Blog</div>
<form onSubmit={handleUpdate}>


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

            <div className="Dashboardtitle1">Update Title</div>
            <input className="admininput" type="text" value={title}
              onChange={handleTitleChange}/>

            <div className="Dashboardtitle1">Update Content</div>
            <textarea className="admininput2" value={description}
              onChange={handleDescriptionChange} style={{ whiteSpace: "normal"}} ></textarea>
            <br/>
            <button type="submit" className="postcreatebtn" onClick={handleUpdate}>Update</button>
            </form>
         </div>
       </div>
       <Footer/>
  </>
)


}

export default EditPost;