import { FlatList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSavedList } from '../../contexts/SaveListContext';
const Statistics = () => {
  const [products, setProducts] = useState([]);
  const { addToSavedList } = useSavedList(); 

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    const URL = "https://fakestoreapi.com/products";

    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        console.log(data);
      });
  };

  const handleAddToSavedList = (item) => {
    addToSavedList(item);
    console.log(`${item.title} u shtua`);
  };

  return (
    <ScrollView >
      <Stack.Screen
        options={{
          title: 'Question',
          headerStyle: {
            backgroundColor: '#193C47',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <View style={styles.container}>
        <Text style={styles.topTitle}>Pyetje me te kerkuara</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
              <Text style={styles.title}>{item.title}?</Text>
              <TouchableOpacity onPress={() => handleAddToSavedList(item)} style={styles.SavedlistButton}>
                <Icon name="bookmark-outline" size={24} color="#193C47" />
              </TouchableOpacity>
            </View>
          )}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
     </ScrollView> 
  );
};

export default Statistics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#193C47',
  },
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: '#193C47',
    alignItems: 'center',
    paddingVertical: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginVertical: 10,
    width:'50%',
    flex: 0.48,
    position: 'relative',
  },
  topTitle: {
    padding: 20,
    textAlign:'center',
    color: '#fff',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    color: '#193C47',
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
  SavedlistButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
