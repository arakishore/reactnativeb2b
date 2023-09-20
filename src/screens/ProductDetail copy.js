import React, { useState } from 'react'; // Don't forget to import useState
 
import {  useDispatch } from 'react-redux';
import { AntDesign,Feather  } from "@expo/vector-icons";

import {SafeAreaView, TouchableOpacity, View, Text, Image, StyleSheet ,ScrollView} from 'react-native';
import FlatListStyles, { OrderButton } from "../components/FlatlistCss";
import { Card,List, Divider } from 'react-native-paper';

import Swiper from 'react-native-swiper';
  
import RuppeeIcon from "../components/utility/RuppeeIcon";
 
import ImageModal from './ImageModal'; // Adjust the import path
import { Spacer } from '../components/spacer/spacer.component';
import TextComponent from '../components/TextComponent';

const ProductDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { prodId, categoryId, product } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);


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
    brand_id = product.brand_id,
    brand_name = product.brand_name,
    cashback_amount = product.cashback_amount,
     category_group_name = product.category_group_name,
    category_id = product.category_id,
    category_l1_id = product.category_l1_id,
    category_l1_name = product.category_l1_name,
    category_name = product.category_name,
    cgst_perc = product.cgst_perc,
    feature_value_fid = product.feature_value_fid,
    igst_perc = product.igst_perc,
    is_favourite = product.is_favourite,
    is_fixed_packet = product.is_fixed_packet,
    is_in_cart = product.is_in_cart,
    mimimum_qty = product.mimimum_qty,
    packing_type = product.packing_type,
    premium_delivery_charges = product.premium_delivery_charges,
     
    prod_code = product.prod_code,
    prod_color_code = product.prod_color_code,
    prod_desc_text = product.prod_desc_text,
    prod_desc_text_guj = product.prod_desc_text_guj,
    prod_desc_text_hindi = product.prod_desc_text_hindi,
    prod_desc_text_marathi = product.prod_desc_text_marathi,
    prod_feature_value = product.prod_feature_value,
    prod_feature_value_fid = product.prod_feature_value_fid,
    prod_group_id = product.prod_group_id,
    prod_group_value_fid = product.prod_group_value_fid,
    prod_id = product.prod_id,
    prod_image_1_path = product.prod_image_1_path,
    prod_image_2_path = product.prod_image_2_path,
    prod_image_3_path = product.prod_image_3_path,
    prod_mrp = product.prod_mrp,
    prod_name = product.prod_name,
    prod_name_guj = product.prod_name_guj,
    prod_name_hindi = product.prod_name_hindi,
    prod_name_marathi = product.prod_name_marathi,
    prod_pack_size = product.prod_pack_size,
    prod_primary_image_path = product.prod_primary_image_path,
    prod_qty_stock = product.prod_qty_stock,
    prod_rating_count = product.prod_rating_count,
    prod_return_text = product.prod_return_text,
    prod_return_text_guj = product.prod_return_text_guj,
    prod_return_text_hindi = product.prod_return_text_hindi,
    prod_return_text_marathi = product.prod_return_text_marathi,
    prod_savings = product.prod_savings,
    prod_selling_price = product.prod_selling_price,
    prod_specification_text = product.prod_specification_text,
    prod_specification_text_guj = product.prod_specification_text_guj,
    prod_specification_text_hindi = product.prod_specification_text_hindi,
    prod_specification_text_marathi = product.prod_specification_text_marathi,
    prod_unit = product.prod_unit,
    prod_warranty_text = product.prod_warranty_text,
    prod_warranty_text_guj = product.prod_warranty_text_guj,
    prod_warranty_text_hindi = product.prod_warranty_text_hindi,
    prod_warranty_text_marathi = product.prod_warranty_text_marathi,
    product_base_unit = product.product_base_unit,
    rating_star = product.rating_star,
    sgst_perc = product.sgst_perc,
    shared_delivery_charges = product.shared_delivery_charges,
    sub_category_id = product.sub_category_id,
    sub_category_name = product.sub_category_name,
    vendor_id = product.vendor_id,
    vendor_name = product.vendor_name,
    

  } = product;

 
  const image_paths = [
    product.prod_image_1_path,
    product.prod_image_2_path,
    product.prod_image_3_path
  ];
  //console.log('product', product);
  const handleAddToCart1 = () => {
    // You can use the product ID here
    // Add your cart logic here
  };

  
  const handleQuantity = (flag, itemData) => {
    let totalAmt = 0;
    let totalQty = 0;
   
  };
  return (
    <SafeAreaView style={styles.outerScrollView}>
    <ScrollView style={styles.outerScrollView}>

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
         
        </View>
        <View style={styles.columnColRight}>
          <Text style={styles.miniqty} >Mini Qty Box/Try: {mimimum_qty}</Text>
          <Text style={styles.save} >Save: <RuppeeIcon></RuppeeIcon>{prod_savings}</Text>
          <View
            style={{
              ...FlatListStyles.quantityMain,
            }}
          >
            <TouchableOpacity
              style={{ ...FlatListStyles.quantityContainer }}
              onPress={() => handleQuantity(0, product)}
            >
              <AntDesign name="minus" size={15} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity
              
              style={{
                ...FlatListStyles.quantityContainer,
                paddingHorizontal: 30,
              }}
            >
              <TextComponent
                
                label={product.mimimum_qty.toString()}
                style={{ ...FlatListStyles.itemQuantity }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ ...FlatListStyles.quantityContainer }}
              onPress={() => handleQuantity(1, product)}
            >
              <AntDesign name="plus" size={15} color="#fff" />
            </TouchableOpacity>
          </View>

        </View>
      </View>

      <ScrollView style={styles.innerScrollView}>

        <List.Accordion
          title="Description"
          left={(props) => <List.Icon {...props} icon="folder" />}
          expanded={breakfastExpanded}
           onPress={() => setBreakfastExpanded(!breakfastExpanded)}
           style={styles.accordion}
           titleStyle={styles.titleStyle}
           contentStyle={styles.contentStyle}
        >
          <Text style={styles.contentContainer}>aaaaaaa</Text>
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Specification"
          left={(props) => <List.Icon {...props} icon="folder" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
          style={styles.accordion}
          titleStyle={styles.titleStyle}
          contentStyle={styles.contentStyle}
        >
           <Text style={styles.contentContainer}>bbbbb</Text>
          <Divider />
          
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Warranty"
          left={(props) => <List.Icon {...props} icon="folder" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
          style={styles.accordion}
          titleStyle={styles.titleStyle}
          contentStyle={styles.contentStyle}
        >
          <Text style={styles.contentContainer}>cccccc</Text>
         
        </List.Accordion>
        <Divider />

        <List.Accordion
          title="Returns"
          left={(props) => <List.Icon {...props} icon="folder" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
          style={styles.accordion}
          titleStyle={styles.titleStyle}
          contentStyle={styles.contentStyle}
        >
          <Text style={styles.contentContainer}>ddddd</Text>
          <Divider />
          
        </List.Accordion>
      </ScrollView>
      <ImageModal
            visible={modalVisible}
            imagePath={selectedImage}
            onClose={handleCloseModal}
          />
    </Card>
    
    </ScrollView>
    <Spacer  position="bottom" size="large">
    <OrderButton
         
          mode="contained"
          
        >
         Add to Cart
        </OrderButton>
      </Spacer>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  outerScrollView: {
    flex: 1,
    
  },
  outerScrollView: {
    flex: 1,
    
  },
  innerScrollView: {
    maxHeight: 500, // Limit the height of the nested ScrollView
    marginTop: 0,
    
  },
  accordion: {
    backgroundColor: '#f0f0f0',
    
    padding:0,
    margin:0
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  contentStyle: {
    padding: 4,
  },
  contentContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 0,
    paddingVertical: 10,
  },
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