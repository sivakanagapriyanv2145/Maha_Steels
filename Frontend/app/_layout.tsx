import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Pressable, Alert } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

import { useColorScheme } from '@/components/useColorScheme';

export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => {
          // TODO: Clear storage/session here if needed
          router.replace('/Login'); // Navigate back to login
        },
      },
    ]);
  };

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="Login">
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen
          name="getQuotation"
          options={{
            headerShown: true,
            title: 'Customer Quotation',
            headerStyle: {
              backgroundColor: '#2c3e50',
            },
            headerTintColor: 'white',
            headerRight: () => (
              <Pressable onPress={handleLogout} style={{ marginRight: 15 }}>
                <MaterialIcons name="logout" size={24} color="white" />
              </Pressable>
            ),
          }}
        />
         <Stack.Screen
          name="getSell"
          options={{
            headerShown: true,
            title: 'Customer Sell',
            headerStyle: {
              backgroundColor: '#2c3e50',
            },
            headerTintColor: 'white',
            headerRight: () => (
              <Pressable onPress={handleLogout} style={{ marginRight: 15 }}>
                <MaterialIcons name="logout" size={24} color="white" />
              </Pressable>
            ),
          }}
        />
         <Stack.Screen
          name="postScrap"
          options={{
            headerShown: true,
            title: 'Scrap post',
            headerStyle: {
              backgroundColor: '#2c3e50',
            },
            headerTintColor: 'white',
            headerRight: () => (
              <Pressable onPress={handleLogout} style={{ marginRight: 15 }}>
                <MaterialIcons name="logout" size={24} color="white" />
              </Pressable>
            ),
          }}
        />
         <Stack.Screen
          name="ListScrap"
          options={{
            headerShown: true,
            title: 'Scrap details',
            headerStyle: {
              backgroundColor: '#2c3e50',
            },
            headerTintColor: 'white',
            headerRight: () => (
              <Pressable onPress={handleLogout} style={{ marginRight: 15 }}>
                <MaterialIcons name="logout" size={24} color="white" />
              </Pressable>
            ),
          }}
        />
        

        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Admin" options={{ headerShown: false }} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
