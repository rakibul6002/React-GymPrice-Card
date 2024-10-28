import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

export default function Priceoption({option}) {
    const {name,price,features}=option
  return (
    <div className='bg-blue-600 rounded-lg p-5 text-center my-5 flex flex-col'>
        <h2>
            <span className='text-5xl font-bold'>{price}</span>
            <span className='text-3xl'>/mon</span>
        </h2>
        <h4 className='text-3xl'>{name}</h4>
        <div className=' flex-grow'>
            <h2 className='text-center text-3xl font-bold my-5 '>Featured:</h2>
           <div >
                {
                        features.map((feature,index)=><h1 className='flex items-center text-sm gap-3' key={index}><AiFillCheckCircle></AiFillCheckCircle>{feature}</h1>)
                }
           </div>
        </div>
        <button className='btn bg-green-500 mt-5'>Buy Now</button>
    </div>
  )
}

Priceoption.propTypes={
    option: PropTypes.object
}