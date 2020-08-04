import React from 'react';

import './storeHeatmap.css';
import Layout from '../../../../Layout/layout';

import sign from '../../../../../assets/underConstruction.webp'


export default function StoreHeatmap() {
  return (
    <div>
      <Layout />
      <main className="dashboard__container">
        <img className="underConstruction" src={sign} alt="Webpage under construction"/>
      </main>
    </div>
  ) 
}