import React, { useState, useEffect } from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';
import { Stack } from 'expo-router';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { setItem, getItem } from '../utils/AsyncStorage';
// import Toast from 'react-native-toast-message'; 

const polls = [
  { id: 1, title: 'Politike' },
  { id: 2, title: 'Art' },
  { id: 3, title: 'Kulture' },
  { id: 4, title: 'Roze' },
  { id: 5, title: 'Sport' },
  { id: 6, title: 'Teknologji' },
  { id: 7, title: 'Shkence' },
  { id: 8, title: 'Muzike' },
  { id: 9, title: 'Test' },
  { id: 10, title: 'Test' },
  { id: 11, title: 'Test' },
  { id: 12, title: 'Test' },
];

const getIconName = (title: string): string => {
  switch (title) {
    case 'Politike':
      return 'account-group';
    case 'Art':
      return 'palette';
    case 'Kulture':
      return 'library';
    case 'Roze':
      return 'heart';
    case 'Sport':
      return 'soccer';
    case 'Teknologji':
      return 'laptop';
    case 'Shkence':
      return 'atom';
    case 'Muzike':
      return 'music';
    default:
      return 'help-circle';
  }
};

type Checkbox = {
  text: string;
  checked: boolean;
};

export default function Category() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [question, setQuestion] = useState('');
  const [checkboxes, setCheckboxes] = useState<Checkbox[]>([{ text: '', checked: false }]);
  const [visiblePollsCount, setVisiblePollsCount] = useState(6); 

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    saveData(); 
  };

  const handleCheckboxChange = (index: number, value: string) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].text = value;
    setCheckboxes(newCheckboxes);
  };

  const handleCheckboxToggle = (index: number) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = !newCheckboxes[index].checked;
    setCheckboxes(newCheckboxes);
  };

  const setQuestionAndSave = (value: string) => {
    setQuestion(value);
  };

  const handleAddQuestion = () => {
    toggleModal();
    saveData(); 
  };

  const saveData = async () => {
    try {
      const dataToSave = {
        question: question,
        checkboxes: checkboxes
      };
      await setItem('categoryData', JSON.stringify(dataToSave)); 
      console.log('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const savedData = await getItem('categoryData');
      console.log('Saved data:', savedData);
    };

    fetchData();
  }, []);
  
  const addCheckbox = () => {
    setCheckboxes([...checkboxes, { text: '', checked: false }]);
  };

  const loadMorePolls = () => {
    setVisiblePollsCount(prevCount => prevCount + 2);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Polls',
          headerStyle: {
            backgroundColor: '#193C47',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <View style={styles.categoryTextContainer}>
        <Text style={styles.categoryText}>Ju lutem selektoni kategorine specifike!</Text>
      </View>
      <FlatList
        data={polls.slice(0, visiblePollsCount)} 
        numColumns={2}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <View style={styles.pollContainer}>
             <Link href={{ pathname: `/polls/${item.id}`, params: { category: item.title } }} style={styles.link}>
              <View style={styles.pollContent}>
                <Icon name={getIconName(item.title)} size={24} color="white" style={styles.icon} />
                <Text style={styles.pollTitle}>
                  {item.title}
                </Text>
              </View>
            </Link>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {visiblePollsCount < polls.length && (
        <TouchableOpacity onPress={loadMorePolls} style={styles.loadMoreButton}>
          <Text style={styles.loadMoreButtonText}>Load More</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={toggleModal} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Pressable style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>x</Text>
          </Pressable>
          <Text style={styles.modalTitle}>Shto nje pyetje</Text>
          <TextInput
            style={styles.input}
            placeholder="Shkruaj pyetjen"
            value={question}
            onChangeText={setQuestionAndSave}
          />
          {checkboxes.map((checkbox, index) => (
            <View key={index} style={styles.checkboxContainer}>
              <TextInput
                style={styles.checkboxInput}
                placeholder={`Opsioni ${index + 1}`}
                value={checkbox.text}
                onChangeText={(text) => handleCheckboxChange(index, text)}
              />
              <TouchableOpacity onPress={() => handleCheckboxToggle(index)} style={styles.checkbox}>
                {checkbox.checked && <View style={styles.checked} />}
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity onPress={addCheckbox} style={styles.addCheckboxButton}>
            <Text style={styles.addCheckboxButtonText}>+</Text>
          </TouchableOpacity>
          <Pressable style={styles.modalButton} onPress={handleAddQuestion}>
            <Text style={styles.modalButtonText}>Shto</Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
    overflow: 'hidden',
  },
  categoryTextContainer: {
    backgroundColor: '#193C47',
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  categoryText: {
    color: 'white',
    fontWeight: 'bold',
  },
  pollContainer: {
    backgroundColor: '#5e767e',
    padding: 40,
    borderRadius: 15,
    margin: 5,
    flex: 1,
    maxWidth: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textAlign: 'center',
  },
  pollContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  pollTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#193C47',
  },
  addQuestion: {
    backgroundColor: '#193C47',
  },
  addButtonText: {
    color: '#193C47',
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#193C47',
    borderWidth: 2,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkboxInput: {
    flex: 1,
    height: 50,
    borderColor: '#193C47',
    borderWidth: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: '#193C47',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  checked: {
    width: 20,
    height: 20,
    backgroundColor: '#193C47',
    borderRadius: 3,
  },
  addCheckboxButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    alignSelf: 'center', 
    width: '20%',
    borderWidth:3,
  },
  addCheckboxButtonText: {
    color: '#193C47',
    fontSize: 20,
    fontWeight:'900',
  },
  modalButton: {
    backgroundColor: '#193C47',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#ff4c4c',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadMoreButton: {
    backgroundColor: '#193C47',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 15,
    width: 120,
    alignSelf: 'center', 
  },
  loadMoreButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
