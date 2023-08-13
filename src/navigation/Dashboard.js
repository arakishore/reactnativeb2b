import * as React from 'react';

import BottomNavigator from './bottom/BottomNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();

const Dashboard = () => {
  return (
    <Drawer.Navigator initialRouteName="Category">
      <Drawer.Screen name="Home" component={BottomNavigator} options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
};

export default Dashboard;