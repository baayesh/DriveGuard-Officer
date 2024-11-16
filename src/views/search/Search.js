import "./Search.css";
import HeaderBox from "../../components/objects/HeaderBox/HeaderBox";
import TabNavigation from "../../components/navbar/TabNavigation";
import DisplayBox from "../../components/objects/DisplayBox/DisplayBox";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { getDriverData } from "../../middleware/data/dataApis";

const Search = ({ onHandleFine }) => {
  //DLN: Dirving License Number
  // Pass DLN from this to Fine
  const [inputOffenderDLN, setInputOffenderDLN] = useState("");
  //   data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState();
  const [houseNumber, setHouseNumber] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [nic,setNic] = useState("");
  const [offenseLevel, setOffenseLevel] = useState();

  //Offender details
  let OffenderDetails = "";

  //Handle: Search DLN Click
  // get driver data by licence number
  const handleSearchDLNClick = async () => {
    // Click event
    try {
      const response = await getDriverData(inputOffenderDLN);
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setAge(response.data.age);
      setHouseNumber(response.data.houseNumber);
      setStreetName(response.data.streetName);
      setCity(response.data.city);
      setNic(response.data.nic);
      setOffenseLevel(response.data.offenseLevel);
    } catch (err) {
      console.error("error fetching data: ", err);
    }
  };

  // Navigate to fining page
  const navigate = useNavigate();

  //Handle: Fine on Offernder Click
  const handleFineOnOffender = () => {
    onHandleFine(inputOffenderDLN);
    navigate("/Fine");
  };

  return (
    <div className="container">
      <HeaderBox headertext={"Search"} />
      <div className="page-content-search">
        <div className="search-box-content">
          <h2>Find Offender</h2>
          <div className="search-input">
            <input
              type="text"
              value={inputOffenderDLN}
              onChange={(e) => setInputOffenderDLN(e.target.value)}
              placeholder="Driving License Number"
            />
            <button onClick={handleSearchDLNClick}>Search</button>
          </div>
          <DisplayBox
            firstName={firstName}
            lastName={lastName}
            age={age}
            houseNumber={houseNumber}
            streetName={streetName}
            city={city}
            nic={nic}
            offenseLevel={offenseLevel}
          />
          <div className="fine-on-the-offender">
            <button onClick={handleFineOnOffender}>Fine on Offender</button>
          </div>
        </div>
      </div>
      <TabNavigation bgsearch={"rgb(10, 55, 202)"} />
    </div>
  );
};

export default Search;
