import React from 'react'

import { NavLink } from 'react-router-dom'
import { TYPE_STORIES } from '../../constants'

const NavBar = () => (
  <div>
    <ul className='dropdown-content' id='dropdown-news'>
      <li><NavLink to={`/${TYPE_STORIES.NEW}`}>New</NavLink></li>
      <li><NavLink to={`/${TYPE_STORIES.TOP}`}>Top</NavLink></li>
      <li><NavLink to={`/${TYPE_STORIES.BEST}`}>Best</NavLink></li>
    </ul>

    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper'>
          <a className='sidenav-trigger' data-target='mobile-nav'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='left hide-on-med-and-down'>
            <li><a className='dropdown-trigger' data-target='dropdown-news'>
              Hacker News<i className='material-icons right'>arrow_drop_down</i>
            </a></li>
            <li><NavLink to={`/${TYPE_STORIES.ASK}`}>Ask</NavLink></li>
            <li><NavLink to={`/${TYPE_STORIES.SHOW}`}>Show</NavLink></li>
            <li><NavLink to={`/${TYPE_STORIES.JOB}`}>Job</NavLink></li>
            <li><NavLink to='/about'>About Us</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>

    <ul className='sidenav' id='mobile-nav'>
      <li><NavLink to={`/${TYPE_STORIES.NEW}`}>New</NavLink></li>
      <li><NavLink to={`/${TYPE_STORIES.TOP}`}>Top</NavLink></li>
      <li><NavLink to={`/${TYPE_STORIES.BEST}`}>Best</NavLink></li>
      <li className='divider' />
      <li><NavLink to={`/${TYPE_STORIES.ASK}`}>Ask</NavLink></li>
      <li><NavLink to={`/${TYPE_STORIES.SHOW}`}>Show</NavLink></li>
      <li><NavLink to={`/${TYPE_STORIES.JOB}`}>Job</NavLink></li>
      <li><NavLink to='/about'>About Us</NavLink></li>
    </ul>
  </div>
);

export default NavBar
