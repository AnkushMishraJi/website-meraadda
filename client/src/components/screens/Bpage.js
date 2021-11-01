import React, {useState,useEffect} from "react";
import sideNav from "./BpageComponent/BpageNavbar";


const HotelDashboard = ()=>{

//To refresh every minute
//   const [seconds, setSeconds] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   function toggle() {
//     setIsActive(!isActive);
//   }

//   function reset() {
//     setSeconds(0);
//     setIsActive(false);
//   }

//   useEffect(() => {
//     let interval = null;
//     if (isActive) {
//       interval = setInterval(() => {
//         setSeconds(seconds => seconds + 1);
//       }, 1000);
//     } else if (!isActive && seconds !== 0) {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isActive, seconds]);
//To refresh every minute

 

useEffect(()=>{
    
const hotelEmail = localStorage.getItem("email")
fetch(`/hotelBooking?hotelEmail=${hotelEmail}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
      .then((data) => {
          console.log(data)
      })
})


 return (
    <div className="wrapper">

        <div className="left-sidebar" >
            <a className="waves-effect waves-light btn #e53935 red darken-1">Block/Unblock Rooms</a>
            <a className="waves-effect waves-light btn" >Edit Hotel</a>
            <a className="waves-effect waves-light btn">Sign out</a>
        </div>

        <div className="center-bar">
            
            <div className ="booking-box">
                <p>Booking Id: #1234567</p> 
                <p>Name: Sarfaraz Hasan</p> 
                <p>Persons: 5 boys, 3 girls</p> 
                <p>Date of check in: 02/11/21</p> 
                <p>Time Duration - 02/11/21 20:00 - 03/11/21 10:00</p> 
            </div>

            <div className ="booking-box">
                <p>Booking Id: #1234567</p> 
                <p>Name: Sarfaraz Hasan</p> 
                <p>Persons: 5 boys, 3 girls</p> 
                <p>Date of check in: 02/11/21</p> 
                <p>Time Duration - 02/11/21 20:00 - 03/11/21 10:00</p> 
            </div>

            <div className ="booking-box">
                <p>Booking Id: #1234567</p> 
                <p>Name: Sarfaraz Hasan</p> 
                <p>Persons: 5 boys, 3 girls</p> 
                <p>Date of check in: 02/11/21</p> 
                <p>Time Duration - 02/11/21 20:00 - 03/11/21 10:00</p> 
            </div>

            <div className ="booking-box">
                <p>Booking Id: #1234567</p> 
                <p>Name: Sarfaraz Hasan</p> 
                <p>Persons: 5 boys, 3 girls</p> 
                <p>Date of check in: 02/11/21</p> 
                <p>Time Duration - 02/11/21 20:00 - 03/11/21 10:00</p> 
            </div>

            <div className ="booking-box">
                <p>Booking Id: #1234567</p> 
                <p>Name: Sarfaraz Hasan</p> 
                <p>Persons: 5 boys, 3 girls</p> 
                <p>Date of check in: 02/11/21</p> 
                <p>Time Duration - 02/11/21 20:00 - 03/11/21 10:00</p> 
            </div>

        </div>

        <div className="right-sidebar">
            <h4>Block/unblock Rooms</h4>
            <button>Small Room</button>
            <button>Medium Room</button>
            <button>Large Room</button>
        </div>

    </div>
    )
}

export default HotelDashboard