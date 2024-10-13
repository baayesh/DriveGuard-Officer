import './DisplayBox.css';
const DisplayBox = ({displayBoxContent}) => {
    return ( 
        <div className="displaybox-content">
            <div>{displayBoxContent}</div>
        </div>
     );
}
 
export default DisplayBox;