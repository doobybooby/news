import axios from 'axios'
import { useState, useEffect } from 'react';

function Currents() {
  const [wantedData, setWantedData] = useState({})
  const [loading, setLoading ] = useState(true)
  const [category, setCategory ] = useState({})

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
        // console.log(wantedData.news)
        wantedData.news.map(x => {
          x.category.map(cat=> {
            if(!Object.keys(category).includes(cat)){
              const newCat = {...category}
              category[cat] = 1
              setCategory(newCat)
            }
            else {
              const newCat = {...category}
              category[cat] = category[cat] + 1
              setCategory(newCat)
            }
          })
        })
      }
      catch(er){
        console.log(er)
      }
      setLoading(false)
      console.log(category)
    } 
    fetchWantedData()
  }, [])
  
  return (
    <>
      <div className='newsboard'>
        {
          loading ?
          <p>Categories</p> :
          <div className='category-list'>
            {
              Object.keys(category).map((key, count)=> {
                return (
                  <li key={key}> {key} {count}</li>
                )
              })
            }
          </div>
        }
        {
          loading ? 
          <p>DATA NOT AVAILABLE YET</p> :
          <div className='news-container'>
            {
              wantedData.news.map(x => {
                return (
                  <li className='news' key={x.id}>
                    <h3>{x.title}</h3>
                    <div className='news-info'>
                      <img src={x.image} alt="IMG-UNAVAILABE" />
                      <div>
                        <h5>{x.description} <a href={x.url}>SOURCE</a></h5>
                        <div>{x.category.map((cat,idx)=> <p key={idx}>{cat}</p> )}</div>
                        <h4>Author: {x.author}</h4>
                      </div>
                    </div>
                    <button>+Favorite</button>
                  </li>
                )
              })
            }
          </div>
        }
      </div>
    </>
  )
}


export default Currents