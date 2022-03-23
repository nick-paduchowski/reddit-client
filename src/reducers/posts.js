import { FETCH_ALL, SEARCH } from "../constants/actionTypes";
import { useSelector } from 'react-redux'

export default (posts = {}, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case SEARCH:
      const postData = useSelector((post) => state.posts)
      console.log(postData)
      return postData.data.filter((post) => post.data.title.toLowerCase().includes(action.payload.toLowerCase()));
    default:
      return posts;
  }
};
