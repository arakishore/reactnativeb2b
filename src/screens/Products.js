import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FlatList, View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

import { ProdutListcard } from "./produt-list-info-card.component.js";
import { Spacer } from "../components/spacer/spacer.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { updateTitle } from '../store/redux/slices/titleSlice'; // Make sure the path is correct

const Products = ({ navigation, route }) => {
  const dispatch = useDispatch();


  const { category_id, category } = route.params;
  // console.log('category_id:', category_id);
  // console.log('category:', category);
  const products = useSelector(state => state.categoryReducer.products);
  const cart_items = useSelector(state => state.cartReducer.cart_items);

  //console.log("Products.js cart_items",cart_items);

  const [selectedCategory, setSelectedCategory] = useState(category_id);
  const filteredProducts = products.filter(
    (product) => product.category_id === selectedCategory
  );

  // Example: Set the header title dynamically when this screen is focused
  useEffect(() => {
    //console.log("Updating header title:", category.cate_name_eng);
    navigation.setOptions({
      headerTitle: category.cate_name_eng,
      // headerShown:true,
    });
    dispatch(updateTitle(category.cate_name_eng))
  }, [navigation, category.cate_name_eng]);

  const renderItem = ({ item }) => {
    try {
      return (
        
          <Spacer position="bottom" size="large">
            <ProdutListcard product={item} />
          </Spacer>
        
      );
    } catch (error) {
      console.error("Error rendering item:", error);
      return null; // or return an error message/component
    }
  };

  return (
    <FlatList
      contentContainerStyle={styles.scrollViewContent}
      data={filteredProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.prod_id}
    />
  );

};

export default Products;


const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    margin: 16,
    paddingBottom: 20
  },

  flexContainer: {
    padding: 4,
    alignContent: 'stretch',
    justifyContent: 'flex-start',

  },
  flexItem: {
    padding: 10,
    width: '48%',
    height: 150,
    borderRadius: 5,
    marginHorizontal: 4,
    marginVertical: 1,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    justifyContent: 'space-evenly',
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 48,
    textAlign: 'center',
  },
});

