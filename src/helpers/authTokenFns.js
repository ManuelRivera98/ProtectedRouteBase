// Use when making calls to an api and working with jwt.
import nameTokenStorage from 'nameTokenStorage';

export const setAuthToken = (token) => {
  localStorage.setItem(nameTokenStorage, token);
};

export const removeAuthToken = () => {
  localStorage.removeItem(nameTokenStorage);
};

export const getAuthToken = () => {
  const token = localStorage.getItem(nameTokenStorage);
  return token;
};
