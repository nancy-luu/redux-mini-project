import React from 'react'
import { Box } from '@chakra-ui/react'
import { useSelector } from "react-redux"
import Todo from './Todo'
 
const TodoList = () => {
  const { todos } = useSelector(state => state);

  return (
    <Box my={3}>
      {todos.todos.length ? todos.todos.map((todo) => (
        <Todo key={`todo-${todo.id}`} todo={todo}/>
      )) : <Box textAlign="center">No Todos yay!</Box>}
    </Box>
  )
}

export default TodoList
