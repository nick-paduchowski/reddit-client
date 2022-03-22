import * as api from '../api'
import { FETCH_ALL } from '../constants/actionTypes';

// Action Creators

export const getPosts = () => async (dispatch) => {
    try {

        const { data } = await api.fetchPosts()
        dispatch({type: FETCH_ALL, payload: data})

    } catch(error){
        console.log(error)
    }
}