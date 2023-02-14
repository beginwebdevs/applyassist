import LoginCard from "./LoginCard";
import google from '../assets/images/google-icon.svg';

const LoginAlert = ({ isLoogerdIn, showLogInAlert, setLoginTab }) => {
    if(!isLoogerdIn && showLogInAlert){
        return (
            <div className="fixed p-4 shadow-md bottom-2 right-4 bg-[#ffffff] rounded-2xl">
                
                    <div className="mb-4">
                        <h1 className="text-2xl text-center font-semibold">You are signe out</h1>
                    </div>
                    <div className="mb-6">
                        <p className="text-sm text-center font-semibold">Sign in to get best exprience</p>
                    </div>
                    <div>
                    <button 
                      onClick={() => setLoginTab(2)}
                      className="text-sm w-full text-[#ffffff] bg-primary py-3 px-6 rounded-3xl">Contineu with email</button>
                    </div>

                    <div className="social-login mt-2 flex justify-center space-x-3 justify-between w-[250px] mx-auto">
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
         <span className="text-xs w-[250px] text-center text-[#7C878E] leading-5">
           By continuing, you agree to applyassist's Terms of Service and acknowledge you've read our Privacy Policy. Notice at collection.
         </span>
        </div>
                
            </div>
        )
    }
}

export default LoginAlert;