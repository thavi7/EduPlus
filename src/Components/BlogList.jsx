import React, { useEffect, useState } from "react";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dev.to/api/articles?tag=programming")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-[#101022] min-h-screen flex items-center justify-center">
        <h1 className="text-white text-2xl">Loading Blogs...</h1>
      </div>
    );
  }

  return (
   <div className="bg-[#101022] border-2 border-purple-500 shadow-xl shadow-purple-700 rounded-2xl min-h-screen p-10 mt-40">

      <div className="grid grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#1c1c3a] rounded-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {blog.cover_image && (
              <img
                src={blog.cover_image}
                alt="blog"
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-5">
              <h2 className="text-white text-lg font-semibold mb-2">
                {blog.title}
              </h2>

              <p className="text-gray-400 text-sm line-clamp-3">
                {blog.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500 text-xs">
                  ❤️ {blog.public_reactions_count}
                </span>

                <a
                  href={blog.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;