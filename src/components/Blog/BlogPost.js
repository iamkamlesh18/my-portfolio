import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Blog.css';
import { blogData } from './data';

const BlogPost = () => {
  const { category, post } = useParams();
  const cat = blogData[category];

  if (!cat) return <div className="blog-layout">Category not found.</div>;

  const p = cat.posts.find((x) => x.slug === post);
  if (!p) return <div className="blog-layout">Post not found.</div>;

  return (
    <div className="blog-layout">
      {/* Sidebar */}
      <aside className="blog-sidebar">
        {/* ✅ Parent category MUST stay visible */}
        <h2>{cat.title}</h2>

        <ul>
          {cat.posts.map((item, index) => (
            <li
              key={item.slug}
              className={item.slug === post ? 'active-topic' : ''}
            >
              <Link to={`/my-portfolio/blog/${category}/${item.slug}`}>
                {index + 1}. {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="blog-content blog-post">
        <Link to="/my-portfolio/blog" className="back-btn">
          <span className="back-arrow">←</span>
          <span className="back-text"> Back</span>
        </Link>


        <h1>{p.title}</h1>

        {p.content.map((section, i) => (
          <section key={i}>
            <h3>{section.heading}</h3>
            <ul>
              {section.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </section>
        ))}

        <h3>Interview Questions</h3>
        <ul>
          {p.interview.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default BlogPost;
