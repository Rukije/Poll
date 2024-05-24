// // import {Slot,Stack,Tabs} from 'expo-router';
// import {Stack, Tabs} from 'expo-router';

// export default function RootLayout(){
//     return (
//         <Stack/> 
//         // <Slot /> //render the child component
//         // <Stack /> add the index at the top
//         // <Tabs /> add the tabs at the bottom and then can change
//     );
// }
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
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
          } 
           else {
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
    </Tabs>
  );
}