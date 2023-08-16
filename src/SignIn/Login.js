import React from 'react'
import './Login.css'
import { Button } from 'react-bootstrap'
import {auth, provider} from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

function Login() {
    const [{user},dispatch] = useStateValue(); //hook

const signIn =() => {
        //signIn
        auth
        .signInWithPopup(provider)
        .then((data) =>{
            //console.log(data.user)
            dispatch({
                type:actionTypes.SET_USER,
                user:data.user,
            })
        })
        .catch((error) => alert(error.message));
    };
  return (
    <div className='login'>
        <div className='login__logo'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png?20190503112358' alt=''/>
            <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='' />
        </div>
        <Button type="submit" onClick={signIn}>
            Sign In
        </Button>

    </div>
  )
}

export default Login