import React, { useEffect,useLayoutEffect  } from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Category from './Category';
import ProductDetail from './ProductDetail';
const CategoryProductStack = createStackNavigator();

export const CategoryProduct = () => {

  
  return (
    <CategoryProductStack.Navigator
      
      screenOptions={({ route }) => ({
        headerMode: 'float' ,
        headerShown: true,
      })}
    >
      <CategoryProductStack.Screen
        name="Category"
        component={Category}
        options={{
          headerMode: 'float' ,
          headerShown: true,
          headerTitle: '111111', // Set the title for the header
        }}

      />
       <CategoryProductStack.Screen
        name="Products"
        component={Products}
        options={{
          headerMode: 'float' ,
          headerShown: true,
          headerTitle: '222222222', // Set the title for the header
        }}
      />
      <CategoryProductStack.Screen
        name="ProductDetail"
        component={ProductDetail}
      />
    </CategoryProductStack.Navigator>
  );
};
