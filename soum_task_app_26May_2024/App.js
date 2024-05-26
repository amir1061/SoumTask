import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProductTreeView from './ProductTreeView'; // Make sure the path is correct

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProductTreeView />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
