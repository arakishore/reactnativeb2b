import React, { useState } from 'react'; // Don't forget to import useState

import { useSelector,useDispatch } from 'react-redux';
import { AntDesign, Feather } from "@expo/vector-icons";

import { SafeAreaView, TouchableOpacity, View, Text, Image, StyleSheet, ScrollView, useWindowDimensions, StatusBar } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';


import FlatListStyles, { OrderButton } from "../components/FlatlistCss";
import { Card, List, Divider } from 'react-native-paper';

import Swiper from 'react-native-swiper';

import RuppeeIcon from "../components/utility/RuppeeIcon";

import ImageModal from './ImageModal'; // Adjust the import path
import { Spacer } from '../components/spacer/spacer.component';
import TextComponent from '../components/TextComponent';
 


const ProductDetail = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const { prodId, categoryId, product } = route.params;



  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');


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
  // Define the routes for your tabs
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'description', title: 'Description' },
    { key: 'specification', title: 'Specification' },
    { key: 'warranty', title: 'Warranty' },
    { key: 'returns', title: 'Returns' },
  ]);


   const { width: screenWidth } = useWindowDimensions();


  const handleImagePress = (imagePath) => {
    setSelectedImage(imagePath);
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };


  // Define a function to generate the routes based on the content availability
  const generateRoutes = () => {
    const availableRoutes = [
      { key: 'description', title: 'Description' },
      { key: 'specification', title: 'Specification' },
      { key: 'warranty', title: 'Warranty' },
      { key: 'returns', title: 'Returns' },
    ];

    // Filter out tabs with blank content
    return availableRoutes.filter((route) => {
      switch (route.key) {
        case 'description':
          return prod_desc_text.trim() !== '';
        case 'specification':
          return prod_specification_text.trim() !== '';
        case 'warranty':
          return prod_warranty_text.trim() !== '';
        case 'returns':
          return prod_return_text.trim() !== '';
        default:
          return true; // Include any other tabs by default
      }
    });
  };

  const generatedRoutes = generateRoutes();

  // Define the content for each tab conditionally
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'description':
        return (
          <ScrollView style={stylesTab.tabContent}>
            <View style={stylesTab.tabviewcontent}>
              
              <RenderHtml
                 contentWidth={screenWidth}

                source={{ html: prod_desc_text }}
                enableExperimentalMarginCollapsing={true}
              />
            </View>
          </ScrollView>
        );
      case 'specification':
        return (
          <ScrollView style={stylesTab.tabContent}>
            <View style={stylesTab.tabviewcontent}>
            <RenderHtml
                 contentWidth={screenWidth}

                source={{ html: prod_specification_text }}
                enableExperimentalMarginCollapsing={true}
              />
              
            </View>
          </ScrollView>
        );
      case 'warranty':
        return (
          <ScrollView style={stylesTab.tabContent}>
            <View style={stylesTab.tabviewcontent}>
            <RenderHtml
                 contentWidth={screenWidth}

                source={{ html: prod_warranty_text }}
                enableExperimentalMarginCollapsing={true}
              />
                
            </View>
          </ScrollView>
        );
      case 'returns':
        return (
          <ScrollView style={stylesTab.tabContent}>
            <View style={stylesTab.tabviewcontent}>
            <RenderHtml
                 contentWidth={screenWidth}

                source={{ html: prod_return_text }}
                enableExperimentalMarginCollapsing={true}
              />
               
            </View>
          </ScrollView>
        );
      default:
        return null;
    }
  };

  //console.log('product', product);
  const handleAddToCart1 = () => {
    // You can use the product ID here
    // Add your cart logic here
  };


  const handleQuantity = (flag, itemData) => {
    let totalAmt = 0;
    let totalQty = 0;
    console.log(flag);

  };
  return (
    <SafeAreaView style={styles.outerScrollView}>
      <Card style={styles.card}>
        <View style={styles.imageBigView}>
          <Swiper style={styles.wrapper} height={150} showsButtons={false}>
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


        <ImageModal
          visible={modalVisible}
          imagePath={selectedImage}
          onClose={handleCloseModal}
        />
      </Card>

      <View style={stylesTab.tabView}>
        <TabView
          navigationState={{ index, routes: generatedRoutes }} // Use generatedRoutes
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: 'blue' }}
              style={stylesTab.tabBar}
              labelStyle={stylesTab.tabLabel}
              scrollEnabled={false}
            />
          )}
          style={{ zIndex: 1 }}
        />
      </View>
      <Spacer position="bottom" size="large">
        <OrderButton mode="contained">Add to Cart</OrderButton>
      </Spacer>


    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  outerScrollView: {
    flex: 1,

  },


  accordion: {
    backgroundColor: '#f0f0f0',

    padding: 0,
    margin: 0
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



const stylesTab = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  // Add a new style for tab content
  tabContent: {
    flex: 1, // Allow the content to take up all available space
  },
  tabBar: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: 'black',
    paddingHorizontal: 0, // Add horizontal padding to the tabs
    width: 75, // Set a fixed height for the tabs
    overflow: 'hidden', // Hide any text overflow

  },
  // Add a new style for the tab view container
  tabView: {
    flex: 1, // Allow the tab view to take up all available space
  },
  tabviewcontent: {
    backgroundColor: '#ffffff',
    padding: 4,
  },
});
export default ProductDetail