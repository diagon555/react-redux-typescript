export interface UserState {
  users: any[]
  loading: boolean
  error: null | string
}

export enum UserActionsTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}
interface FetchUserAction {
  type: UserActionsTypes.FETCH_USERS
}
interface FetchUserSuccessAction {
  type: UserActionsTypes.FETCH_USERS_SUCCESS
  payload: any[]
}
interface FetchUserErrorAction {
  type: UserActionsTypes.FETCH_USERS_ERROR
  payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction