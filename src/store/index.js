import { createStore, combineReducers } from 'redux';
import { persistStore } from 'redux-persist';

import login from './login/reducer';
import persistedReducer from './persistReducers';

const reducers = combineReducers({
  login,
});

const store = createStore(persistedReducer(reducers));
const persistor = persistStore(store);

export { store, persistor };
