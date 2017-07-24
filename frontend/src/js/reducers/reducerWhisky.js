import {INIT_FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from '../actions/productActions'

const INITIAL_STATE = {products: [], error: null, fetching: false, fetched: false};

export default function reducer (state = INITIAL_STATE, action) {
    let error;
    switch(action.type) {
        case INIT_FETCH_PRODUCTS: {
            return {...state,products: [], error: null, fetching: true, fetched: false};
        }
        case FETCH_PRODUCTS_SUCCESS: {
            return {...state, products: action.payload, error: null, fetching: false, fetched: true};
        }
        case FETCH_PRODUCTS_ERROR: {
            error = action.payload || {message: action.payload.message};
            return {...state, products: [], error: error, fetching:false, fetched:false };
        }
    }
    return state;
}




// Testweise hardcode datensätze



/*export default function () {
    return [
        {
            id: 1,
            name: "Old Pulteney",
            price: 38.50,
            description: "Eicher House Whiskey",
            category: "Scotch Highland",
            amount: 26
        },
        {
            id: 2,
            name: "Wolfburn",
            price: 45.00,
            description: "Hermann House Whiskey",
            category: "Scotch Highland",
            amount: 14
        },
        {
            id: 3,
            name: "Clynelish 1993",
            price: 90.00,
            description: "Random long Description to fill that space. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.",
            category: "Scotch Highland",
            amount: 2
        },
        {
            id: 4,
            name: "Laphroaig",
            price: 22.00,
            description: "Random long Description to fill that space. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.",
            category: "Scotch Highland",
            amount: 22
        },
        {
            id: 5,
            name: "Connemara",
            price: 40.00,
            description: "Random long Description to fill that space. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.",
            category: "Irish",
            amount: 14
        },
        {
            id: 6,
            name: "Tomatin",
            price: 32.50,
            description: "Random long Description to fill that space. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.",
            category: "Scotch Highland",
            amount: 6
        },
        {
            id: 7,
            name: "Glenfiddich",
            price: 19.90,
            description: "Random long Description to fill that space. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.",
            category: "Scotch Highland",
            amount: 41
        },
        {
            id: 8,
            name: "Diplomatico",
            price: 35.00,
            description: "Dominican Republic Cane Rum",
            category: "Rum",
            amount: 26
        },
        {
            id: 9,
            name: "Arran Gold",
            price: 17.50,
            description: "Whisky Caramel Liquor",
            category: "Liquor",
            amount: 10
        }
    ]
}*/
