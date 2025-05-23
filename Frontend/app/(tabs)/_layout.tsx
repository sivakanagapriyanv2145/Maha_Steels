import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        onPress: () => {
          
          router.replace('/Login'); 
        },
        style: 'destructive',
      },
    ]);
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "darkblue",
        headerShown: useClientOnlyValue(false, true),
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
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Scrap',
          tabBarIcon: ({ color }) => <MaterialIcons name="factory" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Calculator',
          tabBarIcon: ({ color }) => <AntDesign name="calculator" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="Quotation"
        options={{
          title: 'Quotation',
          tabBarIcon: ({ color }) => <MaterialIcons name="request-quote" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="Sell"
        options={{
          title: 'Sell',
          tabBarIcon: ({ color }) => <MaterialIcons name="sell" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="SteelPrice"
        options={{
          title: 'Price',
          tabBarIcon: ({ color }) => <MaterialIcons name="price-check" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
