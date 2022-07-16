import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { FavoriteContext } from '../..'

export const NyTimes = () => {
  const [ timesNewsData, setTimesNewsData ] = useState()
  const [ loading, setLoading ] = useState(true)
  const favoriteList = useContext(FavoriteContext)

  useEffect(()=> {
    console.log('this is props ---------', favoriteList)
    const fetchNewsData = async()=> {
      setLoading(true)
      try{  
        const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json', {
          params: {
            'api-key':''
          }
        })
        const wantedData = response.data.results
        setTimesNewsData(wantedData)
        console.log('NY TIMES DATA ---------', wantedData)
      }
      catch(er){
        console.log(er)
      }
      setLoading(false)
    } 
    fetchNewsData()
  }, [favoriteList])

  return (
      <div className='nytimes-component'>
        <h1>NY Times</h1>
        <div>
          {
            loading ?
            <p>loading</p>:
            timesNewsData.map( news=> {
              return (
                <div className='times-news' key={news.url}>
                  <h3>{news.title}</h3>
                  <h4>{news.abstract}</h4>
                  <h4>BY: {news.byline}</h4>
                  <img src={news.multimedia[0].url} alt="unavailable" />
                  <a href={news.short_url} >SROUCE</a>
                  <button onClick={()=>{
                    favoriteList.push(news.short_url)
                    console.log('after-----', favoriteList)
                  }}>+FAVORITE</button>
                </div>
              )
            })
          }
        </div>
      </div>
  )
}
