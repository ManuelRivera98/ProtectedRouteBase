import { createStore, compose } from 'redux';

// Reducer
import reducer from './reducer';

const store = createStore(
  reducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)
);

export default store;