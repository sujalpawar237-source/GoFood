import React, { useReducer } from "react";

const cartStateContext = React.createContext();
const cartDispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          price: action.price,
          qty: action.qty,
          size: action.size,
          img: action.img,
        },
      ];

    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;

      case "UPDATE":
      return state.map((food) => {
      if (food.id === action.id && food.size === action.size) {
      return {
        ...food,
        qty: food.qty + parseInt(action.qty),
        price: food.price + action.price,
      };
    }
    return food;
  });

      case "DROP":
        let emptyArray = [];
        return emptyArray;


    default:
      console.log("Error in Reducer");
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <cartDispatchContext.Provider value={dispatch}>
      <cartStateContext.Provider value={state}>
        {children}
      </cartStateContext.Provider>
    </cartDispatchContext.Provider>
  );
};

export const useCart = () => React.useContext(cartStateContext);
export const useDispatchCart = () => React.useContext(cartDispatchContext);
