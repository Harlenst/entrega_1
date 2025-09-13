import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import HomeSelect from './src/Screens/HomeSelect';
import CreateStudent from './src/Screens/CreateStudent';
import CreateTeacher from './src/Screens/CreateTeacher';
import ViewStudent from './src/Screens/ViewStudent';
import ViewTeacher from "./src/Screens/ViewTeacher";


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
            name="ViewTeacher"
            component={ViewTeacher}
            options={{ title: 'Ver Profesor' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}