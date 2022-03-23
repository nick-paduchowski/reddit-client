import React from 'react'
import posts from '../../../reducers/posts'
import './post.css'

const Post = ({post}) => {
    return (
        <>
            <div className="post-div" style={{display: 'flex', marginLeft: '3rem'}}>
                <div className='upvotes'>
                    {post.ups}
                </div>
                <div className='content' style={{display: 'block', marginLeft: '1rem'}}>
                    <h3>{post.title}</h3>
                    <h5>u/{post.author}</h5>
                    <img src={post.url_overridden_by_dest} style={{marginBottom: '1rem', width: '95%'}} />
                </div>
            </div>
        </>
    )
}

export default Post