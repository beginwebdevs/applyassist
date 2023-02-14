import { useState } from "react";
import Navigation from "./Navigation";
import SearchBoard from "./SearchBoard";
import Course from "./Course";
import Compare from "./Compare";
import Univercity from "./University";


function Dashboard ({ isLoggedIn }) {

    let [tabState, setTabState] = useState(1);
    const handleTabState = ( index ) => {
        setTabState(index);
    }



    return(
        <div>
           <Navigation tabState={tabState} handleTabState={handleTabState} isLoggedIn={isLoggedIn} />

           <div className="tabcontent">

            <div 
             className="hidden" 
             id={tabState === 1 ? 'active-tab-content' : ''}
             >
               <SearchBoard />
            </div>

            <div 
             className="hidden"
             id={tabState === 2 ? 'active-tab-content' : ''}
             >
                Saved Course
            </div>

            <div 
             className="hidden"
             id={tabState === 3 ? 'active-tab-content' : ''}
             >
                My Application
            </div>

            <div 
             className="hidden"
             id={tabState === 4 ? 'active-tab-content' : ''}
             >
                Message
            </div>

            <div 
             className="hidden"
             id={tabState === 5 ? 'active-tab-content' : ''}
             >
                Profile
            </div>


           </div>
        </div>
    )
}

export default Dashboard;