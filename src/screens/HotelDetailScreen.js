import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HotelDetailsScreen = ({ route }) => {
  const { hotel } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{hotel.name}</Text>
      <Text style={styles.info}>{hotel.location}</Text>
      <Text style={styles.info}>Rating: {hotel.rating} ★</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  info: { fontSize: 18, marginBottom: 5 },
});

export default HotelDetailsScreen;
