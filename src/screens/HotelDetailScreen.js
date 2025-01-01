import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // Harita entegrasyonu için
import { MaterialIcons } from '@expo/vector-icons'; // Favori ikonu için

const HotelDetailsScreen = ({ route, navigation }) => {
  const { hotel } = route.params;

  // Şehir koordinatları
  const cityCoordinates = {
    Istanbul: { latitude: 41.0082, longitude: 28.9784 },
    Izmir: { latitude: 38.4192, longitude: 27.1287 },
    Ankara: { latitude: 39.9334, longitude: 32.8597 },
    Antalya: { latitude: 36.8841, longitude: 30.7056 },
    Bursa: { latitude: 40.1951, longitude: 29.0604 },
    Trabzon: { latitude: 41.0082, longitude: 39.7265 },
    Samsun: { latitude: 41.2867, longitude: 36.33 },
    Konya: { latitude: 37.8746, longitude: 32.4856 },
    Kayseri: { latitude: 38.7369, longitude: 35.4856 },
    Eskisehir: { latitude: 39.7765, longitude: 30.5200 },
  };

  // Şehir adı üzerinden koordinatları alma
  const city = hotel.location; // Örneğin, 'İstanbul'
  const coordinates = cityCoordinates[city] || cityCoordinates.Istanbul; // Varsayılan olarak İstanbul

  const [comments, setComments] = useState([
    "Harika bir otel! Konforlu odalar, çok memnun kaldık.",
    "Çalışanlar çok yardımcıydı, özellikle resepsiyonist. Tekrar gelmeyi düşünüyorum.",
    "Otel konum olarak çok iyi. Plaja çok yakın. Tek eksiklik kahvaltı çeşitliliği.",
    "Fiyat/performans açısından mükemmel bir seçenek. Gerçekten çok beğendim!"
  ]);
  const [newComment, setNewComment] = useState('');

  // Yorum ekleme fonksiyonu
  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  // Favori otel ekleme
  const saveToFavorites = () => {
    console.log(`${hotel.name} favorilere eklendi!`);
  };

  // "Otel Hakkında" ekranına yönlendirme fonksiyonu
  const goToHotelAbout = () => {
    navigation.navigate('OtelAbout');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{hotel.name}</Text>
      <Text style={styles.info}>{hotel.location}</Text>
      <Text style={styles.info}>Rating: {hotel.rating} </Text>
      <Text style={styles.info}>Fiyat: {hotel.price}</Text>
      <Text style={styles.info}>Kahvaltı: {hotel.breakfast}</Text>
      <Text style={styles.info}>Otopark: {hotel.parking}</Text>
      <Text style={styles.info}>
        Adres: {hotel.adress ? hotel.adress : 'Adres bilgisi bulunamadı.'}
      </Text>
      
      {/* Otel Fotoğrafları */}
      <FlatList
        horizontal
        data={hotel.photos} // Otelin fotoğraflarını array olarak alıyoruz
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.hotelImage} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Harita */}
      <Text style={styles.subTitle}>Harita</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={coordinates} />
      </MapView>

      {/* Yorumlar */}
      <Text style={styles.subTitle}>Yorumlar</Text>
      <FlatList
        data={comments}
        renderItem={({ item }) => <Text style={styles.comment}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        style={styles.commentInput}
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Yorumunuzu yazın..."
      />
      <Button title="Yorum Gönder" onPress={addComment} />

      {/* Favori Ekleme */}
      <TouchableOpacity style={styles.favoriteButton} onPress={saveToFavorites}>
        <MaterialIcons name="favorite" size={30} color="red" />
        <Text style={styles.favoriteText}>Favorilere Ekle</Text>
      </TouchableOpacity>

      {/* "Otel Hakkında" Butonu */}
      <TouchableOpacity style={styles.aboutButton} onPress={goToHotelAbout}>
        <Text style={styles.aboutButtonText}>Otel Hakkında</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  info: { fontSize: 18, marginBottom: 5 },
  subTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 15 },
  hotelImage: { width: 300, height: 200, marginRight: 10 },
  map: { width: '100%', height: 250, marginVertical: 15 },
  commentInput: { 
    height: 40, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    borderRadius: 5, 
    marginBottom: 10, 
    paddingLeft: 10 
  },
  comment: { fontSize: 16, color: '#333', marginBottom: 5 },
  favoriteButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#f5f5f5', 
    padding: 10, 
    borderRadius: 5, 
    marginTop: 20 
  },
  favoriteText: { fontSize: 16, marginLeft: 10 },
  aboutButton: { 
    backgroundColor: '#4CAF50', 
    padding: 10, 
    borderRadius: 5, 
    marginTop: 20,
    alignItems: 'center',
  },
  aboutButtonText: { 
    color: '#fff', 
    fontSize: 18 
  }
});

export default HotelDetailsScreen;
