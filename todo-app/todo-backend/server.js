const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const dotenv = require('dotenv'); 
const { createTodo, getTodo, updateTodo, deleteTodo } = require('./controllers/todoControllers'); // Import controllers 

dotenv.config(); // Load environment variables 

const app = express(); 
const port = process.env.PORT || 8000; // Use PORT from .env file 
const connectionURL = process.env.MONGO_URI; // MongoDB connection string from .env 

app.use(cors()); 
app.use(express.json()); // Parse JSON bodies 

// API Endpoints
app.post('/todo', createTodo); // Create a new todo
app.get('/todo', getTodo); // Get all todos
app.put('/todo/:id', updateTodo); // Update a todo
app.delete('/todo/:id', deleteTodo); // Delete a todo

// Connect to MongoDB and start the server 
mongoose.connect(connectionURL) 
    .then(() => { 
        app.listen(port, () => { 
            console.log(`Server running on port: ${port}`); 
        }); 
    }) 
    .catch(err => { 
        console.error('Error connecting to MongoDB:', err); 
    });