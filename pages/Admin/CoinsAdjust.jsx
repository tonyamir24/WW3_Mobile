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

const CoinsAdjust = () => {
  const [selectedTeam, setTeam] = useState('');
  const [teams, setTeams] = useState([]);

  const [coins, setCoins] = useState('');
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
    console.log(selectedTeam, coins);
    try {
      setIsLoading(true);

      console.log('hey');

      const {team} = await axios.put(
        'https://ww3-backend-sbn1.onrender.com/updateCoins',
        {
          Name: selectedTeam,
          Coins: coins,
        },
      );
      const newteam = teams.map(obj => {
        console.log(obj);
        if (obj.Name === selectedTeam) {
          const newCoins = Number(obj.Coins) + Number(coins);
          return {...obj, Coins: newCoins};
        }
        return obj;
      });
      console.log(newteam);
      setTeams(newteam);
      Alert.alert('Add Successfuly');
      console.log(team);
      setTeam('');
      setCoins('');
      setIsLoading(false);
    } catch (err) {
      Alert.alert(err.message);
      setTeam('');
      setCoins('');
      setIsLoading(false);
    }
  };
  return (
    <ScrollView>
      <View style={style.container}>
        {teams?.map(team => {
          return (
            <TouchableOpacity
              key={team._id}
              style={selectedTeam === team.Name ? style.titledis : style.title}
              onPress={() => {
                setTeam(team.Name);
              }}
              disabled={selectedTeam === team.Name}>
              <Text style={style.content}>
                {team.Name} : {team.Coins}
              </Text>
            </TouchableOpacity>
          );
        })}
        <TextInput
          editable
          maxLength={40}
          keyboardType="numeric"
          onChangeText={setCoins}
          value={coins}
          style={style.input}
          placeholder="Add Coins"
        />
        <Button
          style={style.button}
          title="Submit"
          onPress={handleSubmit}
          disabled={isLoading}
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
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 20,
  },
});

export default CoinsAdjust;
