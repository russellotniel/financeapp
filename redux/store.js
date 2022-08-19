import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middleware = [thunk];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
