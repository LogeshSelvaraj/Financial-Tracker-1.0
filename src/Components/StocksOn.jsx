import React from "react";
import { stocks } from "./stockData";

const StocksOn = () => {
  return (
      <>
      <h3 className="text-left">Stocks - 20.02.2021</h3>
    <div className="tabulation">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            {Object.keys(stocks[0]).map((h) => {
              return (
                <th scope="col" className="t-heading" key={h}>
                  {h}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {stocks.map((s, index) => {
            const keys = Object.keys(stocks[0]);
            return (
              <tr key={index}>
                {keys.map((ele) => {
                  if (ele === "Change") {
                    return (
                      <td key={ele} className={`p-0 ${s[ele] > 0 ? "profit" : "loss"}`}>
                        {s[ele]}
                      </td>
                    );
                  } else if (ele === "P/L %") {
                    return (
                      <td key={ele} className={`p-0 ${parseInt(s[ele]) > 30 ? "true-profit" : ""}`}>
                        {s[ele]}
                      </td>
                    );
                  } else if (ele === "P/E Ratio") {
                    return (
                      <td key={ele} className={`p-0 ${s[ele] < 10 ? "profit" : ""}`}>
                        {s[ele]}
                      </td>
                    );
                  }
                  return (
                    <td key={ele} className="p-0">
                      {s[ele]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default StocksOn;
