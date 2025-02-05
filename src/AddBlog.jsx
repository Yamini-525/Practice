import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const AddBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !content) {
      alert("Please fill out all fields.");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      description,
      content,
    };

    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    storedBlogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(storedBlogs));

    navigate("/");
  };

  return (
    <div className="add-blog">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Blog Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Short Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <textarea placeholder="Blog Content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        <button type="submit">Submit Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
