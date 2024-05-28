import { StyleSheet, Text, View, ScrollView, TextInput,Animated } from 'react-native';
import React, { useState,useEffect} from 'react';
import { Stack } from 'expo-router';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');



  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Stack.Screen
        options={{
          title: 'Search based on category',
          headerStyle: {
            backgroundColor: '#193C47',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>Search</Text>
      </View>
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: '#193C47',
    alignItems: 'center',
    paddingVertical: 20,
  },
  searchContainer: {
    width: '90%',
    marginVertical: 20,
  },
  searchInput: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 35,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  resultContainer: {
    alignItems: 'center',
  },
  resultText: {
    color: '#fff',
    backgroundColor:'#5e767e',
    padding:25,
    borderRadius: 35,
    textAlign:'center',
    fontWeight:'600',
    width:150,
    fontSize: 18,
  },
});
