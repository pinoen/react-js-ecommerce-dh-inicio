import { useReducer } from "react"
import { CartReducer, initialState } from "./CartReducer"
import { CartContext } from "./CartContext"

export interface CartProviderProps {
  children: React.ReactNode
}
export const CartProvider: React.FC<CartProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  return (
    <CartContext.Provider value={{state, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}