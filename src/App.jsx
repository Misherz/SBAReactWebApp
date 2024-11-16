import { useState, useEffect } from 'react'
import './App.css'
import { getData } from './data/data.mjs'
import Header from './components/Header'

function App() {
  const [articles, setArticle] = useState([])

  async function getArticles(){
    try {
      const data = await getData();
      setArticle(data.articles)

    } catch (err) {
      console.error("Cannot get article", err)
    }
  }
  useEffect(() => {
    getArticles(); 
  }, []); 

  return (
    <>
      <Header /><hr />
      <div className='articles'>

      </div>
    </>
  )
}

export default App
