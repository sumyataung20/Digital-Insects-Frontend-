import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import {BsFillDashCircleFill} from "react-icons/bs";
import "./Dashboard.css"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const EditPost= () => {
    const { blogId } = useParams();
    console.log(blogId)

    const [selectedImages, setSelectedImages] = useState([]);
    const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  console.log(title);
  console.log(description);
  console.log(selectedImages);
  console.log(typeof(selectedImages));
  const nav = useNavigate();

  useEffect(() => {
    // Retrieve blog post data from Local Storage based on postId
    const existingPostsString = localStorage.getItem("blogData");
    const existingPosts = JSON.parse(existingPostsString) || [];
    const existingPost = existingPosts.find((post) => post.id === parseInt(blogId));
    // console.log(existingPost)

    if (existingPost) {
      const images = existingPost.images.map(image => image.url);

      setTitle(existingPost.title);
      setDescription(existingPost.description);
      setSelectedImages(images);
    }
  }, [blogId]);

  // Rest of your code...


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



const handleUpdate = async (event) => {
    console.log("Edit post")
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    for (const image of selectedImages) {
      formData.append("added_images[]", image)
    }




      try {
        const response = await fetch(`http://192.168.1.249:8000/api/posts/${blogId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${adminToken}`,
          },
          // body: JSON.stringify(updatedData),
          body: formData
        });

        const data = await response.json();
        console.log(data)

     

      if (data) {
        setTitle(data.title);
        setDescription(data.description);
        setSelectedImages(data.images)
      
      
      window.alert("Post Updated Successfully");
      nav("/");
      }else {
      console.error("Failed to update post");
    }


  } 
  catch (error) {
    console.error("Error while updating post:", error);
  }
};


// if (response.ok) {
//   // Update blogData in localStorage with the updated data
//   const existingPostsString = localStorage.getItem("blogData");
//   const existingPosts = JSON.parse(existingPostsString) || [];
//   const updatedPosts = existingPosts.map((post) =>
//       post.id === parseInt(blogId)
//           ? { ...post, title, description, images: selectedImages }
//           : post
//   );
//   localStorage.setItem("blogData", JSON.stringify(updatedPosts));

//   window.alert("Post Updated Successfully");
//   nav("/");
// }

const handleImageChange = (event) => {
      const imageFiles = event.target.files;
      
      const imageFilePromises = Array.from(imageFiles).map((file) => {
            return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
              resolve(e.target.result); // Base64 encoded image
            };
            reader.readAsDataURL(file);
          });
        });
      
        Promise.all(imageFilePromises).then((base64Images) => {
          setSelectedImages([...selectedImages, ...base64Images]);
        });
};

// const handleImageChange = (event) => {
//       const imageFiles = event.target.files;
//       setSelectedImages([...selectedImages, ...imageFiles]);
//     };



      

const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    
const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
  

const renderSelectedImages = () => {
        return selectedImages.map((image, index) => (
          <div key={index} className="ImageContainer">
            <img src={image} alt={`Image ${index}`} />
            <span
              className="DeleteButton"
              onClick={() => handleRemoveImage(index)}
            >
              <BsFillDashCircleFill size={25} style={{ color: "red" }} />
            </span>
          </div>
        ));
};

const handleRemoveImage = (index) => {
  const updatedSelectedImages = selectedImages.filter((_, i) => i !== index);
  setSelectedImages(updatedSelectedImages);
};

// const renderSelectedImages = () => {
//       return selectedImages.map((image, index) => (
//         <div key={index} className="ImageContainer">
//           <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
//           <span
//             className="DeleteButton"
        
//             onClick={() => handleRemoveImage(index)}
//           >
//             <BsFillDashCircleFill size={25} style={{color: "red"}}/>
//           </span>
//         </div>
//       ));
//     };

    
      

    
    
return(
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
            <input className="admininput" type="text"  value={title}
              onChange={handleTitleChange}required />

            <div className="Dashboardtitle1">Update Content</div>
            <textarea className="admininput2"value={description}
              onChange={handleDescriptionChange} style={{ whiteSpace: "normal"}} required ></textarea>
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





// {
//     "data": [
//         {
//             "id": 1,
//             "title": "this is title",
//             "description": "this is description",
//             "like_count": 1,
//             "view_count": 0,
//             "images": [],
//             "created_at": "1 second ago",
//             "updated_at": "1 second ago"
//         },
//         {
//             "id": 7,
//             "title": "this is tiwer psdisdaidsdfosoidf",
//             "description": "Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.\n\nThe decision about what to put into your paragraphs begins with the germination of a seed of ideas; this “germination process” is better known as brainstorming. There are many techniques for brainstorming; whichever one you choose, this stage of paragraph development cannot be skipped. Building paragraphs can be like building a skyscraper: there must be a well-planned foundation that supports what you are building. Any cracks, inconsistencies, or other corruptions of the foundation can cause your whole paper to crumble.",
//             "like_count": 0,
//             "view_count": 1,
//             "images": [
//                 {
//                     "id": 19,
//                     "url": "http://192.168.1.249:8000/storage/images/postimg/64ddadcf46860_Flag_of_Myanmar.png"
//                 },
//                 {
//                     "id": 20,
//                     "url": "http://192.168.1.249:8000/storage/images/postimg/64ddadcf47f95_Screenshot from 2023-08-01 13-25-16_auto_x2.jpg"
//                 }
//             ],
//             "created_at": "1 second ago",
//             "updated_at": "1 second ago"
//         }
//     ]
// }