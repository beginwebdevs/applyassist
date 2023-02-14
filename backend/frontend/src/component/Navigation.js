
import logo from '../assets/images/logo.png';
import UserAccount from './UserAccount';

function Navigation ({ tabState, handleTabState, isLoggedIn }) {

    // let [tabState, setTabState] = useState(1);

    // const handleTabState = ( index ) => {
    //     setTabState(index);
    // }

    return (
        <div className="navigation">
          <div className="px-3 w-full flex justify-between items-center shadow-md">
             <div className='left flex h-[60px] items-center'>
                <div className='logo mr-8'>
                   <img src={logo} alt="logo" className="h-[50px]" />
                </div>
                <div className='menu'>
                    <ul className='flex items-center h-[60px]'>
                        <li 
                         className='h-[60px]
                          relative 
                          flex 
                          items-center 
                          mx-8 w-[120px] 
                          justify-center'
                          onClick={() => handleTabState(1)}
                          >
                            <span 
                             className='text-md 
                             font-semibold 
                             text-[#0A1C2B] 
                             opacity-[.49] 
                             hover:opacity-[1] 
                             cursor-pointer'
                             id={tabState === 1 ? 'wb_active_tab' : ''}
                             >Search Board</span>
                            <span 
                             className='opacity-[0] 
                             absolute w-[100%] 
                             h-[5px] 
                             rounded-md 
                             bg-primary 
                             flex 
                             bottom-0'
                             id={tabState === 1 ? 'indicate' : ''}
                             ></span>
                        </li>
                        <li 
                         className='h-[60px]
                          relative 
                          flex 
                          items-center 
                          mx-8 w-[120px] 
                          justify-center'
                          onClick={() => handleTabState(2)}
                          >
                            <span 
                             className='text-md 
                             font-semibold 
                             text-[#0A1C2B] 
                             opacity-[.49] 
                             hover:opacity-[1] 
                             cursor-pointer'
                             id={tabState === 2 ? 'wb_active_tab' : ''}
                             >Search Board</span>
                            <span 
                             className='opacity-[0] 
                             absolute w-[100%] 
                             h-[5px] 
                             rounded-md 
                             bg-primary 
                             flex 
                             bottom-0'
                             id={tabState === 2 ? 'indicate' : ''}
                             ></span>
                        </li>
                        <li 
                         className='h-[60px]
                          relative 
                          flex 
                          items-center 
                          mx-8 w-[120px] 
                          justify-center'
                          onClick={() => handleTabState(3)}
                          >
                            <span 
                             className='text-md 
                             font-semibold 
                             text-[#0A1C2B] 
                             opacity-[.49] 
                             hover:opacity-[1] 
                             cursor-pointer'
                             id={tabState === 3 ? 'wb_active_tab' : ''}
                             >Search Board</span>
                            <span 
                             className='opacity-[0] 
                             absolute w-[100%] 
                             h-[5px] 
                             rounded-md 
                             bg-primary 
                             flex 
                             bottom-0'
                             id={tabState === 3 ? 'indicate' : ''}
                             ></span>
                        </li>
                        
                    </ul>
                </div>
             </div>
             <div className='right'>
               <UserAccount tabState={tabState} handleTabState={handleTabState} isLoggedIn={isLoggedIn} />
             </div>
           </div>
        </div>
    )
}

export default Navigation;