// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./App.css";

// // Sample blog posts
// const blogPosts = [
//   {
//     id: 1,
//     title: "How to Learn React",
//     description:
//       "A quick guide to get started with React. Learn the basics and become proficient.",
//     content: `React is a JavaScript library for building user interfaces. 
//     To start learning, it's important to understand components, JSX, props, and state. 
//     This guide covers fundamental concepts.`,
//   },
//   {
//     id: 2,
//     title: "Understanding JavaScript Closures",
//     description:
//       "A deep dive into closures in JavaScript and their real-world applications.",
//     content: `Closures are functions that retain access to variables from their parent scope 
//     even after the parent function has executed. This article explains them in detail.`,
//   },
// ];

// const BlogPage = () => {
//   const { id } = useParams();
//   const blog = blogPosts.find((post) => post.id === parseInt(id));

//   const [likeCount, setLikeCount] = useState(() => parseInt(localStorage.getItem(`likes-${id}`)) || 0);
//   const [comments, setComments] = useState(() => JSON.parse(localStorage.getItem(`comments-${id}`)) || []);
//   const [shareMessage, setShareMessage] = useState("");

//   useEffect(() => {
//     localStorage.setItem(`likes-${id}`, likeCount);
//   }, [likeCount]);

//   useEffect(() => {
//     localStorage.setItem(`comments-${id}`, JSON.stringify(comments));
//   }, [comments]);

//   const handleLike = () => {
//     setLikeCount(likeCount + 1);
//   };

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     const comment = e.target[0].value;
//     setComments([...comments, comment]);
//     e.target.reset();
//   };

//   const handleShare = async () => {
//     const postUrl = window.location.href;
//     if (navigator.share) {
//       try {
//         await navigator.share({ title: blog.title, text: blog.description, url: postUrl });
//         setShareMessage("Shared successfully!");
//       } catch {
//         setShareMessage("Share cancelled.");
//       }
//     } else {
//       navigator.clipboard.writeText(postUrl).then(() => {
//         setShareMessage("Link copied to clipboard!");
//       });
//     }
//     setTimeout(() => setShareMessage(""), 2000);
//   };

//   if (!blog) return <h2>Blog not found</h2>;

//   return (
//     <div className="blog-post">
//       <h1>{blog.title}</h1>
//       <p className="description">{blog.description}</p>
//       <div className="content">
//         <p>{blog.content}</p>
//       </div>

//       <div className="like-share">
//         <button onClick={handleLike} className="like-button">👍 Like ({likeCount})</button>
//         <button onClick={handleShare} className="share-button">🔗 Share</button>
//       </div>

//       {shareMessage && <p className="share-message">{shareMessage}</p>}

//       <div className="comments-section">
//         <h3>Comments</h3>
//         <form onSubmit={handleCommentSubmit}>
//           <textarea placeholder="Add a comment..." required></textarea>
//           <button type="submit">Submit Comment</button>
//         </form>
//         <div className="comments-list">
//           {comments.map((comment, index) => (
//             <div key={index} className="comment">
//               <p>{comment}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPage;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const foundBlog = storedBlogs.find((post) => post.id === parseInt(id));
    setBlog(foundBlog);
  }, [id]);

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div className="blog-post">
      <h1>{blog.title}</h1>
      <p className="description">{blog.description}</p>
      <div className="content">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPage;
