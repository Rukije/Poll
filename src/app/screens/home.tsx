import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { Stack } from 'expo-router';

interface DataItem {
  id: string;
  image: any;
  description: string;
}

const data: DataItem[] = [
  { id: '1', image: require('../../assets/images/polling.png'), description: 'Lorem ipsum 1' },
  { id: '2', image: require('../../assets/images/polling.png'), description: 'Lorem ipsum 2' },
];

export default function Home() {
  const renderItemImage = ({ item }: { item: DataItem }) => (
    <View style={styles.column}>
      <View style={styles.imgContainer}>
        <Image
          source={item.image}
          style={styles.image}
        />
        <Text style={styles.infoText}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Stack.Screen
        options={{
          title: 'Home',
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
        <View style={styles.voted}>
          <Text style={styles.votedText}>1000 Votes</Text>
          <View style={styles.genderVotesConatiner}>
            <Text style={styles.genderVotes}>570 Females</Text>
            <Text style={styles.genderVotes}>330 Males</Text>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={renderItemImage}
          keyExtractor={(item) => item.id}
          horizontal
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: '#193C47',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 50,
  },
  voted: {
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 12,
    width: '90%',
    marginBottom: 20,
    alignItems: 'center',
  },
  votedText: {
    fontSize: 30,
    color: '#193C47',
    fontWeight: 'bold',
    fontFamily: 'Poetsen One',
  },
  genderVotesConatiner: {
    backgroundColor: '#5e767e',
    padding: 15,
    marginHorizontal: 10,
    top: 8,
    borderRadius: 5,
    width: '100%',
  },
  genderVotes: {
    color: 'white',
    textAlign: 'center',
  },
  flatListContainer: {
    marginTop: 20,
  },
  column: {
    paddingHorizontal: 10,
  },
  imgContainer: {
    flexDirection: 'row',
    backgroundColor: '#5e767e',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    margin: 10,
    borderRadius: 12,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  infoText: {
    color: 'white',
    textAlign: 'center',
    width: '50%', 
    paddingHorizontal: 10,
  },
});
