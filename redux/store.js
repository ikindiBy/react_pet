import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import promisedMiddleware from './promisedMiddleware';

const promised = promisedMiddleware(axios);

export const initStore = (initialState = {}) => {
  const store = createStore(reducer, {...initialState}, applyMiddleware(promised, logger));
  store.dispatchPromised = function(action) {
    this.dispatch(action);
    return action.promise;
  }
  return store;
}
export function getTime(){
    return {
      promised: () => axios.get('http://time.jsontest.com/'),
      types: ['START', 'SUCCESS', 'FAILURE'],
    };
}
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'START':
      return state
    case 'SUCCESS':
      return {...state, ...action.data.data}
    case 'FAILURE':
      return Object.assign({}, state, {error: true} )
    default: return state
  }
}