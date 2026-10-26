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
                <Link className="text-link" to="/journal">Back to my interview book →</Link>
            </main>
        );
    }

    return (
        <main className="category-page">
            <Link className="back-link" to="/journal">← All topics</Link>
            <header className="category-hero">
                <span className="path-number">{category.number}</span>
                <p className="eyebrow">CHAPTER · {category.posts.length} INTERVIEW QUESTIONS</p>
                <h1>{category.title}</h1>
                <p>{category.description}</p>
            </header>
            <div className="category-chapters">
                {category.posts.map((item, index) => (
                    <Link
                        className="chapter-row"
                        key={item.slug}
                        to={`/journal/${category.slug}/${item.slug}`}
                    >
                        <span className="chapter-index">{String(index + 1).padStart(2, '0')}</span>
                        <span className="chapter-copy">
                            <strong>{item.title}</strong>
                            <span>{item.question}</span>
                        </span>
                        <span className="chapter-time">Q&amp;A <span aria-hidden="true">↗</span></span>
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default BlogCategory;
