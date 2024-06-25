import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage/src';

const TeamView = ({navigation}) => {
  //const {name} = route.params;
  const [name, setName] = useState('');
  const [team, setTeam] = useState([]);
  const getUser = async () => {
    try {
      const t = JSON.parse(await AsyncStorage.getItem('team'));
      setName(t);
      console.log(team);
    } catch (error) {
      console.log(error);
    }
  };
  getUser();
  useEffect(() => {
    console.log(name);
    axios({
      method: 'get',
      url: `https://ww3-backend-sbn1.onrender.com/teams/${name}`,
    })
      .then(function (response) {
        console.log(response.data);
        setTeam(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [name]);

  return (
    <View style={style.image} resizeMode="cover">
      <ImageBackground
        source={require('../../assets/images/2.png')}
        resizeMode="cover"
        style={style.image}>
        <ScrollView>
          <View style={style.container}>
            <TouchableOpacity
              style={style.containerBox}
              onPress={() => navigation.navigate('QR', {name: 'Team 2'})}>
              <Image
                style={style.icon}
                source={require('../../assets/images/fotor_2023-8-16_17_37_23-fotor-20230816173851.png')}
              />
            </TouchableOpacity>
            {/* team Number */}
            <View style={style.teamno}>
              <View style={style.teamnocircle}>
                <TouchableOpacity style={{alignContent: 'center'}}>
                  <Text style={style.textteamnoo}>
                    {team?.Name?.substr(-1)}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={style.textteamno}> {team?.Name}</Text>
            </View>
            {/* team Coins */}
            <View style={style.coins}>
              <View style={style.coinscircle}>
                <TouchableOpacity style={{alignContent: 'center'}}>
                  <Text style={style.textcoins}> {team?.Coins}</Text>
                </TouchableOpacity>
              </View>
              <Text style={style.coinsteamno}> BIZOS</Text>
            </View>
            {/* team Power */}
            <View style={style.coins}>
              <View style={style.coinscircle}>
                <TouchableOpacity style={{alignContent: 'center'}}>
                  <Text style={style.textcoins}> {team?.Power}</Text>
                </TouchableOpacity>
              </View>
              <Text style={style.coinsteamno}> Power</Text>
            </View>
            <View style={style.under}>
              <TouchableOpacity
                style={style.containerBox2}
                onPress={() => {
                  navigation.navigate('Members', {team});
                }}>
                <Image
                  style={style.iconn}
                  source={require('../../assets/images/link.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={style.containerBox2}
                onPress={() => {
                  navigation.navigate('Countries', {team});
                }}>
                <Image
                  style={style.iconn}
                  source={require('../../assets/images/countries.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
const style = StyleSheet.create({
  icon: {
    width: '60%',
    resizeMode: 'contain',
  },
  iconn: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBox: {
    alignItems: 'center',

    width: '100%',
  },
  containerBox2: {
    alignItems: 'center',

    width: '40%',
    marginVertical: 30,
  },
  title: {
    alignItems: 'center',
    marginVertical: 20,
    width: '50%',
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

  text: {
    fontSize: 40,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 20,
  },
  teamno: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  teamnocircle: {
    borderWidth: 6,
    borderColor: '#d80000',
    justifyContent: 'center',
    borderRadius: 50,
    width: 80,
    height: 80,
    marginTop: -10,
    backgroundColor: '#575757',
  },
  textteamno: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
  },
  textteamnoo: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
  coins: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  coinscircle: {
    borderWidth: 7,
    borderColor: '#36353c',
    justifyContent: 'center',
    borderRadius: 50,
    width: 70,
    height: 70,
    backgroundColor: '#d80000',
    padding: 2,
  },
  coinsteamno: {
    color: 'white',
    textAlign: 'center',
    fontSize: 35,
  },
  textcoins: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  under: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default TeamView;
