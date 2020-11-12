// Types
import { LOGIN_SUCCESSFULLY, LOADING_LOGIN, ERROR_LOGIN } from './types';
// Credentials
import { user as userCredential, password as passwordCredential } from '../credentials';
import { axiosClient } from '../helpers/initAxiosInterception';

export const loginFn = (data) => (dispatch) => {
  dispatch({
    type: LOADING_LOGIN,
    payload: true,
  });

  const { user, password } = data;

  // Validation
  if (user === userCredential || password === passwordCredential) return dispatch({
    type: LOGIN_SUCCESSFULLY,
  })
  else {
    dispatch({
      type: ERROR_LOGIN,
      payload: 'La contraseña o usuario no son correctos',
    });
  }
}

// Use when making calls to an api and working with jwt,

// Fn authentication
export const whoIamFn = () => async (dispatch) => {
  try {
    const response = await axiosClient.get('/api/auth/iam');
    const { data } = response.data;

    dispatch({
      type: AUTH_USER_SUCCESSFULLY,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_AUTH_USER,
    });
  }
};