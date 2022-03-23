import * as api from '../api'
import { FETCH_ALL, SEARCH } from '../constants/actionTypes';

// Action Creators

export const getPosts = () => async (dispatch) => {
    try {

        const { data } = await api.fetchPosts()
       
        const postData = data.data.children
        dispatch({type: FETCH_ALL, payload: postData})

    } catch(error){
        console.log(error)
    }
}

export const search = (searchTerm) => async (dispatch) => {
    try {
        dispatch({type: SEARCH, payload: searchTerm})
    } catch (error) {
        console.log(error)
    }
}