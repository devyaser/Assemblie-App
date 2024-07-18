import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux';
import store from './src/store'
import Root from './src/root'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import axios from 'axios'
import {loadUser} from './src/actions/auth'
axios.defaults.baseURL='http://192.168.0.108:5000/';

console.disableYellowBox = true;

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide()
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
      </Provider>
    );
  }
};

export default App;
