import React,{useState,useEffect} from 'react';
import './App.css';
import Post from "./Post";
import {db,auth} from "./Firebase";
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
const [openSignIn,setOpenSignIn]=useState(false);
const [username,setUsername]=useState(''); 
const [password,setPassword]=useState(''); 
const [email,setEmail]=useState(""); 
const[modalStyle]=useState(getModalStyle);
const[user,setUser]=useState(null);
useEffect(()=>{
  const unsubscribe= auth.onAuthStateChanged((authUser)=>{
  if(authUser){
    console.log(authUser);
    setUser(authUser);
   }
  else{
    setUser(null);
  }})
  return ()=> {
    unsubscribe()
  }
},[user,username])
  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot=>{
setPosts(snapshot.docs.map(doc=>({
  id:doc.id,
  post:doc.data()})));
    })
  },[]);
  const signIn=(event)=>{
    event.preventDefault(); 
    auth
    .signInWithEmailAndPassword(email,password)
    .catch((error)=>alert(error.message))
    setOpenSignIn(false); 
  }
  const SignUp=(event)=>{
event.preventDefault();
auth.createUserWithEmailAndPassword(email,password)
.then ((authUser)=>{
  return authUser.user.updateProfile({
    displayName:username
  })
})
.catch((error)=>alert(error.message))
  }
  return (
    <div className="App">
    <Modal
    open={openSignIn}
    onClose={()=>setOpenSignIn(false)}
  >
  <div style={modalStyle} className={classes.paper}>
  <form className="app__signup">
<center>
<img className="app__headerImage"
src="https://cdn.pixabay.com/photo/2016/08/01/21/00/icon-1562136__340.png"
alt=""
/></center>
<Input type="text" placeholder="Email" value={email} required 
onChange={(e)=>setEmail(e.target.value)}/>
<Input type="password" placeholder="Password" value={password}  required 
onChange={(e)=>setPassword(e.target.value)}/>
<Button type="submit" onClick={signIn}>Sign In</Button>
</form>
</div>
  </Modal>
     
    <Modal
    open={open}
    onClose={()=>setOpen(false)}
  >
  <div style={modalStyle} className={classes.paper}>
  <form className="app__signup">
<center>
<img className="app__headerImage"
src="https://cdn.pixabay.com/photo/2016/08/01/21/00/icon-1562136__340.png"
alt=""
/></center>
<Input type="text" placeholder="Username" value={username} required 
onChange={(e)=>setUsername(e.target.value)}/>
<Input type="text" placeholder="Email" value={email} required 
onChange={(e)=>setEmail(e.target.value)}/>
<Input type="password" placeholder="Password" value={password}  required 
onChange={(e)=>setPassword(e.target.value)}/>
<Button type="submit" onClick={SignUp}>Sign Up</Button>
</form>
</div>
  </Modal>
     {/*Header*/ }
    <div className="app__header">
<img className="app__headerImage" 
src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
</div>
{user ?(
  <Button onClick={()=>auth.setOpenSignIn(true)}>Log Out</Button>):
  (<Button onClick={()=>setOpen(true)}>Sign Up</Button>
  )}


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
