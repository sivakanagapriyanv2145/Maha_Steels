import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import Toast from "react-native-toast-message";
import AntDesign from '@expo/vector-icons/AntDesign';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",      // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Scrap',
          tabBarIcon: ({ color }) =><MaterialIcons name="factory" size={24} color="black" />,
          headerStyle: {
            backgroundColor: '#2c3e50'

          },
          headerTintColor: 'white'
        }}
      />
     <Tabs.Screen
        name="two"
        options={{
          title: 'Calculator',
          tabBarIcon: ({ color }) => <AntDesign name="calculator" size={24} color="black" />,
          headerStyle: {
            backgroundColor: '#2c3e50'

          },
          headerTintColor: 'white'
        }}
      />
        <Tabs.Screen
        name="Quotation"
        options={{
          title: 'Quotation',
          tabBarIcon: ({ color }) => <MaterialIcons name="request-quote" size={24} color="black" />,
          headerStyle: {
            backgroundColor: '#2c3e50'

          },
          headerTintColor: 'white'
        }}
      />
      
        <Tabs.Screen
        name="Sell"
        options={{
          title: 'Sell',
          tabBarIcon: ({ color }) => <MaterialIcons name="sell" size={24} color="black" />,
          headerStyle: {
            backgroundColor: '#2c3e50'

          },
          headerTintColor: 'white',
        }}
      />
       
    </Tabs> 
  );
}
