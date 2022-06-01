import React from 'react';
import { StyleSheet } from 'react-native';
import Router from './Router/Router';

const App = () => {
  return (
    // <SafeAreaProvider style={styles.container}>
    //   <SafeAreaView style={{flex:1}}>
    //     <Payment />
    //   </SafeAreaView>
    // </SafeAreaProvider>
    <Router />

  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 16,
//     backgroundColor: "#eee"
//   },
// });

export default App;