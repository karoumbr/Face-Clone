import React, {useState} from 'react'
import './PostSender.css'
import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from '../StateProvider'
import db from '../firebase'
import firebase from 'firebase/compat/app';

function PostSender() {
    const [{user},dispatch] = useStateValue();
    const[input, setInput] = useState('')
    const [imageUrl,setimageUrl] = useState('')
    const SubmitHandler = (e) =>{
        e.preventDefault(); // prevent refresh after submit
        //add post to database
        db.collection('posts').add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image: imageUrl
        })
        //reset inputs after submit
        setInput('')
        setimageUrl('')
    }
  return (
    <div className='postSender'>
        <div className='postSender__top'>
            <Avatar src={user.photoURL}/> 
            <form>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='postSender__input'
                placeholder={`What's on your mind, ${user.displayName}? `}/>
                <input 
                value={imageUrl}
                onChange={(e) => setimageUrl(e.target.value)}
                placeholder='image URL (Optional)'/>
                <button onClick={SubmitHandler} type='submit'>
                    Submit
                </button>
            </form>

        </div>
        <div className='postSender__bottom'>
            <div className='postSender__option'>
                <VideocamIcon style={{color:'red'}}/>
                <h3>Live Video</h3>
            </div>
            <div className='postSender__option'>
                <PhotoLibraryIcon style={{color:'green'}}/>
                <h3>Photo/Video</h3>
            </div>
            <div className='postSender__option'>
                <InsertEmoticonIcon style={{color:'orange'}}/>
                <h3>Feeling/activity</h3>
            </div>
        </div>
    </div>
  )
}

export default PostSender