import "./DisplayBox.css";
const DisplayBox = ({
  firstName,
  lastName,
  age,
  nic,
  houseNumber,
  streetName,
  city,
  offenseLevel,
}) => {
  return (
    <div>
      {age !== null && age !== undefined ? (
        <div className="displaybox-content">
          <div className="of-fr">
            <h3>{`Name: ${firstName} ${lastName}`}</h3>
            <h4>{`Age: ${age}`}</h4>
            <p>{`Address: ${houseNumber}, ${streetName}, ${city}`}</p>
            <p>{`NIC: ${nic}`}</p>
          </div>
          <div className="offense-level">
            <p>{offenseLevel}</p>
            <p className="of-des">OFFENSE LEVEL</p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DisplayBox;
