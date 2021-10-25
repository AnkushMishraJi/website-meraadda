import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

function Signup() {
  const history = useHistory();
  const [hotelName, setHotelName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [location, setLocation] = useState("");
  const [girlsWithBoys, setGirlsWithBoys] = useState(false);
  const [roomSmall, setRoomSmall] = useState({});
  const [roomMedium, setRoomMedium] = useState({});
  const [roomLarge, setRoomLarge] = useState({});


  //for checkboxes
  const [checkedRoomSmall, setCheckedRoomSmall] = useState(false);
  const [checkedRoomMedium, setCheckedRoomMedium] = useState(false);
  const [checkedRoomLarge, setCheckedRoomLarge] = useState(false);
  
 
  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      return M.toast({
        html: "Invalid Email",
        classes: "#d32f2f red darken-2",
      });
    }
    if (password != confirm) {
      return M.toast({
        html: "Passwords do not match",
        classes: "#d32f2f red darken-2",
      });
    }
    if (!hotelName || !email || !password || !confirm || !location){
      return M.toast({
        html: "Please enter all fields",
        classes: "#d32f2f red darken-2",
      });
    }
    console.log("btn press");
    fetch("/bsignup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        hotelName,
        location,
        girlsWithBoys,
        roomSmall,
        roomMedium,
        roomLarge
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#d32f2f red darken-2" });
        } else {
          M.toast({
            html: "Saved Successfuly",
            classes: "#43a047 green darken-1",
          });
          history.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mycard card">
      <div className="auth-card input-field">
        <h2>Business Sign-up</h2>
        <input
          type="text"
          placeholder="Hotel Name"
          value={hotelName}
          onChange={(e) => {
            setHotelName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(setPassword);
          }}
        />
        <input
          type="password"
          placeholder="confirm password"
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <div><label>
        <input type="checkbox" value={girlsWithBoys} onClick={(e)=>{setGirlsWithBoys(!girlsWithBoys)}} />
        <span>Are girls allowed with boys</span></label>


        <div><label>
        <input type="checkbox" value={checkedRoomSmall} onClick={(e)=>{setCheckedRoomSmall(!checkedRoomSmall)}} />
        <span>Small Room</span>
        {checkedRoomSmall ? (
          <div>
             <input
          type="text"
          placeholder="price for small room"
          value=""/>

          <input
          type="text"
          placeholder="upload pictures for small room"
          value=""/>

          <input
          type="text"
          placeholder="capacity of small room"
          value=""/>
          </div>
        
        
               ) : (<div></div>) }
               </label>
               </div>

      
        <div><label>
        <input type="checkbox" value={checkedRoomMedium} onClick={(e)=>{setCheckedRoomMedium(!checkedRoomMedium)}} />
        <span>Medium Room</span>
        {checkedRoomMedium ? (
          <div>
             <input
          type="text"
          placeholder="price for Medium Room"
          value=""/>

          <input
          type="text"
          placeholder="upload pictures for Medium Room"
          value=""/>

          <input
          type="text"
          placeholder="capacity of Medium Room"
          value=""/>
          </div>
        
        
               ) : (<div></div>) }
               </label>
               </div>


        <div><label>
        <input type="checkbox" value={checkedRoomLarge} onClick={(e)=>{setCheckedRoomLarge(!checkedRoomLarge)}} />
        <span>Large Room</span>
        {checkedRoomLarge ? (
          <div>
             <input
          type="text"
          placeholder="price for Large room"
          value=""/>

          <input
          type="text"
          placeholder="upload pictures for Large room"
          value=""/>

          <input
          type="text"
          placeholder="capacity of Large room"
          value=""/>
          </div>
        
        
               ) : (<div></div>) }
               </label>
               </div>
        

      </div>
        <button
          className="btn waves-effect waves-light #1e88e5 blue darken-1"
          onClick={(e)=>PostData()}
        >
          Sign Up
        </button>
        <h6>
          <Link to="/bsignin">Already have an account?</Link>
        </h6>
      </div>
    </div>
  );
}

export default Signup;
