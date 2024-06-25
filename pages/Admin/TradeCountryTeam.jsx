import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const TradeCountryTeam = ({navigation, route}) => {
  const {country, countryTeam} = route.params;
  const [selectedTeam, setTeam] = useState('');
  const [price, setPrice] = useState('');
  const [teams, setTeams] = useState([]);
  // console.log(country);
  const [isLoading, setIsLoading] = useState(false);
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
  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      // console.log('hey');
      // console.log(countryTeam, selectedTeam, country, price);
      const res = await axios.put(
        'https://ww3-backend-sbn1.onrender.com/tradeCountry',
        {
          TeamName1: countryTeam,
          TeamName2: selectedTeam,
          CountryName: country,
          Price: price,
        },
      );
      Alert.alert('Traded Successfuly');
      console.log(res);
      setTeam('');
      setIsLoading(false);
      setPrice('');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert(error.response.data.error);
      setTeam('');
      setPrice('');

      setIsLoading(false);
    }
  };
  return (
    <ScrollView>
      <Button
        style={style.button}
        title="Submit"
        onPress={handleSubmit}
        disabled={isLoading}
      />
      <Text style={style.country}>
        From: {countryTeam} {country} To
      </Text>
      <View style={style.container}>
        {teams?.map(team => {
          if (team.Name !== countryTeam) {
            return (
              <TouchableOpacity
                key={team._id}
                style={
                  selectedTeam === team.Name ? style.titledis : style.title
                }
                onPress={() => {
                  setTeam(team.Name);
                }}
                disabled={selectedTeam === team.Name}>
                <Text style={style.content}>{team.Name}</Text>
              </TouchableOpacity>
            );
          }
        })}
        <TextInput
          editable
          maxLength={40}
          keyboardType="numeric"
          onChangeText={setPrice}
          value={price}
          style={style.input}
          placeholder="Price"
        />
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
});

export default TradeCountryTeam;
