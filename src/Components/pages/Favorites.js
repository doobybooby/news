import React, { useContext } from 'react'
import { FavoriteContext } from '../..'

export const Favorites = () => {
  const favoriteList = useContext(FavoriteContext)
  console.log('inside the favorites file', favoriteList)
  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {
          favoriteList ? 
            favoriteList.map( news => {
              return (
                <ul>
                  <li>
                    <a href={news}>{news}</a>
                  </li>
                </ul>
              )
            }) 
            : <h2>NO FAVORITES</h2>
        }
      </div>
    </div>
  )
}
