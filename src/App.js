import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {
  const [wantedData, setWantedData] = useState({})
  const [loading, setLoading ] = useState(true)

  useEffect(()=> {
    const fetchWantedData = async()=> {
      setLoading(true)
      try{  
        const response = await axios.get('https://api.currentsapi.services/v1/latest-news', {
          params: {
            apiKey:'3I26257T0D22-WMlA7PAF9tG-ln8xQO-A1fTewKgj6YYtEuG'
          }
        })
        const wantedData = response.data
        setWantedData(wantedData)
        console.log(wantedData.news)
      }
      catch(er){
        console.log(er)
      }
      setLoading(false)
    } 
    fetchWantedData()
  }, [])

  return (
    <div className='App-component'>
      <div className='header'>
        <h1>Nonya News</h1>
        <p>5min Read about other people's business</p>
      </div>
      <div className='newsboard'>
        {console.log('values', wantedData.news)}
        {
          loading ? 
          <p>loading</p> :
          <ul className='news-container'>{wantedData.news.map(x => {
            return (
              <li key={x.id}>
                <h3>{x.title} <p>Category: {x.category}</p></h3>
                <h4>Author: {x.author}, Published: {x.published}</h4>
                <h5>{x.description}</h5>
                <a href={x.url}>SOURCE</a>
                <img src={x.image} alt="FETCH IMG" />
              </li>
            )
          })}</ul>
        }
      </div>
    </div>
  );
}





export default App;
