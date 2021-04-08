import {createStore} from 'redux';
import {persistStore, persistReducer, createMigrate} from 'redux-persist';
import rootReducer from './reducers/rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return {store, persistor};
};
