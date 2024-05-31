// src/screens/Savedlist.tsx
import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSavedList } from '../../contexts/SaveListContext';

const SavedList = () => {
  const { Savedlist, removeFromSavedList } = useSavedList(); 

  const handleRemove = (item) => {
    removeFromSavedList(item);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Stack.Screen
        options={{
          title: 'Saved Question',
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
        <Text style={styles.topTitle}>Saved Questions</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Savedlist}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Text style={styles.title}>{item.title} ?</Text>
              <TouchableOpacity style={styles.SavedlistButton} onPress={() => handleRemove(item)}>
                <Icon name="bookmark" size={24} color="#193C47" />
              </TouchableOpacity>
            </View>
          )}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </ScrollView>
  );
};

export default SavedList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 2,
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
    textAlign:'center',
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
