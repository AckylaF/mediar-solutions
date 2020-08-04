import React from 'react';

import Header from '../Header/header'
import Filters from '../Filters/filters'
import Sidebar from '../Sidebar/sidebar'

import './layout.css';


export default function Layout() {
  return (
      <div className="layout__container">
        <Header />
        <Filters />
        <Sidebar />
        <div className="layout__background layout__background--hidden"></div>
      </div>
  )
}