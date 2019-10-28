import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }

// const hasReduxDevTools = typeof window !== 'undefined' && 
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const composeEnhancer = hasReduxDevTools 
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
//   : compose
// const composeEnhancer = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const composeEnhancer = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const Store = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(
      applyMiddleware(thunk)
    )
  )
};

export default Store;