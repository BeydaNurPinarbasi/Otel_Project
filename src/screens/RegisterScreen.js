import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const RegisterScreen = ({ navigation }) => {
  const registerValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('Ad Soyad gerekli'),
    email: Yup.string().email('Geçerli bir e-posta giriniz').required('E-posta gerekli'),
    password: Yup.string().min(6, 'Şifre en az 6 karakter olmalı').required('Şifre gerekli'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
      <Formik
        initialValues={{ fullName: '', email: '', password: '' }}
        validationSchema={registerValidationSchema}
        onSubmit={(values) => {
          console.log('Kayıt Bilgileri:', values);
          navigation.navigate('Welcome'); // Başarılı kayıt sonrası Hoş Geldiniz ekranına geçiş
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Ad Soyad"
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
            />
            {errors.fullName && touched.fullName && <Text style={styles.error}>{errors.fullName}</Text>}
            <TextInput
              style={styles.input}
              placeholder="E-posta"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Şifre"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}
            <Button title="Kayıt Ol" onPress={handleSubmit} />
            <Button title="Giriş Yap" onPress={() => navigation.navigate('Login')} />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  error: { fontSize: 12, color: 'red', marginBottom: 10 },
});

export default RegisterScreen;
