//начальн сост-е

const initialState = {
    products: [
    {
        id: 1,
        name: 'Apple',
        price: 10
    },
    {
        id: 2,
        name: 'Pineapple',
        price: 30
    },
    {
        id: 3,
        name: 'Banana',
        price: 15
    }
    ],
    cart: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const existing = state.cart.find((item) => {
                return item.id === action.payload.id
            })

            if(existing) {
                return {
                    ...state,
                    cart: state.cart.map((item) => (
                        item.id === action.payload.id 
                        ? {...item, quantity: item.quantity + 1} 
                        : item
                    ))
                }
            }
            return {
                ...state, 
                cart: [...state.cart,
                     {...action.payload, quantity: 1}
                    ]
            }
        }
        case 'REMOVE_FROM_CART': {
            return { ...state, 
                cart: state.cart.filter((product) => product.id !== action.payload ) 
                //cart: это перезапись

            }
        }
        case 'UPDATE_CART_QUANTITY' : {
            return {...state,
                cart: state.cart.map((product) => product.id === action.payload.id 
                ? {...product, quantity: action.payload.quantity} 
                : product)
            }
        }
        default: 
            return state
    }
}

export default reducer;