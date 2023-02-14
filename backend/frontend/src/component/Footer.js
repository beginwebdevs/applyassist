import logofooter from "../assets/images/logofooter.png";


function Footer () {
    return (
        <div className="login-footer mt-[100px] pt-5 w-full bg-secodary h-[20vh]">
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
    )
}

export default Footer;