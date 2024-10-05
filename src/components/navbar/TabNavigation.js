import './TabNavigation.css';
import navTabSearch from '../../utils/images/nav-tab-search.png';
import navTabAlert from '../../utils/images/nav-tab-alert.png';
import navTabFine from '../../utils/images/nav-tab-fine.png';
import navTabSettings from '../../utils/images/nav-tab-settings.png';
import { Link } from 'react-router-dom';
const TabNavigation = ({bgsearch, bgalert, bgfine, bgsettings}) => {
    return ( 
        <div className='nav-bar'>
            <div className='nav-container'>
                <div className="nav-links" style={{background: bgsearch}}>
                    <Link to="/search"><img src={navTabSearch} alt="Search tab button" />Search</Link>
                </div>

                <div className="nav-links" style={{background: bgfine}}>
                    <Link to="/fine"><img src={navTabFine} alt="Fine tab button" />Fining</Link>
                </div>

                <div className="nav-links" style={{background: bgalert}}>
                    <Link to="/alert"><img src={navTabAlert} alt="Alert tab button" />Alerts</Link>
                </div>
                
                <div className="nav-links" style={{background: bgsettings}}>
                    <Link to="/settings"><img src={navTabSettings} alt="Settings tab button" />Settings</Link>
                </div>
            </div>
        </div> 
    );
}
 
export default TabNavigation;