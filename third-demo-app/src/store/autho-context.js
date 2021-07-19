import React, {useEffect, useState} from 'react'

const AuthContext = React.createContext( {
    isLoggedIn: false,
    onLogOut: () => {},
    onLogIn: () => {}
})

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedInInfo = localStorage.getItem('user_logged_in');
    if(userLoggedInInfo === '1') {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('user_logged_in','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('user_logged_in');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogOut: logoutHandler,
        onLogIn: loginHandler
    }}>
    {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;