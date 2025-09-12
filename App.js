import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import HomeSelect from './src/Screens/HomeSelect';
import CreateStudent from './src/Screens/createStudent';
import CreateTeacher from './src/Screens/createTeacher';
import ViewStudent from './src/Screens/viewStudent';
import VistaTeacher from './src/Screens/viewTeacher';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeSelect">
          <Stack.Screen
            name="HomeSelect"
            component={HomeSelect}
            options={{ title: 'Inicio' }}
          />
          <Stack.Screen
            name="CreateStudent"
            component={CreateStudent}
            options={{ title: 'Crear Estudiante' }}
          />
          <Stack.Screen
            name="CreateTeacher"
            component={CreateTeacher}
            options={{ title: 'Crear Profesor' }}
          />
          <Stack.Screen
            name="ViewStudent"
            component={ViewStudent}
            options={{ title: 'Ver Estudiante' }}
          />
          <Stack.Screen
            name="VistaTeacher"
            component={VistaTeacher}
            options={{ title: 'Ver Profesor' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}