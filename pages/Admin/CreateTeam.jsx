import axios from 'axios';
import React, {useState} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
//Name, Price, Power, Type
const CreateTeam = ({navigatio}) => {
  const [password, setPassword] = useState('');
  // MemberName, NickName, ID
  const [name, setName] = useState('');
  // console.log(country);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name) {
      Alert.alert('Please choose a team');
    } else if (!password) {
      Alert.alert('Please select ID');
    } else {
      try {
        setIsLoading(true);

        // console.log('hey');
        // console.log(countryTeam, selectedTeam, country, price);
        const res = await axios.post(
          'https://ww3-backend-sbn1.onrender.com/teams',
          {
            Name: name,
            Password: password,
          },
        );
        Alert.alert('Added ');
        console.log(res);
        setName('');
        setPassword('');
        setIsLoading(false);
      } catch (error) {
        Alert.alert(error.response.data.error);
        setName('');
        setPassword('');
        setIsLoading(false);
      }
    }
  };
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.country}>Choose Team:</Text>

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
        <View style={style.containerBox}>
          {/* <Button style={style.button} title="Submit" onPress={handleSubmit} /> */}
          <TouchableOpacity
            style={style.button}
            onPress={handleSubmit}
            disabled={isLoading}>
            <Text style={style.text}>Submit</Text>
          </TouchableOpacity>
        </View>
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
    marginVertical: 20,
    alignItems: 'center',

    width: '100%',
  },
  title: {
    marginVertical: 20,
    backgroundColor: '#89cff0',
    width: '75%',
    color: 'white',
    borderRadius: 15,
    paddingVertical: 20,
  },
  titledis: {
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
  country: {
    fontSize: 40,
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
  text: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
});

export default CreateTeam;
