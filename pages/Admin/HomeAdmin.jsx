import * as React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={style.container}>
        <TouchableOpacity
          style={style.title}
          onPress={() => navigation.navigate('Egtma3at', {name: 'Egtma3at'})}>
          <Text style={style.content}>Egtma3at</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() => navigation.navigate('Coins', {name: 'Coins'})}>
          <Text style={style.content}>Coins</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() => navigation.navigate('Power', {name: 'Power'})}>
          <Text style={style.content}>Power</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() =>
            navigation.navigate('AssignCountry', {name: 'Assign Country'})
          }>
          <Text style={style.content}>Assign Country</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() =>
            navigation.navigate('TradeCountry', {name: 'Trade Country'})
          }>
          <Text style={style.content}>Trade Country</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() => navigation.navigate('Teams', {name: 'Teams'})}>
          <Text style={style.content}>Teams</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() =>
            navigation.navigate('AddMember', {name: 'Add Member'})
          }>
          <Text style={style.content}>AddMember</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() =>
            navigation.navigate('CreateCountry', {name: 'Create Country'})
          }>
          <Text style={style.content}>create Country</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() =>
            navigation.navigate('CreateTeam', {name: 'Create Team'})
          }>
          <Text style={style.content}>Create Team</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() =>
            navigation.navigate('CreateChallenge', {name: 'Create Challenge'})
          }>
          <Text style={style.content}>Create Challenge</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    // <View>
    //   <Button
    //     title="Egtma3at"
    //     onPress={() => navigation.navigate('Egtma3at', {name: 'Egtma3at'})}
    //   /> done
    //   <Button
    //     title="Coins"
    //     onPress={() => navigation.navigate('Coins', {name: 'Coins'})}
    //   /> done
    //   <Button
    //     title="Power"
    //     onPress={() => navigation.navigate('Power', {name: 'Power'})}
    //   /> done
    //   <Button
    //     title="Assign Country"
    //     onPress={() =>navigation.navigate('AssignCountry', {name: 'Assign Country'})}
    //   />done
    //   <Button
    //     title="Trade Country"
    //     onPress={() =>      navigation.navigate('TradeCountry', {name: 'Trade Country'})    }
    //   />done
    //   <Button
    //     title="Teams"
    //     onPress={() => navigation.navigate('Teams', {name: 'Teams'})}
    //   />done
    //   <Button
    //     title="Add Member"
    //     onPress={() => navigation.navigate('AddMember', {name: 'Add Member'})}
    //   />

    //   <Button
    //     title="Create Country"
    //     onPress={() =>
    //       navigation.navigate('CreateCountry', {name: 'Create Country'})
    //     }
    //   />done
    //   <Button
    //     title="Create Team"
    //     onPress={() => navigation.navigate('CreateTeam', {name: 'Create Team'})}
    //   />done
    //   <Button
    //     title="Create Challenge"
    //     onPress={() =>
    //       navigation.navigate('CreateChallenge', {name: 'Create Challenge'})
    //     }
    //   />done
    // </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBox: {
    alignItems: 'center',
    marginVertical: 20,

    width: '100%',
  },
  title: {
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#89cff0',
    width: '75%',
    color: 'white',
    borderRadius: 15,
    paddingVertical: 20,
  },
  content: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
  country: {
    fontSize: 35,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 20,
  },
  button: {
    fontSize: 40,
    backgroundColor: '#599fc0',
    width: '75%',
    borderRadius: 10,

    color: 'white',
    paddingVertical: 5,
    fontWeight: 'bold',
  },
});

export default Home;
