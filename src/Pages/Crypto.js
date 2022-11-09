import axios from 'axios';
import React, { useEffect, useState,PureComponent } from 'react'
import { Link, useParams } from 'react-router-dom'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ProductGraph from '../Components/ProductGraph';


function Crypto() {
  
    const param = useParams();
    const [days,setDays] = useState(7); 
    const [data,setData] = useState([]);

    useEffect(() =>{
        axios({
            url:"https://api.coingecko.com/api/v3/coins/"+param.id+"?localization=false",
          }).then(result=>{
            setData(result.data)
          })
    },[])

  return (
    <div className='page-bg'>
        <div className='container pt-5'>
            <Link to="/" className='m-3 text-decoration-none'>Back</Link>

            <div className='mt-5 w-100 d-flex justify-content-between'>
                <div className='d-flex'>
                    <img src={data?.image?.large} height={70} className="rounded-circle bg-light  shadow mr-4 rounded-circle shadow p-2 m-2"/>
                    <h3 className='my-auto text-light'>{data?.name} <spam className="text-warning">({data?.symbol})</spam></h3>
                </div>
                <div className='ml-auto'>

                </div>
            </div>
            <ProductGraph className="mt-5" id={param.id}/>
        </div>
    </div>
  )
}

export default Crypto