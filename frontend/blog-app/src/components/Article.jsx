import React, { useEffect, useState } from 'react';

export default function Article() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response =await fetch("http://localhost:5000/api/articles")
                const data =await response.json();
                setArticles(data)
            } catch (error) {
                console.log('Error fetching articles:', error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div>
            <div className="articles-container">
                <ul className="article-list">
                    {articles.map(article => (
                        <li className="article-item" key={article._id}>
                            <img src={article.imageUrl} alt="Article Thumbnail" />
                            <div className="article-info">
                                <h2 className="article-title">{article.title}</h2>
                                <p className="article-excerpt">{article.excerpt}</p>
                                <div className="article-meta">
                                    <p className="author">By {article.author}</p>
                                    <p className="publication-date">{article.publicationDate}</p>
                                </div>
                                <a href={article.detailUrl} className="read-more">Read More</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
