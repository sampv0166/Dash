import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('userInfo') ? (
          Component ? (
            <Component {...props} />
          ) : (
            rest.render(props)
          )
        ) : (
          <Redirect to="'/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
