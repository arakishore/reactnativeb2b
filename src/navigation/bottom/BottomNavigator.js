
import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderRightButton, HeaderLeftButton } from '../../components/HeaderLeftRightButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import  SearchScreen   from './SearchScreen';
import { Text,View, TouchableOpacity, Linking } from 'react-native';


import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import { CategoryProduct } from './CategoryProduct';

const Bottom = createBottomTabNavigator();

const openWhatsAppWithNumber = (phoneNumber) => {
  const url = `whatsapp://send?phone=${phoneNumber}`;
  Linking.openURL(url).catch((err) => {
    // Handle error if WhatsApp is not installed or any other issue occurs.
    console.error('Error opening WhatsApp:', err);
  });
};

const WhatsappScreen = () => {
  const phoneNumber = '+9422945125';
  useEffect(() => {
    // Call the function to open WhatsApp with the specified number immediately
   // openWhatsAppWithNumber(phoneNumber);
  }, []); // Empty dependency array ensures it runs only once on screen load


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => openWhatsAppWithNumber(phoneNumber)}>
          <Ionicons name="md-logo-whatsapp" size={40} color="#dd1e1e" />
        <Text>Open</Text>
      </TouchableOpacity>
    </View>
  );
};


const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const tabBarOptions = {
  activeTintColor: '#dd1e1e', // Color for active tab icon and label
  inactiveTintColor: 'gray', // Color for inactive tab icon and label
  labelStyle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  style: {
    borderTopWidth: 0,
    borderTopColor: 'gray',
  },
};

const BottomNavigator = () => {
  return (
    <Bottom.Navigator screenOptions={({ route }) => ({

      headerShown: true,
      tabBarStyle: {
      },
      tabBarLabelStyle: tabBarOptions.labelStyle,
      tabBarHideOnKeyboard: true,
      tabBarActiveTintColor: tabBarOptions.activeTintColor,
      tabBarInactiveTintColor: tabBarOptions.inactiveTintColor,
    })}>
      <Bottom.Screen
        name="BottomCategoryProduct"
        component={CategoryProduct}
        options={{
          headerTitle: 'Home', // Set the title for the header
          tabBarLabel: 'Home', // The label to display on the tab
          tabBarIcon: ({ focused, color, size }) => (
            // The icon to display on the tab
            <Ionicons name="home" size={size} color={color} />
          ),
          //   tabBarBadge: 3, // An optional badge to display on the tab
          tabBarBadgeStyle: {
            backgroundColor: 'red', // Customize the badge background color
          },
          tabBarVisible: true, // Set to false to hide the tab bar on this screen
          //   tabBarAccessibilityLabel: 'Screen One Tab', // Accessibility label for the tab
          tabBarTestID: 'screen-one-tab', // Test ID for automated testing
          // headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeftButton />,
        }}
      />
      <Bottom.Screen
        name="Screen2"
        component={Screen2}
        options={{
          headerTitle: 'Cart', // Set the title for the header
          tabBarLabel: 'Favorite', // The label to display on the tab
          tabBarIcon: ({ focused, color, size }) => (
            // The icon to display on the tab
            <Ionicons name="heart" size={size} color={color} />
          ),
          //   tabBarBadge: 3, // An optional badge to display on the tab
          tabBarBadgeStyle: {
            backgroundColor: 'red', // Customize the badge background color
          },
          tabBarVisible: true, // Set to false to hide the tab bar on this screen
          //    tabBarAccessibilityLabel: 'Screen One Tab', // Accessibility label for the tab
          tabBarTestID: 'screen-two-tab', // Test ID for automated testing
          // headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeftButton />,
        }}
      />
      <Bottom.Screen
        name="Screen3"
        component={Screen3}
        options={{
          headerTitle: 'Cart', // Set the title for the header
          tabBarLabel: 'Cart', // The label to display on the tab
          tabBarIcon: ({ focused, color, size }) => (
            // The icon to display on the tab
            <Ionicons name="cart" size={size} color={color} />
          ),
          //   tabBarBadge: 3, // An optional badge to display on the tab
          tabBarBadgeStyle: {
            backgroundColor: 'red', // Customize the badge background color
          },
          tabBarVisible: true, // Set to false to hide the tab bar on this screen
          //   tabBarAccessibilityLabel: 'Screen One Tab', // Accessibility label for the tab
          tabBarTestID: 'screen-three-tab', // Test ID for automated testing
          // headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeftButton />,
        }}
      />
      <Bottom.Screen name="Whatsapp" component={WhatsappScreen}
        options={{
          headerTitle: 'WhatsApp', // Set the title for the header
          tabBarLabel: 'WhatsApp', // The label to display on the tab
          tabBarIcon: ({ focused, color, size }) => (
            // The icon to display on the tab
            <Ionicons name="md-logo-whatsapp" size={size} color={color} />
          ),
          //   tabBarBadge: 3, // An optional badge to display on the tab
          tabBarBadgeStyle: {
            backgroundColor: '#dd1e1e', // Customize the badge background color
          },
          tabBarVisible: true, // Set to false to hide the tab bar on this screen
          //   tabBarAccessibilityLabel: 'Screen One Tab', // Accessibility label for the tab
          tabBarTestID: 'screen-four-tab', // Test ID for automated testing
          // headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeftButton />,
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;