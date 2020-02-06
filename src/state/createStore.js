import { createStore } from 'redux';
import reducer, { initialState } from './reducer';
import { loadState, saveState } from './localStorage'
const state = loadState() || initialState;
const store = createStore(
		reducer,
		state
		//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;