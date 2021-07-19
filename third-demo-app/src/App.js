import React, { useState, useEffect, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/autho-context';

function App() {

  const authContext = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {/* We are not using the context for Login, Home components
        coz, the props are directly used in login and Home comps. They are not 
        just forwarding to other components just for lifting up ot forwardign the state
        without using. In case of MainHeader, it simply forwarding it to Navigation,
        and inside navigation the state is been used. So inorder to avoid that forwarding we
        can simply use the context here */}

        {!authContext.isLoggedIn && <Login />}
        {authContext.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
