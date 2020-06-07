import { SET_NAVBAR_LINKS, SET_SHOP_PRODUCTS, FILTER_PRODUCTS_WITH_CATEGORY_ID, SET_SHOP_CATEGORIES } from "./types";

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
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis, ad ab maxime tenetur totam explicabo modi? Beatae odio, voluptatem, veniam eius voluptate inventore minus adipisci, exercitationem consectetur repellat esse.Corporis quod, ad cum, incidunt harum eveniet dicta obcaecati autem laboriosam delectus nesciunt sapiente mollitia, illum pariatur adipisci animi eaque excepturi nihil deserunt minima esse earum officiis non ab! Deserunt.',
                price: 1.99,
                belongsTo: [0,1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis, ad ab maxime tenetur totam explicabo modi? Beatae odio, voluptatem, veniam eius voluptate inventore minus adipisci, exercitationem consectetur repellat esse.Corporis quod, ad cum, incidunt harum eveniet dicta obcaecati autem laboriosam delectus nesciunt sapiente mollitia, illum pariatur adipisci animi eaque excepturi nihil deserunt minima esse earum officiis non ab! Deserunt.',
                price: 1.99,
                belongsTo: [0,6]
                
            },            
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis, ad ab maxime tenetur totam explicabo modi? Beatae odio, voluptatem, veniam eius voluptate inventore minus adipisci, exercitationem consectetur repellat esse.Corporis quod, ad cum, incidunt harum eveniet dicta obcaecati autem laboriosam delectus nesciunt sapiente mollitia, illum pariatur adipisci animi eaque excepturi nihil deserunt minima esse earum officiis non ab! Deserunt.',
                price: 1.99,
                belongsTo: [0,1,4]
                
            },            
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis, ad ab maxime tenetur totam explicabo modi? Beatae odio, voluptatem, veniam eius voluptate inventore minus adipisci, exercitationem consectetur repellat esse.Corporis quod, ad cum, incidunt harum eveniet dicta obcaecati autem laboriosam delectus nesciunt sapiente mollitia, illum pariatur adipisci animi eaque excepturi nihil deserunt minima esse earum officiis non ab! Deserunt.',
                price: 1.99,
                belongsTo: [0,2]
            },            
            {

                _id: 4,
                title: 'Javascript Development',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis, ad ab maxime tenetur totam explicabo modi? Beatae odio, voluptatem, veniam eius voluptate inventore minus adipisci, exercitationem consectetur repellat esse.Corporis quod, ad cum, incidunt harum eveniet dicta obcaecati autem laboriosam delectus nesciunt sapiente mollitia, illum pariatur adipisci animi eaque excepturi nihil deserunt minima esse earum officiis non ab! Deserunt.',
                price: 1.99,
                belongsTo: [0,1]
            },           
            {
                _id: 5,
                title: 'User Experience Design',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis, ad ab maxime tenetur totam explicabo modi? Beatae odio, voluptatem, veniam eius voluptate inventore minus adipisci, exercitationem consectetur repellat esse.Corporis quod, ad cum, incidunt harum eveniet dicta obcaecati autem laboriosam delectus nesciunt sapiente mollitia, illum pariatur adipisci animi eaque excepturi nihil deserunt minima esse earum officiis non ab! Deserunt.',
                price: 1.99,
                belongsTo: [0,2]
            },            
            {
                _id: 6,
                title: 'Advance OOP',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit corporis, ad ab maxime tenetur totam explicabo modi? Beatae odio, voluptatem, veniam eius voluptate inventore minus adipisci, exercitationem consectetur repellat esse.Corporis quod, ad cum, incidunt harum eveniet dicta obcaecati autem laboriosam delectus nesciunt sapiente mollitia, illum pariatur adipisci animi eaque excepturi nihil deserunt minima esse earum officiis non ab! Deserunt.',
                price: 1.99,
                belongsTo: [0,6]
            }
        ]
    })
}

