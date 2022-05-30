import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import OnlineShopping from './src/components/OnlineShopping';
import AddToCart from './src/components/AddToCart';
import Payment from './src/components/Payment';
import ItemsList from './src/components/ItemsList';
import ConfirmOrder from './src/components/ConfirmOrder';

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={{flex:1}}>
        <ConfirmOrder />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#eee"
  },
});

export default App;