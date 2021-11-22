import React from 'react'
import Feature from "./Feature";
import Reviews from "../Reviews/Reviews";

const Body = () => {
    return (
        <div>
            <div class="main1">

    
<div class="quote">
    <h1>We are here to make best <br/>version of you with everything<br/>
     you need for a good lifestyle.</h1>
</div>

<div class= "topimage">
<img src="/resources/images/topimage.jpg" height="500px"/>
</div>
</div>

{/* Category SEction */}


    <div class="categories">
        <div class="C1">
            <img src="/resources/images/dress1.jpg" alt=""/>
        </div>
        <div class="C1">
            <img src="/resources/images/dress2.jpg"  />
        </div>
<div class="C1">
    <img src="/resources/images/dress3.jpg"  />
</div>



</div>
<Feature/>
<Reviews/>
 </div>

    )
}

export default Body
