import google from '../assets/images/google-icon.svg';

function LoginCard ({ children }) {
    return (
        <div className="form w-[400px] bg-[#ffffff] p-[30px] rounded-3xl">
               
               
        <form className="mt-5">
         { children }
         <div className="line flex items-center h-[15px] mt-5 w-[90%] mx-auto">
          <span className="w-[48%] mr-1 h-[1px] bg-[#7C878E]"></span>
          <span className="text-xs text-[#7C878E]">or</span>
          <span className="w-[48%] ml-1 h-[1px] bg-[#7C878E]"></span>
        </div>
        <div className="social-login mt-2 flex justify-center space-x-3 w-full justify-between w-[90%] mx-auto">
         <div className="google-login">
             <button className="border border-[#F24D5D] py-3 px-6 hover:border-transparent hover:shadow-md rounded-3xl">
                 <img src={google} alt="google_icon" className="w-[80px]" />
             </button>
         </div>
         <div className="facebook-login">
             <button className="border border-[#F24D5D] py-2 font-bold text-[#1877F2] px-6 hover:border-transparent hover:shadow-md rounded-3xl text-lg">
               facebook
             </button>
         </div>
        </div>
        <div className="flex justify-center mt-2">
         <span className="text-xs text-center text-[#7C878E] leading-5">
         By continuing, you agree to applyassist's Terms of Service and acknowledge you've read our Privacy Policy. Notice at collection.
         </span>
        </div>
        </form>

     </div>
    )
}

export default LoginCard;