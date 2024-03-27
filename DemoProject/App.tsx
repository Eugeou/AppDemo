import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './src/components/loginScreen';
import Fetch_API from './src/components/fetch-API-Uni';

const App = () => {
  return (
    <View style={styles.container}>
      <Fetch_API/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
