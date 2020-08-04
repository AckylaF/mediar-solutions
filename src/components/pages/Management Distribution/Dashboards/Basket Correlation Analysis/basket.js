import React from 'react';

import './basket.css'
import Layout from '../../../../Layout/layout';

import sign from '../../../../../assets/underConstruction.webp'


export default function Basket() {
  return (
    <div>
      <Layout />
      <main className="dashboard__container">
        <img className="underConstruction" src={sign} alt="Webpage under construction"/>
      </main>
    </div>
  ) 
}