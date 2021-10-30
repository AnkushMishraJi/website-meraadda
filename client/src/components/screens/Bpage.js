import React from "react";
import sideNav from "./BpageComponent/BpageNavbar";


const HotelDashboard = ()=>{
 return (
    <div className="wrapper">

        <div className="left-sidebar">
            <h5>Edit Hotel</h5>
            <h5>Others</h5>
            <h6>Sign-out</h6>
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