import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NoteScreen from '../features/notes/NoteScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notes" component={NoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 