import "./DisplayBox.css";
const DisplayBox = ({
  firstName,
  lastName,
  age,
  nic,
  houseNumber,
  streetName,
  city,
}) => {
  return (
    <div >
      {age !== null && age !== undefined ? (
        <div className="displaybox-content">
          <h3>{`Name: ${firstName} ${lastName}`}</h3>
          <h4>{`Age: ${age}`}</h4>
          <p>{`Address: ${houseNumber}, ${streetName}, ${city}`}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DisplayBox;
