import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Animated, Alert, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; 
import styled from 'styled-components/native';

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
    fontSize:25,
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
  // Viewed
viewedSection:{
    backgroundColor:'white',

  },
viewedSectionText:{
    fontSize:25,
    textAlign:'center',
    padding:30,
    color:'#193C47',
    fontWeight:'600',
  },
iconViewsContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 50,
},
iconViewWrapper:{
  alignItems: 'center',
  marginBottom:50,
},
iconViewsCircle:{
  width: 80,
  height: 80,
  borderRadius: 50,
  borderWidth:3,
  borderColor:'#193C47',
  // backgroundColor: 'black',
  justifyContent: 'center',
  alignItems: 'center',
  // marginBottom: 5,
  marginHorizontal:'2%',
},
iconImage:{
  width:80,
  height:80,
  borderRadius:50,
},
activePollsContainer: {
  position: 'relative',
},
activePolls: {
  backgroundColor: '#193C47',
  padding: 50,
  marginHorizontal: 70,
  marginBottom: 70,
  borderRadius: 50,
},
textActivePoll: {
  color: 'white',
  fontSize: 20,
},
innertextActivePoll: {
  color: 'white',
  fontSize: 15,
  fontStyle: 'italic',
  marginTop: 3,
},
detailIcon: {
  position: 'absolute',
  bottom: 100, 
  right: 90, 
  width: 80,
  height: 80,
  borderRadius: 50,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  justifyContent: 'center',
  alignItems: 'center',
},
infoText2:{
  color:'black',
},
iconTriangle:{
  position:'absolute',
  width:140,
  height:140,
  left:50,
  bottom:20,
},
descriptionText:{
  position:'absolute',
  color:'#193C47',
  fontSize:20,
  width:220,
  right:40,
 top:18,
 fontWeight:'bold',
 fontStyle:'italic',
}
});
