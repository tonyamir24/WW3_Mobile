import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';

const TradeCountry = ({navigation}) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setCountry] = useState('');
  const [countryTeam, setTeam] = useState('');
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
  const handleSubmit = () => {
    if (selectedCountry) {
      console.log(selectedCountry);
      navigation.navigate('TradeCountryTeam', {
        name: 'Trade Country',
        country: selectedCountry,
        countryTeam,
      });
    }
  };
  return (
    <ScrollView>
      <Button
        style={style.button}
        title="Next"
        onPress={handleSubmit}
        disabled={isLoading}
      />
      <View style={style.container}>
        {countries?.map(country => {
          if (country.TeamName !== 'none') {
            return (
              <TouchableOpacity
                key={country._id}
                style={
                  selectedCountry === country.Name
                    ? style.titledis
                    : style.title
                }
                onPress={() => {
                  setCountry(country.Name);
                  setTeam(country.TeamName);
                }}
                disabled={selectedCountry === country.Name}>
                <Text style={style.content}>{country.Name}</Text>
              </TouchableOpacity>
            );
          }
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

export default TradeCountry;
