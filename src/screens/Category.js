import React, { useEffect,useLayoutEffect  } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { FlatList, TouchableOpacity, View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';

 import FlatListStyles from "../components/FlatlistCss";
import TextComponent from "../components/TextComponent";
import { resetTitle } from '../store/redux/slices/titleSlice'; // Make sure the path is correct


 

const Category = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const categories = useSelector(state => state.categoryReducer.categories);
  
  // useFocusEffect(
  //   React.useCallback(() => {
  //     // This function will be called when the screen gains focus
  //     console.log('Screen focused');
  //     dispatch(resetTitle());

  //     return () => {
  //       // This function will be called when the screen loses focus
  //       console.log('Screen unfocused');
  //     };
  //   }, [])
  // );

  useEffect(() => {
    
    if (isFocused) {
      dispatch(resetTitle());
    }
    return () => {
    //  console.log('Screen unfocused');
    };
     
  }, [isFocused]);

  const renderItem = ({ item }) => (

    <Card style={styles.flexItem}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Products", {
            category_id: item.category_id,
            category: item
           
          })
        }
        style={styles.elevationContainer}
      >
        <View >
          {item.image != null && item.image != "" ? (
            <Card.Cover
              style={{ width: "auto", height: 80 }}
              source={{ uri: item.image }}
              onError={() => {
                // Handle image load error, e.g., show a placeholder image
                //console.log('Error loading image:', item.image);
              }}
            />
          ) : (
            <Card.Cover
              style={{ width: "auto", height: 80 }}
              source={require("../../assets/noimage.png")}
              onError={() => {
                // Handle image load error, e.g., show a placeholder image
                //console.log('Error loading image:', item.image);
              }}
            />

          )}

        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap", width: "100%", justifyContent: "center", marginTop: 10 }}>
          <TextComponent

            label={item != null ? " " + item.cate_name_eng : "-"}
            style={FlatListStyles.CardSubTitle}
          />
        </View>
      </TouchableOpacity>
    </Card>

  );
   

  return (

    <FlatList
      contentContainerStyle={styles.scrollViewContent}
      data={categories}
      renderItem={renderItem}
      keyExtractor={item => item.category_id}

      numColumns={2}
      columnWrapperStyle={styles.flexContainer}
    />


  );
};


const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    margin: 8,
    paddingBottom:20
  },
  flexContainer: {
    padding: 4,
    alignContent:'stretch',
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

export default Category;
 