import React, { useState } from 'react';

const TodoApp = () => {
  // Initial state with some todos
  const [todos, setTodos] = useState([
    { id: 1, task: 'Buy groceries', isEditing: false },
    { id: 2, task: 'Walk the dog', isEditing: false },
  ]);

  // State for tracking the current edit
  const [currentEdit, setCurrentEdit] = useState('');

  // Handle the click of the "Edit" button
  const handleEditClick = (id, task) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
    setCurrentEdit(task);
  };

  // Handle saving the edited task
  const handleSaveClick = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, task: currentEdit, isEditing: false } : todo
      )
    );
  };

  // Handle canceling the edit
  const handleCancelClick = id => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, isEditing: false } : todo
      )
    );
  };

  // Handle input changes
  const handleInputChange = e => {
    setCurrentEdit(e.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.isEditing ? (
              <>
                <input
                  type="text"
                  value={currentEdit}
                  onChange={handleInputChange}
                />
                <button onClick={() => handleSaveClick(todo.id)}>Save</button>
                <button onClick={() => handleCancelClick(todo.id)}>Cancel</button>
              </>
            ) : (
              <>
                {todo.task}
                <button onClick={() => handleEditClick(todo.id, todo.task)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
