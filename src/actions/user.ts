import { UserAction, UserActionsTypes } from '../types/user'
import { Dispatch } from 'redux'
import axios from 'axios'

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionsTypes.FETCH_USERS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      await setTimeout(() => {
        dispatch({ type: UserActionsTypes.FETCH_USERS_SUCCESS, payload: response.data} )
      }, 1000)

    } catch (e) {
      dispatch({ type: UserActionsTypes.FETCH_USERS_ERROR, payload: 'Error happened' })
    }
  }
}