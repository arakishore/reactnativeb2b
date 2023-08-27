 import React, { useEffect,useLayoutEffect  } from 'react';

import BottomNavigator from './bottom/BottomNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile';
import Category from '../screens/Category';
import Products from '../screens/Products';
//import Notifications from './Notifications';
 
 

const Drawer = createDrawerNavigator();

const Dashboard = () => {
  return (
    <Drawer.Navigator initialRouteName="BottomNavigator"
    headerMode="float"
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#c6cbef',
        width: '70%',
        
        
      },
    }} >
      <Drawer.Screen  name="Home" component={BottomNavigator} options={{ 
        headerShown: false,
        headerMode :'float' }} />
       
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
      {/* <Drawer.Screen name="Category" component={Category} options={{ headerShown: true }} /> */}
      {/* <Drawer.Screen name="Products" component={Products} options={{ headerShown: true }} />  */}
      {/* <Drawer.Screen name="CategoryProduct" component={CategoryProduct} options={{ headerShown: false }} />
      <Drawer.Screen name="Category" component={Category} options={{ headerShown: false }} />
      <Drawer.Screen name="Products" component={Products} options={{ headerShown: false }} /> */}

    </Drawer.Navigator>
  );
};

export default Dashboard;