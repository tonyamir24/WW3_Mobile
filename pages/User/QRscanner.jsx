import QRCodeScanner from 'react-native-qrcode-scanner';
import React, {useState} from 'react';
import axios from 'axios';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage/src';

const QRscanner = ({navigation, route}) => {
  // const {name} = route.params;
  const [name, setName] = useState('');
  const getUser = async () => {
    try {
      const t = JSON.parse(await AsyncStorage.getItem('team'));
      setName(t);
    } catch (error) {
      console.log(error);
    }
  };
  getUser();
  console.log(name);
  console.log('hey');
  const onRead = async e => {
    console.log('hello');
    console.log(e.data);
    try {
      await axios
        .put('https://ww3-backend-sbn1.onrender.com/challenge', {
          TeamName: name,
          ID: e.data,
        })
        .then(data => {
          console.log(data.data.Message);
          Alert.alert(data.data.Message);
        });
    } catch (err) {
      Alert.alert(err.response.data.error);
    }
    navigation.navigate('TeamView');
  };
  return <QRCodeScanner onRead={onRead} />;
};
export default QRscanner;
