/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CounterApp from './src/CounterApp';
import {Provider} from 'react-redux';
import {createStore} from 'redux';



/**
 * Store - holds our state - THERE IS ONLY ONE STORE
 * 
 * Action(TYPE OF ACTION) - State can be modified using actions - SIMPLE OBJECTS
 * 
 * Dispatcher  - Action needs to be sent by someone - Known as dispatching an action
 * 
 * Reducer - receives an actionand modifies the state to give us a new state
 * 
 * - only mandatory argument is the action type
 * Subscriber - listens for state change to update the ui (using connect)
 */
const intialState = {
  count: 0,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {count: state.count + 1};
    case 'DECREASE_COUNTER':
      return {count: state.count - 1};
  }
  return state;
};
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
