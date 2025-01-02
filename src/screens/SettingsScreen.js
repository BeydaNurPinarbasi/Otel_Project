import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ayarlar</Text>
      
      {/* Dil Ayarı */}
      <TouchableOpacity 
        style={styles.option} 
        onPress={() => console.log('Dil Seçeneği Açıldı!')} // Butona basıldığında çalışacak kod
      >
        <Text style={styles.optionText}>Dil Seçeneği</Text>
      </TouchableOpacity>

      {/* Tema Ayarı */}
      <TouchableOpacity 
        style={styles.option} 
        onPress={() => console.log('Tema Seçimi Açıldı!')} // Butona basıldığında çalışacak kod
      >
        <Text style={styles.optionText}>Tema: Koyu/Açık</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default SettingsScreen;
