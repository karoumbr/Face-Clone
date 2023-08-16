import React from 'react'
import './Bleft.css'
import BleftMenu from './BleftMenu' 
import ShortCut from './ShortCut'

function Bleft() {
  
  return (
    <div className='bleft'>
        <BleftMenu/>
        <ShortCut/>
    </div>
  )
}

export default Bleft