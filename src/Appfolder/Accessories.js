import React from 'react'
import data from "./JSON/Accessories.json";
import {useDispatch} from 'react-redux'
import {addToCart} from '../Redux/Action/Action'
import './products.css'
import StarRatings from 'react-star-ratings';


const Accessories = () => {

  const Dispatch = useDispatch()
    return (
        
            <div className="accessories-flex">
      {data.map((item)=>{
          return(<div className="accesories-flex-item" >
          <div>  <div><img src={item.image} className="accessories-image" alt=""/></div>
            <div className="C2">{item.name}</div>
            <div className="C2">${item.price}</div>
            <StarRatings 
          rating={item.rating}
          starRatedColor="orange"
          numberOfStars={5}
          name='rating'
          starDimension="25px"
          starSpacing="1px"
        /><br/>
            <button className="C2-button" onClick={()=>Dispatch(addToCart(item))}>Add to Cart</button> </div>
           </div> )
      })}
    </div>
        
    )
}

export default Accessories
