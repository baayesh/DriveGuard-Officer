import LoginSignup from './components/auth/LoginSignup';
import './App.css';
import Search from './views/search/Search';
import Alert from './views/alert/Alert';
import Fine from './views/fine/Fine';
import Settings from './views/settings/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<LoginSignup/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/fine" element={<Fine/>} />
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