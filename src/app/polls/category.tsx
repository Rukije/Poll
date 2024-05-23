import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable } from 'react-native';
import { Stack } from 'expo-router';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


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

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleAddQuestion = () => {
    toggleModal();
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

  const addCheckbox = () => {
    setCheckboxes([...checkboxes, { text: '', checked: false }]);
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
        data={polls}
        numColumns={2}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <View style={styles.pollContainer}>
            <Link href={`/polls/${item.id}`} style={styles.link}>
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
            onChangeText={setQuestion}
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
            <Text style={styles.addCheckboxButtonText}>Shto opsion</Text>
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#193C47',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: 14,
    height: 14,
    backgroundColor: '#193C47',
    borderRadius: 3,
  },
  addCheckboxButton: {
    backgroundColor: '#193C47',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  addCheckboxButtonText: {
    color: 'white',
    fontSize: 16,
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
});
