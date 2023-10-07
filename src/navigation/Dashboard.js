import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useEffect, useLayoutEffect } from 'react';
import { useIsFocused } from "@react-navigation/native";
import { View, Text, Image } from 'react-native'; // Import View, Text, and Image
import { Avatar, Badge, Divider, IconButton } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace with the appropriate icon library

import BottomNavigator from './bottom/BottomNavigator';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Profile from './Profile';

//import Notifications from './Notifications';



const Drawer = createDrawerNavigator();

const Dashboard = ({ navigation, route }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    //console.log("Dashboard ", navigation);
    (async () => {
      if (isFocused) {
        try {
          const cartItem = await AsyncStorage.getItem("cartItem");
        
          if (cartItem !== null) {
            // Data exists in AsyncStorage, and it's not null
           // console.log("Dashboard.js cartItem", cartItem);
            // You can parse the retrieved data if it's expected to be JSON, e.g.,
            // const parsedCartItem = JSON.parse(cartItem);
            // Do something with cartItem or parsedCartItem
          } else {
            // Data doesn't exist in AsyncStorage, or it's null
            console.log("Dashboard.js cartItem is null or doesn't exist");
            // Handle this case as needed, e.g., initialize cartItem or show a message
          }
        } catch (error) {
          // Handle errors that may occur during AsyncStorage operations
          console.error("Dashboard.js Error retrieving cartItem from AsyncStorage:", error);
        }
      }
    })();

  }, [isFocused]);



  // Function to handle logout
  const handleLogout = () => {
    // Perform your logout logic here, e.g., clearing authentication tokens, resetting user state, etc.
    // Then, navigate the user to the login screen or any appropriate screen.
    // Example:
    AsyncStorage.clear();
     navigation.navigate('LoginScreen');
  };

  // Custom drawer content component
  const CustomDrawerContent = (props) => {
  

    return (
      <DrawerContentScrollView {...props}>
        {/* Custom Header */}
        
        <CustomDrawerHeader  />
        <View>
            <Divider style={{ marginTop: 10, padding: 0 }} />
          </View>
        <DrawerItemList {...props} />

       

        {/* Support Link */}
        <DrawerItem
          label="Whatsapp"
          icon={() => <CustomDrawerIcon name="whatsapp" size={24} />} // Specify the icon for the Support link

          onPress={() => {
            // Handle navigation to the support screen
          }}
        />

        {/* Notifications Link */}
        <DrawerItem
          label="Notifications"
          icon={() => <CustomDrawerIcon name="bell" size={24} />} // Specify the icon for the Notifications link

          onPress={() => {
            // Handle navigation to the notifications screen
          }}
        />
         <View>
            <Divider style={{ marginTop: 20, padding: 0 }} />
          </View>
         {/* Logout Link */}
         <DrawerItem
          label="Logout"
          icon={() => <CustomDrawerIcon name="sign-out" size={24} />} // Specify the icon for the Notifications link

          onPress={handleLogout}
        />
        
      </DrawerContentScrollView>
    );
  };

  // Custom header for image and name
  const CustomDrawerHeader = () => {
    const [userInfo, setUserInfo] = React.useState({});
    useEffect(() => {
      (async () => {
        const userInfoData = await AsyncStorage.getItem("userInfo");
        if (userInfoData != null) {
          const userInfoObj = JSON.parse(userInfoData);
          setUserInfo(userInfoObj);
        }
      })();
  
      return () => {
        // this now gets called when the component unmounts
      };
    }, []);
    return (
      <View >
        {/* Add your image component here */}
        <View style={{ alignItems: 'center', padding: 15 }}>
          <Image

            source={require('../../assets/logo.png')}
            style={{ width: 100, height: 50, borderRadius: 25 }}
          /></View>
       
        <View>
          <Text style={{ marginLeft: 16, fontWeight: 'bold' }}>
          {userInfo.full_name}  
          </Text>
        </View>
        
      </View>
    );
  };

  // Custom component for rendering icons with spacing
  const CustomDrawerIcon = ({ name, size }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: -20 }}>
        <Icon name={name} size={size} />
      </View>
    );
  };
  
  return (
    <Drawer.Navigator initialRouteName="BottomNavigator"
      drawerContent={(props) => (
        <CustomDrawerContent {...props}  />
      )}
      
      headerMode="float"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#ffffff',
          width: '70%',
        },
        activeTintColor: 'blue', // This is where you set activeTintColor
      }} >

      <Drawer.Screen name="Home" component={BottomNavigator} options={{
        headerShown: false,
        headerMode: 'float',
        drawerIcon: () => <CustomDrawerIcon name="home" size={24} />, // Specify the icon for the "Home" screen

      }} />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        
        options={{
          drawerLabel: 'Profile',
          drawerIcon: () => <CustomDrawerIcon name="user" size={24} />, // Specify the icon for the "Profile" screen
        }}
        
      />

    </Drawer.Navigator>
  );
};

export default Dashboard;