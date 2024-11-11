import "./LoginSignup.css";
import { useState } from "react";
import HeaderBox from "../../components/objects/HeaderBox/HeaderBox";
import { useNavigate } from "react-router-dom";
import { login } from "../../middleware/login/loginApi";
import { ToastContainer, toast, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LoginSignup = () => {
  // Get input values
  const [policeIdNumber, setPoliceIdNumber] = useState("");
  const [password, setPassword] = useState("");

  // Navigate to Home (Search) page
  const navigate = useNavigate();

  // Handle Login Button Action
  const handleLogin = async () => {
    try {
      const response = await login(policeIdNumber, password);
      if (response !== null && response !== undefined) {
        if (response.status === 200) {
          navigate("/Search");
          localStorage.setItem("officerId", response.data.OfficerId);
        } else {
          console.error("Error Login");
          toast.error(
            "Login Error Please Check Your Police Id Number and Password",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            }
          );
        }
      }else{
        console.error("Error Login");
        toast.error(
          "Login Error Please Check Your Police Id Number and Password",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <HeaderBox headertext={"DriveGuard Police"} />

      <div className="page-content-login">
        <div className="login-title">
          <h1>DriveGuard</h1>
          <p>Your drive guide companion</p>
        </div>

        <div className="error-message"></div>

        <div className="elements">
          <div className="title-box">
            <h1 className="Login">Login</h1>
          </div>

          <div className="inputs">
            <div className="input">
              <input
                type="text"
                placeholder="Id Number"
                value={policeIdNumber}
                onChange={(e) => setPoliceIdNumber(e.target.value)}
              />
            </div>

            <div className="input">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="forgot-password">
            Lost Password? <span>Click Here</span>
          </div>

          <div className="submit-container">
            <button
              className="submit"
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginSignup;
