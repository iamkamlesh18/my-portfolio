import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Blog.css';
import { blogData } from './data';

const BlogCategory = () => {
  const { category } = useParams();
  const cat = blogData[category];

  if (!cat) {
    return <div className="blog-layout">Category not found.</div>;
  }

  return (
    <div className="blog-layout">
      {/* Sidebar */}
      <aside className="blog-sidebar">
        {/* Parent category name */}
        <h2>{cat.title}</h2>

        {/* Numbered topics */}
        <ul>
          {cat.posts.map((post, index) => (
            <li key={post.slug}>
              <Link to={`/my-portfolio/blog/${category}/${post.slug}`}>
                {index + 1}. {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="blog-content">
        <Link to="/my-portfolio/blog" className="back-btn">
          <span className="back-arrow">←</span>
          <span className="back-text"> Back</span>
        </Link>


        <h1>{cat.title}</h1>
        <p>{cat.description}</p>
      </main>
    </div>
  );
};

export default BlogCategory;
