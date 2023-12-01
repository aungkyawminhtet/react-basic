import React from 'react'

const Header = () => {
  return (
    <div className='navbar navbar-expand navbar-dark bg-dark'>
      <div className='container'>
        <div>
          <a className='navbar-brand'>akmh</a>
        </div>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href="#">Link one</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="#">Link two</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href="#">Link three</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
