import React, { useState,useRef } from "react";
import { toast } from "react-toastify";

const Todolist = () => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
          <div className="flex mb-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task"
              className="flex-grow p-2 border border-gray-300 rounded-l-md"
            />
            <button
              onClick={addTodo}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <ul className="space-y-2 h-13">
            {todos.map((todo, index) => (
              <div className="todo flex justify-between border rounded-md items-center">
                <li
                  key={index}
                  className={`flex justify-between items-center px-2 w-[50%] ${
                    todo.completed ? "line-through text-gray-400" : "text-black"
                  }`}
                >
                  <span
                    className="cursor-pointer"
                    onClick={() => toggleComplete(index)}
                  >
                    {todo.text}
                  </span>
                </li>
                <div className="actions flex w-[50%] justify-end gap-3">
                <button
                  title={"Edit task"}
                  onClick={(e)=>{
                    editTodo(todo,index);
                  }}
                  className={`bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded-md h-auto w-[40%]`}
                >
                  Edit
                </button>
                <button
                  disabled={todo.completed?false:true}
                  title={!todo.completed?"complate task":"delete task"}
                  onClick={(e)=>{
                    if(todo.completed){
                        deleteTodo(index)
                        toast.success(`"${todo.text}" Todo is deleted.`);
                    }
                    else{
                        toast.warn(`"${todo.text}" Todo is not completed.`);
                    }
                  }}
                  className={`${!todo.completed ? "bg-gray-400 text-black opacity-50 cursor-not-allowed": "bg-red-500 hover:bg-red-600 text-white"}  px-2 rounded-md h-auto w-[40%]`}
                >
                  Delete
                </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};


export default Todolist;
