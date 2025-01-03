import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // İkonları kullanmak için
import HomeScreen from './src/screens/HomeScreen';
import HotelDetailsScreen from './src/screens/HotelDetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import FilterScreen from './src/screens/FilterScreen'; // FilterScreen'i doğru içe aktar


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Giriş, Kayıt ve Hoş Geldiniz Ekranları */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Başlık gizlendi
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }} // Başlık gizlendi
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }} // Başlık gizlendi
        />

<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={({ navigation }) => ({
    title: 'Ana Sayfa',
    headerTitleAlign: 'center', // "Welcome" metnini ortalar
    headerRight: () => (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <Icon name="filter" size={25} color="#000" style={{ marginRight: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="settings" size={25} color="#000" style={{marginRight:15}}/>
        </TouchableOpacity>
      </View>
    ),
   
  })}
/>

        
        <Stack.Screen
          name="HotelDetails"
          component={HotelDetailsScreen}
          options={({ navigation }) => ({
            title: 'Otel Detayları',
           
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Icon name="settings" size={25} color="#000" style={{ marginRight: 20 }} />
            
              </TouchableOpacity>
              
            ),
            
          })}
        />
<Stack.Screen
name="Filter"
component={FilterScreen}
options={{ title: 'Filtre'}} // Filtre sayfası başlığı 
/>

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Ayarlar' }} // Ayarlar sayfası başlığı
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
