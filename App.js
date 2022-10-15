import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeSreen';
import ChatListScreen from './screens/ChatListScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Homescreen' component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='ChatListScrenn' component={ChatListScreen} options={{title:'Chat List'}} />
        <Stack.Screen name='ChatScreen' component={ChatScreen} options={{title:'Chat'}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
