import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

function Signup() {
  const history = useHistory();
  const [hotelName, setHotelName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [girlsWithBoys, setGirlsWithBoys] = useState("");
  const [roomSmall, setroomSmall] = useState("");
  

  

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
    console.log("btn press");
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
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
        <h2>Instagram</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        required/>
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
            console.log(setConfirm);
          }}
        />
        <button
          className="btn waves-effect waves-light #1e88e5 blue darken-1"
          onClick={(e) => {
            PostData();
          }}
        >
          Sign Up
        </button>
        <h6>
          <Link to="/signin">Already have an account?</Link>
        </h6>
      </div>
    </div>
  );
}

export default Signup;
