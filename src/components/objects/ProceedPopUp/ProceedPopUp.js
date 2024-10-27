import React from 'react';
import './ProceedPopUp.css';

function ProceedPopUp({ show, title, onClose, onProceed }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>Do you want to proceed?</p>
        <button className='on-click-proceed' onClick={onProceed}>Proceed</button>
        <button className='on-click-cancel' onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default ProceedPopUp;
