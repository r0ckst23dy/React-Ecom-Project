import { 
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS, 
    FILTER_PRODUCTS_WITH_CATEGORY_ID, 
    SET_SHOP_CATEGORIES, 
    FILTER_PRODUCTS_WITH_QUERY 
} from "./types";

export function filterProducstWithQuery(fields) { 
    return({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}

export function filterProductsWithCategoryId(_id) {
    console.log(_id);
    
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
                {
                    _id: 0,
                    title: 'All',
                    active: true
                },
                {
                    _id: 1,
                    title: 'Javascript',
                    active: false
                },            
                {
                    _id: 2,
                    title: 'UI/UX',
                    active: false
                },            
                {
                    _id: 3,
                    title: 'Linux',
                    active: false
                },            
                {
    
                    _id: 4,
                    title: 'Python',
                    active: false
                },           
                {
                    _id: 5,
                    title: 'UML',
                    active: false
                },            
                {
                    _id: 6,
                    title: 'Ruby',
                    active: false
                }
        ]
        
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'Javascript in the Browser',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis, ad ab maxime tenetur totam explicabo modi? ',
                price: 1.99,
                belongsTo: [0,1],
                imageURL: 'http://via.placeholder.com/80x80'
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis, ad ab maxime tenetur totam explicabo modi? ',
                price: 1.99,
                belongsTo: [0,6],
                imageURL: 'http://via.placeholder.com/80x80'
                
            },            
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis, ad ab maxime tenetur totam explicabo modi? ',
                price: 1.99,
                belongsTo: [0,1,4],
                imageURL: 'http://via.placeholder.com/80x80'
                
            },            
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis, ad ab maxime tenetur totam explicabo modi? ',
                price: 1.99,
                belongsTo: [0,2],
                imageURL: 'http://via.placeholder.com/80x80'
            },            
            {

                _id: 4,
                title: 'Javascript Development',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis, ad ab maxime tenetur totam explicabo modi? ',
                price: 1.99,
                belongsTo: [0,1],
                imageURL: 'http://via.placeholder.com/80x80'
            },           
            {
                _id: 5,
                title: 'User Experience Design',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis, ad ab maxime tenetur totam explicabo modi? ',
                price: 1.99,
                belongsTo: [0,2],
                imageURL: 'http://via.placeholder.com/80x80'
            },            
            {
                _id: 6,
                title: 'Advance OOP',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis, ad ab maxime tenetur totam explicabo modi? ',
                price: 1.99,
                belongsTo: [0,6],
                imageURL: 'http://via.placeholder.com/80x80'
            }
        ]
    })
}

