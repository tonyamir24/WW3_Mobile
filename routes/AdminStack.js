import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import QRscanner from '../pages/Admin/QRscanner';
import HomeAdmin from '../pages/Admin/HomeAdmin';
import Egtma3at from '../pages/Admin/Egtma3at';
import CoinsAdjust from '../pages/Admin/CoinsAdjust';
import PowerAdjust from '../pages/Admin/PowerAdjust';
import AssignCountry from '../pages/Admin/AssignCountry';
import AssignCountryTeam from '../pages/Admin/AssignCountryTeam';
import TradeCountry from '../pages/Admin/TradeCountry';
import TradeCountryTeam from '../pages/Admin/TradeCountryTeam';
import Teams from '../pages/Admin/Teams';
import Attendance from '../pages/Admin/Attendance';
import TeamView from '../pages/Admin/TeamView';
import Countries from '../pages/Admin/Countries';
import Members from '../pages/Admin/Members';
import AddTeamMember from '../pages/Admin/AddTeamMember';
import CreateCountry from '../pages/Admin/CreateCountry';
import CreateTeam from '../pages/Admin/CreateTeam';
import CreateChallenge from '../pages/Admin/CreateChallenge';

const Stack = createStackNavigator();

function AdminStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeAdmin}
        options={{title: 'Admin'}}
      />
      <Stack.Screen name="Egtma3at" component={Egtma3at} />
      <Stack.Screen name="QR" component={QRscanner} />
      <Stack.Screen name="Attendance" component={Attendance} />
      <Stack.Screen name="Coins" component={CoinsAdjust} />
      <Stack.Screen name="Power" component={PowerAdjust} />
      <Stack.Screen name="AssignCountry" component={AssignCountry} />
      <Stack.Screen name="AssignCountryTeam" component={AssignCountryTeam} />
      <Stack.Screen name="TradeCountry" component={TradeCountry} />
      <Stack.Screen name="TradeCountryTeam" component={TradeCountryTeam} />
      <Stack.Screen name="Teams" component={Teams} />
      <Stack.Screen name="TeamView" component={TeamView} />
      <Stack.Screen name="Countries" component={Countries} />
      <Stack.Screen name="Members" component={Members} />
      <Stack.Screen name="AddMember" component={AddTeamMember} />
      <Stack.Screen name="CreateCountry" component={CreateCountry} />
      <Stack.Screen name="CreateTeam" component={CreateTeam} />
      <Stack.Screen name="CreateChallenge" component={CreateChallenge} />
    </Stack.Navigator>
  );
}
// export default HomeStack;
export default AdminStack;
