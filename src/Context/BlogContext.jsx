import React, { createContext, useState, useEffect } from "react";

// Create the BlogContext
const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Function to fetch blog data from the API
    const fetchBlogData = async () => {
      try {
        const response = await fetch("https://dgic.axletechmm.com/api/posts"); // Replace with the actual API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogData(data.data);
        localStorage.setItem("blogData", JSON.stringify(data.data));
        // console.log(data)
        
        
      } catch (error) {
        console.error("Error fetching blog data:", error);
        
      }

      const storedBlogData = localStorage.getItem("blogData");
    if (storedBlogData) {
      setBlogData(JSON.parse(storedBlogData));
    } else {
      fetchBlogData();
    }
    };

    fetchBlogData();
  }, []);

  return (
    // Provide the blogData to all components in the tree
    <BlogContext.Provider value={blogData}>{children}</BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
