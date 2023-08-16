import React, { useState } from 'react';
import { Searchbar } from "react-native-paper";
import { FlatList,TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

import styled from "styled-components/native";
import { SafeArea } from "../components/utility/safe-area.component";

import { Spacer } from "../components/spacer/spacer.component";


const CategoryList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Category = ({ navigation }) => {
  const [data, setData] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    // ... more data
  ]);

  const renderItem = ({ item }) => (
    
    <Card style={styles.cardContainer}>
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.image} />
      <Card.Title title="Card Title" />
    </Card>
    
  );



  return (
    <TouchableOpacity
    onPress={() => navigation.navigate("Products")}
    
  >
    <CategoryList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2} // Renders as a grid with 2 columns
      horizontal={false} // Renders as a vertical list (default behavior)

    />
     </TouchableOpacity>
  );
};


export default Category;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 0,
    borderColor: 'gray',
    borderRadius: 8,
    margin: 10,
    elevation: 5
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center', // Center content horizontally
  },
  image: {
    width: '100%',
    height: 150, // Custom image height
    borderRadius: 8,
    marginBottom: 10,
  },
});