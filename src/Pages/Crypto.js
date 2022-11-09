import axios from 'axios';
import React, { useEffect, useState,PureComponent } from 'react'
import { Link, useParams } from 'react-router-dom'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ProductGraph from '../Components/ProductGraph';


function Crypto() {
  
    const param = useParams();
    const [days,setDays] = useState(7); 
    const [data,setData] = useState(null);

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
                <div className='d-flex w-100'>
                    <img src={data?.image?.small} height={70} className="rounded-circle bg-light  shadow mr-4 rounded-circle shadow p-2 m-2"/>
                    <div className='d-flex justify-content-between w-100 flex-wrap my-auto'>
                        <div className='my-2 text-success'>
                            <h3 className='my-auto text-light'>{data?.name} <spam className="text-warning">({data?.symbol})</spam></h3>
                        </div>
                        <div className='my-2 text-danger'>
                            <h3 className='my-auto text-warning'>${data?.market_data?.current_price.usd}</h3>
                        </div>
                    </div>
                    
                </div>
                <div className='ml-auto'>

                </div>
            </div>
            <ProductGraph className="mt-5" id={param.id}/>

            <div className='my-3 py-3 card w-100 rounded'>
                <div className='container my-2 d-flex'>
                    <h4 className='text-primary'>#{data?.market_cap_rank} <small className='fs-small text-dark'>Market Cap Rank</small></h4>
                </div>

                <div className='container my-2'>
                    <h4>Current Price</h4>
                    <spam>$ {data?.market_data?.current_price.usd}</spam>
                </div>

                <div className='container d-flex justify-content-between w-100'>
                    <div className='my-2 text-success'>
                        <h6>24 Hr High</h6>
                        <spam>$ {data?.market_data?.high_24h.usd}</spam>
                    </div>
                    <div className='my-2 ml-auto text-danger'>
                        <h6>24 Hr Low</h6>
                        <spam>$ {data?.market_data?.low_24h.usd}</spam>
                    </div>
                </div>

                <div className='container my-2'>
                    <div class="progress">
                        <div class="progress-bar bg-success w-50" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                        <div class="progress-bar bg-danger w-50" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>


                <div className='container d-flex justify-content-between w-100'>
                    <div className='card p-3 w-100 my-2 rounded mx-auto text-center'>
                        <h4>Calculating supply</h4>
                        <spam>{data?.market_data?.circulating_supply}</spam>
                    </div>
                    <div className='card p-3 w-100 my-2 rounded mx-auto text-center'>
                        <h4>Circulating Supply</h4>
                        <spam>{data?.market_data?.circulating_supply}</spam>
                    </div>
                    <div className='card p-3 w-100 my-2 rounded mx-auto text-center'>
                        <h4>1 Year Change</h4>
                        <spam>{data?.market_data?.price_change_percentage_1y}</spam>
                    </div>
                </div>

            </div>

            <div className='my-3 py-3 card w-100 rounded'>
                <div className='container my-2'>
                    <h4>Description</h4>
                    <spam dangerouslySetInnerHTML={{__html: data?.description?.en}}></spam>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Crypto