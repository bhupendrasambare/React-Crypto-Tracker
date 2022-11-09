import axios from 'axios';
import React, { useEffect, useState,PureComponent } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function ProductGraph(param) {
    
    const [days,setDays] = useState(7); 
    const [data,setData] = useState([]);

    const updateGraph = () =>{
        axios({
            url:"https://api.coingecko.com/api/v3/coins/"+param.id+"/market_chart?vs_currency=usd&days="+days,
          }).then(result =>{
    
            const graphData = result.data.prices.map((price) =>{
                
                  const [timestamp,p] =  price;
                  const timeDate = new Date(timestamp);
                  
                  return {
                      date:timeDate.getUTCDate() +"-"+ (timeDate.getUTCMonth()+1) +"-"+ timeDate.getUTCFullYear() + " " + timeDate.getUTCHours() + ":" + timeDate.getUTCMinutes()+"0",
                      "$":p.toFixed(2),
                  }
            })
    
            setData(preState =>
            {
                preState = [];
                return ([...preState,graphData])
            });
    
          })
    }

    useEffect(()=>{
        updateGraph()
    },[days])

  return (
    <div className='card shadow rounded p-3 mt-5'>
        <ResponsiveContainer className="mt-5" height={300}>
        <AreaChart
          width={500}
          height={400}
          data={data[0]}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="false false" /> */}
          <XAxis dataKey="date"/>
          <YAxis />
          <Tooltip />
          <Area type="monotone" className='text-dark' dataKey="$" stroke="#383f40" fill="#066f80" activeDot={{r: 8}} />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-3 text-light d-flex justify-content-around">
        <button className={((days==7)?"bg-success text-light":"bg-light text-dark")+" btn btn-sm rounded-pill px-3 shadow"} onClick={() =>setDays(7)}>7D</button>
        
        <button className={((days==31)?"bg-success text-light":"bg-light text-dark")+" btn btn-sm rounded-pill px-3 shadow"} onClick={() =>setDays(31)}>1M</button>

        <button className={((days==186)?"bg-success text-light":"bg-light text-dark")+" btn btn-sm rounded-pill px-3 shadow"} onClick={() =>setDays(186)}>6M</button>

        <button className={((days==365)?"bg-success text-light":"bg-light text-dark")+" btn btn-sm rounded-pill px-3 shadow"} onClick={() =>setDays(365)}>1Y</button>

        <button className={((days==(365*3))?"bg-success text-light":"bg-light text-dark")+" btn btn-sm rounded-pill px-3 shadow"} onClick={() =>setDays(365*3)}>3Y</button>

        <button className={((days==(365*5))?"bg-success text-light":"bg-light text-dark")+" btn btn-sm rounded-pill px-3 shadow"} onClick={() =>setDays(365*5)}>5Y</button>
      </div>
    </div>
  )
}

export default ProductGraph