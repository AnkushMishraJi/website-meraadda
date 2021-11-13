import React, { useEffect, useState } from "react";
import M from "materialize";
import { useLocation } from "react-router-dom";
const UserHotel = () => {
  const [hotelName, setHotelName] = useState();
  const [locationHotel, setLocationHotel] = useState();
  const [price, setPrice] = useState();
  const [nightPrice, setNightPrice] = useState();
  const [pic, setPic] = useState();

  const location = useLocation();
  useEffect(() => {
    fetch(location.pathname, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const smallCap = parseInt(data[0].roomSmallData.smallCapacity);
        const medCap = parseInt(data[0].roomMediumData.mediumCapacity);
        const largeCap = parseInt(data[0].roomLargeData.largeCapacity);
        const newTotal = parseInt(localStorage.getItem("totalPersons"));
        setHotelName(data[0].hotelName);
        setLocationHotel(data[0].location);
        if (newTotal <= smallCap) {
          setPrice(data[0].roomSmallData.smallPrice);
          setNightPrice(data[0].roomSmallData.smallNightPrice);
        } else if (newTotal <= medCap) {
          setPrice(data[0].roomMediumData.mediumPrice);
          setNightPrice(data[0].roomMediumData.mediumNightPrice);
        } else if (newTotal <= largeCap) {
          setPrice(data[0].roomLargeData.largePrice);
          setNightPrice(data[0].roomLargeData.largeNightPrice);
        }

        setPic(data[0].mainPicUrl);
      });
  }, []);

  return (
    <>
      <img src={pic} alt="hotel" />
      <h2>{hotelName}</h2>
      <h6>{locationHotel}</h6>
      <h4>Discaimer</h4>
      <h5>
        Bookings for time after 1800 hrs will fall in Night Slot therefore Night
        Price will be charged
      </h5>
      <div>
        <h4>Day Slot</h4>
        <h5>Price - Rs {price}</h5>
      </div>
      <div>
        <h4>Night Slot</h4>
        <h5>Price - Rs {nightPrice}</h5>
      </div>
      <a className="btn-floating btn-large waves-effect waves-light red">
        <i className="material-icons">+</i>
      </a>
      <a className="waves-effect waves-dark btn #64b5f6 blue lighten-2">
        Pay Rs. 3200
      </a>
    </>
  );
};

export default UserHotel;
