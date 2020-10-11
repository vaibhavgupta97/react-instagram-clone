import React from 'react';
import "./Post.css";
import Avatar from "@material-ui/core/Avatar"; 
function Post({username,caption,imageurl}) {
    return (
<div className="post">
{/*header = avatar + userName */}
<div className="post__header">
<Avatar
    className="post__avatar"
    src="/static/images/avatar/1.jpg"
    alt="abs"
    /><p>{username}</p></div>
{/*image */}  
<img className="post__image" 
src={imageurl}
alt=""/> 
{/*username+ caption  */} 
<h4 className="post__text"><strong>{username}</strong>{caption}</h4>  
{/* */}   
</div>
    )
}

export default Post
