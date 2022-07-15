import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <div className='header'>
        <h1>Nonya News</h1>
        <p>Read about other people's business</p>
        <div className='nav'>
          <NavLink to='/currents'>CURRENTS</NavLink>
          <NavLink to='/nytimes'>TIMES</NavLink>
          <NavLink to='/googlenews'>GOOGLE</NavLink>
          <NavLink to='/favorites'>FAVORITES</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Nav