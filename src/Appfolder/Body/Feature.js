import React from 'react'
import './index.css'
import data from '../JSON/feature.json'
import dataTwo from '../JSON/Saleoftheweek.json'
import { addToCart } from '../../Redux/Action/Action'
import { useDispatch } from 'react-redux'
import StarRatings from 'react-star-ratings';

const Feature = () => {

    const Dispatch=useDispatch()
    
    return (
        <div>
            
 {/* feature products */}
<div>
    <h2 class="ftitle">Featured Products</h2>
<div class="fproducts">
   { data.map((items)=>{
       return(<div className="C2">
       <img src={items.image} width="245px"/>
      <p>{items.name}</p>
        <p>${items.price}</p>

<StarRatings 
          rating={items.rating}
          starRatedColor="orange"
          numberOfStars={5}
          name='rating'
          starDimension="25px"
          starSpacing="1px"
        /><br/>
        <button class="C2-button" onClick={()=>Dispatch(addToCart(items))}>add to cart </button>
    </div>)})}

   
    </div>
    </div>

    {/* sale of the week */}

<div className="saleofweek">

  { dataTwo.map((items)=>{
      return( <div> <div>
        <img src={items.image} height="600px" alt=""/>
    </div>
<div class="offercontent">
<h1> Best offer of the week</h1> 
<p>50% OFF</p>
<p class="P1">$13,000 </p>
  <p>$6,500</p>
  <button class="C2-button" onClick={()=>Dispatch(addToCart(items))}>add to cart </button>
</div>

</div>

      )
  })}




</div>
</div>
    )
}

export default Feature
