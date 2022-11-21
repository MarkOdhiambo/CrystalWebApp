import React from 'react';
import './Activitylog.css';
import axios from 'axios';

const LogList=[
  {id:0,log:"Wake up at 1000"},
  {id:1,log:"Accessed todo list"},
  {id:2,log:"Added item to the todo list"},
  {id:3,log:"Exit the assistant at 1300"}
]

const ActivityLogList =(props)=>{
 
  return(
    <div style={{marginLeft:'50px',marginTop:'40px'}}>
      {props.activity.map(log=><Log {...log} />)}
    </div>
  )
}
const Log =(props)=>{

  return(
    <React.Fragment key={props.id}>
    <p style={{backgroundColor:'#ecb8ec',width:'100vh',height:'3vh',border:'solid #9e6c91',borderRadius:'5px',paddingLeft:'5px'}}>{props.log} </p>
    </React.Fragment >
  )
}

function Activitylog() {
  const [log,setLog]=React.useState(null)
  const baseURL="http://127.0.0.1:5000/log";
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLog(response.data);
    });
  }, []);
  return (
    <div>
      <header className='headerLog'>Activity Log</header>
      <ActivityLogList activity={LogList}/>
    </div>
  )
}

export default Activitylog