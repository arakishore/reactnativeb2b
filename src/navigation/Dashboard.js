import * as React from 'react';

import BottomNavigator from './bottom/BottomNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CategoryProduct } from './bottom/CategoryProduct';
import Category from '../screens/Category';
import { Products } from '../screens/Products';

 

const Drawer = createDrawerNavigator();

const Dashboard = () => {
  return (
    <Drawer.Navigator initialRouteName="BottomNavigator">
      <Drawer.Screen name="Home" component={BottomNavigator} options={{ headerShown: false }} />
      {/* <Drawer.Screen name="CategoryProduct" component={CategoryProduct} options={{ headerShown: false }} />
      <Drawer.Screen name="Category" component={Category} options={{ headerShown: false }} />
      <Drawer.Screen name="Products" component={Products} options={{ headerShown: false }} /> */}

    </Drawer.Navigator>
  );
};

export default Dashboard;