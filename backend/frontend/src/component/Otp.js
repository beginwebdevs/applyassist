import LoginCard from "./LoginCard";


function Otp () {
    return (
        <div className="w-full h-[100vh] bg-[#dedede]">
            <div className="max-w-screen-lg mx-auto h-[100%] flex items-center justify-end">
                <LoginCard>
                    <div className="w-[90%] mx-auto text-center">
                        <label className="form-label w-[90%] mx-auto text-center">Enter OTP</label>
                        <div className="my-4 w-[90%] mx-auto text-center mb-4">
                            <input 
                              type='text' 
                              maxLenth='1' 
                              className='outline-none 
                               border-b-[2px] 
                               border-[#0A1C2B] 
                               w-[30px] 
                               pl-[14px] mr-2'
                            />
                            <input 
                              type='text' 
                              maxLenth='1' 
                              className='outline-none 
                               border-b-[2px] 
                               border-[#0A1C2B] 
                               w-[30px] 
                               pl-[14px] mr-2'
                            />
                            <input 
                              type='text' 
                              maxLenth='1' 
                              className='outline-none 
                               border-b-[2px] 
                               border-[#0A1C2B] 
                               w-[30px] 
                               pl-[14px]  mr-8'
                            />
                            <input 
                              type='text' 
                              maxLenth='1' 
                              className='outline-none 
                               border-b-[2px] 
                               border-[#0A1C2B] 
                               w-[30px] 
                               pl-[14px] mr-2'
                            />
                            <input 
                              type='text' 
                              maxLenth='1' 
                              className='outline-none 
                               border-b-[2px] 
                               border-[#0A1C2B] 
                               w-[30px] 
                               pl-[14px] mr-2'
                            />
                            <input 
                              type='text' 
                              maxLenth='1' 
                              className='outline-none 
                               border-b-[2px] 
                               border-[#0A1C2B] 
                               w-[30px] 
                               pl-[14px]'
                            />
                        </div>
                        <div className="flex justify-between w-[90%] mx-auto my-8">
                          <button className='px-10 py-2 border border-primary bg-[#ffffff] text-primary text-sm font-[500] rounded-3xl hover:bg-primary hover:text-[#ffffff] cursor-pointer'>Resend</button>
                          <button className='bg-primary text-[#ffffff] py-2 px-10 rounded-3xl'>Login</button>
                        
                        </div>
                        <div>
                            <a>Cancel</a>
                        </div>
                    </div>
                </LoginCard>
            </div>
        </div>
    )
}
export default Otp;