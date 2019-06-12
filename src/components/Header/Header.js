import React, { Fragment } from 'react'

import { NavLink } from 'react-router-dom'

const BlockLinksNews = () => (
  <Fragment>
    <li><NavLink to='/new'>New</NavLink></li>
    <li><NavLink to='/top'>Top</NavLink></li>
    <li><NavLink to='/best'>Best</NavLink></li>
  </Fragment>
);

const BlockLinksOther = () => (
  <Fragment>
    <li><NavLink to='/ask'>Ask</NavLink></li>
    <li><NavLink to='/show'>Show</NavLink></li>
    <li><NavLink to='/job'>Job</NavLink></li>
  </Fragment>
);

const Header = () => (
  <header>
    <ul className='dropdown-content' id='dropdown-news'>
      <BlockLinksNews />
    </ul>

    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper blue'>
          <a href='#!' className='sidenav-trigger' data-target='mobile-nav'>
            <i className='material-icons'>menu</i>
          </a>
          <NavLink to='/' className='brand-logo right hide-on-med-and-down'>React Hacker News</NavLink>
          <NavLink to='/' className='brand-logo center hide-on-large-only'>RHN</NavLink>
          <ul className='left hide-on-med-and-down'>
            <li><a href='#!' className='dropdown-trigger' data-target='dropdown-news'>
              News<i className='material-icons right'>arrow_drop_down</i>
            </a></li>
            <BlockLinksOther />
            <li><NavLink to='/about'>About Us</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>

    <ul className='sidenav' id='mobile-nav'>
      <li><a href='#!' className='subheader'>React Hacker News</a></li>
      <li className='divider' />
      <BlockLinksNews />
      <li className='divider' />
      <BlockLinksOther />
      <li className='divider' />
      <li><NavLink to='/about'>About Us</NavLink></li>
    </ul>
  </header>
);

export default Header
