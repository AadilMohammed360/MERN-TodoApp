import React, { useEffect, useState } from 'react'; 
import Form from '../Form'; 
import axios from '../../axios'; 

function Todo() { 
    const [input, setInput] = useState(''); 
    const [todos, setTodos] = useState([]); 

    const fetchData = async () => { 
        try { 
            const response = await axios.get('/todo'); 
            setTodos(response.data); 
        } catch (err) { 
            console.log(err.message); 
        } 
    }; 

    useEffect(() => { 
        fetchData(); 
    }, []); 

    const addTodo = async (newTodo) => { 
        if (newTodo.length === 0) return; 

        try { 
            await axios.post('/todo', { 
                text: newTodo, 
                completed: false, 
            }); 
            fetchData(); // Fetch updated todos after adding 
        } catch (err) { 
            console.error('Error adding todo:', err.message); 
        } 
    }; 

    const updateTodo = async (id, text, completed) => {
        try {
            await axios.put(`/todo/${id}`, { text, completed }); // Send PUT request to update todo
            fetchData(); // Fetch updated todos after updating
        } catch (err) {
            console.error('Error updating todo:', err.message);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`/todo/${id}`); // Send DELETE request to delete todo
            fetchData(); // Fetch updated todos after deletion
        } catch (err) {
            console.error('Error deleting todo:', err.message);
        }
    };

    return ( 
        <div> 
            <h3 className='fs-4 pb-2'>List of Todos</h3> 
            <Form 
                input={input} 
                setInput={setInput} 
                addTodo={addTodo}
            /> 
            <ul className='list-unstyled'> 
                {todos.map((todo) => ( 
                    <li key={todo._id} className='py-1'> 
                        {todo.text} - {todo.completed ? 'Completed' : 'Incomplete'} 
                        <button onClick={() => updateTodo(todo._id, todo.text, !todo.completed)} className='btn btn-warning btn-sm ms-2'>
                            {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
                        </button>
                        <button onClick={() => deleteTodo(todo._id)} className='btn btn-danger btn-sm ms-2'>Delete</button>
                    </li> 
                ))} 
            </ul> 
        </div> 
    ); 
} 

export default Todo; 