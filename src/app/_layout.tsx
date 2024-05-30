import React, { useState } from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '.';
import { StyleSheet } from 'react-native';

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // if (!isLoggedIn) {
  //   return <LoginScreen onLogin={handleLogin} />;
  // }

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'screens/home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'screens/search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'polls/category') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'screens/statistics') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          }else if (route.name === 'screens/wishlist') {
            iconName = focused ? 'heart' : 'heart-outline';
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
          title: 'Search',
          tabBarLabel: 'Search',
        }} 
      />
      <Tabs.Screen 
        name="polls/category" 
        options={{ 
          title: 'Poll Details',
          tabBarLabel: 'Category',
        }} 
      />
      <Tabs.Screen 
        name="screens/statistics" 
        options={{ 
          title: 'Statistics',
          tabBarLabel: 'Statistics',
        }} 
      />
      <Tabs.Screen 
        name="screens/wishlist" 
        options={{ 
          title: 'Wishlist',
          tabBarLabel: 'WishList',
        }} 
      />
    </Tabs>
    
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#193C47', 
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    height: 60, 
  },
  tabBarLabel: {
    fontSize: 12,
    marginBottom: 5,
  },
  tabBarIcon: {
    marginTop: 5,
  },
});
