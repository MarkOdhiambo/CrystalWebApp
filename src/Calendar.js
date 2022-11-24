import React, { useState, useEffect } from 'react';
import './Calendar.css';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarList =(props)=>{
 
  return(
    <div style={{marginLeft:'50px',marginTop:'40px'}}>
      {props.calitems.map((item)=><p style={{backgroundColor:'rgb(184, 236, 236)',width:'60vh',height:'3vh',border:'solid #1781b4',borderRadius:'5px',paddingLeft:'5px',marginLeft:"150px"}}>{item} </p>)}
    </div>
  )
}

function CalendarSchedule() {
  const [list,setList] = useState([]);
  //const [date,setDate] = useState('');
  const [value, setValue] = useState(new Date());
  function onChange(nextValue) {
    setValue(nextValue);
  }
    //Conversion of date to string value to interact with the api
    var queryDate=`${value.getFullYear()}-${value.getMonth()+1}-${value.getDate()}`
    //console.log("This is the query date "+queryDate)
    //console.log("This is the set date "+date)
    var baseURL=`http://127.0.0.1:5000/remainder/${queryDate}`;
    // useEffect(() => {
    //   axios.get(baseURL).then((response) => {
    //     setList(response.data);
    //     console.log(list);
    //   });
    // }, );
    axios.get(baseURL).then((response) => {
      setList(response.data);
    });
  
  return (
    <div>
      <header className='headerCal'>Calendar</header>
      <div className='calendar'>
        <div style={{marginTop:"100px",marginLeft:"50px"}}>
        <Calendar onChange={onChange} />
        </div>
        <div>
          <header style={{marginLeft:"350px",fontWeight:"bold",fontSize:"20px"}}>{value.toDateString()}</header>
          <CalendarList calitems={list}/>
        </div>
      </div>
    </div>
  )
}

export default CalendarSchedule