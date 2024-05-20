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
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="auth/login" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ title: 'Categories' }} />
      <Stack.Screen name="polls/[id]" options={{ title: 'Poll Details' }} />
    </Stack>
  );
}
