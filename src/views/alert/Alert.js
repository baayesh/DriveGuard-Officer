import "./Alert.css";
import HeaderBox from "../../components/objects/HeaderBox/HeaderBox";
import TabNavigation from "../../components/navbar/TabNavigation";
import { useEffect, useState } from "react";
import { getFineList, makeFineWitnessed } from "../../middleware/data/dataApis";
import { toast, Bounce, ToastContainer } from "react-toastify";

const Alert = () => {
  //Display Alerts
  let displayAlert = "";
  const officerId = localStorage.getItem("officerId");
  // array to store data
  const [issuedOffecensList, setIssuedOffencesList] = useState([]);
  const [handleWitnessRan, setHandleWitnessRan] = useState(true);

  useEffect(() => {
    const getWitnessingOffences = async () => {
      const response = await getFineList(officerId);
      if (response !== null && response !== undefined) {
        setIssuedOffencesList(response.data);
      } else {
        console.error("Error setting array, response is null or undeined");
      }
    };
    getWitnessingOffences();
  }, [handleWitnessRan]);

  const handleWitness = async (fineId) => {
    const loading = toast.loading("Witnessing...");
    try {
      const response = await makeFineWitnessed(fineId);
      if (response.status === 200) {
        toast.update(loading, {
          render: "Witness Successful",
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
        if (handleWitnessRan === true) {
          setHandleWitnessRan(false);
        } else {
          setHandleWitnessRan(true);
        }
      } else {
        toast.update(loading, {
          render: "Witness Unsuccessful",
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
    } catch (err) {
      console.error("handle witness function error: ", err);
      toast.update(loading, {
        render: "Witness Unsuccessful",
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
  };

  return (
    <div className="container">
      <HeaderBox headertext={"Alerts"} />
      <div className="page-content-alert">
        <div className="display-alert-wrapper">
          {issuedOffecensList.map((issuedOffence) => (
            <div key={issuedOffence.offenceId} className="fine-list">
              <div className="offense-fr">
                <h4>Finned To</h4>
              </div>
              <div className="offense-sr">
                <p>{`${issuedOffence.driverFirstName} ${issuedOffence.driverLastName}`}</p>
                <p>{`${issuedOffence.drivingLicenseNumber}`}</p>
              </div>
              <div className="offense-tr">
                <p className="offense-amt">{`${issuedOffence.offenseAmount}`}</p>
                <p className="offense-des">{`${issuedOffence.offenseDescription}`}</p>
              </div>
              <div className="offense-for">
                <p className="offense-for-head">Fine Issued By</p>
                <div className="offense-for-sfr">
                  <p>{`${issuedOffence.issuedOfficerFirstName} ${issuedOffence.issuedOfficerLastName}`}</p>
                  <p>{`${issuedOffence.issuedOfficerPoliceId}`}</p>
                </div>
           
              </div>

              <button
                onClick={() => {
                  handleWitness(issuedOffence.offenseId);
                }}
              >
                Be Witness
              </button>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
      <TabNavigation bgalert={"rgb(10, 55, 202)"} />
    </div>
  );
};

export default Alert;
