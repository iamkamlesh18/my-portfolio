import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Blog.css';
import { blogData } from './data';

const BlogCategory = () => {
    const { category: categorySlug } = useParams();
    const category = blogData.find((item) => item.slug === categorySlug);

    if (!category) {
        return (
            <main className="journal-empty">
                <p className="eyebrow">TOPIC NOT FOUND</p>
                <h1>I couldn’t find that topic.</h1>
                <Link className="text-link" to="/guides">Back to guides →</Link>
            </main>
        );
    }

    return (
        <main className="category-page">
            <Link className="back-link" to="/guides">← All guides</Link>
            <header className="category-hero">
                <div className="category-meta">
                    <span>TOPIC {category.number}</span>
                    <span>{category.posts.length} guides</span>
                </div>
                <h1>{category.title}</h1>
                <p>{category.description}</p>
            </header>
            <section className="category-reading" aria-labelledby="category-reading-heading">
                <div className="category-reading-intro">
                    <h2 id="category-reading-heading">Start with guide 1</h2>
                    <p>Read in order for a step-by-step path, or open any guide that interests you.</p>
                </div>
                <div className="category-chapters">
                    {category.posts.map((item, index) => (
                        <Link
                            className="chapter-row"
                            key={item.slug}
                            to={`/guides/${category.slug}/${item.slug}`}
                        >
                            <span className="chapter-index">{String(index + 1).padStart(2, '0')}</span>
                            <span className="chapter-copy">
                                <strong>{item.title}</strong>
                                <span>{item.summary}</span>
                            </span>
                            <span className="chapter-time">Read guide <span aria-hidden="true">↗</span></span>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default BlogCategory;
