import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack initialRouteName='auth/login'>
      <Stack.Screen name="auth/login" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ title: 'Categories' }} />
      <Stack.Screen name="polls/[id]" options={{ title: 'Poll Details' }} />
    </Stack>
  );
}
