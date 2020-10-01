import React from 'react';
import { StyleSheet, Text, TextInput, View,SafeAreaView,Button } from 'react-native';
import List from './components/List'
import ListContainer from './screens/ListContainer'
import { Provider } from 'react-redux'
import { store } from './redux/store'


export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <ListContainer/>
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
