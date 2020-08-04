import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Home from "./components/pages/Management Distribution/Dashboards/Home/home";
import ConversionFunnel from "./components/pages/Management Distribution/Dashboards/Conversion Funnel/conversionFunnel";
import StoreHeatmap from "./components/pages/Management Distribution/Dashboards/Store Heatmap/storeHeatmap";
import Comparison from "./components/pages/Management Distribution/Dashboards/Comparison e Purchasing Mission/comparison";
import ConversionMatrix from "./components/pages/Management Distribution/Dashboards/Conversion Matrix/conversionMatrix";
import Basket from "./components/pages/Management Distribution/Dashboards/Basket Correlation Analysis/basket";
import Glossary from "./components/pages/Glossary/glossary";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/conversion-funnel" component={ConversionFunnel} />
        <Route path="/store-heatmap" component={StoreHeatmap} />
        <Route path="/comparison-purchasing-mission" component={Comparison} />
        <Route path="/conversion-matrix" component={ConversionMatrix} />
        <Route path="/basket-correlation-analysis" component={Basket} />
        <Route path="/glossary" component={Glossary} />
      </Switch>
    </BrowserRouter>
  );
}
