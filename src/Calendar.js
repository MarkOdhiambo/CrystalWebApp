import React, { useState } from 'react';
import './Calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const List=[
  {id:0,todo:"Get some shopping"},
  {id:1,todo:"Do the antennas assignment"},
  {id:2,todo:"Go to the bookshop"},
  {id:3,todo:"Pick up Mark from school"}
]
const CalendarList =(props)=>{
 
  return(
    <div style={{marginLeft:'50px',marginTop:'40px'}}>
      {props.calitems.map(item=><CalItem {...item} />)}
    </div>
  )
}
const CalItem =(props)=>{
  return(
    <React.Fragment key={props.id}>
    <p style={{backgroundColor:'rgb(184, 236, 236)',width:'60vh',height:'3vh',border:'solid #1781b4',borderRadius:'5px',paddingLeft:'5px',marginLeft:"150px"}}>{props.todo} </p>
    </React.Fragment >
  )
}

function CalendarSchedule() {
  const [value, setValue] = useState(new Date());
  function onChange(nextValue) {
    setValue(nextValue);
  }
  return (
    <div>
      <header className='headerCal'>Calendar</header>
      <div className='calendar'>
        <div style={{marginTop:"100px",marginLeft:"50px"}}>
        <Calendar onChange={onChange} value={value} />
        </div>
        <div>
          <header style={{marginLeft:"350px",fontWeight:"bold",fontSize:"20px"}}>{value.toDateString()}</header>
          <CalendarList calitems={List}/>
        </div>
      </div>
    </div>
  )
}

export default CalendarSchedule