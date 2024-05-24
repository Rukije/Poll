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

          if (route.name === 'screens/home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'screens/search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'polls/category') {
            iconName = focused ? 'list' : 'list-outline';
          } 
           else {
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
          headerShown: false,
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
    </Tabs>
  );
}