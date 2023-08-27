import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Mark from "../images/mark.jpg";
import Bill from "../images/Bill.jpg"
import Blogimg from "../images/3-4-view-laptop-on-table-mockup-with-eiffel-tower-figurine 1.png"
import ImageSlider from "../components/ImageSlider";
import "../App.css";
import {AiFillHeart} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai"
import { FaRegComment } from "react-icons/fa";
import {MdIosShare} from "react-icons/md";
import { FacebookShareButton } from "react-share";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import {IoIosArrowForward } from "react-icons/io";

import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../Context/BlogContext";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from 'react-icons/bs';
import defaultimg from "../images/default-user-image.png"



const BlogDetail = () => {
  const nav = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  // const userToken = userInfo.token;
  if(userInfo) {
    const userToken = userInfo.token;
  }
 
  const isAdmin = userInfo && userInfo.user_role === "admin";
  const blogPosts = useContext(BlogContext);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showComments, setShowComments] = useState(false); // State to manage the comments drop-down
  const [commentInput, setCommentInput] = useState(""); // State to handle the comment input

  const commentsRef = useRef(null); 
  const { blogId } = useParams();
  const blogData = JSON.parse(localStorage.getItem("blogData"));
  const selectedBlog = blogData.find((blog) => blog.id === parseInt(blogId));
  const imageUrls = selectedBlog ? selectedBlog.images.map(image => image.url) : [];

 
  const [likeCount, setLikeCount] = useState(selectedBlog.like_count);
  // console.log(likeCount)
  const [isLiked, setIsLiked] = useState(false)


const handleLikeClick = async () => {
  const userData = JSON.parse(localStorage.getItem("user-info"));
  // console.log(likeCount)
 

  if (userData) {
    try {
      const response = await fetch("https://dgic.axletechmm.com/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${userData.token}`
        },
        body: JSON.stringify({ post_id: selectedBlog.id }),
      });
      const data = await response.json();
      if (data.message === 'You liked the post') {
        setIsLiked(true);
        localStorage.setItem(`liked_${selectedBlog.id}`, 'true');
        setLikeCount(likeCount + 1);
      } else if (data.message === "You unliked the post") {
        setIsLiked(false);
        localStorage.removeItem(`liked_${selectedBlog.id}`);
        setLikeCount(likeCount - 1);
      }
      // console.log(data);
    } catch (error) {
      // console.log("Error fetching likes");
      window.alert(error.message)
    }
  }else{
    // window.alert("Please log in first")
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please log in first',
      customClass: {
        container: 'alert-responsive', // Apply the responsive class
    
      },
      confirmButtonColor: "#B09546"
    });

  }
};



  useEffect(() => {

    const likedStatus = localStorage.getItem(`liked_${selectedBlog.id}`);
    if (likedStatus === 'true') {
      setIsLiked(true);
    } else{
      setIsLiked(false)
    }
  }, []);
  

  

  if (!selectedBlog) {
    return <div>Loading...</div>; // You can display a loader while fetching data
  }

  useEffect(() => {
    // Add event listener on mount to detect clicks
    document.addEventListener("click", handleOutsideClick);

    // Remove event listener on unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);


  const handleOutsideClick = (event) => {
    // Close the comments dropdown if a click occurs outside of it
    if (commentsRef.current && !commentsRef.current.contains(event.target)) {
      setShowComments(false);
    }
  };

  const handleCommentIconClick = (event) => {
    // Prevent the click event from propagating to the document
    event.stopPropagation();

    // Toggle the comments dropdown when clicking the comment icon
    setShowComments(!showComments);
  };



  const [commentList, setCommentList] = useState([]);
  const [hasFetchedComments, setHasFetchedComments] = useState(false);

  // console.log(userIcon)

  const commentSection = async () => {
    try {
      if (!hasFetchedComments) { // Only fetch if comments haven't been fetched yet
        const response = await fetch(`https://dgic.axletechmm.com/api/comments/posts/${blogId}`);
        const data = await response.json();
        // console.log(data);
  
        if (data && Array.isArray(data.comments)) {

          const mappedComments = data.comments.map(comment => ({
            
            id: comment.id,
            userIcon: comment.profile_image ? comment.profile_image : defaultimg,
            userName: comment.name,
            content: comment.comments,

           
          }));
          
          // console.log(mappedComments);
          
          setCommentList(mappedComments);
       
          setHasFetchedComments(true); // Set the state to indicate that comments have been fetched
        } else {
          console.error("API response comments is not an array:", data.comments);
        }
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  

  useEffect(() => {
    commentSection();
  }, [commentInput]); // Fetch comments when component mounts
  
const handleAddComment = async () => {
  const userData = JSON.parse(localStorage.getItem("user-info"));
  // console.log(likeCount)

  if(userData) {
    const formData = new FormData();
    formData.append("post_id", selectedBlog.id);
    formData.append("comments", commentInput);
    setCommentInput("")
  
    try {
      const response = await fetch("https://dgic.axletechmm.com/api/comments", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${userInfo.token}`, // Include the token in the "Authorization" header
        },
      });
  
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Done!',
          text: 'Comment added successfully',
          customClass: {
            container: 'alert-responsive', // Apply the responsive class
        
          },
          confirmButtonColor: "#B09546"
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirect to a new page
            window.location.reload()
          }
      })
    
   
        commentSection();
     
      } 
      else {
        // Post failed, handle error (e.g., show error message)
        // console.error("Failed to add comment");
      }
    } catch (error) {
      Swal.fire({
        icon: 'Warning',
        title: 'Oops!',
        text: 'Error while adding comment',
        customClass: {
          container: 'alert-responsive', // Apply the responsive class
      
        },
        confirmButtonColor: "#B09546"
      });
    }
  }else{
    // window.alert("Please log in first")
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please log in first',
      customClass: {
        container: 'alert-responsive', // Apply the responsive class

      },
      confirmButtonColor: "#B09546"
    });
  }
   
  };

  const handleFacebookShare = () => {
    const shareUrl = window.location.href; // Replace with the URL of the blog post you want to share
    // console.log(shareUrl)

    const quote = "Check out this blog post!"; // Replace with the quote you want to share (optional)
  
    return (
      <FacebookShareButton url={shareUrl} quote={quote}>
        {/* Add your custom button or share icon here */}
        {/* For example: <FaFacebook size={30} /> */}
        Share on Facebook
      </FacebookShareButton>
    );
  };
  const handleCopyLink = () => {
    const linkToCopy = window.location.href; // Get the current URL of the blog post
  copyToClipboard(linkToCopy);
 
  showCustomAlert("Link copied to clipboard!"); 
   
  };

  const showCustomAlert = (message) => {
    const alertDiv = document.createElement("div");
    alertDiv.className = "custom-alert";
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);
  
    // Remove the alert after a short delay (e.g., 3 seconds)
    setTimeout(() => {
      document.body.removeChild(alertDiv);
    }, 3000);
  };
  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    // alert("Link copied to clipboard!");
  };

  const deletePost = async () => {
    const userData = JSON.parse(localStorage.getItem("user-info"));
    try {
      const response = await fetch(`https://dgic.axletechmm.com/api/posts/${blogId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });
  
      if (response.ok) {
        // console.log('Post deleted successfully');
        // window.alert("Post deleted successfully");
        Swal.fire({
          icon: 'success',
          title: 'Done!',
          text: 'Post deleted successfully',
          customClass: {
            container: 'alert-responsive', // Apply the responsive class
        
          },
          confirmButtonColor: "#B09546"
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirect to a new page
            nav("/")
          }
        })
       
      } else {
        console.error('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
   
  return(
    <>
    <div className="blogcontainer" style={{ width: "100%", overflowX: "hidden"}}>
        <Navbar/>
        <div className="blog-container1 blogdetailcontainer">
         <div className="blogdetail d-flex flex-column justify-content-center align-items-center mx-auto">
          <div className="blogdetailtitle">{selectedBlog.title}</div>
          <div className="blogdetailimg">

            <ImageSlider images={imageUrls}/>
          </div>
          <div className="blogdetailcontent" style={{ maxWidth: "900px"}}>
            <div>{selectedBlog.description}</div>

            <div className="d-flex mt-3">

<div style={{ marginRight: "10px", cursor: "pointer" }} onClick={handleLikeClick}>
  <span style={{ fontSize: "18px", marginRight: "2px" }}>{likeCount}</span>
  
  {isLiked ? <AiFillHeart size={25} /> : <AiOutlineHeart size={25} />}
</div>

        
        
        <div style={{ marginRight: "20px", cursor: "pointer"}} onClick={(e) => {
                                              setShowComments(!showComments);
                                              handleCommentIconClick(e); // Call the handleCommentIconClick function here
          
          }}><span style={{ fontSize: "18px", marginRight: "5px"}}>{commentList.length}</span><FaRegComment size={24}/></div>



<div class="dropdown">
  <div class="dropdown-button" style={{ cursor: "pointer" }}>     
          <MdIosShare
            size={25}
            data-bs-toggle="dropdown"
          />
        </div>
  <div class="dropdown-content">
    <button class="dropdown-item"onClick={handleCopyLink} >Copy Link</button>
    <button class="dropdown-item" > {handleFacebookShare()}</button>
   

  </div>
</div>






            </div>

            <div className="d-block">
             
            <div  ref={commentsRef} className="comments-dropdown1">
            <div className="commenttitle"><FaRegComment className="commenticon"/>Comments</div>
         
         {commentList.slice(0, 3).map((comment) => (
           <div key={comment.id} className="comment-item1 d-flex">

<div>
<img src={comment.userIcon} alt="User Icon" className="user-iconcmt" />
</div>

<div>
             <span className="user-name1">{comment.userName}</span>
             <div>
              
               <div className="comment-content1">{comment.content}</div>
             </div>
             </div>
           </div>
         ))}
</div>
            </div>


            <div className="d-flex justify-content-end">
  {isAdmin && (
    <div className="d-flex align-items-center">
      <Link to={`/editpost/${blogId}`} >
        <button className="editbtn" >
          Edit Post
        </button>
      </Link>

     <div onClick={deletePost}>
      <BsFillTrashFill size={25} style={{ color: "red", marginLeft: "10px", cursor: "pointer" }} />
      </div>
    </div>
  )}
</div>

          </div>

{showComments && (
        <div  ref={commentsRef} className="comments-dropdown">
         
          {commentList.map((comment) => (
            <div key={comment.id} className="comment-item d-flex">

<div>
<img src={comment.userIcon} alt="User Icon" className="user-iconcmt" />
</div>

<div>
              <span className="user-name">{comment.userName}</span>
              <div>
               
                <div className="comment-content">{comment.content}</div>
              </div>
              </div>
            </div>
          ))}
         
          <textarea
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Add your comment..."
            rows={3}
            style={{ padding: "8px"}}
          ></textarea>
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      )}
           
         </div>
         </div>

        </div>
   <Footer/>

    </>
)
          }




export default BlogDetail;