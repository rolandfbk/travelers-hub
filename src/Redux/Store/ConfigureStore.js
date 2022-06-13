import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from '../Rocket/Rockets';

const reducer = combineReducers({
    rocketReducer,
  });
  
  const store = createStore(
    reducer,
    applyMiddleware(logger, thunk),
  );
  
  export default store;