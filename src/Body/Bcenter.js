import React,{useState,useEffect} from 'react'
import './Bcenter.css'
import Reel from './Reel'
import PostSender from './PostSender'
import Post from './Post'
import db from '../firebase'

function Bcenter() {
    const[posts,setPosts] = useState([]);
    useEffect(() =>{
        db.collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) =>({id:doc.id, data:doc.data()}))))
    },[])
  return (
    <div className='bcenter'>
        <Reel/>
        <PostSender/>
        
        {posts.map((post) => (
           <Post 
        key={post.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp={post.data.timestamp}
        username={post.data.username}
        image={post.data.image}

/> 
        ))}
        
        
        {/*
        <Post 
        profilePic="https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-1/158611066_10221270980496354_3861283067396096225_n.jpg?stp=c156.0.200.200a_dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=bObRWIiEgSIAX9fM0S0&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfC1xBmfVtn25hvQ7F_aYFd0MOis3Pncyro7bSqhGfkzIw&oe=64E3909C"
        message="Wow this works!!"
        timestamp="this is a timestamp"
        username="KBR"
        image="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

/>
        <Post
        profilePic="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-1/253715431_246407080853962_942419361682323392_n.jpg?stp=cp0_dst-jpg_p40x40&amp;_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=c6021c&amp;_nc_ohc=JbMcqTrHBHUAX8x1CFC&amp;_nc_ht=scontent.ftun1-2.fna&amp;oh=00_AfCTOxfeaLWUgbGwlzCTJHY7CbjO6a1LJtX09fT6GYjqCQ&amp;oe=64D38A2C"
        message="Nice!!"
        timestamp="this is a timestamp"
        username="Radio Ras jebel News"
/>
        <Post
        profilePic="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-1/253715431_246407080853962_942419361682323392_n.jpg?stp=cp0_dst-jpg_p40x40&amp;_nc_cat=104&amp;ccb=1-7&amp;_nc_sid=c6021c&amp;_nc_ohc=JbMcqTrHBHUAX8x1CFC&amp;_nc_ht=scontent.ftun1-2.fna&amp;oh=00_AfCTOxfeaLWUgbGwlzCTJHY7CbjO6a1LJtX09fT6GYjqCQ&amp;oe=64D38A2C"
        message="Wow this works!!"
        timestamp="this is a timestamp"
        username="Radio Ras jebel News"
        image="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/366256199_664337202394279_4082611920737087895_n.jpg?stp=dst-jpg_p526x296&amp;_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8bfeb9&amp;_nc_ohc=0hDzy_0LGMEAX_dAQnx&amp;_nc_ht=scontent.ftun1-2.fna&amp;oh=00_AfACr6uUJUkRojqWAH_jVtTjXUTDxpihMma-Z3GhLgpQwQ&amp;oe=64D533EE"

/>
*/}
    </div>
  )
}

export default Bcenter