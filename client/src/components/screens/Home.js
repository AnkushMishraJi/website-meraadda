import React, { useContext, useState } from "react";
import "../../App.css";
import { Container, DatePicker, TimePicker} from "react-materialize"; 

import M from "materialize"

const Home = () =>{

const [date,setDate] = useState(new Date());
const [time,setTime] = useState();
const [boys,setBoys] = useState(0);
const [girls,setGirls] =useState(0);
    return (
    <>
    <div className="mycard card">
      <div className="auth-card input-field">
        <h5>Party Rooms at great prices</h5>
        <Container>
        <DatePicker
          selected={date}
          placeholder="date of birth"
          onChange={(date) => {
            setDate(date);
          }}
          placeholder="Enter Date"
          value={date.toDateString()}
        />
      </Container>  
        <Container>
            <p>Select Time</p>
        <TimePicker
          selected={time}
          placeholder="Select Time"
          onChange={() => {
            setTime(time);                     
          }}
          placeholder="Select Time"
        />
      </Container> 
        <input
          type="number"
          placeholder="Boys"
          value={boys}
          onChange={
            (e)=>{setBoys(parseInt(e.target.value))
            }
          }
          min="0"
          max="99"
        />
        <input
          type="number"
          placeholder="Girls"
          value={girls}
          onChange={
            (e)=>{
              setGirls(parseInt(e.target.value))
              console.log(girls);
            } 
          }
          min="0"
          max="99"
        />
        <h6>Total No. Of. People = {boys+girls}</h6>
        <button
          className="btn waves-effect waves-light #1e88e5 blue darken-1"
        >
          Search
        </button>
        
        </div>
    </div>
    </>
    )
}

export default Home