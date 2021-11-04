import React, {useState,useEffect} from "react";
import DatePicker from "react-multi-date-picker";

const HotelBlocker = ()=>{
    const [isBlockedOn, setIsBlockedOn] = useState([]);
    const email = localStorage.getItem("email");
    useEffect(()=>{
        fetch(`getBlockedDates?email=${email}`,{
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            setIsBlockedOn(data[0].isBlockedOn);
            console.log(data[0].isBlockedOn);
        })

    },[]);
    
    const Block = ()=>{
        
        fetch("/blockUnblock",{
            method: 'post',
            headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             email,
             isBlockedOn
           }),
         })
         .then((res)=>res.json())
         .then((data)=>{
             console.log(data);
         })
    }
    
    
    return(
        <>
        <DatePicker multiple value={isBlockedOn} onChange={setIsBlockedOn}/>
        <botton className="btn waves-effect waves-light #1e88e5 blue darken-1" onClick={Block}>Submit</botton>
        </>
        )
}

export default HotelBlocker;
