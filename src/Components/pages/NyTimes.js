import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const NyTimes = () => {
  const [ newsData, setNewsData ] = useState()
  const [loading, setLoading ] = useState(true)

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
        setNewsData(wantedData)
        console.log('NY TIMES DATA ---------', wantedData)
      }
      catch(er){
        console.log(er)
      }
      setLoading(false)
    } 
    fetchWantedData()
  }, [])

  // useEffect(()=>{

  // },[setNewsData])

  return (
    <div>
      <h1>NyTimes</h1>
      <div>
        {
          loading ?
          <p>loading</p>:
          newsData.map( news=> {
            return (
              <div key={news.url}>
                <h3>{news.title}</h3>
                <h4>{news.abstract}</h4>
                <h4>BY: {news.byline}</h4>
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
