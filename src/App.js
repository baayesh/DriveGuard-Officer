import LoginSignup from './components/auth/LoginSignup';
import './App.css';
//import Home from './views/search/Search';
//import New from './views/alert/Alert';
//import History from './views/fine/Fine';
//import Settings from './views/settings/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<LoginSignup/>} />
          {/* <Route path="/search" element={<Home/>} />
          <Route path="/fine" element={<History/>} />
          <Route path="/alert" element={<New/>} />
          <Route path="/settings" element={<Settings/>} /> */}
        </Routes>
      </div>
      <tabNavigation />
    </div>
    </Router>
  );
}

export default App;