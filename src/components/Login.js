import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { useHistory } from 'react-router-dom'
import {signin} from '../actions/userActions'

function Login(props){
    //const history = useHistory()
    const dispatch = useDispatch()
    const [data,setData] = useState({
        email:'',
        password:''
    })
    const userSignin = useSelector((state)=>state.userSignin)
    const {userInfo} = userSignin
    // from redux store
    const handleSubmit = (event) => {
        event.preventDefault()
        //dispatch
        dispatch(signin(data.email,data.password))
        //props.history.push('/')
    }
    useEffect(()=>{
        if(userInfo) {
            props.history.push('/')
        }
    },[props.history,userInfo])
    return(
        <div className= "login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <input className= "input" type="text" placeholder="Enter a Email"
            value={data.email}
            onChange={(event)=>setData({...data,email:event.target.value})}
            /><br />
            <input className= "input" type="password" placeholder="Enter a Password"
            
            value={data.password}
            onChange={(event)=>setData({...data,password:event.target.value})}
            /><br />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login