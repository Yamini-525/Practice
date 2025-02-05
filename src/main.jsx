// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// //import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import App from "./App";
// import BlogPage from "./BlogPage";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/blog/:id" element={<BlogPage />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import BlogPage from "./BlogPage";
import AddBlog from "./AddBlog";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/add-blog" element={<AddBlog />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
