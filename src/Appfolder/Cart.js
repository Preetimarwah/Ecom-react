import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { removeFromCart, increment, increaseQuantity,decreaseQuantity, addToCart } from "../Redux/Action/Action";

const Cart = () => {
  const data = useSelector((state) => state.Reducer);

  useEffect(() => {
    console.log(data.total);
  }, []);

  const Dispatch = useDispatch();
  
  const Total= data.Carts.reduce((accum,items)=>{return accum+(items.quantity*items.price)},0)

  return (
    <>
      {" "} 
      <div className="cart-container">
        {data.Carts.map((item) => {
          return (
            <div className="flex123">
              <div className="Cart-item-flexBox">
                <div className="Cart-image">
                  <img src={item.image} />
                </div>
                <div className="cart-item-description">
                  <div>{item.name}</div>
                  <div>${item.price}</div>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic example"
                    style={{ marginBottom: "5px", padding: "4px" }}
                  >
                    <button
                      type="button"
                      style={{ width: "35px", border: "1px solid black" }}
                      // onClick={() => Dispatch(increaseQuantity(item))}
                      onClick={() => Dispatch(addToCart(item))}

                    >
                      +
                    </button>
                    <input
                      value={item.quantity}
                      style={{
                        width: "40px",
                        border: "1px solid black",
                        textAlign: "center",
                      }}
                    ></input>
                    
                    <button
                      type="button"
                      style={{ width: "35px", border: "1px solid black" }}
                      onClick={() => Dispatch(decreaseQuantity(item))}  
                    >
                      -
                    </button>
                  </div>
                  <div>
                    <button
                      className="Remove-btn"
                      onClick={() => Dispatch(removeFromCart(item))}
                    >
                      Remove item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
      <div >
        <h2 style={{ textAlign: "right", marginRight: "10px" }}>
          Total Amount
        </h2>
        <h4 style={{ textAlign: "right", marginRight: "10px" }}>${Total}</h4>
      </div>
    </>
  );
};

export default Cart;
