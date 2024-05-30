// src/screens/wishlist.tsx
import { ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { useWishList } from '../../contexts/WishListContext';
const WishList = () => {
  const { wishlist } = useWishList(); 

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Stack.Screen
        options={{
          title: 'My WishList',
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
        <Text style={styles.topTitle}>My Wishlist</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={wishlist}
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
    </ScrollView>
  );
};

export default WishList;

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
    flex: 0.48,
  },
  topTitle: {
    padding: 20,
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
});
