import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { FavoriteContext } from '../..'

export const Google = () => {
  const [ googleNews, setGoogleNews ] = useState()
  const [loading, setLoading ] = useState(true)
  const favoriteList = useContext(FavoriteContext)

  useEffect(()=>{
    const fetchGoogleNews = async()=> {
      //try catch?
      setLoading(true)
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: 'tesla',
          from: '2022-06-15',
          sortBy: 'publishedAt',
          apiKey: '5a531cf15af84bf0a02f19ae3b06ef4a'
        }
      })
      const news = response.data.articles
      setGoogleNews(news)
      console.log(news)
      setLoading(false)
    }
    fetchGoogleNews()
  }, [])

  return (
    <div className='google-components'>
      <h1>GOOGLE NEWS</h1>
      {
        loading ?
          <div>Loading Google News</div> :
          <div>
            {
              googleNews.map((news, idx) => {
                return (
                  <div className='google-news' key={idx}>
                    <h3>{news.title}</h3>
                    <h4>{news.description}</h4>
                    <h4>AUTHOR: {news.author}</h4>
                    <img src={news.urlToImage} alt='Unavailable'/>
                    <a href={news.url}>Source </a>
                    <button onClick={()=> {
                      favoriteList.push(news.url)
                      console.log(favoriteList)
                    }}>+Favorite</button>
                  </div>
                )
              })
            }
          </div>
      }
    </div>
  )
}