

const UserAccount = ({isLoggedIn, handleTabState, tabState}) => {
    if(isLoggedIn){
        return(
            <ul className='flex items-center h-[60px]'>
                        <li 
                         className='h-[60px]
                          relative 
                          flex
                          items-center 
                          mx-2 w-[50px] 
                          justify-center'
                          onClick={() => handleTabState(4)}
                          >
                            <span 
                             className='text-md 
                             font-semibold 
                             text-[#0A1C2B] 
                             opacity-[.49] 
                             hover:opacity-[1] 
                             cursor-pointer
                             border border-[#0A1C2B] p-2 rounded-[50%]'
                             id={tabState === 4 ? 'wb_active_tab' : ''}
                             >
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24.371 24.371">
                                   <path 
                                     id="Icon_material-message" 
                                     data-name="Icon material-message" 
                                     d="M24.934,3H5.437A2.434,2.434,0,0,0,3.012,5.437L3,27.371,7.874,22.5h17.06a2.444,2.444,0,0,0,2.437-2.437V5.437A2.444,2.444,0,0,0,24.934,3ZM22.5,17.623H7.874V15.186H22.5Zm0-3.656H7.874V11.53H22.5Zm0-3.656H7.874V7.874H22.5Z" 
                                     transform="translate(-3 -3)" 
                                     fill=""/>
                                </svg>
                            </span>
                            <span 
                             className='opacity-[0] 
                             absolute w-[100%] 
                             h-[5px] 
                             rounded-md 
                             bg-primary 
                             flex 
                             bottom-0'
                             id={tabState === 4 ? 'indicate' : ''}
                             ></span>
                        </li>
                        <li 
                         className='h-[60px]
                          relative 
                          flex 
                          items-center 
                          mx-2 w-[50px] 
                          justify-center'
                          onClick={() => handleTabState(5)}
                          >
                            <span 
                             className='text-2xl 
                             font-semibold 
                             text-[#0A1C2B] 
                             opacity-[.49] 
                             hover:opacity-[1] 
                             cursor-pointer'
                             id={tabState === 5 ? 'wb_active_tab' : ''}
                             >
                              <i class="fa-solid fa-circle-user"></i>
                             </span>
                            <span 
                             className='opacity-[0] 
                             absolute w-[100%] 
                             h-[5px] 
                             rounded-md 
                             bg-primary 
                             flex 
                             bottom-0'
                             id={tabState === 5 ? 'indicate' : ''}
                             ></span>
                        </li>
                    </ul>
        )
    }
}

export default UserAccount;