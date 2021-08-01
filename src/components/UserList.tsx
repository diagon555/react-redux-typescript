import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { fetchUsers } from '../actions/user'
import { useActions } from '../hooks/useActions'

const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector(state => state.user)
  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  console.log(loading, users)

  if (loading) {
    return <h1>Loading..</h1>
  }
  
  if (error) {
    return <h1>Error: { error }</h1>
  }
  
  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={ user.id }>{ user.name } ({ user.email })</li>
        ))}
      </ul>
    </div>
  )
}

export default  UserList
