import { useState , useEffect } from 'react'
import { Box, Checkbox, Text } from '@chakra-ui/react'
import { toggleTodo } from "../redux/actions"
import { useDispatch } from "react-redux"

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [checked , setChecked] = useState(false)

  const handleChecked = () => dispatch(toggleTodo(todo.id))

  useEffect(() => {
    setChecked(todo.completed)
  }, [todo]);

  return (
    <Box mb={1} bgColor="lightblue" p={2}>
      <Checkbox onChange={handleChecked} colorScheme="teal" isChecked={checked}>
        <Text as={todo.completed && "del"}>{todo.content}</Text>
      </Checkbox>
    </Box>
  )
}

export default Todo
