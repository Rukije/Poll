import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';

const LoginScreen = () => {
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
  onSubmit={() => console.log('Submitting form')} 
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
      
      <Link href={`/polls/category}`}> 
        <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
         <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </Link> 
    </>
  )}
</Formik>

      <TouchableOpacity style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      {/* <Text style={styles.orText}>OR LOGIN WITH</Text> */}
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
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#193C47',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  socialButton: {
    fontSize: 24,
    marginHorizontal: 10,
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