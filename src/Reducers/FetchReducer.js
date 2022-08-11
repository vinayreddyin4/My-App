import * as types from '../Actions/ActionType'

const initialState = {
    posts : [],
    loading: false,
    error:null
}


const FetchReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_POST_START:
            return {
                ...state,
                loading: true
            };
        case types.FETCH_POST_SUCCESS:
        return {
            ...state,
            loading:false,
            posts:action.payload
        };
        case types.FETCH_POST_FAIL:
            return{
                ...state,
                loading:false,
                error : action.payload
            };
            default:
                return state;
    }

}

export default FetchReducer;