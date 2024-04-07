import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native'; // Import Image from 'react-native' to display custom icons

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  const [customIcons, setCustomIcons] = useState({}); // State to store custom icons

  useEffect(() => {
    // Function to retrieve custom icons from local storage
    const fetchCustomIcons = async () => {
      // Fetch custom icons from local storage and update state
      // Example: const customIcons = await fetchIconsFromLocalStorage();
      const customIcons = {
        Home: require('./assets/home.png'),
        Profile: require('./assets/support.png'),
      };
      setCustomIcons(customIcons);
    };

    fetchCustomIcons(); // Call the function when component mounts
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource; // Variable to store the icon source

            // Check if custom icon exists for the current route
         
              iconSource = customIcons[route.name];
       

            // Return the Image component with custom or default icon source
            return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
          },
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        })}
    
      >
        <Tab.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        <Tab.Screen name="Profile" options={{headerShown:false}} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
