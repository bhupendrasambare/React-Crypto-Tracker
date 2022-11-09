import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {

    const [coins,setCoins] = useState([]);
    const [search,setSearch] = useState("");
    const [isTrending,setIsTrending] = useState(true);
    const searchTrending = () =>{
        axios("https://api.coingecko.com/api/v3/search/trending")
        .then(result =>{
            setCoins(preState =>
                {
                    preState = [];
                    return ([...preState,result.data.coins.slice(0).reverse()])
                });
        })
    }

    useEffect(() =>{
        searchTrending();
    },[])

    useEffect(()=>{
        if(search !== undefined && search !== "" && search.length >= 3){
            setIsTrending(false)
            axios({
                url: "https://api.coingecko.com/api/v3/search",
                params:{
                    query:search,
                }
            }).then(result=>{
                setCoins(preState =>
                    {
                        preState = [];
                        return ([...preState,result.data.coins])
                    });
            })
        }else{
            if(!isTrending){
                searchTrending()
                setIsTrending(true)
            }
        }
        },[search])


  return (
    <div className='first-bg pt-5'>
        <div className='container'>
            <input type="text" className='form-control text-center mb-5 ' placeholder='Minimum 3 character is required' value={search} onChange={(e) => {setSearch(e.target.value)}} />

            <div className='mt-5'>
                {
                    (coins !== [])?coins[0]?.map((coin) =>
                    
                    {
                        
                        return (
                                <div className='my-3 card shadow'>
                                    <Link className='ml-3 text-decoration-none' to={(coin.item)?("/coin/"+coin.item?.id):("/coin/"+coin.id)}>
                                        <div className='d-flex'>

                                            <img width={70} className="mr-4 rounded-circle shadow p-2 m-2" src={(coin.item)?(coin.item?.large):(coin.large)}/>
                                            <div className='my-auto d-flex justify-conetnt-between w-100 mr-5'>
                                                <div className='mr-3'>{(coin.item)?(coin.item?.name):(coin.name)}</div>
                                                <div className='ml-auto text-break'>{(coin.item)?(coin.item?.price_btc +" Bitcoin(s)"):(coin?.price_btc)}</div>
                                            
                                            </div>
                                        </div>
                                    
                                    </Link>
                                </div>
                            )
                        }
                    ):<></>
                }
            </div>
        </div>
    </div>
  )
}

export default Home;