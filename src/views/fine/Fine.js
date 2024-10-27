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

    // Select Offenses
    const [selecteOffense, setSelecteOffense] = useState(options[0].value);

    //Value of Fine
    let fineValue="";

    // Handle Proceed Popup
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleProceed = () => {
        alert("Proceeded!");
        setShowModal(false);
    };
    
    return ( 
        <div className="container">
            <HeaderBox headertext={"Fine"}/>
            <div className='page-content-fine'>
                <div className='fine-box-content'>
                    <div className='fine-box-content-inputs'>
                        <h3>Offender ID</h3>
                        <input type="text" value={inputOffenderID} placeholder="Driving License Number"/>
                        <h3>Type of offence</h3>
                        <select value={selecteOffense} onChange={(e) => setSelecteOffense(e.target.value)}>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </select>
                        <h3>Value of Fine</h3>
                        <input type="text" value={fineValue} placeholder="Value of the Fine"/>
                        <button onClick={handleOpenModal}>Proceed</button>
                        <ProceedPopUp show={showModal} onClose={handleCloseModal} onProceed={handleProceed} />
                    </div>
                </div>
            </div>
            <TabNavigation bgfine={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default Fine;