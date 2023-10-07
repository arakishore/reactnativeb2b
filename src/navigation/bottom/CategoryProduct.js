import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Products from "../../screens/Products";
import Category from "../../screens/Category";
import ProductDetail from "../../screens/ProductDetail";

// import ProductDetail from '../../screens/ProductDetail';

const CategoryProductStack = createStackNavigator();

export const CategoryProduct = () => {

 

  const screenOptions = ({ route }) => {
    //console.log('CategoryProductmRoute:', route);
    return {
      headerShown: false,
          headerMode :'float',
          headerTitle: 'Categories'
    }
  };

  return (
    <CategoryProductStack.Navigator   >
       
       <CategoryProductStack.Screen
        name="Category"
        component={Category}
        options={screenOptions}
        
      /> 
      <CategoryProductStack.Screen
        name="Products"
        component={Products}
         options={({ route }) => ({
          headerShown: false,
          headerMode :'screen',
          headerTitle: route.params?.categoryName || 'Categories'
           
        })}

      />
     <CategoryProductStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => ({
          headerShown: true,
          headerMode :'screen',
          headerTitle: 'Back'
        })}
      /> 
    </CategoryProductStack.Navigator>
  );
};

