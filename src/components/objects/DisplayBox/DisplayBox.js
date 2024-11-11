import './DisplayBox.css';
const DisplayBox = ({firstName, lastName, age, nic, houseNumber, streetName, city}) => {
    return ( 
        <div className="displaybox-content">
            <div>
                <h3>{`${firstName} ${lastName}`}</h3>
                <h4>{age}</h4>
                <p>{nic}</p>
                <p>{houseNumber}</p>
                <p>{streetName}</p>
                <p>{city}</p>
            </div>
        </div>
     );
}
 
export default DisplayBox;