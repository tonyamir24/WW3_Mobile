import QRCodeScanner from 'react-native-qrcode-scanner';
import React from 'react';

const QRscanner = ({navigation, route}) => {
  const {num} = route.params;
  const onRead = e => {
    navigation.navigate('Attendance', {num, ID: e.data});
  };
  return <QRCodeScanner onRead={onRead} />;
};
export default QRscanner;
