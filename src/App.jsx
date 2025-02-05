
// import React, { useState, useEffect } from "react";
// import "./App.css";

// // Single blog post data
// const blogPost = {
//   id: 1,
//   title: "How to Learn React",
//   description:
//     "A quick guide to get you started with React. Learn the basics and become proficient in building web apps.",
//   content: `
//   React is a JavaScript library for building user interfaces. To start learning, it's important to understand components, JSX, props, and state.
//   In this article, we'll cover the fundamental concepts that will get you up and running in no time.


//   Components are the building blocks of React. A component is a JavaScript function or class that optionally accepts inputs (called "props")
//   and returns a React element that describes how a UI should appear.


//   JSX is a syntax extension for JavaScript. It looks similar to HTML, but it’s actually JavaScript. JSX is used to describe what the UI should look like.


//   Props (short for "properties") are how components communicate with each other in React. They are used to pass data from one component to another.

//   State is a built-in object that allows React components to have dynamic behavior. It helps track changes and re-render components when data changes.
//   If you want to dive deeper, explore concepts like hooks, context, and lifecycle methods in React. Stay tuned for more advanced topics!
//   `,
// };

// // BlogPost Component
// // const BlogPost = ({ post, onLike, likeCount, onCommentSubmit, comments, onShare }) => {
// //   return (
// //     <div className="blog-post">
// //       <h1>{post.title}</h1>
// //       <p className="description">{post.description}</p>
// //       <div className="content">
// //         <p>{post.content}</p>
// //       </div>

// //       {/* Like & Share Buttons */}
// //       <div className="like-share">
// //         <button onClick={onLike} className="like-button">
// //           👍 Like ({likeCount})
// //         </button>
// //         <button onClick={onShare} className="share-button">
// //           🔗 Share
// //         </button>
// //       </div>

// //       {/* Comments Section */}
// //       <div className="comments-section">
// //         <h3>Comments</h3>
// //         <form onSubmit={onCommentSubmit}>
// //           <textarea placeholder="Add a comment..." required></textarea>
// //           <button type="submit">Submit Comment</button>
// //         </form>
// //         <div className="comments-list">
// //           {comments.map((comment, index) => (
// //             <div key={index} className="comment">
// //               <p>{comment}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// const BlogPost = ({ post, onLike, likeCount, onCommentSubmit, comments }) => {
//   const [shareMessage, setShareMessage] = useState("");

//   const handleShare = async () => {
//     const postUrl = window.location.href; // Get current URL

//     if (navigator.share) {
//       // If Web Share API is supported (Mobile/Modern Browsers)
//       try {
//         await navigator.share({
//           title: post.title,
//           text: post.description,
//           url: postUrl,
//         });
//         setShareMessage("Shared successfully!");
//       } catch (error) {
//         setShareMessage("Share cancelled.");
//       }
//     } else {
//       // Fallback: Copy to Clipboard
//       navigator.clipboard.writeText(postUrl).then(() => {
//         setShareMessage("Link copied to clipboard!");
//       });
//     }

//     // Hide message after 2 seconds
//     setTimeout(() => setShareMessage(""), 2000);
//   };

//   return (
//     <div className="blog-post">
//       <h1>{post.title}</h1>
//       <p className="description">{post.description}</p>
//       <div className="content">
//         <p>{post.content}</p>
//       </div>

//       {/* Like & Share Buttons */}
//       <div className="like-share">
//         <button onClick={onLike} className="like-button">👍 Like ({likeCount})</button>
//         <button onClick={handleShare} className="share-button">🔗 Share</button>
//       </div>

//       {/* Share Message */}
//       {shareMessage && <p className="share-message">{shareMessage}</p>}

//       {/* Comments Section */}
//       <div className="comments-section">
//         <h3>Comments</h3>
//         <form onSubmit={onCommentSubmit}>
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


// const App = () => {
//   // State for likes and comments
//   const [likeCount, setLikeCount] = useState(() => {
//     return parseInt(localStorage.getItem("likes")) || 0;
//   });

//   const [comments, setComments] = useState(() => {
//     return JSON.parse(localStorage.getItem("comments")) || [];
//   });

//   // Update localStorage when likes or comments change
//   useEffect(() => {
//     localStorage.setItem("likes", likeCount);
//   }, [likeCount]);

//   useEffect(() => {
//     localStorage.setItem("comments", JSON.stringify(comments));
//   }, [comments]);

//   // Handle Like button click
//   const handleLike = () => {
//     setLikeCount(likeCount + 1);
//   };

//   // Handle Comment submission
//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     const comment = e.target[0].value;
//     setComments([...comments, comment]);
//     e.target.reset(); // Clear input field
//   };

//   // Handle Share button click
//   const handleShare = async () => {
//     try {
//       const url = window.location.href;
//       if (navigator.share) {
//         await navigator.share({
//           title: blogPost.title,
//           text: blogPost.description,
//           url,
//         });
//       } else {
//         await navigator.clipboard.writeText(url);
//         alert("Link copied to clipboard!");
//       }
//     } catch (error) {
//       console.error("Error sharing:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>My Blog</h1>
//         <p>Welcome to my blog on React! This article will help you learn React step-by-step.</p>
//       </header>
//       <main>
//         <BlogPost
//           post={blogPost}
//           onLike={handleLike}
//           likeCount={likeCount}
//           onCommentSubmit={handleCommentSubmit}
//           comments={comments}
//           onShare={handleShare}
//         />
//       </main>
//     </div>
//   );
// };

// export default App;
// import React from "react";
// import { Link } from "react-router-dom";
// import "./App.css";

// // Sample blogs
// const blogs = [
//   {
//     id: 1,
//     title: "How to Learn React",
//     description: "A quick guide to get started with React.",
//   },
//   {
//     id: 2,
//     title: "Understanding JavaScript Closures",
//     description: "A deep dive into closures in JavaScript.",
//   },
// ];

// const App = () => {
//   return (
//     <div className="App">
//       <header>
//         <h1>My Blog</h1>
//         <p>Welcome! Click on a blog post to read more.</p>
//       </header>
//       <main>
//         {blogs.map((blog) => (
//           <div key={blog.id} className="blog-card">
//             <h2>{blog.title}</h2>
//             <p>{blog.description}</p>
//             <Link to={`/blog/${blog.id}`} className="read-more">
//               Read More
//             </Link>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>My Blog</h1>
        <p>Welcome! Click on a blog post to read more or add your own blog.</p>
        <Link to="/add-blog" className="add-blog-button">➕ Add Blog</Link>
      </header>
      <main>
        {blogs.length === 0 ? <p>No blogs available. Add one!</p> : 
          blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <Link to={`/blog/${blog.id}`} className="read-more">
                Read More
              </Link>
            </div>
          ))
        }
      </main>
    </div>
  );
};

export default App;
