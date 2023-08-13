import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import {Category} from "../../screens/Category";

// import ProductDetail from '../../screens/ProductDetail';

const CategoryProductStack = createStackNavigator();

export const CategoryProduct = () => {
  return (
    <CategoryProductStack.Navigator
      
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <CategoryProductStack.Screen
        name="Category"
        component={Category}
      />
      {/* <CategoryProductStack.Screen
        name="ProductDetail"
        component={ProductDetail}
      /> */}
    </CategoryProductStack.Navigator>
  );
};