import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { Component } from 'react';

import {AppContainer} from './constants/AppNavigation.js'
import {Provider} from 'react-redux';
import {store} from './redux/Redux.js'




export default class App extends Component {
  render() {
    return (
    	    <Provider store={store}>
    	        <AppContainer />
    	    </Provider>
    	    )
  }
}



