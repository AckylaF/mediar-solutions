import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker'

import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'react-feather'

import './filters.css'


export default function Filters() {
  const [value, setValue] = useState([new Date(), new Date()])

  return (
    <div className="filters__container">
      <div className="filters__datePicker">
        <DateRangePicker 
          onChange={setValue}
          value={value}
        />
      </div>

      <ul className="filters__selectFilters">
        <li className="selectFilters__filter">

          <label htmlFor="cluster" className="selectFilters__title">Cluster</label>

          <select name="cluster" id="filter__cluster">
            <option value="lorem">Lorem</option>
            <option value="ipsum">Ipsum</option>
            <option value="dolor">Dolor</option>
            <option value="sit">Sit</option>
            <option value="amet">Amet</option>
          </select>

        </li>

        <li className="selectFilters__filter">

          <label htmlFor="channel" className="selectFilters__title">Channel</label>

          <select name="channel" id="filter__channel">
            <option value="lorem">Lorem</option>
            <option value="ipsum">Ipsum</option>
            <option value="dolor">Dolor</option>
            <option value="sit">Sit</option>
            <option value="amet">Amet</option>
          </select>

        </li>

        <li className="selectFilters__filter">

          <label htmlFor="store" className="selectFilters__title">Store</label>

          <select name="store" id="filter__store">
            <option value="lorem">Lorem</option>
            <option value="ipsum">Ipsum</option>
            <option value="dolor">Dolor</option>
            <option value="sit">Sit</option>
            <option value="amet">Amet</option>
          </select>

        </li>

        <li className="selectFilters__filter">

          <label htmlFor="category" className="selectFilters__title">Category</label>

          <select name="category" id="filter__category">
            <option value="lorem">Lorem</option>
            <option value="ipsum">Ipsum</option>
            <option value="dolor">Dolor</option>
            <option value="sit">Sit</option>
            <option value="amet">Amet</option>
          </select>

        </li>

        <li className="selectFilters__filter">

          <label htmlFor="subcategory" className="selectFilters__title">Subcategory</label>

          <select name="subcategory" id="filter__subcategory">
            <option value="lorem">Lorem</option>
            <option value="ipsum">Ipsum</option>
            <option value="dolor">Dolor</option>
            <option value="sit">Sit</option>
            <option value="amet">Amet</option>
          </select>

        </li>

        <li className="selectFilters__filter">

          <label htmlFor="segment" className="selectFilters__title">Segment</label>

          <select name="segment" id="filter__segment">
            <option value="lorem">Lorem</option>
            <option value="ipsum">Ipsum</option>
            <option value="dolor">Dolor</option>
            <option value="sit">Sit</option>
            <option value="amet">Amet</option>
          </select>

        </li>

        <li className="selectFilters__filter">

          <label htmlFor="manufacture" className="selectFilters__title">Manufacture</label>

          <select name="manufacture" id="filter__manufacture">
            <option value="lorem">Lorem</option>
            <option value="ipsum">Ipsum</option>
            <option value="dolor">Dolor</option>
            <option value="sit">Sit</option>
            <option value="amet">Amet</option>
          </select>

        </li>

        <li className="selectFilters__filter">

          <label htmlFor="brand" className="selectFilters__title">Brand</label>

          <select name="brand" id="filter__brand">
            <option value="lorem">Lorem</option>
            <option value="ipsum">Ipsum</option>
            <option value="dolor">Dolor</option>
            <option value="sit">Sit</option>
            <option value="amet">Amet</option>
          </select>

        </li>
        
      </ul>      

      <div className="filters__nav">
        <ChevronLeft className="nav__item" />
        <ChevronRight className="nav__item" />
        <Link to="/"><Home className="nav__item" /></Link>
      </div>
    </div>
  )
}