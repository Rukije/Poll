 import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
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


export default function Category() {
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
});


