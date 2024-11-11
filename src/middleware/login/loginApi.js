import axios from "axios";
// backend url - change according to environmental variable change
const backendUrl = process.env.REACT_APP_BACKEND_API_URL;

// traffic officer login
const login = async (policeIdNumber, password) => {
  try {
    const response = await axios.post(
      `${backendUrl}/trafficOfficer/login`,
      {
        policeIdNumber: policeIdNumber,
        password: password,
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

export { login };
