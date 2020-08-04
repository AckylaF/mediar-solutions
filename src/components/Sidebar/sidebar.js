import React from 'react';
import { Link } from 'react-router-dom'
import { User, Smartphone, Power, Home, Info } from 'react-feather';

import './sidebar.css'

import logo from '../../assets/logoMediar.svg'


export default function Sidebar() {
  return (
    <div className="sidebar__container sidebar--closed">
        <img src={logo} alt="Mediar - Know what you could have sold" className="sidebar__logo"/>

        <div className="sidebar__userInfo">
          <User className="userInfo__avatar" />
          <div>
            <div className="userInfo__message">
              <span>Welcome</span>
              <span>Demo</span>
            </div>

            <ul className="userInfo__userMenu">
              <li className="userMenu__option">My account</li>
              <li className="userMenu__option">Settings</li>
              <li className="userMenu__option">Help</li>
            </ul>
          </div>
        </div>

        <span className="sidebar__sectionTitle">Distribution Management</span>
        <nav className="sidebar__menu">
          <ul className="menu__list">

            <li className="list__item list__dropdown">

              <div className="item__container">
                <Home className="item__icon" />
                Management Distribution
              </div>

              <ul className="list__submenu">
                <li className="submenu__item"><Link to="/">Home</Link></li>
                <li className="submenu__item"><Link to="/conversion-funnel">Conversion Funnel</Link></li>
                <li className="submenu__item"><Link to="/store-heatmap">Store Heatmap</Link></li>
                <li className="submenu__item"><Link to="/comparison-purchasing-mission">Comparison e Purchasing Mission</Link></li>
                <li className="submenu__item"><Link to="/conversion-matrix">Conversion Matrix</Link></li>
                <li className="submenu__item"><Link to="/basket-correlation-analysis">Basket Correlation Analysis</Link></li>
              </ul>
            </li>

            <li className="list__item">
              <div className="item__container">
                <Info className="item__icon" />
                <Link to="/glossary">Glossary</Link>
              </div>
            </li>

          </ul>
        </nav>

        <footer className="sidebar__footer">
        <Smartphone className="footer__icon" />
        <Smartphone className="footer__icon" />
        <Power className="footer__icon" />
      </footer>
      
      <div className="sidebar__background"></div>
    </div>
  )
}