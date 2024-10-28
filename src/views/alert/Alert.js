import './Alert.css';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import TabNavigation from '../../components/navbar/TabNavigation';
import DisplayBox from '../../components/objects/DisplayBox/DisplayBox';
const Alert = () => {

    //Display Alerts
    let displayAlert = "";

    return ( 
        <div className="container">
            <HeaderBox headertext={"Alerts"}/>
            <div className='page-content-alert'>
                <div className='display-alert-wrapper'>
                    <DisplayBox displayBoxContent={displayAlert}/>
                </div>
            </div>
            <TabNavigation bgalert={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default Alert;