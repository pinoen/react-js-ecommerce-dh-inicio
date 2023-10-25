import { Dispatch, createContext } from "react";
import { CartAction, CartState } from "./CartReducer";

export interface CartContextType {
  state: CartState
  dispatch: Dispatch<CartAction>
}


export const CartContext = createContext({} as CartContextType)