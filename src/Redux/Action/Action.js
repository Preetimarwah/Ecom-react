export  const addToCart = (items)=>{
    return {type:"ADD_CART",
    payload:items
}}


export  const increaseQuantity= (items)=>{
    return {type:"INCREASE_QUANTITY",
    payload:items
}}
export  const removeFromCart = (items)=>{
    return {type:"Remove_From_Cart",
    payload:items.id
}}

export  const decreaseQuantity = (items)=>{
    return {type:"DECREASE_QUANTITY",
    payload:items.id
}}

export  const increment= ()=>{
    return {type:"Increment"
    
}}