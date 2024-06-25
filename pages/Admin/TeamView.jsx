import React from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const TeamView = ({navigation, route}) => {
  const {team} = route.params;
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.text}>Name : {team.Name}</Text>
        <Text style={style.text}>Power : {team.Power}</Text>
        <Text style={style.text}>Coins : {team.Coins}</Text>
        <TouchableOpacity
          style={style.title}
          onPress={() => {
            navigation.navigate('Members', {team});
          }}>
          <Text style={style.content}>Members</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() => {
            navigation.navigate('Countries', {team});
          }}>
          <Text style={style.content}>Countries</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  titledis: {
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#89cff0',
    width: '75%',
    color: 'white',
    borderRadius: 15,
    paddingVertical: 20,
    opacity: 0.5,
  },
  content: {
    fontSize: 40,
    color: 'white',
  },

  text: {
    fontSize: 40,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 20,
  },
});

export default TeamView;
