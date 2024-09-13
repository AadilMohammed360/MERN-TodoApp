// todo-frontend/src/App.js 
import React from 'react'; 
import './App.css'; 
import Todo from './components/Todo'; 


function App() { 
  const Appstyle = {
    width: '500px',
    textAlign: 'center',
  };
  return ( 
    <div className="App bg-info position-absolute top-50 start-50 translate-middle py-5 px-2 rounded-4" style={Appstyle}> 
      <h1 className='pb-3 fs-2' >Welcome to the Todo App</h1> 
      <Todo /> 
    </div> 
  ); 
} 
 
export default App; 
