import React, { useState, useEffect } from 'react';
import { useNavigationState, useNavigation } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '.';

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const routes = useNavigationState(state => state?.routes);

  // ckeck nese route ne fillim eshte login
  const currentRoute = routes?.[routes.length - 1]?.name;

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

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
          } else {
            return null;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#193C47',
        tabBarInactiveTintColor: 'gray',
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
    </Tabs>
  );
}
