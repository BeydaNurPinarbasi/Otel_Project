import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Favori ikonu için

// Otellerin verisi
const hotels = [
  { 
    id: '1', 
    name: 'Otel A', 
    location: 'İstanbul', 
    rating: 4.5, 
    price: '1000₺/gece', 
    breakfast: 'Ücretsiz Kahvaltı', 
    parking: 'Ücretsiz Otopark' 
  },
  { 
    id: '2', 
    name: 'Otel B', 
    location: 'Ankara', 
    rating: 4.0, 
    price: '900₺/gece', 
    breakfast: 'Ücretsiz Kahvaltı', 
    parking: 'Ücretsiz Otopark' 
  },
  { 
    id: '3', 
    name: 'Otel C', 
    location: 'İzmir', 
    rating: 3.8, 
    price: '800₺/gece', 
    breakfast: 'Ücretsiz Kahvaltı', 
    parking: 'Ücretsiz Otopark' 
  },
  { 
    id: '4', 
    name: 'Otel D', 
    location: 'Bursa', 
    rating: 4.3, 
    price: '1100₺/gece', 
    breakfast: 'Ücretsiz Kahvaltı', 
    parking: 'Ücretsiz Otopark' 
  },
  { 
    id: '5', 
    name: 'Otel E', 
    location: 'Antalya', 
    rating: 4.2, 
    price: '950₺/gece', 
    breakfast: 'Ücretsiz Kahvaltı', 
    parking: 'Ücretsiz Otopark' 
  },
  { 
    id: '6', 
    name: 'Otel F', 
    location: 'Trabzon', 
    rating: 4.7, 
    price: '1200₺/gece', 
    breakfast: 'Ücretsiz Kahvaltı', 
    parking: 'Ücretsiz Otopark' 
  },
  { 
    id: '7', 
    name: 'Otel G', 
    location: 'Samsun', 
    rating: 3.9, 
    price: '850₺/gece', 
    breakfast: 'Ücretsiz Kahvaltı', 
    parking: 'Ücretsiz Otopark' 
  },
  { 
    id: '8', 
    name: 'Otel H', 
    location: 'Konya', 
    rating: 4.1, 
    price: '1050₺/gece', 
    breakfast: 'Ücretsiz Kahvaltı', 
    parking: 'Ücretsiz Otopark' 
  },
  { 
    id: '9', 
    name: 'Otel I', 
    location: 'Kayseri', 
    rating: 4.4, 
    price: '1150₺/gece', 
    breakfast: 'Ücretsiz Kahvaltı', 
    parking: 'Ücretsiz Otopark' 
  },
  { 
    id: '10', 
    name: 'Otel J', 
    location: 'Eskişehir', 
    rating: 3.7, 
    price: '800₺/gece', 
    breakfast: 'Ücretsiz Kahvaltı', 
    parking: 'Ücretsiz Otopark' 
  },
];

const HomeScreen = ({ navigation }) => {

  // Otel kartını render eden fonksiyon
  const renderHotel = ({ item }) => (
    <TouchableOpacity 
      style={styles.hotelCard} 
      onPress={() => navigation.navigate('HotelDetails', { hotel: item })}
    >
      <Text style={styles.hotelName}>{item.name}</Text>
      <Text style={styles.hotelInfo}>{item.location} - {item.rating} ★</Text>
      <Text style={styles.hotelInfo}>💵 Fiyat: {item.price}</Text>
      <Text style={styles.hotelInfo}>🍳 {item.breakfast}</Text>
      <Text style={styles.hotelInfo}>🚗 {item.parking}</Text>

      {/* Favori ikonu */}
      <MaterialIcons name="favorite-border" size={24} color="red" style={styles.favoriteIcon} />
    </TouchableOpacity>
  );

  return (
    <FlatList 
      style={styles.container}
      data={hotels} 
      renderItem={renderHotel} 
      keyExtractor={(item) => item.id} 
      ListHeaderComponent={<Text style={styles.title}>Oteller</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  hotelCard: { 
    padding: 15, 
    borderRadius: 8, 
    backgroundColor: '#f5f5f5', 
    marginBottom: 10,
    elevation: 3, // Kart gölgelendirme efekti
  },
  hotelName: { 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  hotelInfo: { 
    fontSize: 14, 
    color: '#555' 
  },
  favoriteIcon: { 
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default HomeScreen;
