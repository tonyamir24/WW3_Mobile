import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TeamView from '../pages/User/TeamView';
import UserHome from '../pages/User/UserHome';
import Countries from '../pages/User/Countries';
import Members from '../pages/User/Members';
import AssignCountry from '../pages/User/AssignCountry';
import QRscanner from '../pages/User/QRscanner';

const Stack = createStackNavigator();

function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={UserHome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TeamView"
        component={TeamView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AssignCountry"
        component={AssignCountry}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Countries"
        component={Countries}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Members"
        component={Members}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="QR"
        component={QRscanner}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
// export default HomeStack;
export default UserStack;
