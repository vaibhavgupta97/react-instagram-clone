import React,{useState,useEffect} from 'react';
import './App.css';
import Post from "./Post"
function App() {
  const [posts,setPosts]=useState([{ username:"Cleaver", caption:"  wao its great", 
  imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWnDVmN-iozShkwiyZlbfd5nRcvJBSFA-38g&usqp=CAU"},
  {username:"v._aibhav", 
caption:"  how it works", 
  imageurl:"https://i.pinimg.com/736x/3a/4b/af/3a4baf28202e42fe5a79492cea600e67.jpg"},
  {username:"a_k_s", 
  caption:"  so many posts" ,
  imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRR3axgGmYgqGxqzgHuQczuEKU-QEJprIQoxQ&usqp=CAU"},
  {username:"sunny", 
  caption:"  how to build",
   imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQ8WMRL2KG_zFwnm0xFTH9oVuMcPxYn3pQyQ&usqp=CAU"},
  ]);
  return (
    <div className="App">
     {/*Header*/ }
    <div className="app__header">
<img className="app__headerImage" 
src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
</div>
{/*Story*/ }
      {/*Post*/ }
      {
        posts.map(post=>(
          <Post username={post.username} imageurl={post.imageurl} caption={post.caption}/>
        ))
      }
{/*post */ }
      {/*post*/ }
      {/**/ }
    </div>
  );
}

export default App;
