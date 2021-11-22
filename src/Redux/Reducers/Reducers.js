/* eslint-disable */

const initProduct = {
  Carts: [],
};

export const addingToCartOne = (state = initProduct, action) => {
  switch (action.type) {
    case "ADD_CART":
      
      let check = false;
      state.Carts.map((item, key) => {
        if (item.id === action.payload.id) {
          state.Carts[key].quantity++;
          check = true;
        }
      });

      if (!check) {
        let cartItem = {
          quantity: 1,
          ...action.payload,
        };
        state.Carts.push(cartItem);
      }

      return {
        ...state,
        numberCart: state.numberCart + 1,
      };

    case "DECREASE_QUANTITY":
      let quantity = state.Carts.filter(
        (item) => item.id === action.payload
      )[0].quantity
      
      

      if (!quantity) {
        return { ...state };
      }
      if (quantity > 1) {
        let cart = state.Carts.map((item) => {
          if (item.id === action.payload) {
            let qty = item.quantity - 1;
            return { ...item, quantity: qty };
          }
          return item;
        });

        return {
          ...state,
          Carts: cart,
        };
      }

      if (quantity === 1) {
        return {
          ...state,
          Carts: state.Carts.filter((item) => {
            return item.id !== action.payload;
          }),
        };
      }

      if (quantity < 1) {
        return state;
      }

      return state;

    case "Remove_From_Cart":
      return {
        ...state,
        Carts: state.Carts.filter((el) => el.id !== action.payload),
      };
    case "DELETE_CART":
      let quantity_ = state.Carts.filter(
        (item) => item.id === action.payload
      ).map((item) => {
        if (item.id === action.payload) {
          return item.quantity;
        }
      })[0];

      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
