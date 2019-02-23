/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet,Text,View} from 'react-native';
import {Provider} from 'react-redux';
import Main from './Components/Main/Main';
import RouterComponent from './Router';
import  RootReducer from './Reducers';
import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(RootReducer,{},applyMiddleware(ReduxThunk,logger))}>      
      <RouterComponent>
        <View style={{flex:1}}>        
          <Main/>
      </View>    
      </RouterComponent>  
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',    
    fontSize:20,
    marginBottom: 5,
    marginTop:50
  },
});
