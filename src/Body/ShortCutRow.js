import React from 'react'
import './ShortCutRow.css'
import { Avatar } from '@mui/material'

function ShortCutRow({src,title,href}) {
  return (
    <div className='shortCutRow'>
        <Avatar src={src}/>
<a class="btn and btn-inf" href={href}>{title}</a>


    </div>
  )
}

export default ShortCutRow