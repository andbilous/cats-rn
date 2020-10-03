import React from 'react';
import { StyleSheet,SafeAreaView} from 'react-native';
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
