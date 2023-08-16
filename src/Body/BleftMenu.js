import React from 'react'
import BleftRow from './BleftRow'
import PeopleIcon from '@mui/icons-material/People';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TodayIcon from '@mui/icons-material/Today';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from '../StateProvider'

function BleftMenu() {
    const [{user},dispatch] = useStateValue();
    return (
    <div className='bleftMenu'>
        <BleftRow src={user.photoURL} name="KBR"/>
        <BleftRow Icon={PeopleIcon} name="Friends" href="https://www.facebook.com/friends/"/>
        <BleftRow Icon={BookmarkIcon} name="Saved" href="https://www.facebook.com/saved/?cref=28" />
        <BleftRow Icon={TodayIcon} name="Feeds" href="https://www.facebook.com/?filter=all&sk=h_chr"/>
        <BleftRow Icon={GroupsIcon} name="Groups" href="https://www.facebook.com/groups/?ref=bookmarks" />
        <BleftRow Icon={StorefrontIcon} name="Marketplace" href="https://www.facebook.com/marketplace/?ref=bookmark"/>
        <BleftRow Icon={VideoLibraryIcon} name="Video" href="https://www.facebook.com/watch/" />
        <BleftRow Icon={AvTimerIcon} name="Memories" href="https://www.facebook.com/onthisday/?source=bookmark"/>
        <BleftRow Icon={EmojiFlagsIcon} name="Pages" href="https://www.facebook.com/pages/?category=your_pages&ref=bookmarks" />
        <BleftRow Icon={ExpandMoreIcon} name="See more" href=""/>
    </div>
  )
}

export default BleftMenu