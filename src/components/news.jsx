import React, { useState, useEffect } from "react";
import newsData from "../data/news.json";

function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <div className="news-page">
      <h1>Dernières actualités</h1>
      {news.map((article) => (
        <div className="news-page-item" key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <p>Publié le {article.publishedDate}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsPage;
