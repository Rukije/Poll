import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
// import BottomTabNavigator from '../navigation/BottomTabNavigator';

export default function BottomTabNavigator() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'auth/login') {
            iconName = focused ? 'log-in' : 'log-in-outline';
          } else if (route.name === 'index') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'polls/[id]') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'bottomTabNavigator') {
            iconName = focused ? 'options' : 'options-outline';
          } else {
            iconName = 'ellipse'; 
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#193C47',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen 
        name="auth/login" 
        options={{ 
          headerShown: false,
          tabBarLabel: 'Login',
        }} 
      />
      <Tabs.Screen 
        name="index" 
        options={{ 
          headerShown: false,
          tabBarLabel: 'Home',
        }} 
      />
      <Tabs.Screen 
        name="polls/[id]" 
        options={{ 
          title: 'Poll Details',
          tabBarLabel: 'Polls',
        }} 
      />
       <BottomTabNavigator/>
    </Tabs>
  );
}