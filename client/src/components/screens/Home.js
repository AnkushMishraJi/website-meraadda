import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
import { Container, DatePicker } from "react-materialize";

const Home = () => {
  const newdate = new Date();
  const history = useHistory();
  const [date, setDate] = useState(newdate.toDateString());
  const [timeClock, setTimeClock] = useState([]);
  const [totalPersons, setTotalPersons] = useState(0);
  const [girls, setGirls] = useState(false);
  const [isNightParty, setIsNightParty] = useState(false);

  const searchFilter = () => {
    localStorage.setItem("date", date);
    localStorage.setItem("totalPersons", totalPersons);
    localStorage.setItem("girls", girls);
    localStorage.setItem("isNightParty", isNightParty);
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

          <input
            class="timepicker"
            placeholder="Enter time"
            value={timeClock}
            onChange={setTimeClock}
          />
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
