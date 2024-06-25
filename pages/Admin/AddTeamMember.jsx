import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';

const AddTeamMember = ({navigatio}) => {
  const [selectedTeam, setTeam] = useState('');
  const [teams, setTeams] = useState([]);
  // MemberName, NickName, ID
  const [memberName, setMemberName] = useState('');
  const [nickName, setNickName] = useState('');

  const [ID, setID] = useState('');

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
    if (!selectedTeam) {
      Alert.alert('Please choose a team');
    } else if (!ID) {
      Alert.alert('Please select ID');
    } else if (!memberName) {
      Alert.alert('Please select Members Name');
    } else if (!nickName) {
      Alert.alert('Please select Members nickName');
    } else {
      try {
        setIsLoading(true);

        // console.log('hey');
        // console.log(countryTeam, selectedTeam, country, price);
        const res = await axios.put(
          'https://ww3-backend-sbn1.onrender.com/addMembers',
          {
            Name: selectedTeam,
            MemberName: memberName,
            NickName: nickName,
            ID,
          },
        );
        Alert.alert('Added ');
        console.log(res);
        setTeam('');
        setMemberName('');
        setNickName('');
        setID('');
        setIsLoading(false);
      } catch (error) {
        Alert.alert(error.response.data.error);
        setTeam('');
        setMemberName('');
        setNickName('');
        setID('');

        setIsLoading(false);
      }
    }
  };
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.country}>Choose Team:</Text>

        {teams?.map(team => {
          return (
            <TouchableOpacity
              key={team._id}
              style={selectedTeam === team.Name ? style.titledis : style.title}
              onPress={() => {
                setTeam(team.Name);
              }}
              disabled={selectedTeam === team.Name}>
              <Text style={style.content}>{team.Name}</Text>
            </TouchableOpacity>
          );
        })}
        <Text style={style.country}>Enter ID:</Text>

        <TextInput
          editable
          maxLength={40}
          keyboardType="numeric"
          onChangeText={setID}
          value={ID}
          style={style.input}
          placeholder="ID"
        />
        <Text style={style.country}>Enter Member's Name:</Text>

        <TextInput
          editable
          maxLength={40}
          onChangeText={setMemberName}
          value={memberName}
          style={style.input}
          placeholder="Name"
        />
        <Text style={style.country}>Enter Member's Nickname:</Text>

        <TextInput
          editable
          maxLength={40}
          onChangeText={setNickName}
          value={nickName}
          style={style.input}
          placeholder="Nick Name"
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

export default AddTeamMember;
