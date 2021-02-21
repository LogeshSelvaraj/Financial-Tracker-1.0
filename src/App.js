import React from "react";
import "./App.css";
import StocksSellLog from "./Components/SellLog";
import StocksOn from './Components/StocksOn'
import "antd/dist/antd.css";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function App() {
  return (
    <div className="App">
      <h1>Financial Tracker Version-1</h1>
      <div className="pl-5" >
      <Tabs defaultActiveKey={1}>
        <TabPane tab="Stocks" key="1">
          <StocksOn/>
        </TabPane>
        <TabPane tab="Stocks Sell Log" key="2">
          <StocksSellLog />
        </TabPane>
      </Tabs>
      </div>
      
    </div>
  );
}

export default App;
