import { useState, useEffect } from 'react'
import './App.css'
import { getData } from './data/data.mjs'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom';
import MenuItems from './components/MenuItems'
import React from 'react'



function App() {
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

  //mapping over articles with ternary to retrieve them
  function displayArticles() {
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


  return (
    <Router>
      <div className='Test'>
        <Header />
        <MenuItems />
        <div>{displayArticles()}</div><br />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
