import { FETCH_ALL, SEARCH } from "../constants/actionTypes";
import { useSelector } from 'react-redux'

export default (posts = {}, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return posts;
  }
};
