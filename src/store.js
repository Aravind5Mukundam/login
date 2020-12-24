import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import signinReducer from './reducer/userReducer';

const initialState = {
    signIn: {
      userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    }
}
const reducer = combineReducers({
    userSignin: signinReducer
})

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store