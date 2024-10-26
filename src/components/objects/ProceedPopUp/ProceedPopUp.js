import React from 'react';
import './ProceedPopUp.css';

function ProceedPopUp({ show, onClose, onProceed }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Fine on Offender</h2>
        <p>Do you want to proceed?</p>
        <button onClick={onProceed}>Proceed</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default ProceedPopUp;
