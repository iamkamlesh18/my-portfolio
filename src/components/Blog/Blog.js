import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog">
            <section>
                <h2 className="blog-heading">Blog</h2>
                <div className="blog-list">
                    <div className="blog-item">
                        <h3>Blog Post One</h3>
                        <p>An overview of the first blog post, including main points and insights.</p>
                    </div>
                    <div className="blog-item">
                        <h3>Blog Post Two</h3>
                        <p>Summary of the second blog post, highlighting key topics and takeaways.</p>
                    </div>
                    <div className="blog-item">
                        <h3>Blog Post Three</h3>
                        <p>Description of the third blog post, covering main ideas and conclusions.</p>
                    </div>
                    <div className="blog-item">
                        <h3>Blog Post Four</h3>
                        <p>Details about the fourth blog post, including the purpose and highlights.</p>
                    </div>
                    <div className="blog-item">
                        <h3>Blog Post Five</h3>
                        <p>Information on the fifth blog post, including key points and insights.</p>
                    </div>
                    <div className="blog-item">
                        <h3>Blog Post Six</h3>
                        <p>Overview of the sixth blog post, focusing on main topics and conclusions.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
