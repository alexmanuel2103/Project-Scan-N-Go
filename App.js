import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Attendance from './src/screens/Attendance';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes(){
  return(
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Student ID" component={Home}/>
        <Drawer.Screen name="Profile" component={Profile}/>
        <Drawer.Screen name="Student Attendances" component={Attendance}/>
      </Drawer.Navigator>
  );
}

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Home' component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}


export default App;