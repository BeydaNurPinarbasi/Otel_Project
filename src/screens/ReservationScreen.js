import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import DatePicker from 'react-native-date-picker';

const ReservationScreen = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [guestName, setGuestName] = useState('');
  const [roomType, setRoomType] = useState('');

  const handleReservation = () => {
    if (!guestName || !roomType) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    const reservationData = {
      guestName,
      roomType,
      checkIn,
      checkOut,
    };

    // API çağrısı yapılabilir
    console.log('Rezervasyon oluşturuldu:', reservationData);
    Alert.alert('Başarılı', 'Rezervasyonunuz oluşturuldu!');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Adınız:</Text>
      <TextInput
        placeholder="Adınızı girin"
        value={guestName}
        onChangeText={setGuestName}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />

      <Text>Oda Tipi:</Text>
      <TextInput
        placeholder="Oda tipi girin (Ör: Standart)"
        value={roomType}
        onChangeText={setRoomType}
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />

      <Text>Giriş Tarihi:</Text>
      <DatePicker date={checkIn} onDateChange={setCheckIn} />

      <Text>Çıkış Tarihi:</Text>
      <DatePicker date={checkOut} onDateChange={setCheckOut} />

      <Button title="Rezervasyon Yap" onPress={handleReservation} />
    </View>
  );
};

export default ReservationScreen;
