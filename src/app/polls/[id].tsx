import { useLocalSearchParams, Stack } from "expo-router";
import { View, Text, StyleSheet, Pressable, Button, ScrollView } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import { categoryData, QuestionType } from "../../data/categoryData"; 

export default function PollDetails() {
  const { id, category } = useLocalSearchParams<{ id: string; category: string }>();
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
  const [polls, setPolls] = useState<QuestionType[]>([]);

  useEffect(() => {
    if (category && categoryData[category]) {
      setPolls(categoryData[category]);
    }
  }, [category]);

  const submit = () => {
    console.warn('Submit', selectedOptions);
  };

  const handleOptionSelect = (question: string, option: string) => {
    setSelectedOptions({ ...selectedOptions, [question]: option });
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
      <Button onPress={submit} title="Submit" color="#193C47" />
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
});
