import React, {useState} from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import  bg from '../images/frontpagebg.png';
import logo from "../images/airbnb.png";
import { ConnectButton, Select, DatePicker, Input, Icon } from "web3uikit";

const Home = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [destination, setDestination] = useState("New York");
  const [guest, seGuests] = useState(2);

  const opts = [
    {
      id: "ny",
      label: "New York",
    },
    {
      id: "la",
      label: "Los Angeles",
    },
    {
      id: "chicago",
      label: "Chicago",
    }
  ]
  return (
    <>
      <div
        className="container"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="containerGradient"></div>
      </div>
      <div className="topBanner">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="tabs">
          <div className="selected">Places To Stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            Location
            <Select 
              defaultOptionIndex={0}
              options={opts}
              onChange={(data) => {
                setDestination(data.label);
              }}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check In
            <DatePicker
              id="checkIn"
              onChange={(data) => {
                setCheckIn(data.date);
              }}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Check Out
            <DatePicker 
              id="checkOut"
              onChange={(data) => { setCheckOut(data.date); }}
            />
          </div>
          <div className="vl" />
          <div className="inputs">
            Guests
            <Input
            value={2}
            name="AddGuests"
            type="number"
            onChange={(event) => { seGuests(Number(event.target.value)); }}
            />
          </div>
          <Link to={"/rentals"} state={{
            checkIn: checkIn,
            checkOut: checkOut,
            destination: destination,
            guest: guest,
          }}></Link>
          <div className="searchButton">
            <Icon fill="#ffffff" size={24} svg="search"/>
          </div>
          <div className="vl" />
        </div>
      </div>
    </>
  );
};

export default Home;
