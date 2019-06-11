import React, { Fragment } from 'react'

import { NavLink } from 'react-router-dom'
import { TYPE_STORIES } from '../../constants'

const BlockLinksNews = () => (
  <Fragment>
    <li><NavLink to={`/${TYPE_STORIES.NEW}`} >New</NavLink></li>
    <li><NavLink to={`/${TYPE_STORIES.TOP}`}>Top</NavLink></li>
    <li><NavLink to={`/${TYPE_STORIES.BEST}`}>Best</NavLink></li>
  </Fragment>
);

const BlockLinksOther = () => (
  <Fragment>
    <li><NavLink to={`/${TYPE_STORIES.ASK}`}>Ask</NavLink></li>
    <li><NavLink to={`/${TYPE_STORIES.SHOW}`}>Show</NavLink></li>
    <li><NavLink to={`/${TYPE_STORIES.JOB}`}>Job</NavLink></li>
  </Fragment>
);

const DropdownLinksNews = () => (
  <ul className='dropdown-content' id='dropdown-news'>
    <BlockLinksNews />
  </ul>
);

const DropdownTrigger = () => (
  <li><a href='#!' className='dropdown-trigger' data-target='dropdown-news'>
    News<i className='material-icons right'>arrow_drop_down</i>
  </a></li>
);

const SideNav = () => (
  <ul className='sidenav' id='mobile-nav'>
    <li><a href='#!' className='subheader'>React Hacker News</a></li>
    <li className='divider' />
    <BlockLinksNews />
    <li className='divider' />
    <BlockLinksOther />
    <li className='divider' />
    <li><NavLink to='/about'>About Us</NavLink></li>
  </ul>
);

const SideNavTrigger = () => (
  <a href='#!' className='sidenav-trigger' data-target='mobile-nav'>
    <i className='material-icons'>menu</i>
  </a>
);

const NavBarLogo = () => (
  <Fragment>
    <NavLink to='/' className='brand-logo right hide-on-med-and-down'>React Hacker News</NavLink>
    <NavLink to='/' className='brand-logo center hide-on-large-only'>RHN</NavLink>
  </Fragment>
);

const NavBarLinks = () => (
  <ul className='left hide-on-med-and-down'>
    <DropdownTrigger />
    <BlockLinksOther />
    <li><NavLink to='/about'>About Us</NavLink></li>
  </ul>
);

const NavBar = () => (
  <div className='navbar-fixed'>
    <nav>
      <div className='nav-wrapper blue'>
        <SideNavTrigger />
        <NavBarLogo />
        <NavBarLinks />
      </div>
    </nav>
  </div>
);

const Header = () => (
  <header>
    <DropdownLinksNews />
    <NavBar />
    <SideNav />
  </header>
);

export default Header
