import React, { useEffect, useRef,useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Animated, Alert, TouchableOpacity,TextInput,Button} from 'react-native';
import { Stack } from 'expo-router';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

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

// const handleButtonPress = () => {
//   Alert.alert('Button Pressed', `You typed: ${text}`);
// };
export default function Home() {
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const translateYAnim = useRef(new Animated.Value(-20)).current; 
  const [text, setText] = useState('');

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

  // News
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
  // end news
  const TriangleWrapper = styled.View`
  width: 450px;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Triangle = styled.View`
  width: 0;
  height: 0;
  border-left-width: 50px;
  border-right-width:450px;
  border-bottom-width: 250px;

  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #193C47;
`;

const OverlayText = styled.Text`
  position: absolute;
  font-size:40px;
  color: #fff;
  fontWeight:bold;
  left:80;
  marginTop:30;
  width:120;
`;

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
      {/* Votuesit */}
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Kerko..."
          placeholderTextColor="white"
        />
        <FontAwesome name="search" size={24} color="white" style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Politike</Text>
        <Text style={styles.text}>Art</Text>
        <Text style={styles.text}>Sport</Text>
      </View>

        <View style={styles.voted}>
          <Text style={styles.votedText}>1000 Vota</Text>
          <View style={styles.genderVotesConatiner}>
            <Text style={styles.genderVotes}>570 Femra</Text>
            <Text style={styles.genderVotes}>330 Meshkuj</Text>
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
            {/* Votuesit */}

      {/*  lets get started on voting section  */}
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
            <FontAwesome5 name="camera" size={32} color="white" />
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
      {/*  lets get started on voting section  */}

      {/* last viewed */}
      <View style={styles.viewedSection}>
        <Text style={styles.viewedSectionText}>Last Viewed </Text>
      
      <View style={styles.iconViewsContainer}>
        {/* <View style={styles.iconViewWrapper}>
          <View style={styles.iconViewsCircle}>
            <MaterialIcons name="man" size={32} color="#193C47" />
          </View>
          <Text style={styles.iconLabel}>Politikë</Text>
        </View> */}
        <View style={styles.iconWrapper}>
          <Image source={require('../../assets/images/boy.webp')} style={styles.iconImage} />
        </View>
        <View style={styles.iconWrapper}>
          <Image source={require('../../assets/images/girl.jpg')} style={styles.iconImage} />
        </View>
        <View style={styles.iconWrapper}>
        <Image source={require('../../assets/images/boy.webp')} style={styles.iconImage} />
        </View>
        <View style={styles.iconWrapper}>
          <Image source={require('../../assets/images/girl.jpg')} style={styles.iconImage} />
        </View>       
      </View>
      
      <View style={styles.activePollsContainer}>
         <View style={styles.activePolls}>
            <Text style={styles.textActivePoll}>12 Active Polls</Text>
            <Text style={styles.innertextActivePoll}>Show Details</Text>
         </View>
      <View style={styles.detailIcon}>
         <FontAwesome5 name="forward" size={32} color="white" />
      </View>
      </View>
      <View>  
      <TriangleWrapper>
        <Triangle />
        <Image source={require('../../assets/images/light.png')} style={styles.iconTriangle} />
        <Text style={styles.descriptionText}>Statistics is the study and manipulation of data, including ways </Text>
      </TriangleWrapper>
  
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
    paddingBottom: 120,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  icon: {
    marginLeft: 8,
    borderRadius:25,
    padding:10,
    backgroundColor:'white',
    color:'#193C47',
    bottom:9,
  },
  textContainer: {
    flexDirection: 'row',
  },
  text: {
    marginHorizontal: 10, 
    fontSize:18,
    color: 'white',
    borderWidth:3,
    borderColor:'white',
    borderRadius:10,
    paddingHorizontal:30,
    paddingVertical: 6, 
    marginBottom:20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius:15,
    paddingHorizontal: 8,
    width: 300,
    color:'white',
    marginBottom: 16,
  },
  displayText: {
    fontSize: 16,
    marginTop: 16,
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
  },
  genderVotesConatiner: {
    backgroundColor: '#5e767e',
    padding: 15,
    marginHorizontal: 10,
    marginTop: 10,
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
    fontSize: 25,
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
    letterSpacing: 1,
  },
  voteSectionText: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
  voteSectionText2: {
    color: 'yellow',
    fontStyle: 'italic',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1%',
  },
  iconLabel: {
    color: 'white',
    fontSize: 16,
  },
  viewedSection: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  viewedSectionText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#193C47',
    fontWeight: '600',
    marginBottom: 20,
  },
  iconViewsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  iconViewWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  iconViewsCircle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#193C47',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '2%',
  },
  iconImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  activePollsContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  activePolls: {
    backgroundColor: '#193C47',
    padding: 20,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
  },
  textActivePoll: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  innertextActivePoll: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: 5,
  },
  detailIcon: {
    marginTop: 10,
  },
  triangleWrapper: {
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#193C47',
  },
  iconTriangle: {
    position: 'absolute',
    width: 140,
    height: 140,
    left: 50,
    bottom: 20,
  },
  descriptionText: {
    position: 'absolute',
    color: '#193C47',
    fontSize: 20,
    width: 220,
    right: 40,
    top: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

