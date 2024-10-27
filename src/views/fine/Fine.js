import './Fine.css';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import TabNavigation from '../../components/navbar/TabNavigation';
import ProceedPopUp from '../../components/objects/ProceedPopUp/ProceedPopUp';
import React, { useState } from 'react';

// Offense List
const options = [
    { value: '', label: 'Select offense type...' },
    { value: 'Offense 1', label: 'Offense 1' },
    { value: 'Offenses 2', label: 'Offenses 2' },
    { value: 'Offenses 3', label: 'Offenses 3' },
];

const Fine = ({ inputOffenderID }) => {

    //Offender ID/ DLN
    const [offenderID, setOffenderID] = useState(inputOffenderID);

    // Select Offenses
    const [selectedOffence, setSelectedOffence] = useState(options[0].value);

    //set value of fine
    const [fineValue, setfineValue] = useState("");

    // Handle Proceed Popup
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleProceedButton = () => {
        alert("Proceeded!");
        setShowModal(false);
        setOffenderID(""); // Clear Offender ID/ DLN
        setSelectedOffence(options[0].value); // Reset to default option
        setfineValue(""); // Clear Fine Value
    };

    // Handle Clear Content Button
    const handleClearContentButton = () => {
        setOffenderID(""); // Clear Offender ID/ DLN
        setSelectedOffence(options[0].value); // Reset to default option
        setfineValue(""); // Clear Fine Value
    };
    
    return ( 
        <div className="container">
            <HeaderBox headertext={"Fine"}/>
            <div className='page-content-fine'>
                <div className='fine-box-content'>
                    <div className='fine-box-content-inputs'>
                        <h3>Offender ID</h3>
                        <input type="text" value={offenderID} onChange={(e) => setOffenderID(e.target.value)} placeholder="Driving License Number"/>
                        <h3>Type of offence</h3>
                        <select value={selectedOffence} onChange={(e) => setSelectedOffence(e.target.value)}>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </select>
                        <h3>Value of Fine</h3>
                        <input type="text" value={fineValue} onChange={(e) => setfineValue(e.target.value)} placeholder="Value of the Fine"/>
                        <button className='proceed-button-make-fine' onClick={handleOpenModal}>Proceed</button>
                        <button className='clear-button-make-fine' onClick={handleClearContentButton}>Clear All</button>
                        <ProceedPopUp show={showModal} title={"Fine on Offender"} onClose={handleCloseModal} onProceed={handleProceedButton} />
                    </div>
                </div>
            </div>
            <TabNavigation bgfine={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default Fine;