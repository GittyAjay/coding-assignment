import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './pages/home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Store from './store/store';
import thunk from 'redux-thunk';
import { AppNavigator } from '../src/navigation/app';
const store = createStore(
  Store,
  applyMiddleware(thunk)
)
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
