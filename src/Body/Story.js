import React from 'react'
import './Story.css'
import {Avatar} from '@mui/material';

function Story({image,profilePic,name}) {
  return (
    <div className='story' style={{backgroundImage:`url(${image})`}}>
        <Avatar src={profilePic} className='story__avatar'/>
        <h4>{name}</h4>
    </div>
  )
}

export default Story