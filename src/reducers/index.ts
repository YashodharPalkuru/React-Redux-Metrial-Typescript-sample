import { combineReducers } from 'redux'
import signinReducer from './signinReducer'
import signupReducer from './signupReducer'

export default combineReducers({
  signIn: signinReducer,
  signUp: signupReducer
})