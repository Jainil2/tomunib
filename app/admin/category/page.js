'use client'
import React, { useState } from "react";
import axios from "axios";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/addCategory", {
        category: category,
        description: description,
      });
      setMessage(response.data.msg);
      // Clear the form fields after successful submission
      setCategory("");
      setDescription("");
    } catch (error) {
      setMessage("Error occurred while adding category");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Add Category</button>
        </form>
        {message && <p className="mt-4 text-sm text-gray-500">{message}</p>}
      </div>
    </div>
  );
};

export default AddCategory;
