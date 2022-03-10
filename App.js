import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Home from './src/Screen/Home/Home';
import Details from './src/Screen/Details/Details';
import Navigator from './src/Screen/Navigator/Navigator';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
 
     <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="creditcard" color={color} size={size} />
          ),
        }}
      />

<Tab.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Navigator"
        component={Navigator}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="comment" color={color} size={size} />
          ),
        }}
      />
      </Tab.Navigator>
      </NavigationContainer>
  
  );
}

