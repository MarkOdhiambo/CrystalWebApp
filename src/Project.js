import React from 'react';
import './Project.css';

const projectList=[
  {id:0,name:"Voice controlled assistant",task:["Wake word","Information extraction and structure","API setup","API hosting"]},
  {id:1,name:"Exam revision",task:["Accounting","Control Engineering"]}
]

const ProjectList =(props)=>{
 
  return(
    <div style={{marginLeft:'50px',marginTop:'40px'}}>
      {props.testData.map(notes=><ProjectItem {...notes}/>)}
    </div>
  )
}
const ProjectItem =(props)=>{
  return(
    <React.Fragment key={props.id}>
    <h style={{fontSize:'20px',fontWeight:'bold'}}>{props.name} </h>
    {props.task.map(taskItem=><p style={{backgroundColor:'rgb(184, 236, 236)',width:'100vh',height:'3vh',border:'solid #1781b4',borderRadius:'5px',paddingLeft:'5px'}}>{taskItem}</p>)}
    </React.Fragment >
  )
}

function Project() {
  return (
    <div>
      <header className='headerProject'>Project</header>
      <ProjectList testData={projectList}/>
    </div>
  )
}

export default Project