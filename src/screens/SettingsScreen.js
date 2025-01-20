import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Güneş ve ay ikonları için

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.toggleContainer,
          { backgroundColor: isDarkMode ? '#333' : '#ddd' },
        ]}
        onPress={toggleTheme}
      >
        {/* Toggle Icon */}
        <View
          style={[
            styles.toggleCircle,
            { alignSelf: isDarkMode ? 'flex-end' : 'flex-start' },
            
          ]}
        >
          <Ionicons
            name={isDarkMode ? 'moon' : 'sunny'}
            size={25}
            color={isDarkMode ? 'Black' : 'orange'}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Tema durumu

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    console.log('Tema değiştirildi:', isDarkMode ? 'Açık' : 'Koyu');
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#f5f5f5' }]}>
      <Text style={[styles.header, { color: isDarkMode ? '#fff' : '#000' }]}>Ayarlar</Text>

      {/* Dil Ayarı */}
      <TouchableOpacity
        style={[styles.option, { backgroundColor: isDarkMode ? '#555' : '#fff' }]}
        onPress={() => console.log('Dil Seçeneği Açıldı!')}
      >
        <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#333' }]}>
          Dil Seçeneği
        </Text>
      </TouchableOpacity>

      {/* Tema Ayarı */}
      <View style={styles.themeContainer}>
        <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#333'  }]}>
          Tema: {isDarkMode ? 'Koyu' : 'Açık'}
        </Text>

        {/* Tema Değiştirme Toggle */}
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
    
  },
  themeContainer: {
    flexDirection: 'row', // Elemanları yatayda hizala
    justifyContent: 'space-between', // Aralarındaki boşluğu eşit dağıt
    alignItems: 'center', // Dikeyde ortala
    marginBottom: 10,
   
  },
  toggleContainer: {
    width: 90,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 5,
  },
  toggleCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;
