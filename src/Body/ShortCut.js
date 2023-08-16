import React from 'react'
import './ShortCut.css'
import ShortCutRow from './ShortCutRow'


function ShortCut() {
  return (
    <div className='shortCut'>
        <h5>Your shortcuts</h5>
        <ShortCutRow 
       src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/365619128_10226196375028139_3426245497846987944_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BJ3x7vM-9ngAX-VjK7B&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBLDEARVix68y61ExqAOeuaECntsembtcph2a99qvBbAw&oe=64D65FA3"
       title="BEN TECH PRO TV"
       href="https://www.facebook.com/100095537469823/"
        />
         <ShortCutRow 
       src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/360089493_733963548739989_5700255645263221727_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rp0eZz3G7CMAX-xdWxs&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBiGZAIB1_XOg-a_v_znLlhyGymEHwiGYOeAA5UZ87YxA&oe=64D76B80"
       title="Innov'COM"
       href="https://www.facebook.com/TASIT.SUPCOM/"
        />
    </div>
  )
}

export default ShortCut