import { useState, useEffect } from 'react'
import './App.css'
import { getData } from './data/data.mjs'
import Header from './components/Header'

function App() {
  const [articles, setArticle] = useState([])

  //Getting data from axios
  async function getArticles(){
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

  //mapping over articles with ternary to retrieve them
  function displayArticles(){
    return articles.length > 0 ? (
      articles.map((article, index) => (
        <div key={index} className="articleData">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <p>{article.content}</p>
          <img src={article.urlToImage} alt={article.title} className='articleImage'/>
          <p>Source: {article.source.name}</p>
          <a href={article.url}>Read the full article</a>
        </div>
      ))
    ) : (
      <p>Sorry! We're having some troubles loading this article. 😔</p>
    );
  }


  return (
    <>
      <Header /><hr />
      <div>{displayArticles()}</div>
    </>
  )
}

export default App;
