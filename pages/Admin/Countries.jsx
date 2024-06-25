import React from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Countries = ({navigation, route}) => {
  const {team} = route.params;
  console.log(team);
  return (
    <ScrollView>
      <View style={style.container}>
        {team.Countries?.map(country => {
          return (
            <TouchableOpacity key={country._id} style={style.title}>
              <Text style={style.content}>{country.CountryName}</Text>
            </TouchableOpacity>
          );
        })}
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
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 20,
  },

  button: {
    width: '100%',
    alignSelf: 'flex-end',
  },
});

export default Countries;
