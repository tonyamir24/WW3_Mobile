import React from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';

const Members = ({navigation, route}) => {
  const {team} = route.params;
  console.log(team);
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
          {team.Members?.map(member => {
            return (
              <TouchableOpacity key={member._id} style={style.title}>
                <Text style={style.content}>{member.NickName}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const style = StyleSheet.create({
  image: {
    flex: 1,
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

    // justifyContent: 'center',
    // borderRadius: 50,
    // width: 80,
    // height: 80,
    // marginTop: -10,
    // backgroundColor: '#575757',
  },
  titledis: {
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#89cff0',
    width: '75%',
    color: 'white',
    borderRadius: 50,
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
  icon: {
    marginTop: -40,
    marginBottom: -40,
    width: '70%',
    resizeMode: 'contain',
  },
});

export default Members;
