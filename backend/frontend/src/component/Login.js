import logo from "../assets/images/logo.png";
import logofooter from "../assets/images/logofooter.png";
import google from '../assets/images/google-icon.svg';
import Login1 from './Login1';
import Otp from "./Otp";
import { useState } from "react";


function Login () {

  const [otpState, setOtpState] = useState(1);

     return (
        
      <>
        <div className="hidden" id={otpState === 1 ? 'active-tab-content' : ''}>
          <Login1 setOtpState={setOtpState} />
        </div>
        <div className="hidden" id={otpState === 2 ? 'active-tab-content' : ''}>
          <Otp />
        </div>

      </>
       
     ); 
}

export default Login;