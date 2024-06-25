import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'dotenv/config';
const Attendance = ({navigation, route}) => {
  const {ID, num} = route.params;
  // const {num} = route.params;
  // const ID = 1;
  console.log('id ' + ID);
  console.log('num ' + num);
  // const person = {
  //   name: 'BasbosaAA',
  //   team: 1,
  // };
  const [person, setPerson] = useState(null);
  const [team, setTeam] = useState(null);
  const [enter, setEnter] = useState('');
  const [exit, setExit] = useState('');

  // console.log({...person, Team: 'ay yoo'});
  // const [fetchedData, setData] = useState([]);
  const apiKey = process.env.GOOGLE_API_KEY;
  const dataUri = `https://sheets.googleapis.com/v4/spreadsheets/1ugt1y_LaeeHFj70mCqMLYOEOi2e1ttQw8_027z2VcuU/values/sheet1?valueRenderOption=FORMATTED_VALUE&key=${apiKey}`;


  const today = new Date();
  const time =
    today.getHours() + 1 + ':' + today.getMinutes() + ':' + today.getSeconds();
  const [row, setRow] = useState({
    0: '',
    1: '',
    2: '',
    'الاجتماع الأول': '',
    4: '',
    5: '',
    'الاجتماع الثانى': '',
    7: '',
    8: '',
    'الاجتماع الثالث': '',
    10: '',
    11: '',
    'الاجتماع الرابع': '',
    13: '',
    14: '',
    'الاجتماع الخامس': '',
    16: '',
    17: '',
    'الأجتماع السادس': '',
    19: '',
    20: '',
    'المجموعة (2)\t\t': '',
    22: '',
    23: '',
    'المجموعة (3)': '',
    25: '',
    26: '',
    'المجموعة (4)': '',
    28: '',
    29: '',
  });
  useEffect(() => {
    axios
      .get(
        `https://sheet.best/api/sheets/132e138d-4ba1-4032-8e23-18b4551a7f3c/${ID}`,
      )
      .then(data => {
        setRow(data.data[0]);
        console.log('no ', data.data[0]);
      });
    axios({
      method: 'get',
      url: dataUri,
    })
      .then(function (response) {
        // setData(response.data);
        const id = Number(ID) + 1;
        // console.log(response.data.values[id]);

        // setData(response.data.values[id]);
        //setting time
        if (!response.data.values[id][num]) {
          setEnter(time);
        } else {
          setEnter(response.data.values[id][num]);
          if (!response.data.values[id][num + 1]) {
            setExit(time);
          } else {
            setExit(response.data.values[id][num]);
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
    axios({
      method: 'get',
      url: `https://ww3-backend-sbn1.onrender.com/member/${ID}`,
    })
      .then(function (response) {
        // setData(response.data);
        console.log(response.data);
        response.data.team.Members.map(member => {
          console.log(member);

          if (member.ID === Number(ID)) {
            setPerson(member);
          }
        });
        setTeam(response.data.team.Name);
        // setData(response.data.values[id]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [ID, num, time,dataUri]);

  const handleSubmit = () => {
    console.log('ohh yeaah', row);
    var roww;
    switch (num) {
      case 3:
        if (!exit) {
          roww = {...row, 'الاجتماع الأول': time};
          console.log(roww);
        } else {
          roww = {...row, 4: time};
        }

        setRow(roww);
        break;
      case 6:
        if (!exit) {
          roww = {...row, 'الاجتماع الثانى': time};
        } else {
          roww = {...row, 7: time};
        }
        setRow(roww);
        break;
      case 9:
        if (!exit) {
          roww = {...row, 'الاجتماع الثالث': time};
        } else {
          roww = {...row, 10: time};
        }
        setRow(roww);
        break;
      case 12:
        if (!exit) {
          roww = {...row, 'الاجتماع الرابع': time};
        } else {
          roww = {...row, 13: time};
        }
        setRow(roww);
        break;
      case 15:
        if (!exit) {
          roww = {...row, 'الاجتماع الخامس': time};
        } else {
          roww = {...row, 16: time};
        }
        setRow(roww);
        break;
      case 18:
        if (!exit) {
          roww = {...row, 'الأجتماع السادس': time};
        } else {
          roww = {...row, 19: time};
        }
        console.log('yeaaah');
        setRow(roww);
        break;
      case 21:
        if (!exit) {
          roww = {...row, 'المجموعة (2)\t\t': time};
        } else {
          roww = {...row, 22: time};
        }
        setRow(roww);
        break;
      case 24:
        if (!exit) {
          roww = {...row, 'المجموعة (3)': time};
        } else {
          roww = {...row, 25: time};
        }
        setRow(roww);
        break;

      case 27:
        if (!exit) {
          roww = {...row, 'المجموعة (4)': time};
        } else {
          roww = {...row, 28: time};
        }
        setRow(roww);
        break;
    }
    console.log('ayy yoooooo', row);
    axios
      .put(
        `https://sheet.best/api/sheets/132e138d-4ba1-4032-8e23-18b4551a7f3c/${ID}`,
        roww,
      )
      .then(data => {
        setRow(data.data[0]);
        console.log('no ', data.data[0]);
      });
    // https://ww3-backend-sbn1.onrender.com/

    if (!exit) {
      axios
        .put('https://ww3-backend-sbn1.onrender.com/attendance', {ID})
        .then(data => {
          setRow(data.data[0]);
          console.log('no ', data.data[0]);
        });
    }
    navigation.navigate('Home');
  };
  // if (fetchedData) {
  //   try {
  //     console.log('hello');
  //     const newState = fetchedData?.map(obj => {
  //       console.log(obj);
  //       if (obj.ID === '5') {
  //         return {...obj, Date: moment().format('LLL')};
  //       }

  //       return obj;
  //     });
  //     console.log(newState, 'hi');
  //     setData(newState);
  //     console.log(newState[4]);

  //   } catch (err) {
  //     if (err.response.status === 404) {
  //       console.log('Resource could not be found!');
  //     } else {
  //       console.log(err.message);
  //     }
  //   }
  // }
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.containerBox}>
          <Text style={style.title}>Name </Text>
          <Text style={style.content}>{person?.Name}</Text>
        </View>
        <View style={style.containerBox}>
          <Text style={style.title}>Team </Text>
          <Text style={style.content}>{team}</Text>
        </View>
        <View style={style.containerBox}>
          <Text style={style.title}>Time Arrived</Text>
          <Text style={style.content}>{enter}</Text>
        </View>
        <View style={style.containerBox}>
          <Text style={style.title}>Time of Exit</Text>
          <Text style={style.content}>{exit}</Text>
        </View>
        <View style={style.containerBox}>
          {/* <Button style={style.button} title="Submit" onPress={handleSubmit} /> */}
          <TouchableOpacity style={style.button} onPress={handleSubmit}>
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
    alignItems: 'center',
    marginVertical: 20,
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 40,
    backgroundColor: '#89cff0',
    width: '75%',
    textAlign: 'center',
    color: 'white',
    borderRadius: 15,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 60,
    color: 'black',
  },
  text: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    fontSize: 40,
    backgroundColor: '#599fc0',
    width: '75%',
    textAlign: 'center',
    borderRadius: 10,

    color: 'white',
    paddingVertical: 5,
    fontWeight: 'bold',
  },
});
export default Attendance;
