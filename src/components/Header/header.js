import React from 'react'
import { Menu, Filter, ChevronLeft } from 'react-feather'

import './header.css'

export default function Header() {

  function toggleFilters() {
    document.querySelector('.filters__container').classList.toggle('filters__container--hidden')
  }

  function toggleSidebar() {
    document.querySelector('.header').classList.toggle('header--fullWidth');
    document.querySelector('.sidebar__container').classList.toggle('sidebar--closed')
    document.querySelector('.header__arrowLeft').classList.toggle('header__arrowLeft--invisible')
    document.querySelector('.header__menu').classList.toggle('header__menu--invisible')
    document.querySelector('.layout__background').classList.toggle('layout__background--hidden')
  }

  return (
    <header className="header header--fullWidth">
      <Menu className="header__menu" onClick={toggleSidebar} />
      <ChevronLeft className="header__arrowLeft header__arrowLeft--invisible" onClick={toggleSidebar} />
      <Filter className="header__filter" onClick={toggleFilters} />
    </header>
  )
}