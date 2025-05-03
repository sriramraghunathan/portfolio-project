import React, { useState } from "react";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Handle adding a new post
  const handleAddPost = () => {
    if (title && content) {
      setPosts([...posts, { id: Date.now(), title, content, likes: 0 }]);
      setTitle("");
      setContent("");
    } else {
      alert("Please fill in both title and content");
    }
  };

  // Handle like button click
  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="max-w-4xl mt-20 border-black rounded-xl mx-auto p-6 bg-gradient-to-br from-gray-900 to-black text-white">
      <h1 className="text-3xl font-bold mb-4 text-center text-b">Create Blogs</h1>

      {/* Add New Post Form */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-md mb-2 text-black"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-2 border rounded-md mb-4 text-black"
        />
        <button
          onClick={handleAddPost}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add Post
        </button>
      </div>

      {/* Display All Posts */}
      <div>
        {posts.map((post) => (
          <div key={post.id} className="bg-white mb- mt-5 p-4 border rounded-md shadow-md">
            <h2 className="text-xl text-black font-semibold mb-2">{post.title}</h2>
            <p className="text-black mb-4">{post.content}</p>
            <div className="flex gap-5  items-center">
              <button
                onClick={() => handleLike(post.id)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Like
              </button>
              <span className="text-red-600">
                {post.likes} {post.likes === 1 ? "Like" : "Likes"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
