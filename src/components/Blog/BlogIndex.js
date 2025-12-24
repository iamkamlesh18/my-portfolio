import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import { blogData } from './data';

const BlogIndex = () => {
  const categories = Object.keys(blogData);

  return (
    <div className="blog-index">
      <header className="blog-hero">
        <h1>Knowledge Hub — Salesforce</h1>
        <p>Curated articles and interview questions grouped by topic.</p>
      </header>

      <section className="category-grid">
        {categories.map((key) => (
          <Link key={key} to={`/my-portfolio/blog/${key}`} className="category-card">
            <h3>{blogData[key].title}</h3>
            <p>{blogData[key].description}</p>
            <div className="card-meta">{blogData[key].posts.length} topics</div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default BlogIndex;
