import axios from 'axios';
import * as types from './ActionType';
const fetchPostStart = () => ({
    type: types.FETCH_POST_START,
});

const fetchPostSuccess = (posts) => ({
    type: types.FETCH_POST_SUCCESS,
    payload: posts,
});

const fetchPostFail = (error) => ({
    type: types.FETCH_POST_FAIL,
    payload : error
});


export function fetchPosts() {
    return function (dispatch) {
        dispatch(fetchPostStart());
        axios.get("https://itunes.apple.com/search?term=jack+johnson")
        .then((response)  => {
            const posts = response.data;

            dispatch(fetchPostSuccess(posts));

        })
        .catch((error) => {
            dispatch(fetchPostFail(error.message));
        }); 
    };
}














// export const incReducerone = () => async dispatch => {
//     dispatch({
//         type: 'INC_REDUCERONE_SCORE'
//     })
// }
// export const decReducerone = () => async dispatch => {
//     dispatch({
//         type: 'DEC_REDUCERONE_SCORE'
//     })
// }

