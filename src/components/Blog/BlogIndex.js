import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { blogData } from './data';

const BlogIndex = () => {
  return (
    <div className="blog-layout">
      {/* Sidebar: Categories */}
      <aside className="blog-sidebar">
        <h2>Categories</h2>
        <ul>
          {Object.keys(blogData).map((key) => (
            <li key={key}>
              <Link to={`/my-portfolio/blog/${key}`}>
                {blogData[key].title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="blog-content">
        <h1>Salesforce Learning</h1>
        <p>Select a category to start learning.</p>
      </main>
    </div>
  );
};

export default BlogIndex;
