import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const hotels = [
  { id: '1', name: 'Otel A', location: 'İstanbul', rating: 4.5 },
  { id: '2', name: 'Otel B', location: 'Ankara', rating: 4.0 },
  { id: '3', name: 'Otel C', location: 'İzmir', rating: 3.8 },
];

const HomeScreen = ({ navigation }) => {
  const renderHotel = ({ item }) => (
    <TouchableOpacity 
      style={styles.hotelCard} 
      onPress={() => navigation.navigate('HotelDetails', { hotel: item })}
    >
      <Text style={styles.hotelName}>{item.name}</Text>
      <Text style={styles.hotelInfo}>{item.location} - {item.rating} ★</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oteller</Text>
      <FlatList 
        data={hotels} 
        renderItem={renderHotel} 
        keyExtractor={(item) => item.id} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  hotelCard: { padding: 15, borderRadius: 8, backgroundColor: '#f5f5f5', marginBottom: 10 },
  hotelName: { fontSize: 18, fontWeight: 'bold' },
  hotelInfo: { fontSize: 14, color: '#555' },
});

export default HomeScreen;
