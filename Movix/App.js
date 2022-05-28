import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainContainer from './src/navigation';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {


  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainContainer" component={MainContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>


  );
};

export default App;