import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/redux/store';
import AppNavigator from 'ReactNativeNotas/src/navigation/AppNavigator';

const {store, persistor} = configureStore();

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppNavigator/>
          </PersistGate>
        </Provider>
      </React.Fragment>
    );
  }
}
