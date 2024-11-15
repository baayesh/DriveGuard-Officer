import "./Fine.css";
import HeaderBox from "../../components/objects/HeaderBox/HeaderBox";
import TabNavigation from "../../components/navbar/TabNavigation";
import ProceedPopUp from "../../components/objects/ProceedPopUp/ProceedPopUp";
import React, { useState } from "react";
import { createFine } from "../../middleware/data/dataApis";
import { ToastContainer, toast, Bounce } from "react-toastify";

// Offense List
const options = [
  { value: "", label: "Select offense type..." },
  { value: 1, label: "Offense 1" },
  { value: 2, label: "Offenses 2" },
  { value: 3, label: "Offenses 3" },
  { value: 4, label: "Offense 1" },
  { value: 5, label: "Offenses 2" },
  { value: 6, label: "Offenses 3" },
];

const officerId = localStorage.getItem("officerId");

const Fine = ({ inputOffenderID, onClearOffenderDLN }) => {
  //Offender ID/ DLN
  const [offenderID, setOffenderID] = useState(inputOffenderID);

  // Select Offenses
  const [selectedOffence, setSelectedOffence] = useState(options[0].value);

  //set value of fine
  const [fineValue, setfineValue] = useState("");

  //Set Witness Officer's ID
  const [witnessOfficerID, setWitnessOfficerID] = useState();

  // Handle Proceed Popup
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleProceedButton = async() => {
    const loading = toast.loading("Creating Offence");
    setShowModal(false);
    handleClearContentButton();

    // call to create fine backend funtion
    try{
        const response = await createFine (officerId, offenderID, selectedOffence, witnessOfficerID );
        if(response.status === 201){
          toast.update(loading, {
            render: "Offence Created Successfully",
            type: "success",
            isLoading: false,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }else{
          toast.update(loading, {
            render: "Error creating offense",
            type: "error",
            isLoading: false,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }

    }catch(err){
        console.error("error calling backend funtion: ", err);
    }

  };

  // Handle Clear Content Button
  const handleClearContentButton = () => {
    setOffenderID(""); // Clear Offender ID/ DLN
    setSelectedOffence(options[0].value); // Reset to default option
    setWitnessOfficerID(""); // Clear Witness Officer's ID
    setfineValue(""); // Clear Fine Value

    onClearOffenderDLN(); // Call the function to clear the offender DLN in App.js
  };


  return (
    <div className="container">
      <HeaderBox headertext={"Fine"} />
      <div className="page-content-fine">
        <div className="fine-box-content">
          <div className="fine-box-content-inputs">
            <h3>Licence Number</h3>
            <input
              type="text"
              value={offenderID}
              onChange={(e) => setOffenderID(e.target.value)}
              placeholder="Driving License Number"
            />
            <h3>Type of offence</h3>
            <select
              value={selectedOffence}
              onChange={(e) => setSelectedOffence(e.target.value)}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <h3>Witness Officer's ID</h3>
            <input
              type="text"
              value={witnessOfficerID}
              onChange={(e) => setWitnessOfficerID(e.target.value)}
              placeholder="Witness Officer's ID"
            />
            <div className="btn-row">
              <button
                className="proceed-button-make-fine"
                onClick={handleOpenModal}
              >
                Proceed
              </button>
              <button
                className="clear-button-make-fine"
                onClick={handleClearContentButton}
              >
                Clear All
              </button>
            </div>
            <ProceedPopUp
              show={showModal}
              title={"Fine on Offender"}
              onClose={handleCloseModal}
              onProceed={handleProceedButton}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
      <TabNavigation bgfine={"rgb(10, 55, 202)"} />
    </div>
  );
};

export default Fine;
