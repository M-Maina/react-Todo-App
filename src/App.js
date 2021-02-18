import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import { Button, Input, FormControl, InputLabel} from '@material-ui/core';
import db from './firebase';
import firebase from  'firebase'; 

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads,we need to listen to the database and fetch new todos as they get added/removed

   useEffect(() => {
     db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
       setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
     })

   }, []);



  const addTodo = (event) =>{
    event.preventDefault(); //will stop the refresh when we submit the form
    
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);// sets new added todos the old list 
    setInput(''); //clears the input after clicking add Tod ar enter
  }
  console.log(input)
    return (
    <div className="App">
      <h1>Lets code a Todo App,lest do it</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
        Add Todo
        </Button>
        {/* <button type='submit' onClick={addTodo}>Add Todo</button> */}
      </form>
      <ul>
        {todos.map(todo =>( 
          <Todo todo={todo}/>
        ))}
        {/* <li>{todo}</li> */}
      </ul>
    </div>
  );
}

export default App;
