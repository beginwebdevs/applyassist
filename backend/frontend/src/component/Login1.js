import logo from "../assets/images/logo.png";
import logofooter from "../assets/images/logofooter.png";
import google from '../assets/images/google-icon.svg';
import LoginCard from "./LoginCard";
import { useState } from "react";
import axios from "axios";

function Login({ otpState }) {

  const [emailPhone, setEmailPhone] = useState('');

  const sendOtp = async (e) => {
    e.preventDefault();
    console.log(emailPhone);

    let ldata = await axios.post('http://localhost:5000/api/auth/checkauth', {
            phone: emailPhone
         })

         console.log(ldata.data)
  }

  return (
    <div className="login h-screen">
      <div className="py-3 w-full flex justify-center items-center shadow-md">
        <img src={logo} alt="logo" className="w-[220px]" />
      </div>

      <div className="main logsc f-full h-[80vh]">
        <div className="mx-auto flex max-w-screen-lg h-[100%] items-center">
        <div className="w-full relative h-[100%] flex items-end pb-[7%]">
        <div className="right-content w-[450px]">
            <h1 className="text-[#ffffff] text-4xl font-bold">Welcome!</h1>
            <p className="text-[#ffffff] text-sm mt-5">You will need a valid Google/Facebook account to sign in
               to applyassist. If you have installed third-party applications 
               or browser extensions to block pop-up windows, be sure to allow
                the sign-in window for the social media account you will use to 
                sign in to applyassist.</p>
            <p className="text-[#ffffff] text-sm mt-3"> By proceeding to login, you agree that you have read and accepted 
              our terms, you're at least 13 years old, and you consent to our privacy
               policy and receiving marketing communications from us.</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <LoginCard>
             <div className="input-box">
                  <laber className="form-label">Email / Phone Number</laber>
                  <input type="email" value={emailPhone} onChange={(e) => setEmailPhone(e.target.value)} className="input-fields" />
                </div>
                
                
                <div className="input-box text-center">
                  <input type="submit" onClick={sendOtp} value="Get OTP" className="w-[150px] mx-auto mt-4 py-2 rounded-3xl border-0 bg-primary text-white" />
                </div>
          </LoginCard>
        </div>
        </div>
      </div>

      <div className="login-footer pt-5 w-full bg-secodary h-[20vh]">
       <div className="top fles justify-between flex justify-between max-w-screen-lg mx-auto">
        <img src={logofooter} alt="logo" className="w-[200px]" />
        <ul className="flex">
          <li className="nav-link">Terms</li>
          <li className="nav-link">Privacy</li>
          <li className="nav-link">FAQ</li>
          <li className="nav-link">Contact</li>
        </ul>
       </div>
       <div className="copyright flex justify-center mt-3">
        <p className="text-[#AEBAC2] text-sm">Copyright© 2022 Touchstone Education Asia Pacific Pty Ltd. All Rights Reserved.</p>
       </div>
      </div>
    </div>
  );
}

export default Login;
