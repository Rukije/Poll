import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

const Statistics = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <View style={styles.container}>
       <Text style={styles.topTitle}>Produktet me te shitura nga kategoria Shopping</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
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
    flex: 0.48,  
  },
  topTitle:{
    padding:20,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    color: '#193C47',
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
});
