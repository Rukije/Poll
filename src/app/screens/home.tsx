import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Animated } from 'react-native';
import { Stack } from 'expo-router';

interface DataItem {
  id: string;
  image: any;
  description: string;
}

const data: DataItem[] = [
  { id: '1', image: require('../../assets/images/news1.webp'), description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual ' },
  { id: '2', image: require('../../assets/images/news2.jpg'), description: 'In publishing and graphic design, Lorem ipsum is a placeholder' },
  // { id: '2', image: require('../../assets/images/polling.png'), description: 'In publishing and graphic design, Lorem ipsum is a placeholder' },

];

export default function Home() {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const translateYAnim = useRef(new Animated.Value(-20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000, 
        useNativeDriver: true, 
      }),
      Animated.timing(translateYAnim, {
        toValue: 0, 
        duration: 1000,
        useNativeDriver: true, 
      }),
    ]).start();
  }, [fadeAnim, translateYAnim]);

  const renderItemImage = ({ item }: { item: DataItem }) => (
    <Animated.View style={[styles.column, { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }]}>
      <View style={styles.imgContainer}>
        <Image
          source={item.image}
          style={styles.image}
        />
        <Text style={styles.infoText}>{item.description}</Text>
      </View>
    </Animated.View>
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
       <Animated.View style={[styles.column, { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }]}>
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
          showsVerticalScrollIndicator
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
      </Animated.View>
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
    marginTop: 20,
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
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 12,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 25,
    marginBottom: 10,
  },
  infoText: {
    color: 'white',
    textAlign: 'center',
    width: '50%', 
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
});
