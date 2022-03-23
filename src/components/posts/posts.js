import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './posts.css'
import Post from './post/post'
import { getPosts } from '../../actions/posts'

const Posts = () => {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getPosts())
    // }, [dispatch])
    const posts = useSelector((state) => state.posts)
    return (
        <>
        {
            !posts.length ? <h1>Loading...</h1> : (posts.map((post) => (
                <Post post={post.data} key={post.id} />
            )))
        } 
        </>
    );
}

export default Posts