import React, { useState,useEffect } from 'react';
import './App.css';
import Form from "./Components/Forms.js";
import TodoList from "./Components/TodoList.js";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filteredTodosHandler();  
  }, [todos, status]);

  const filteredTodosHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed===true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed===false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>Todo List</header>  
      <Form inputText={inputText} 
            setInputText={setInputText} 
            todos={todos} 
            setTodos={setTodos}
            setStatus={setStatus} />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
