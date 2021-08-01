import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const TodoList: React.FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(state => state.todo)
  const { fetchTodos, setTodoPage } = useActions()
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1>Loading..</h1>
  }

  if (error) {
    return <h1>Error: { error }</h1>
  }

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={ todo.id }>{ todo.id } - { todo.title }</li>
        ))}
      </ul>
      <div
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {pages.map(p => (
          <div
            style={{
              border: p === page ? '2px solid green' : '1px solid grey',
              margin: '4px',
              padding: '2px'
            }}
            onClick={() => setTodoPage(p)}
          >
            { p }
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodoList
