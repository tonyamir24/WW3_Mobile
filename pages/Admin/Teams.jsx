import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const Teams = ({navigation}) => {
  //   const [selectedTeam, setTeam] = useState('');

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://ww3-backend-sbn1.onrender.com/teams',
    })
      .then(function (response) {
        //console.log(response.data);
        setTeams(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <ScrollView>
      <View style={style.container}>
        {teams?.map(team => {
          return (
            <TouchableOpacity
              key={team._id}
              style={style.title}
              onPress={() => {
                navigation.navigate('TeamView', {team});
              }}>
              <Text style={style.content}>{team.Name}</Text>
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
});

export default Teams;
