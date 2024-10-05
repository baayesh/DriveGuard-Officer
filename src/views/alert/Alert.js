import './Alert.css';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import TabNavigation from '../../components/navbar/TabNavigation';
const Alert = () => {
    return ( 
        <div className="container">
            <HeaderBox headertext={"Alerts"}/>
            <div className='page-content-alert'>
                
            </div>
            <TabNavigation bgalert={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default Alert;