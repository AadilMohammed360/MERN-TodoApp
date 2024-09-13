import React from 'react'; 

function Form({ input, setInput, addTodo, currentTodo, setCurrentTodo }) { 
    const handleSubmit = (e) => { 
        e.preventDefault(); // Prevent default form submission 
        if (currentTodo) {
            // If editing an existing todo
            addTodo(currentTodo._id, input, currentTodo.completed);
            setCurrentTodo(null); // Reset current todo after editing
        } else {
            addTodo(input); // Call addTodo with the current input
        }
        setInput(''); // Clear the input field after submission
    }; 

    return ( 
        <form onSubmit={handleSubmit} className='w-100'> 
            <div className='row justify-content-center align-items-center g-3 gap-sm-0 px-3'>
                <div className="col-12 col-sm-9 mx-auto ps-3 mb-3">
                    <input 
                        type="text" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder="Add a new todo"
                        className='form-control ms-auto'                
                    /> 
                </div>
                <div className="col-12 col-sm-3 mb-3">
                    <button type="submit" className='btn btn-primary'>Add Todo</button> 
                </div>
            </div>
        </form> 
    ); 
} 

export default Form; 