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

const CreateChallenge = ({navigatio}) => {
  // ID, Message, Reward, Value
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const [ID, setID] = useState('');

  // console.log(country);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!message) {
      Alert.alert('Please write a message');
    } else if (!ID) {
      Alert.alert('Please select ID');
    } else if (!value) {
      setValue('0');
    } else {
      try {
        setIsLoading(true);

        // console.log('hey');
        // console.log(countryTeam, selectedTeam, country, price);
        const res = await axios.post(
          'https://ww3-backend-sbn1.onrender.com/challenge',
          {
            Message: message,
            Reward: true,
            Value: value,
            ID,
          },
        );
        Alert.alert('Added ');
        console.log(res);
        setMessage('');
        setID('');
        setValue('');
        setIsLoading(false);
      } catch (error) {
        Alert.alert(error.response.data.error);
        setMessage('');
        setID('');
        setValue('');
        setID('');

        setIsLoading(false);
      }
    }
  };
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.country}>Enter QR code ID:</Text>

        <TextInput
          editable
          maxLength={40}
          keyboardType="numeric"
          onChangeText={setID}
          value={ID}
          style={style.input}
          placeholder="ID"
        />
        <Text style={style.country}>Enter Challenge's Message:</Text>

        <TextInput
          editable
          onChangeText={setMessage}
          value={message}
          style={style.input}
          placeholder="Message.."
        />
        <Text style={style.country}>Enter Value if any... :</Text>

        <TextInput
          editable
          maxLength={40}
          onChangeText={setValue}
          value={value}
          style={style.input}
          placeholder="0"
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

export default CreateChallenge;
