import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from './Paginas/Tela inicial/index';
import page1 from './Paginas/Page1/index';
import page2 from './Paginas/Page2/index';
import page3 from './Paginas/Page3/index';

const Stack = createStackNavigator();

export default function App() {
  return (

<NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name= 'Tela Inicial' component ={TelaInicial} />
  <Stack.Screen name= 'Triologia 1' component ={page1} />
  <Stack.Screen name= 'Triologia 2' component ={page2} />
  <Stack.Screen name= 'Triologia 3' component ={page3} />
  </Stack.Navigator>
</NavigationContainer>




  );
}
