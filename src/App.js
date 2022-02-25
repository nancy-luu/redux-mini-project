import { Container, Heading } from '@chakra-ui/react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import VisibilityFilter from './components/VisibilityFilter'

function App() {
  return (
    <div className="App">
      <Container maxW="container.sm" bg="white">
        <Heading my="4">To Do List</Heading>
        <AddTodo />
        <TodoList />
        <VisibilityFilter/>
      </Container>
    </div>
  );
}

export default App;
