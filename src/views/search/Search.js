import './Search.css';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import TabNavigation from '../../components/navbar/TabNavigation';
import DisplayBox from '../../components/objects/DisplayBox/DisplayBox';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    //DLN: Dirving License Number
    let inputOffenderDLN ="";

    //Offender details
    let OffenderDetails ="";

    //Handle: Search DLN Click
    const handleSearchDLNClick = () => {
        // Click event
    };

    // Navigate to fining page
    const navigate = useNavigate();

    //Handle: Fine on Offernder Click
    const handleFineOnOffender = () => {
        navigate('/Fine');
    };

    return ( 
        <div className="container">
            <HeaderBox headertext={"Search"}/>
            <div className='page-content-search'>
                <div className='search-box-content'>
                    <h2>Find Offender</h2>
                    <div className='search-input'>
                        <input type="text" value={inputOffenderDLN} placeholder="Driving License Number"/>
                        <button onClick={handleSearchDLNClick}>Search</button>
                    </div>
                    <DisplayBox displayBoxContent={OffenderDetails}/>
                    <div className='fine-on-the-offender'>
                        <button onClick={handleFineOnOffender}>Fine on Offender</button>
                    </div>
                </div>
            </div>
            <TabNavigation bgsearch={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default Search;