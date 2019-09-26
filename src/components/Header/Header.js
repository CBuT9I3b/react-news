import React from 'react'

import { NavLink } from 'react-router-dom'

const NavLinkWithStyle = ({ to, title }) => (
  <NavLink to={to} className='white-text' activeClassName='blue darken-3'>{title}</NavLink>
);

const BlockLinksNews = () => (
  <>
    <li><NavLinkWithStyle to='/new' title='New' /></li>
    <li><NavLinkWithStyle to='/top' title='Top' /></li>
    <li><NavLinkWithStyle to='/best' title='Best' /></li>
  </>
);

const BlockLinksOther = () => (
  <>
    <li><NavLinkWithStyle to='/ask' title='Ask' /></li>
    <li><NavLinkWithStyle to='/show' title='Show' /></li>
    <li><NavLinkWithStyle to='/job' title='Job' /></li>
  </>
);

const Header = () => (
  <>
    <div className='navbar-fixed'>
      <nav className='blue-grey darken-3'>
        <div className='nav-wrapper container'>
          <a href='#!' className='right sidenav-trigger' data-target='mobile-nav'>
            <i className='material-icons'>menu</i>
          </a>
          <NavLink to='/' className='brand-logo hide-on-med-and-down'>React HNews</NavLink>
          <NavLink to='/' className='brand-logo center hide-on-large-only'>RHN</NavLink>
          <ul className='right hide-on-med-and-down'>
            <BlockLinksNews />
            <BlockLinksOther />
            <li><NavLinkWithStyle to='/about' title='About Us' /></li>
          </ul>
        </div>
      </nav>
    </div>

    <ul className='sidenav blue-grey darken-3' id='mobile-nav'>
      <li><a href='#!' className='sidenav-close white-text'>
        <i className='material-icons white-text'>arrow_back</i>React HNews
      </a></li>
      <li className='divider' />
      <BlockLinksNews />
      <li className='divider' />
      <BlockLinksOther />
      <li className='divider' />
      <li><NavLinkWithStyle to='/about' title='About Us' /></li>
    </ul>
  </>
);

export default Header
