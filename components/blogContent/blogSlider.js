'use client';

import { useState } from 'react';
import BlogCard from './blogCard';

export default function BlogSlider({ blogs, currentSlug }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const filteredBlogs = blogs.filter(blog => blog.slug !== currentSlug);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredBlogs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredBlogs.length) % filteredBlogs.length);
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-4">Other Blog Posts</h2>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="w-full flex-shrink-0">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        ←
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
        →
      </button>
    </div>
  );
}

