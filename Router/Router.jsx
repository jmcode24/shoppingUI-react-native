import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnlineShopping from '../src/components/OnlineShopping';
import AddToCart from '../src/components/AddToCart';
import Payment from '../src/components/Payment';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnlineShopping" screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnlineShopping" component={OnlineShopping} />
        <Stack.Screen name="AddToCart" component={AddToCart} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;