import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Category from './Category';
import ProductDetail from './ProductDetail';
// import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
// import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const CategoryProductStack = createStackNavigator();

export const CategoryProduct = () => {
  return (
    <CategoryProductStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <CategoryProductStack.Screen
        name="Category"
        component={Category}
      />
      <CategoryProductStack.Screen
        name="ProductDetail"
        component={ProductDetail}
      />
    </CategoryProductStack.Navigator>
  );
};
