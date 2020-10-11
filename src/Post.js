import React from 'react';
import "./Post.css";
import Avatar from "@material-ui/core/Avatar"; 
function Post() {
    return (
<div className="post">
{/*header = avatar + userName */}
<h3>Today we are building instagram-clone</h3>
<div className="post__header">
<Avatar
    className="post__avatar"
    src="/static/images/avatar/1.jpg"
    alt="abs"
    /><p>username</p></div>
{/*image */}  
<img className="post__image" 
src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSe6PzCyqey6qp86d-irfWBIc8yo-OVJtipbw&usqp=CAU" 
alt=""/> 
{/*username+ caption  */} 
<h4 className="post__text"><strong>Cleaver :</strong>This is day two</h4>  
{/* */}   
</div>
    )
}

export default Post
