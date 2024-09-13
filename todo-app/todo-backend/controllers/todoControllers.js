const Todo = require('../dbTodo'); // Import the Todo model 

// Controller to create a new todo  
const createTodo = async (req, res) => { 
    const { text } = req.body; 
    try { 
        const newTodo = await Todo.create({ text, completed: false }); 
        res.status(201).json(newTodo); 
    } catch (err) { 
        res.status(500).json({ error: err.message }); 
    } 
}; 

// Controller to get all todos 
const getTodo = async (req, res) => { 
    try { 
        const todos = await Todo.find(); 
        res.status(200).json(todos); 
    } catch (err) { 
        res.status(500).json({ error: err.message }); 
    } 
}; 

// Controller to update a todo 
const updateTodo = async (req, res) => {
    const { id } = req.params; // Get the todo ID from the request parameters
    const { text, completed } = req.body; // Get updated text and completed status from the request body
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { text, completed }, { new: true }); // Update the todo
        if (!updatedTodo) return res.status(404).json({ message: 'Todo not found' });
        res.status(200).json(updatedTodo); // Respond with the updated todo
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle errors
    }
};

// Controller to delete a todo 
const deleteTodo = async (req, res) => {
    const { id } = req.params; // Get the todo ID from the request parameters
    try {
        const deletedTodo = await Todo.findByIdAndDelete(id); // Delete the todo
        if (!deletedTodo) return res.status(404).json({ message: 'Todo not found' });
        res.status(204).send(); // Respond with no content
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handle errors
    }
};

module.exports = { createTodo, getTodo, updateTodo, deleteTodo }; // Export the functions