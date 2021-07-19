import React,{useContext} from 'react';
import AuthContext from '../../store/autho-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  const authorContext = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {authorContext.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authorContext.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authorContext.isLoggedIn && (
          <li>
            <button onClick={authorContext.onLogOut}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
