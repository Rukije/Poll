import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ onLogin }) => {
  const navigation = useNavigation();

  const loginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>POLL</Text>
      </View>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={() => {
          onLogin(); 
          navigation.navigate('polls/category');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Email or Username"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              autoCapitalize="none"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}
            
            <TouchableOpacity onPress={handleSubmit} style={styles.button}> 
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't Have Account? Sign Up</Text>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 100,
    color: '#193C47',
  },
  input: {
    height: 40,
    borderColor: '#193C47',
    borderWidth: 3,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#193C47',
    padding: 10,
    marginTop: 35,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#d32f2f',
    marginBottom: 50,
  },
  signUpContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#d32f2f',
  },
});

export default LoginScreen;
