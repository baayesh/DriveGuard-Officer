import './Fine.css';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import TabNavigation from '../../components/navbar/TabNavigation';
const Fine = () => {
    return ( 
        <div className="container">
            <HeaderBox headertext={"Fine"}/>
            <div className='page-content-fine'>
                
            </div>
            <TabNavigation bgfine={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default Fine;