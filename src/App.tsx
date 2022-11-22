import ErrorBoundary from './components/ErrorBoundary'
import React, { useState,Suspense } from 'react';
import './App.css';
const NewTodos = React.lazy(()=>import('./components/NewTodos'))
const Todos = React.lazy(()=>import('./components/Todos'))

type todosModel = string[];
function App() {
  const [todos, setTodos] = useState<todosModel>({});
  const addTodoHandler = (todoText: string) => {
    console.log(todoText);
    setTodos([...todos, todoText]);
  };

  const deleteTodoHandler = (todoText: string) => {
    const filteredState = todos.filter((item) => item !== todoText);
    setTodos(filteredState);
  };
  return (
      <>
      <ErrorBoundary>
    <div className="App">
      <Suspense fallback={<p>Loading.....</p>}>
        <NewTodos onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
      </Suspense>
    </div>
      </ErrorBoundary>

      </>
  );
}

export default App;
