import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Animated, Alert, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; // Import icons

interface DataItem {
  id: string;
  image: any;
  description: string;
  buttonLabel: string;
  buttonAction: () => void;
}

const data: DataItem[] = [
  { id: '2', image: require('../../assets/images/news2.jpg'), description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visualr', buttonLabel: 'Lexo me shume...', buttonAction: () => Alert.alert('Test Test :)') },
  { id: '1', image: require('../../assets/images/news1.webp'), description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual ', buttonLabel: 'Lexo me shume...', buttonAction: () => Alert.alert('Test Test :)') },
  { id: '3', image: require('../../assets/images/polling.png'), description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visualr', buttonLabel: 'Lexo me shume...', buttonAction: () => Alert.alert('Test Test :)') },
];

export default function Home() {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const translateYAnim = useRef(new Animated.Value(-20)).current; 

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1, 
        duration: 1400, 
        useNativeDriver: true, 
      }),
      Animated.timing(translateYAnim, {
        toValue: 0, 
        duration: 1400, 
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, translateYAnim]);

  const renderItemImage = ({ item }: { item: DataItem }) => (
    <Animated.View style={[ { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }]}>
      <View style={styles.imgContainer}>
        <Image
          source={item.image}
          style={styles.image}
        />
        <Text style={styles.infoText}>{item.description}</Text>
        <TouchableOpacity style={styles.button} onPress={item.buttonAction}>
          <Text style={styles.buttonText}>{item.buttonLabel}</Text>
        </TouchableOpacity>
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
      <View style={styles.container}>
        <View style={styles.voted}>
          <Text style={styles.votedText}>1000 Votes</Text>
          <View style={styles.genderVotesConatiner}>
            <Text style={styles.genderVotes}>570 Females</Text>
            <Text style={styles.genderVotes}>330 Males</Text>
          </View>
        </View>
        <View>
          <Text style={styles.news}>News</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItemImage}
          keyExtractor={(item) => item.id}
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
      <View style={styles.voteSection}>
        <Text style={styles.voteSectionText}>Let's get starting on <Text style={styles.voteSectionText2}>VOTING !</Text></Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <View style={styles.iconCircle}>
            <MaterialIcons name="how-to-vote" size={32} color="white" />
          </View>
          <Text style={styles.iconLabel}>Politikë</Text>
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.iconCircle}>
            <FontAwesome5 name="music" size={32} color="white" />
          </View>
          <Text style={styles.iconLabel}>Muzikë</Text>
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.iconCircle}>
            <FontAwesome5 name="art" size={32} color="white" />
          </View>
          <Text style={styles.iconLabel}>Art</Text>
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.iconCircle}>
            <MaterialIcons name="computer" size={32} color="white" />
          </View>
          <Text style={styles.iconLabel}>Teknologji</Text>
        </View>
        
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
    top: 10,
    borderRadius: 5,
    width: '100%',
  },
  genderVotes: {
    color: 'white',
    textAlign: 'center',
  },
  flatListContainer: {
    alignItems: 'center', 
  },
  news: {
    color: 'white',
    fontSize: 30,
    borderBottomWidth: 3,
    borderColor: 'white',
    padding: 10,
  },
  imgContainer: {
    flexDirection: 'column', 
    backgroundColor: '#5e767e',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    margin: 10,
    borderRadius: 12,
    shadowColor: 'white', 
    shadowOffset: { width: 10, height: 14 }, 
    shadowOpacity: 0.85, 
    shadowRadius: 6.84, 
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
    padding: 20,
    width: 260, 
    paddingVertical: 2,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#193C47',
    fontSize: 16,
    fontWeight: 'bold',
  },
  voteSection: {
    padding: 20,
    letterSpacing:10,
  },
  voteSectionText: {
    color: 'white',
    fontSize: 40,
  },
  voteSectionText2: {
    color: 'yellow',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom:80,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 5,
    margin:'1%',
  },
  iconLabel: {
    color: 'white',
    fontSize: 16,
  },
});
