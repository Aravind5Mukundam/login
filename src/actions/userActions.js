import Axios from "axios"
import {SIGNIN_REQUEST,SIGNIN_SUCCESS,SIGNIN_ERROR, SIGNOUT} from './userTypes'

export const signin = (email,password) => async(dispatch) => {
    dispatch({
        type:SIGNIN_REQUEST,
        payload: {email,password}
    })
    try {
        const {data} = await Axios.post("https://production.yavtechnology.com/api/auth/login",{email,password})
        dispatch({
            type: SIGNIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    } catch(err){
        dispatch({
            type: SIGNIN_ERROR,
            payload: err.message
        })
    }
}
export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: SIGNOUT
    })
}