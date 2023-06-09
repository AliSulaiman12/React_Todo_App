import React, { useState } from "react";
import { Alert, Button } from 'react-bootstrap';



const Home = () => {
    const [todos, setTodos] = useState(["First Todo"])
const [inputValue, setInputValue] = useState("")
const [editingIndex, setEditingIndex] = useState(-5);


const handleaddTodos = () => {
    setTodos([...todos, inputValue])
    setInputValue("")
}

const handleInput = (event) => {
    setInputValue(event.target.value)
}


const handleEditTodo = (index) => {
    setEditingIndex(index);
  }

  const handleSaveTodo = (index, newValue) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = newValue;
    setTodos(updatedTodos);
    setEditingIndex(-5);
  }

const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
}


return (
    <>
    <h1>Todo App</h1>
    <div>
        {inputValue === "" &&
        <Alert variant="danger">Please Type</Alert>}
    </div>
<div>
    <input type="text" onChange={handleInput} value={inputValue} />
    <Button disabled={inputValue === ""} variant="success" size="sm"
     onClick={handleaddTodos}>Add Todo</Button>
</div>
<div>
        {todos.map((todoItem, index) => (
          <div key={index}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={todoItem}
                  onChange={(e) => handleSaveTodo(index, e.target.value)}
                />
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => handleSaveTodo(index, todoItem)}
                >
                  Save
                </Button>
              </>
            ) : (
              <>
                <p>{todoItem}</p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleEditTodo(index)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteTodo(index)}
                >
                  Close
                </Button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Home
