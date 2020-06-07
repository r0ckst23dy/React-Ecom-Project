import { SET_SHOP_CATEGORIES, SET_SHOP_PRODUCTS, FILTER_PRODUCTS_WITH_CATEGORY_ID } from "../actions/types";
import actions from "redux-form/lib/actions";



const INITIAL_STATE = {
    categories: [],
    productSelected: [],
    products: []
}

export default function(state = INITIAL_STATE, action) { 
    switch (action.type) { 
        case SET_SHOP_CATEGORIES:
            const  categories = action.payload;
            return {
                ...state,
                categories
            }
        case SET_SHOP_PRODUCTS: 
            return {
                ...state,
                products: action.payload
            }
        case FILTER_PRODUCTS_WITH_CATEGORY_ID:
            console.log(action.payload);
            
            return {
                ...state,
                
            }
        default: return state
    }
}