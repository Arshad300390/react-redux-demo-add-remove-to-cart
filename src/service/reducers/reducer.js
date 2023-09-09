import { ADD_TO_CART } from '../constants'
import { REMOVE_TO_CART } from '../constants'   

const initialState = {
    cartData: [],
    totalPrice: 0
}

const calculateTotalPrice = (cartData) => {
    return cartData.reduce((total, item)=> total + item.price,0)
}
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn('reducer', action)
            // return {
            //     ...state,
            //     cartData:  action.data
            // }
            
            const newItem = action.data;
            const updatedCartData = [...state.cartData, newItem];
            const newTotalPrice = calculateTotalPrice(updatedCartData);
            return {
                ...state,
                cartData: updatedCartData,
                totalPrice: newTotalPrice
            }
            break;
        
        case REMOVE_TO_CART:
            console.warn('Reducer', action)
            const rUpdatedCartData = [...state.cartData.slice(0,-1)];
            const rNewTotalPrice = calculateTotalPrice(rUpdatedCartData);
            return {
                ...state,
                cartData: rUpdatedCartData,
                totalPrice: rNewTotalPrice
            }
            break;
        default:
            return state
    }
}

