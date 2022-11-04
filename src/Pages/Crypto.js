import axios from 'axios';
import React, { useEffect, useState,PureComponent } from 'react'
import { Link, useParams } from 'react-router-dom'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ProductGraph from '../Components/ProductGraph';


function Crypto() {
  
  const param = useParams();
  const [days,setDays] = useState(7); 
  const [data,setData] = useState([]);



  return (
    <div className='page-bg'>
        <div className='container pt-5'>
            <Link to="/" className='m-3 text-decoration-none'>Back</Link>
            <ProductGraph className="mt-5" id={param.id}/>
        </div>
    </div>
  )
}

export default Crypto