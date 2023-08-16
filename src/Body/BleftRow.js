import React from 'react'
import './BleftRow.css'
import {Avatar} from '@mui/material';

function BleftRow({src,Icon,name,href}) {
  return (
    <div className='bleftRow'>
        {src && <Avatar src={src} />}
        {Icon && <Icon/>}
        <a class="btn and btn-inf" href={href}>{name}</a>
    </div>
  )
}

export default BleftRow