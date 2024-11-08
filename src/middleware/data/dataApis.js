import axios from "axios";
import { useParams } from "react-router-dom";
// backend url - change according to environmental variable change
const backendUrl = process.env.REACT_APP_BACKEND_API_URL;

// get driver by licence number
const getDriverData = async (licenceNumber) => {
    try {
      const response = await axios.get(
        `${backendUrl}/trafficOfficer/get/driver`,
        {
            params:{
                licenceNumber
            }
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (err) {
      console.error("get driver api error ", err);
    }
};

//create fine
const createFine = async (officerId, licenceNumber, fineListId, witnessOfficerId) => {
    try {
      const response = await axios.post(
        `${backendUrl}/fine/create`,
        {
            officerId: officerId ,
            licenceNumber: licenceNumber,
            fineListId: fineListId,
            witnessOfficerId: witnessOfficerId
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (err) {
      console.error("Officer login api error ", err);
    }
};

//get fine list by witnessed officer id
const getFineList = async (witnessOfficerId) => {
    try {
      const response = await axios.get(
        `${backendUrl}/trafficOfficer/get/witnessingOffencesList`,
        {
            params:{
                witnessOfficerId
            }
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (err) {
      console.error("get driver api error ", err);
    }
};

//make fine witnessed
const makeFineWitnessed = async (fineId) => {
    try {
      const response = await axios.get(
        `${backendUrl}/fine/witnessed`,
        {
            params:{
                fineId
            }
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (err) {
      console.error("get driver api error ", err);
    }
};

//get fine by fineId
const getFine = async (fineId) => {
    try {
      const response = await axios.get(
        `${backendUrl}/fine/get/fine`,
        {
            params:{
                fineId
            }
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (err) {
      console.error("get driver api error ", err);
    }
};


export{
    getDriverData, createFine, getFineList, makeFineWitnessed, getFine
}
