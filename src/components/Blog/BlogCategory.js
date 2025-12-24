import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Blog.css';
import { blogData } from './data';

const BlogCategory = () => {
  const { category } = useParams();
  const cat = blogData[category];

  if (!cat) return <div className="blog-page"><p>Category not found.</p></div>;

  return (
    <div className="blog-page">
      <header className="blog-hero">
        <h1>{cat.title}</h1>
        <p>{cat.description}</p>
      </header>

      <section className="post-list">
        {cat.posts.map((p) => (
          <article key={p.slug} className="post-card">
            <h3>{p.title}</h3>
            <p className="post-summary">{p.summary}</p>
            <Link to={`/my-portfolio/blog/${category}/${p.slug}`} className="read-more">Read topic →</Link>
          </article>
        ))}
      </section>
    </div>
  );
};

export default BlogCategory;
