import React from "react";
import { useState, useEffect } from "react";
import { getData } from '../data/data.mjs'

//mapping over articles with ternary to retrieve them
export default function DisplayArticles() {
    const [articles, setArticle] = useState([]);

  //must do a useState for removed articles

  //Getting data from axios
  async function getArticles() {
    try {
      const data = await getData();
      setArticle(data.articles)

    } catch (err) {
      console.error("Cannot get article", err)
    }
  }
  //Invoke data with [], runs only on mount
  useEffect(() => {
    getArticles();
  }, []);

  const imgDisplay = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

    return articles.length > 0 ? (
      <div className="articleGallery">
        {articles.map((article, index) => (
          <div key={index} className="articleData">

            <h2 className="articleHeader">{article.title}</h2>
            <p>Author: {article.author}</p>
            <p>News:</p>
            <p>{article.description}</p>
            <p>{article.content}</p>
            

            <div style={imgDisplay}>
              <img src={article.urlToImage} alt={article.title} className="articleImage" />
            </div><br />
           
  
            <div className='buttonContent'>
              <button className="bottomContent">
                <a href={article.url}>Read the full article</a>
              </button>
            </div><br />
            <p>Source: {article.source.name}</p><br />
          </div>
        ))}
      </div>
    ) : (
      <p>Sorry! We're having some troubles loading this article. 😔</p>
    );
  }
