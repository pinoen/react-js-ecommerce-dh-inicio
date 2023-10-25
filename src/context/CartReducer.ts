import { CartProduct } from "../interfaces/products"

export interface CartState {
  cartItems: CartProduct[]
}

export const initialState: CartState = {
  cartItems: [],
}

export interface CartAction {
  type: 'ADD' | 'REMOVE' | 'CLEAR',
  payload: CartProduct
}

export const CartReducer = (state: CartState, action: CartAction): CartState => {
  switch(action.type){
    case "ADD": {
      const {id} = action.payload
      const existingItem = state.cartItems.find(item => item.id === id)

      if(existingItem){
        return {
          ...state,
          cartItems: state.cartItems.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item)
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        }
      }
    }

    case 'REMOVE': {
      const {id} = action.payload
      const existingItem = state.cartItems.find(item => item.id === id)

      if(existingItem){
        if(existingItem.quantity === 1){
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== id)
        }
      } else {
        return {
          ...state,
          cartItems: state.cartItems.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item)
        }
      }
      } else {
        return state
      }
    }
    
    case 'CLEAR': {
      return {
        ...state,
        cartItems: []
      }
    }

    default: {
      return state
    }
  }
}