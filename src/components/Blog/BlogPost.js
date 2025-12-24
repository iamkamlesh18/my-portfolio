import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Blog.css';
import { blogData } from './data';

const BlogPost = () => {
  const { category, post } = useParams();
  const cat = blogData[category];
  if (!cat) return <div className="blog-page"><p>Category not found.</p></div>;
  const p = cat.posts.find((x) => x.slug === post);
  if (!p) return <div className="blog-page"><p>Post not found.</p></div>;

  return (
    <div className="blog-page">
      <nav className="post-nav">
        <Link to="/my-portfolio/blog">All Categories</Link>
        <span> / </span>
        <Link to={`/my-portfolio/blog/${category}`}>{cat.title}</Link>
      </nav>

      <article className="post-detail">
        <h1>{p.title}</h1>
        <p className="post-content">{p.content}</p>

        <h3>Interview Questions</h3>
        <ul>
          {p.interview.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default BlogPost;
