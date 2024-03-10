

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Content from './Content';

const ParentElement = () => {
  const [data, setData] = useState('');
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const url =  `https://newsapi.org/v2/everything?q=${data}&from=2024-02-10&sortBy=publishedAt&apiKey=52d685f8f19d450384bbb613c17c34e6`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      if (result.articles) {
        setNews(result.articles);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  

  return (
    <div>
      <Navbar data={data} setdata={setData} fetchNews={fetchNews} />
      <Content news={news} />
    </div>
  );
};

export default ParentElement;
