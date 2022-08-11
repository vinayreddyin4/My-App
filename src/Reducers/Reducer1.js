const initialState = {
    name : "Vinay",
    score: 25
}

export default function Reducer1 (state= initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case 'INC_REDUCERONE_SCORE': 
            return {...state, score:state.score + 1}
        case 'DEC_REDUCERONE_SCORE': 
        return {...state, score:state.score -1}   
        default: 
        return state;
    }
}