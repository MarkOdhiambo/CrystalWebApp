import React from 'react';
import './Activitylog.css';
import axios from 'axios';


const ActivityLogList =(props)=>{
 
  return(
    <div style={{marginLeft:'50px',marginTop:'40px'}}>
      {props.activity.map(log=><Log {...log} key={log.id} />)}
    </div>
  )
}
const Log =(props)=>{

  return(
    <React.Fragment >
    <p style={{backgroundColor:'#ecb8ec',width:'100vh',height:'3vh',border:'solid #9e6c91',borderRadius:'5px',paddingLeft:'5px'}}>{props.log} </p>
    </React.Fragment >
  )
}

function Activitylog() {
  const [log,setLog]=React.useState([])
  const baseURL="http://127.0.0.1:5000/log";

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setLog(response.data);
  //   });
  // }, []);
  axios.get(baseURL).then((response) => {
    setLog(response.data);
  });
  return (
    <div>
      <header className='headerLog'>Activity Log</header>
      <ActivityLogList activity={log}/>
    </div>
  )
}

export default Activitylog