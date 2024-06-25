import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const Egtma3at = ({navigation}) => {
  return (
    <ScrollView>
      <View style={style.containerBox}>
        <TouchableOpacity style={style.title}>
          <Text
            style={style.content}
            onPress={() => {
              navigation.navigate('QR', {num: 3});
            }}>
            First
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() => {
            navigation.navigate('QR', {num: 6});
          }}>
          <Text style={style.content}>Second</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() => {
            navigation.navigate('QR', {num: 9});
          }}>
          <Text style={style.content}>Third</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() => {
            navigation.navigate('QR', {num: 12});
          }}>
          <Text style={style.content}>Fourth</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() => {
            navigation.navigate('QR', {num: 15});
          }}>
          <Text style={style.content}>Fifth</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() => {
            navigation.navigate('QR', {num: 18});
          }}>
          <Text style={style.content}>Sixth</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() => {
            navigation.navigate('QR', {num: 21});
          }}>
          <Text style={style.content}>First Magmo3a</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() => {
            navigation.navigate('QR', {num: 24});
          }}>
          <Text style={style.content}>Second Magmo3a</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.title}
          onPress={() => {
            navigation.navigate('QR', {num: 27});
          }}>
          <Text style={style.content}>Second Magmo3a</Text>
        </TouchableOpacity>
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
  content: {
    fontSize: 40,
    color: 'white',
  },
});

export default Egtma3at;
