import './index.css';
import Login from './component/Login';
import Navigation from './component/Navigation';
import Dashboard from './component/Dashboard'
import Otp from './component/Otp';
import LoginAlert from './component/LoginAlert';
import { useState } from 'react';




function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginTab, setLoginTab] = useState(1)
 
  return (
    <>
      <div className='hidden' id={loginTab === 1 ? 'active-tab-content' : ''}>
         <Dashboard isLoggedIn={isLoggedIn} />
         <LoginAlert isLoogerdIn={isLoggedIn} showLogInAlert={true} setLoginTab={setLoginTab} />
      </div>
      <div className='hidden' id={loginTab === 2 ? 'active-tab-content' : ''}>
        <Login />
      </div>
      
    </>
  );
}

export default App;
