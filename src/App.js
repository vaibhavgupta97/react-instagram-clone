import React,{useState,useEffect} from 'react';
import './App.css';
import Post from "./Post";
import {db} from "./Firebase";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button , Input} from '@material-ui/core';
function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function App() {
  const classes=useStyles();
  const [posts,setPosts]=useState([]);
const [open,setOpen]=useState(false); 
const [username,setUsername]=useState(''); 
const [password,setPassword]=useState(''); 
const [email,setEmail]=useState(""); 
const[modalStyle]=useState(getModalStyle);
  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot=>{
setPosts(snapshot.docs.map(doc=>({
  id:doc.id,
  post:doc.data()})));
    })
  },[]);
  const SignUp=(event)=>{

  }
  return (
    <div className="App">
    <Modal
    open={open}
    onClose={()=>setOpen(false)}
  >
  <div style={modalStyle} className={classes.paper}>
<center>
<img className="app__headerImage"
src="https://cdn.pixabay.com/photo/2016/08/01/21/00/icon-1562136__340.png"
alt=""
/>
<Input type="text" placeholder="Username" value={username} required 
onChange={(e)=>setUsername(e.target.value)}/>
<Input type="text" placeholder="Email" value={email} required 
onChange={(e)=>setEmail(e.target.value)}/>
<Input type="password" placeholder="Password" value={password}  required 
onChange={(e)=>setPassword(e.target.value)}/>
<Button type="submit" onClick={SignUp}>Sign Up</Button>
</center>
</div>
  </Modal>
     {/*Header*/ }
    <div className="app__header">
<img className="app__headerImage" 
src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
</div>
<Button onClick={()=>setOpen(true)}>Sign Up</Button>
{/*Story*/ }
      {/*Post*/ }
      {
        posts.map(({id,post})=>(
          <Post key={id} username={post.username} imageurl={post.imageurl} caption={post.caption}/>
        ))
      }
{/*post */ }
      {/*post*/ }
      {/**/ }
    </div>
  );
}

export default App;
