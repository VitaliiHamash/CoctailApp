import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
  } from '../actions/userTypes'
  
  const initialState = {
    loading: false,
    users: [],
    error: ''
  }
  
  const listReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_USERS_SUCCESS:
        return {
          
          loading: false,
          users: state.users.concat(action.payload),
          error: '',
          refreshing: false
        }
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          
          error: action.payload
        }
      default: return state
    }
  }
  
  export default listReducer