import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { FavoriteContext } from '../..'

export const NyTimes = (props) => {
  const [ timesNewsData, setTimesNewsData ] = useState()
  const [ loading, setLoading ] = useState(true)
  console.log('this is props ---------', props)
  useEffect(()=> {
    const fetchNewsData = async()=> {
      setLoading(true)
      try{  
        const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json', {
          params: {
            'api-key':'Aar7dPHkueaMHqaRuSmoU2TCXayulAD1'
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
  }, [])

  return (
    <FavoriteContext.Consumer>
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
                  <button>+FAVORITE</button>
                </div>
              )
            })
          }
        </div>
      </div>
    </FavoriteContext.Consumer>
  )
}
