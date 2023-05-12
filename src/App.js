import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);

  // Add new todo button func
  const handleAddTodo = () => {
    if (!newTodo) return;
    setTodos([...todos,{text: newTodo, completed: false}]);
    setNewTodo('');
  }

   // /Delete button func
   const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  //toggle the checkbox opposite of its property or value func
  const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }
 
  //Show or hide completed list Button 
  const handleFilter = () => {
    setShowCompleted(!showCompleted);
  }

  //filter and sort out the completed todo list func
const filteredTodos = todos.sort((a, b) => a.completed - b.completed).filter(todo => showCompleted || !todo.completed);

const checkedTodosCount = todos.filter((t) => t.completed).length;

  return (
    <div>
      <h1>Todo List</h1>

      <div>
        {/* Textbox */}
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        &nbsp;&nbsp;&nbsp;

        {/* Add A Task */}
        <button onClick={handleAddTodo}>Add Todo</button>
        &nbsp;&nbsp;&nbsp;
        
        {/* Clear Checklist */}
        <button onClick={() => {setTodos([]);}}>Clear Todos</button>
        &nbsp;&nbsp;&nbsp;
        
        {/* Show/Hide completed task*/}
        <button onClick={handleFilter}>
          {showCompleted ? 'Hide Completed Tasks' : 'Show Completed Tasks'}
        </button>
      </div>
      <p>Checked Todos Count: {checkedTodosCount}</p>
      <div>
        {/* Todo Checklist */}
      <ul>
        {filteredTodos.map((todo, i) => (
          <div  key={i}>
            <input 
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(i)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            &nbsp;&nbsp;&nbsp;

            {/* Delete button */}
            <button onClick={() => handleDelete(i)}>X</button>
          </div>
        ))}
      </ul>
      </div>
      
    </div>
  );
}

export default TodoList;