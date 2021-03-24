import React, { useState} from 'react';
import Okra from 'npm-okrajs';
import UserData from './UserData';
import './index.css'

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true)


  const okraWidget = () => {
    return  Okra.buildWithOptions({
      name: 'Sample App',
      env: 'production-sandbox',
      app_id: '', // app_id from your app builder
      key: process.env.REACT_APP_PUBLIC_KEY, // public  from the Okra dashboard
      token: process.env.REACT_APP_TOKEN, // client token from the okra dashboard
      products: ['auth', 'balance', 'transactions'],
      onSuccess: function (data) {
        console.log('options success', data);
        const filteredData = {
          name: data.accounts[0].name,
          accountNo: data.accounts[0].nuban,
          bankName: data.auth.bank_details.name,
          balance: data.balance.data.formatted[0].available_balance,
          currency: data.balance.data.formatted[0].currency,
        };
        setUserInfo(filteredData);
        setIsLoggedIn(true)
        return;
      },
      onError: function (error) {
        console.log('options close', error);
        setIsLoggedIn(false)
        return;
      },
      onClose: function (error) {
        console.log('options close', error);
        return;
      },
    });
  }

  return (
    <div className="container">
      <header>
        <h1>Okra demo</h1>
        {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button> : <button onClick={() => okraWidget()}>Connect with Okra</button>}
      </header>
      
      {isLoggedIn && userInfo && <UserData data={userInfo} />}
    </div>
  );
}

export default App;
