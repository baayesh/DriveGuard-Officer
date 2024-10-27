import LoginSignup from './components/auth/LoginSignup';
import './App.css';
import Search from './views/search/Search';
import Alert from './views/alert/Alert';
import Fine from './views/fine/Fine';
import Settings from './views/settings/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

function App() {

  //Pass Offender DLN from Search to Fine
  const [offenderDLN, setOffenderDLN] = useState("");

  const handleFineOnOffender = (dln) => {
    setOffenderDLN(dln);
  };

  // Clear ID/ DLN state with tap on Clear All button in Fine.js
  const handleClearOffenderDLN = () => {
    setOffenderDLN(""); // Clear the offender DLN state
  };

  return (
    <Router>
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<LoginSignup/>} />
          <Route path="/search" element={<Search onHandleFine={handleFineOnOffender}/>} />
          <Route path="/fine" element={<Fine inputOffenderID={offenderDLN} onClearOffenderDLN={handleClearOffenderDLN}/>}/>
          <Route path="/alert" element={<Alert/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
      <tabNavigation />
    </div>
    </Router>
  );
}

export default App;