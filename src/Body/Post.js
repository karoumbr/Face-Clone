import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function Post({profilePic, image,username,timestamp,message}) {
    
  return (
    <div className='post'>
        <div className='post__top'>
            <Avatar src={profilePic} className='post__avatar'/>
            <div className='post__infos'>
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div> 

        <div className='post__bottom'>
            <p>{message}</p>
        </div>
        <div className='post__image'>
            <img src={image} alt=''/>
        </div>
        <div className='post__options'>

    <div className='post__option'>
        <ThumbUpIcon/>
        <p>Like</p>
    </div>
    <div className='post__option'>
        <ChatBubbleOutlineIcon/>
        <p>Comment</p>
    </div>
    <div className='post__option'>
        <ShareIcon/>
        <p>Share</p>
    </div>
    <div className='post__option'>
        <Avatar src={profilePic} className='post__avatar'/>
        <ExpandMoreIcon/>
       
    </div>
    </div>


    </div>
  )
}

export default Post