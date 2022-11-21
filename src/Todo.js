import React,{ useState, useEffect} from 'react';
import './Todo.css';
import axios from 'axios';

const List=[
  {id:0,task:"Get some shopping"},
  {id:1,task:"Do the antennas assignment"},
  {id:2,task:"Go to the bookshop"},
  {id:3,task:"Pick up Mark from school"}
]
const TodoForm =(props)=>{
  const handleChange =(event)=>{
    props.curr(event.target.value)
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    props.add()
    props.curr('')
  }
  return(
    <form onSubmit={handleSubmit} style={{marginLeft:'50px',marginTop:'40px'}}>
      <input type='text' 
              value={props.val} 
              onChange={handleChange} 
              placeholder="Add to todo list"
              style={{height:"3.5vh",width:"85vh"}}>
      </input>
      <input type='submit'style={{height:"4.5vh" ,width:"9vh",marginLeft:"40px"}}/>
    </form>
  )
}

const TodoList =(props)=>{
 
  return(
    <div style={{marginLeft:'50px',marginTop:'40px'}}>
      {props.list.map(todo=><TodoItem {...todo} reFunc={props.handleDelete}/>)}
    </div>
  )
}
const TodoItem =(props)=>{
  const removeNote=()=>{
    //console.log(props.id)
    props.reFunc(props.task)
    // console.log(props.notes)
  }
  return(
    <React.Fragment key={props.id}>
    
    <p style={{backgroundColor:'rgb(184, 236, 236)',width:'100vh',height:'3vh',border:'solid #1781b4',borderRadius:'5px',paddingLeft:'5px'}}>
      {props.task} 
      <button onClick={removeNote} style={{position:'absolute',right:"0px",marginRight:"25%"}}>MARK COMPLETED</button>
    </p>
    </React.Fragment >
  )
}
// async function getAPI(){
//   const resp= await axios.get(`http://127.0.0.1:5000/todos`);
//   console.log(resp)
// }

function Todo() {
  const [list,setList] = useState(null)
  const [currNote,setCurr]=useState('')
  const baseURL="http://127.0.0.1:5000/todos";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setList(response.data);
      console.log(list)
    });
  }, );
  const addNote=()=>{
    //add note to the api
  }
  const controllCurr=(values)=>{
    setCurr(values)
  }
  const removeList=(val)=>{
    //remove notes from api
  }
  return (  
    <div >
      <header className='headerTodo'>Todo list</header>
      <TodoForm curr={controllCurr} add={addNote} val={currNote}/>
      <TodoList list={List} handleDelete={removeList}/>
    </div>

  )
}

export default Todo