const initialState = {
    products : []
}

export const fetchReducer = (state = initialState , action) => {
    switch(action.type){
        case 'GET_PRODUCTS':
            return {...state, products : action.payload}
        default:
            return state
    }
}