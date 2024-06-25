import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  ImageBackground,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage/src';

const AssignCountry = ({navigation, route}) => {
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

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios({
      method: 'get',
      url: 'https://ww3-backend-sbn1.onrender.com/country',
    })
      .then(function (response) {
        console.log(response.data);
        setCountries(response.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const handleSubmit = async () => {
    if (selectedCountry) {
      try {
        setIsLoading(true);

        console.log('hey');

        const {team} = await axios.put(
          'https://ww3-backend-sbn1.onrender.com/assignCountry',
          {
            TeamName: name,
            CountryName: selectedCountry,
          },
        );
        Alert.alert('Assigned Successfuly');
        console.log(team);
        setIsLoading(false);
        navigation.navigate('TeamView');
      } catch (error) {
        Alert.alert(error.response.data.error);
        setIsLoading(false);
      }
    }
  };
  return (
    <ImageBackground
      source={require('../../assets/images/2.png')}
      resizeMode="cover"
      style={style.image}>
      <ScrollView>
        <View style={style.container}>
          <TouchableOpacity
            style={style.containerBox}
            onPress={() => navigation.pop()}>
            <Image
              style={style.icon}
              source={require('../../assets/images/fotor_2023-8-16_17_37_23-fotor-20230816173851.png')}
            />
          </TouchableOpacity>
          <Button
            style={style.button}
            title="Submit"
            onPress={handleSubmit}
            disabled={isLoading}
          />
          {countries?.map(country => {
            return (
              <TouchableOpacity
                key={country._id}
                style={
                  selectedCountry === country.Name
                    ? style.titledis
                    : country.TeamName !== 'none'
                    ? style.titledis
                    : style.title
                }
                onPress={() => {
                  setCountry(country.Name);
                }}
                disabled={
                  selectedCountry === country.Name ||
                  country.TeamName !== 'none'
                }>
                <Text style={style.content}>
                  {country.Name}{' '}
                  {country.TeamName !== 'none' ? ': Taken' : country.Price}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const style = StyleSheet.create({
  icon: {
    marginTop: -40,
    marginBottom: -40,
    width: '70%',
    resizeMode: 'contain',
  },

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
    width: '75%',
    color: 'white',
    borderRadius: 20,
    paddingVertical: 20,
    borderWidth: 6,
    borderColor: '#d80000',
    backgroundColor: '#575757',
  },
  titledis: {
    alignItems: 'center',
    marginVertical: 20,
    width: '75%',
    color: 'white',
    borderRadius: 20,
    paddingVertical: 20,
    borderWidth: 6,
    borderColor: '#d80000',
    backgroundColor: '#a0a0a0',
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

export default AssignCountry;
