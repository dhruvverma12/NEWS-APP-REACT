// Content.jsx

import React from 'react';
import '../styles/Content.css';

const Content = ({ news }) => {
return (
  <div className="content-container">
    {news.map((article, index) => (
      <div key={index} className="article-card">
        <div className="article-card-top">
          <img src={article.urlToImage} alt={article.title} className="article-image" />
        </div>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
          Read more
        </a>
      </div>
    ))}
  </div>
);

};

export default Content;
