import React from 'react'

const Post = ({post}) => {
    return (
        <>
            <div className="post-div" style={{width: '80%', marginLeft: '3rem', marginRight: '0'}}>
                {post.title}
            </div>
        </>
    )
}

export default Post