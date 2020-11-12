/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
// PropTypes
import PropTypes from 'prop-types';
// React router
import { Route, Redirect } from 'react-router-dom';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getAuthToken } from '../../helpers';
// Actions redux fn
import { whoIamFn } from '../../redux/actions/users';

const ProtectedRoute = ({
  path, exact, component: Component,
}) => {
  const [loadUser, setLoadUser] = useState(true);
  // Redux
  const { authenticated } = useSelector((state) => state);

  // Use when we have calls to an api
  /*useEffect(() => {
    if (!getAuthToken) {
      setLoadUser(false);
      return;
    }
    dispatch(whoIamFn());
    setLoadUser(false);
  }, [authenticated, dispatch]);*/

  // Change for custom loader
  if (loadUser) return <div>Loading ...</div>
  return (
    <Route
      path={path}
      exact={exact}
    >
      {
        authenticated ? <Component /> : <Redirect to="/" />
      }
    </Route>
  );
};

ProtectedRoute.defaultProps = {
  exact: false,
};

ProtectedRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
