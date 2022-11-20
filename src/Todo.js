import React from 'react';
import './Todo.css';

const List=[
  {id:0,todo:"Get some shopping"},
  {id:1,todo:"Do the antennas assignment"},
  {id:2,todo:"Go to the bookshop"},
  {id:3,todo:"Pick up Mark from school"}
]

const TodoList =(props)=>{
 
  return(
    <div style={{marginLeft:'50px',marginTop:'40px'}}>
      {props.list.map(todo=><TodoItem {...todo} />)}
    </div>
  )
}
const TodoItem =(props)=>{
  return(
    <React.Fragment key={props.id}>
    <p style={{backgroundColor:'rgb(184, 236, 236)',width:'100vh',height:'3vh',border:'solid #1781b4',borderRadius:'5px',paddingLeft:'5px'}}>{props.todo} </p>
    </React.Fragment >
  )
}

function Todo() {
  return (  
    <div >
      <header className='headerTodo'>Todo list</header>
      <TodoList list={List}/>
    </div>

  )
}

export default Todo