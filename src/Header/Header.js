import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import {Avatar, IconButton} from '@mui/material';

import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';

import { useStateValue } from '../StateProvider'


function Header() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className='header'>
        <div className='header__left'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png?20190503112358'
            alt=''/>
            <div className='header__input'>
                <SearchIcon/>
                <input type='text' placeholder='Search Facebook' />
            </div>
        </div>
        <div className='header__middle'>
          <div className='header__option header__option--active'>
            <HomeIcon fontSize='large'/>
          </div>
          <div className='header__option'>
            <OndemandVideoIcon fontSize='large'/>
          </div>
          <div className='header__option'>
            <StorefrontIcon fontSize='large'/>
          </div>
          <div className='header__option'>
            <SupervisedUserCircleIcon fontSize='large'/>
          </div>
          <div className='header__option'>
            <VideogameAssetIcon fontSize='large'/>
          </div>
        </div>
        <div className='header__right'>
          <IconButton>
            <AppsIcon/>
          </IconButton>
          <IconButton>
            <ForumIcon/>
          </IconButton>
          <IconButton>
            <NotificationsIcon/>
          </IconButton>
          <Avatar src={user.photoURL}/>
        </div>
    </div>
  )
}

export default Header