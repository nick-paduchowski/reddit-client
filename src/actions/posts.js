import * as api from '../api'
import { FETCH_ALL } from '../constants/actionTypes';

// Action Creators

export const getPosts = () => async (dispatch) => {
    try {

        const { data } = await api.fetchPosts()

        const postData = await data.data.children
        dispatch({type: FETCH_ALL, payload: postData})

    } catch(error){
        console.log(error)
    }
}