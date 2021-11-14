import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
import { Container, DatePicker } from "react-materialize";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";

const Home = () => {
  const newdate = new Date();
  const history = useHistory();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [totalPersons, setTotalPersons] = useState(0);
  const [girls, setGirls] = useState(false);

  const searchFilter = () => {
    localStorage.setItem("totalPersons", totalPersons);
    localStorage.setItem("girls", girls);
    console.log(time.toLocaleTimeString());
    //console.log(isNightParty);
    console.log(time.toLocaleTimeString("en-US").includes("PM"));
    localStorage.setItem("time", time.toLocaleTimeString("en-US"));
    if (time.getHours() >= 18 || time.getHours() < 8) {
      localStorage.setItem("isNightParty", true);
    } else {
      localStorage.setItem("isNightParty", false);
    }

    history.push("/hotelList");
  };

  return (
    <>
      <div className="mycard card">
        <div className="auth-card input-field">
          <h5>Party Rooms at great prices</h5>
          <Container>
            <DatePicker
              selected={date}
              placeholder="date of party"
              onChange={(date) => {
                var dateWIthoutTime = new Date(date);
                setDate(
                  new Date(dateWIthoutTime.setHours(0, 0, 0, 0)).toDateString()
                );
              }}
              value={date}
              placeholder="Enter Date"
            />
          </Container>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Select Time"
              value={time}
              onChange={(time) => {
                setTime(time);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <input
            type="number"
            placeholder="Total Persons"
            value={totalPersons}
            onChange={(e) => {
              setTotalPersons(parseInt(e.target.value));
            }}
            min="0"
            max="99"
          />
          <div>
            <label>
              <input
                type="checkbox"
                onClick={(e) => {
                  setGirls(!girls);
                  console.log(girls);
                }}
              />
              <span>Ladies Included?</span>
            </label>
          </div>
          <h6>Total No. Of. People = {totalPersons}</h6>
          <a className="waves-effect waves-light btn" onClick={searchFilter}>
            Submit
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
