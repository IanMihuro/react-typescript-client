import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

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