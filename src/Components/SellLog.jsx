import React from 'react'
import {stocksSellLog} from "./stockData"

const StocksSellLog = () => {

    const totalBuyValue=()=>{
        let buyValue=0;
        stocksSellLog.map(s=>{
            buyValue=buyValue+s["Buy Value"]
        })

        return parseInt(buyValue)
    }

    const profit=()=>{
        let num=0;
        stocksSellLog.map(s=>{
            num=num+s["Realized Profit"]
        })
        return parseInt(num)
    }

    return (
        <>
        <h3 className="text-left">1st Sept 2020 Onwards</h3>
        <div className="pb-3">
        <span className="p-3  total">Total Buy Value : {totalBuyValue()}</span>
        <span  className="p-3 total">Profit : {profit()}</span>
        <span  className="p-3 total">% Return : 12.07%</span>
        </div>
    
        <div className="tabulation">
         <table className="table" >
             <thead className="thead-dark">
                 <tr>
                     <th scope="col">Demat</th>
                     <th scope="col">Symbol</th>
                     <th scope="col">ISIN</th>
                     <th scope="col">Quantity</th>
                     <th scope="col">Buy Value</th>
                     <th scope="col">Sell Value</th>
                     <th scope="col">Realized Profit</th>
                 </tr>
             </thead>
             <tbody>
                 {stocksSellLog.map(s=>{
                     return <tr key={s.Demat}>
                         <td scope="row">{s.Demat}</td>
                         <td>{s.Symbol}</td>
                         <td>{s.ISIN}</td>
                         <td>{s.Quantity}</td>
                         <td>{s['Buy Value']}</td>
                         <td>{s['Sell Value']}</td>
                         <td>{s['Realized Profit']}</td>
                     </tr>
                 })}
             </tbody>
         </table>
        </div>
        </>
    )
}

export default StocksSellLog
