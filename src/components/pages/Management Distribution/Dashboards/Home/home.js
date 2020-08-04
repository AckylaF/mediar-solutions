import React from 'react';

import './home.css';
import Layout from '../../../../Layout/layout';

import sign from '../../../../../assets/underConstruction.webp'


export default function Home() {
  return (
    <div>
      <Layout />
      <main className="dashboard__container">
        <img className="underConstruction" src={sign} alt="Webpage under construction"/>
      </main>
    </div>
  ) 
}