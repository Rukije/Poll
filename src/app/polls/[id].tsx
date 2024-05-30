import { useLocalSearchParams, Stack } from "expo-router";
import { View, Text, StyleSheet, Pressable, Button, ScrollView, Modal,Image} from "react-native";
import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import { categoryData, QuestionType } from "../../data/categoryData"; 

export default function PollDetails() {
  const { id, category } = useLocalSearchParams<{ id: string; category: string }>();
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const [polls, setPolls] = useState<QuestionType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (category && categoryData[category]) {
      setPolls(categoryData[category]);
    }
  }, [category]);

  const submit = () => {
    setIsModalVisible(true);
  };

  const handleOptionSelect = (question: string, option: string) => {
    setSelectedOptions({ ...selectedOptions, [question]: option });
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen
        options={{
          title: 'Poll Questions',
          headerStyle: { backgroundColor: '#193C47' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      {polls.map((poll, index) => (
        <View key={index} style={styles.pollContainer}>
          <Text style={styles.question}>{poll.question}</Text>
          <View style={{ gap: 5 }}>
            {poll.options.map(option => (
              <Pressable 
                onPress={() => handleOptionSelect(poll.question, option)} 
                key={option} 
                style={styles.optionContainer}
              >
                <Feather 
                  name={selectedOptions[poll.question] === option ? "check-circle" : 'circle'} 
                  size={17} 
                  color={selectedOptions[poll.question] === option ? 'white' : 'black'} 
                />
                <Text style={styles.optionTextContainer}>{option}</Text>
              </Pressable>
              
            ))}
          </View>
        </View>
      ))}
<Pressable>
         <Text onPress={submit} style={styles.submitButton}>Submit</Text>
      </Pressable>     
       <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
        {/* <Image
          style={styles.pollGif}
        source={require('../../assets/images/poll.gif')}
      /> */}
          <Text style={styles.modalText}>Faleminderit qe u pergjigjet :)!
          </Text>
          {/* <Image
          style={styles.pollGif}
        source={require('../../assets/images/poll.gif')}
      /> */}
          <Pressable>
         <Text onPress={closeModal} style={styles.closeButton} >Close</Text>
      </Pressable> 
       
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    gap: 20,
  },
  pollContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 25,
    paddingTop: 10,
    fontWeight: '600',
    color: '#193C47',
    textAlign: 'center',
  },
  optionContainer: {
    backgroundColor: '#5e767e',
    padding: 20,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optionTextContainer: {
    fontSize: 17,
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius:15,
  },
    submitButton:{
    backgroundColor:"#193C47",
    color:"white",
    textAlign:'center',
    padding:20,
    width:150,
    justifyContent:'center',
    display:'flex',
    margin:'auto'
},
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor:"white",
    padding:85,
    color: '#193C47',
    borderRadius:15,
    marginBottom: 20,
  },
  pollGif:{
    width:100,
    height:100,
  },
  closeButton:{
    backgroundColor:"#193C47",
    color:"white",
    textAlign:'center',
    padding:10,
    width:150,
    display:'flex',
    margin:'auto',
    borderWidth:3,
    borderRadius:15,
    borderColor:'white',
  }
});
