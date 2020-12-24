import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {signout} from '../actions/userActions'
function Home(){
    const history = useHistory()
    const login = useSelector(state => state.userSignin)
    const {userInfo} = login
    const dispatch = useDispatch()
    const logout = (event) => {
        event.preventDefault()
        dispatch(signout())
        history.push('/login')
    }
    return(
        <div>
            {userInfo ? (
            <button
            onClick={logout}
            >Logout-{userInfo.data.name}</button>
            ) : (
                <Link to="/">Welcome Guest</Link>
            )}
            <h1>Home</h1>
        </div>
    )
}
export default Home