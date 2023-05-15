import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  // Add new todo button func
  const handleAddTodo = () => {
    if (!newTodo) return;
    setTodos([...todos,{id: new Date().getTime(), text: newTodo, checked: false}]);
    setNewTodo('');
  }

  //Filter the list
  const onCheckedChanged = (id, checked) => {
    setTodos((todos) =>
      todos.map((t) => (t.id === id ? { ...t, checked } : t))
    );
  };  

 
  //Show or hide completed list Button 
  const btnShow = () => {
    setShowCompleted(false);
  };
  const btnHide = () => {
    setShowCompleted(true);
  };
 
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
        {showCompleted ? (
        <button onClick={btnShow}>Show</button>
      ) : (
        <button onClick={btnHide}>Hide</button>
      )}
      </div>
      <p>Checked Todos Count: {checkedTodosCount}</p>
      <div>
        {/* Todo Checklist */}
        <ul>
        {(showCompleted ? todos.filter((t) => t.checked !== true) : todos).map(
          (todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={(e) => {
                  onCheckedChanged(todo.id, !todo.checked);
                }}
              />
              <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>{todo.text}</span>
              &nbsp;&nbsp;&nbsp;
            
              

              {/* Todo delete button */}
              <button
                onClick={() => {
                  setTodos((todos) => todos.filter((t) => t.id !== todo.id));
                }}
              >
                x
              </button>
            </li>
          )
        )}
      </ul>
      </div>
      
    </div>
  );
}

export default TodoList;