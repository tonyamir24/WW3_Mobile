import axios from 'axios';
import React, {useState, useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage/src';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Alert,
  ImageBackground,
} from 'react-native';
const UserHome = ({navigation}) => {
  const [team, setTeam] = useState('');
  const [teaminfo, setTeaminfo] = useState('');

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const storeUser = async value => {
    try {
      await AsyncStorage.setItem('team', JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  // getting data
  const getUser = async () => {
    try {
      const t = JSON.parse(await AsyncStorage.getItem('team'));
      setTeam(t);
      console.log(team);
    } catch (error) {
      console.log(error);
    }
  };

  if (team) {
    navigation.navigate('TeamView', {name: 'Team 2'});
  }

  getUser();
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      axios({
        method: 'get',
        url: `https://ww3-backend-sbn1.onrender.com/teams/${name}`,
      }).then(function (response) {
        console.log(response.data);
        if (response.data.Password === password) {
          storeUser(response.data.Name);
          setTeaminfo(response.data);
        } else {
          Alert.alert('Wrong Password');
        }
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error.response.data.error);
      setIsLoading(false);
    }
  };
  return (
    <View style={style.image} resizeMode="cover">
      {/* <ScrollView style={style.image}> */}
      <ImageBackground
        source={require('../../assets/images/2.png')}
        resizeMode="cover"
        style={style.image}>
        {!team && (
          <View style={style.container}>
            <Text style={style.country}>Enter Team's Name:</Text>

            <TextInput
              editable
              maxLength={40}
              onChangeText={setName}
              value={name}
              style={style.input}
              placeholder="Name"
            />
            <Text style={style.country}>Enter Team's Password</Text>

            <TextInput
              editable
              secureTextEntry={true}
              maxLength={40}
              onChangeText={setPassword}
              value={password}
              style={style.input}
              placeholder="Password"
            />
            <TouchableOpacity
              style={style.button}
              onPress={handleSubmit}
              disabled={isLoading}>
              <Text style={style.content}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </ImageBackground>
      {/* </ScrollView> */}
    </View>
  );
};
const style = StyleSheet.create({
  icon: {
    marginTop: -40,
    marginBottom: -40,
    width: '60%',
    resizeMode: 'contain',
  },
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
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

export default UserHome;
