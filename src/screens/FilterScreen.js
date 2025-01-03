import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FilterScreen = ({ navigation }) => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (text) => {
    setFilterText(text);
  };

  const applyFilter = () => {
    // Filtreyi uygula ve bir şeyler yap
    alert(`Filtre uygulandı: ${filterText}`);
    navigation.goBack();  // Filtre uygulandıktan sonra geri dön
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtrele</Text>
      <TextInput
        style={styles.input}
        placeholder="Filtre metnini girin"
        value={filterText}
        onChangeText={handleFilterChange}
      />
      <Button title="Filtreyi Uygula" onPress={applyFilter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default FilterScreen;
