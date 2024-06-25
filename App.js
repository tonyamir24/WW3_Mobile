import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import AdminStack from './routes/AdminStack';
import UserStack from './routes/UserStack';

// const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <AdminStack />
      {/* <UserStack /> */}
    </NavigationContainer>
  );
};
export default App;
