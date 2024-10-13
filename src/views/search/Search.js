import './Search.css';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import TabNavigation from '../../components/navbar/TabNavigation';
import DisplayBox from '../../components/objects/DisplayBox/DisplayBox';

const Search = () => {

    //DLN: Dirving License Number
    let inputOffenderDLN ="";

    //Offender details
    let OffenderDetails ="";

    //Handle: Search DLN Click
    const handleSearchDLNClick = () => {
        // Click event
    };

    return ( 
        <div className="container">
            <HeaderBox headertext={"Search"}/>
            <div className='page-content-search'>
                <div className='search-box-content'>
                    <h2>Search Offender</h2>
                    <div className='search-input'>
                        <input type="text" value={inputOffenderDLN} />
                        <button onClick={handleSearchDLNClick}>Search</button>
                    </div>
                    <DisplayBox displayBoxContent={OffenderDetails}/>
                </div>
            </div>
            <TabNavigation bgsearch={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default Search;