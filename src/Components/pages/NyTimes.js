import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const NyTimes = () => {
  const [ timesNewsData, setTimesNewsData ] = useState()
  const [ loading, setLoading ] = useState(true)

  useEffect(()=> {
    const fetchWantedData = async()=> {
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
    fetchWantedData()
  }, [])

  return (
    <div className='nytimes-component'>
      <h1>NyTimes</h1>
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
  )
}
