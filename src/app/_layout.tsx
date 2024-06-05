import React, { useState } from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '.';
import { StyleSheet } from 'react-native';
import { SavedListProvider } from '../contexts/SaveListContext';
export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <SavedListProvider>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'screens/home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'screens/search') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'screens/category') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'screens/statistics') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (route.name === 'screens/savedList') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            }else if (route.name === 'screens/profile') {
              iconName = focused ? 'man' : 'man-outline';
            } else {
              return null;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#5e767e',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: styles.tabBar, 
          tabBarLabelStyle: styles.tabBarLabel, 
          tabBarIconStyle: styles.tabBarIcon,
        })}
      >
        <Tabs.Screen 
          name="screens/home" 
          options={{ 
            title: 'Home',
            tabBarLabel: 'Home',
          }} 
        />
        <Tabs.Screen 
          name="screens/search" 
          options={{ 
            title: 'News',
            tabBarLabel: 'News',
          }} 
        />
        <Tabs.Screen 
          name="screens/category" 
          options={{ 
            title: 'Poll Details',
            tabBarLabel: 'Category',
          }} 
        />
        <Tabs.Screen 
          name="screens/statistics" 
          options={{ 
            title: 'Questions',
            tabBarLabel: 'Questions',
          }} 
        />
        <Tabs.Screen 
          name="screens/savedList" 
          options={{ 
            title: 'Saved',
            tabBarLabel: 'Saved',
          }} 
        />
     
      <Tabs.Screen 
          name="screens/profile" 
          options={{ 
            title: 'Profile',
            tabBarLabel: 'Profile',
          }} 
        />
      </Tabs>
    </SavedListProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#193C47', 
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    // height: 80, 
    width:515,
  },
  tabBarLabel: {
    fontSize: 12,
    marginBottom: 5,
  },
  tabBarIcon: {
    marginTop: 5,
  },
});
