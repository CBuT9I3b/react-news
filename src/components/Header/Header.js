import React, { Fragment } from 'react'

import { NavLink } from 'react-router-dom'

const NavLinkWithStyle = ({ to, title }) => (
  <NavLink to={to} activeClassName='blue darken-4 white-text'>{title}</NavLink>
);

const BlockLinksNews = () => (
  <Fragment>
    <li><NavLinkWithStyle to='/new' title='New' /></li>
    <li><NavLinkWithStyle to='/top' title='Top' /></li>
    <li><NavLinkWithStyle to='/best' title='Best' /></li>
  </Fragment>
);

const BlockLinksOther = () => (
  <Fragment>
    <li><NavLinkWithStyle to='/ask' title='Ask' /></li>
    <li><NavLinkWithStyle to='/show' title='Show' /></li>
    <li><NavLinkWithStyle to='/job' title='Job' /></li>
  </Fragment>
);

const Header = () => (
  <header>
    <div className='navbar-fixed'>
      <nav>
        <div className='nav-wrapper blue'>
          <a href='#!' className='sidenav-trigger' data-target='mobile-nav'>
            <i className='material-icons'>menu</i>
          </a>
          <NavLink to='/' className='brand-logo right hide-on-med-and-down'>React Hacker News</NavLink>
          <NavLink to='/' className='brand-logo center hide-on-large-only'>RHN</NavLink>
          <ul className='left hide-on-med-and-down'>
            <BlockLinksNews />
            <BlockLinksOther />
            <li><NavLinkWithStyle to='/about' title='About Us' /></li>
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
      <li><NavLinkWithStyle to='/about' title='About Us' /></li>
    </ul>
  </header>
);

export default Header
