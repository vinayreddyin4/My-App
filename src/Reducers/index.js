import { combineReducers } from "redux";
// import Reducer1 from "./Reducer1";
// import Reducer2 from "./Reducer2";

import FetchReducer from './FetchReducer'


const rootReducer = combineReducers ({
    data:FetchReducer
})







// const reducer = combineReducers ({
//     reducerone : Reducer1,
//     reducertwo : Reducer2

// })

export default rootReducer;