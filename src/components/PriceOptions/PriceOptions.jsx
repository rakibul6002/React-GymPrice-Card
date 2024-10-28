import { useEffect, useState } from "react";
import Priceoption from "../Priceoption/Priceoption";

export default function PriceOptions() {
    const [option, setOption] = useState([]);

    useEffect(()=>{
        fetch('PriceOptions.json')
        .then(res => res.json())
        .then(data =>{setOption(data)} )
    },[]);
   
   
  return (
    <div >
        <h1 className='text-3xl text-center'>Best Prices</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                option.map(p=> <Priceoption key={p.id} option={p}></Priceoption>)
            }
        </div>
        
    </div>
  )
}
