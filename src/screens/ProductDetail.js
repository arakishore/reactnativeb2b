import React, { useState } from 'react'; // Don't forget to import useState

import {  useDispatch } from 'react-redux';
 
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import FlatListStyles from "../components/FlatlistCss";
import { Card,List, Divider } from 'react-native-paper';

import Swiper from 'react-native-swiper';


import RuppeeIcon from "../components/utility/RuppeeIcon";
 
import ImageModal from './ImageModal'; // Adjust the import path

const ProductDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { prodId, categoryId, product } = route.params;


  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImagePress = (imagePath) => {
    setSelectedImage(imagePath);
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const {
    prod_name = product.prod_name,
    photos = product.prod_primary_image_path,
    prod_code = product.prod_code,
    mimimum_qty = product.mimimum_qty,
    prod_id = product.prod_id,
    prod_unit = product.prod_unit,
    prod_mrp = product.prod_mrp,
    prod_selling_price = product.prod_selling_price,
    prod_pack_size = product.prod_pack_size,
    prod_primary_image_path = product.prod_primary_image_path,
    category_id = product.category_id,
    prod_qty_stock = product.prod_qty_stock,
    prod_savings = product.prod_savings,
    is_fixed_packet = product.is_fixed_packet,
    product_base_unit = product.product_base_unit,
    prod_desc_text = product.prod_desc_text,
    packing_type = product.packing_type,
    category_name = product.category_name,
    sub_category_name = product.sub_category_name,
    brand_name = product.brand_name,
    image = product.image,
    discountpercentage = product.discountpercentage

  } = product;

  const image_paths = [
    product.prod_image_1_path,
    product.prod_image_2_path,
    product.prod_image_3_path
  ];
  console.log('image_paths1', image_paths);
  const handleAddToCart1 = () => {
    // You can use the product ID here

    // Add your cart logic here
  };

   

  return (
    <Card style={styles.card}>

      <View style={styles.imageBigView}>
      <Swiper style={styles.wrapper} height={200} showsButtons={false}>
          {image_paths.map((imagePath, index) => (
             <TouchableOpacity
             key={index}
             onPress={() => handleImagePress(imagePath)}
             style={styles.slide}
           >
            
              <Image source={{ uri: imagePath }} style={styles.imageCover} />
            
            </TouchableOpacity>
          ))}
        </Swiper>
      </View>

      <View style={styles.containerRow}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text style={FlatListStyles.CardTitle}>{prod_name}</Text>
        </View>
      </View>
      <View style={styles.containerRow}>
        <View style={styles.columnColLeft}>
          <Text style={styles.mrp} >MRP: <RuppeeIcon></RuppeeIcon>{prod_mrp}</Text>
          <Text style={styles.offerprice} >Our Offer: <RuppeeIcon></RuppeeIcon>{prod_selling_price}</Text>
          <Text style={styles.miniqty} >Mini Qty Box/Try: {mimimum_qty}</Text>
          <Text style={styles.save} >Save: <RuppeeIcon></RuppeeIcon>{discountpercentage}</Text>
        </View>
        <View style={styles.columnColRight}>

          <View style={styles.buttonView} >

            <Text style={styles.buttonText}  >Add to Cart</Text>

          </View>

        </View>
      </View>
      <ImageModal
            visible={modalVisible}
            imagePath={selectedImage}
            onClose={handleCloseModal}
          />
    </Card>
  );
};


const styles = StyleSheet.create({
  containerRow: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    position: 'relative',
    borderWidth: 0, // Add a border to all sides
    borderColor: 'gray', // Specify the border color
  },
  columnColLeft: {
    flex: 1,
    paddingHorizontal: 0,
    borderWidth: 0, // Add a border to all sides
    borderColor: 'gray', // Specify the border color
  },
  columnColRight: {
    flex: 1,
    paddingHorizontal: 0,
    position: 'relative',

    borderColor: 'red', // Specify the border color
    borderWidth: 0,

  },
  container: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 4,

  },
  imageBigView: {
    flexDirection: 'row', 
    justifyContent: 'center',
    overflow: 'hidden'       // Hide any overflowing content

  },
  imageCover: {

    width: 150,          // Occupy full width of the Card.Cover
    height: 150,         // Occupy full height of the Card.Cover
    resizeMode: 'contain',
  },
  buttonView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'green',
    borderRadius: 5,

  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    padding: 10
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    width: 50,
    textAlign: 'center',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mrp: {
    fontSize: 14,
    fontWeight: "normal",
    color: "gray",


  },
  offerprice: {
    fontSize: 18,
    fontWeight: "normal",
    color: "gray",
  },
  miniqty: {
    fontSize: 16,
    fontWeight: "normal",
    color: "gray",
    marginBottom: 4,

  },
  save: {
    fontSize: 16,
    fontWeight: "normal",
    color: "red",
    marginBottom: 4,

  },
});

export default ProductDetail