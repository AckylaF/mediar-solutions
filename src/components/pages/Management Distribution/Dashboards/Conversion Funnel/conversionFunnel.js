import React from 'react'

import Layout from '../../../../Layout/layout'

import './conversionFunnel.css'

import Funnel from '../../../../../assets/funnel.jpeg'
import Timeline from '../../../../../assets/timeline.jpeg'
import KPI from '../../../../../assets/KPI.jpeg'



export default function ConversionFunnel() {
  return (
    <div>
      <Layout />

      <main className="dashboard__container">
        <div className="funnel__container">
          <h3 className="funnel__title">Conversion funnel</h3>
          <img src={Funnel} alt="conversion funnel" />
        </div>

        <div className="timeline__container">
          <ul className="timeline__categories">
            <li className="categories__item"><span>Average sales value per basket</span></li>
            <li className="categories__item"><span>Conversion %</span></li>
            <li className="categories__item"><span>Dwell time</span></li>
            <li className="categories__item"><span>No skus sold</span></li>
            <li className="categories__item"><span>POS Share %</span></li>
            <li className="categories__item"><span>Stopping power %</span></li>
            <li className="categories__item"><span>Subcategory flow %</span></li>
            <li className="categories__item"><span>Total sales value $</span></li>
            <li className="categories__item"><span>Total value %</span></li>
          </ul>

          <p className="timeline__message">Select a category to analyze the conversion</p>

          <h3 className="timeline__title">Metrics timeline</h3>
          <span className="timeline__metricsWarning">Select only two metrics in the filter above</span>
          <img src={Timeline} alt="metrics timeline" />
        </div>

        <div className="kpi__container">
          <span className="kpi__metricTitle">Metric</span>
          <select name="metric" id="metric" className="kpi__metricSelector">
            <option value="preço medio" className="metrictSelector__option">Preço Médio: R$</option>
            <option value="lorem" className="metricSelector__option">Lorem</option>
            <option value="ipsum" className="metricSelector__option">Ipsum</option>
            <option value="dolor" className="metricSelector__option">Dolor</option>
            <option value="sit" className="metricSelector__option">Sit</option>
          </select>

          <h3 className="kpi__title">KPIs distribution</h3>
          <img src={KPI} alt="KPIs distribution"/>

        </div>
      </main>
    </div>
  )
}