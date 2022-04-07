import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todo-context';

function App() {
  // const todos = [new Todo('Learn React'), new Todo('Learn TypeScript')];

  return (
    <TodosContextProvider>
      {/* <NewTodo onAddTodo={addTodoHandler} /> */}
      {/* <Todos items={todos} onRemoveTodo={removeTodoHandler} /> */}
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
