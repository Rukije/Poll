import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback, Animated, Image } from 'react-native';
import { Stack } from 'expo-router';
import newsData from '../../data/newsdata';

const Search = () => {
  const [selectedCategory, setSelectedCategory] = useState('All news');

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const categories = Object.keys(newsData);

  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.type === 'text') {
        return (
          <View key={index} style={styles.news}>
            <Text style={styles.newsText}>{item.content}</Text>
          </View>
        );
      } else if (item.type === 'image') {
        return (
          <View key={index} style={styles.newsLayout}>
            <Image source={item.src} style={styles.testImage} />
            <View style={styles.test}>
              <Text style={styles.testText}>{item.description}</Text>
            </View>
          </View>
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'News',
          headerStyle: {
            backgroundColor: '#193C47',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollViewContainer}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <TouchableWithoutFeedback key={index} onPress={() => handleCategoryPress(category)}>
              <Animated.Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.selectedCategoryText,
                ]}
              >
                {category}
              </Animated.Text>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>

      <ScrollView contentContainerStyle={styles.newsContainer}>
        {renderContent(newsData[selectedCategory])}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#193C47',
    paddingVertical: 1,
  },
  scrollViewContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  selectedCategoryText: {
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  newsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  news: {
    backgroundColor: 'white',
    marginVertical: 12,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    resizeMode: 'contain',
  },
  newsText: {
    fontWeight: '600',
    color: 'black',
    fontSize: 15,
  },
  newsLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  test: {
    flex: 1,
    backgroundColor: '#8c9da3',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  testText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  testImage: {
    width: 150,
    height: 'auto',
    borderRadius: 10,
  },
});

export default Search;
