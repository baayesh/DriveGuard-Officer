import './Search.css';
import HeaderBox from '../../components/objects/HeaderBox/HeaderBox';
import TabNavigation from '../../components/navbar/TabNavigation';
const Search = () => {
    return ( 
        <div className="container">
            <HeaderBox headertext={"Search"}/>
            <div className='page-content-search'>
                
            </div>
            <TabNavigation bgsearch={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default Search;