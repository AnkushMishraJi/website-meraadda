import React, { useState, useEffect } from "react";
import sideNav from "./BpageComponent/BpageNavbar";
import { Link } from "react-router-dom";

const HotelDashboard = () => {
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

  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    const hotelEmail = localStorage.getItem("email");
    fetch(`/hotelBooking?hotelEmail=${hotelEmail}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyBookings(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="wrapper">
      <div className="left-sidebar">
        <Link
          to="/blocker"
          className="waves-effect waves-light btn #e53935 red darken-1"
        >
          Block/Unblock
        </Link>
        <Link to="/BuploadPhoto" className="waves-effect waves-light btn">
          Upload Photos
        </Link>
        <a className="waves-effect waves-light btn">Sign out</a>
      </div>

      <div className="center-bar">
        {myBookings.map((item) => {
          return (
            <div className="booking-box">
              <p>id: {item._id}</p>
              <p>Name: {item.name}</p>
              <p>
                Persons: {item.boys} boys, {item.girls} girls
              </p>
              <p>Date of check in: {item.checkIn}</p>
              <p>Slot: Day</p>
            </div>
          );
        })}
      </div>

      <div className="right-sidebar">
        <h4>Block/unblock Rooms</h4>
        <button>Small Room</button>
        <button>Medium Room</button>
        <button>Large Room</button>
      </div>
    </div>
  );
};

export default HotelDashboard;
