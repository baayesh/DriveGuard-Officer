import './LoginSignup.css';
import { useState } from 'react';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {

    // Get input values
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Navigate to Home (Search) page
    const navigate = useNavigate();

    // Handle Login Button Action
    const handleLogin = () => {
        console.log("Login:", { username, password });
        navigate('/Search');
    };

    return ( 
        <div className='container'>
            <HeaderBox headertext={"DriveGuard Police"}/>

            <div className='page-content-login'>

                <div className='login-title'>
                    <h1>DriveGuard</h1>
                    <p>Your drive guide companion</p>
                </div>

                <div className='error-message'></div>

                <div className='elements'>

                    <div className='title-box'>
                        <h1 className="Login">Login</h1>
                    </div>

                    <div className='inputs'>
                        <div className='input'>
                            <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>

                        <div className='input'>
                            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    
                    <div className='forgot-password'>Lost Password? <span>Click Here</span></div>

                    <div className='submit-container'>
                        <button className='submit' onClick={() => {handleLogin();}}>Login</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default LoginSignup;