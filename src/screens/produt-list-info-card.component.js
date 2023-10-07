import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

//import styled from "styled-components/native";

import { FlatList, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import FlatListStyles from "../components/FlatlistCss";
import { Card } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome'; // Replace with the appropriate icon library
import TextComponent from '../components/TextComponent';


import RuppeeIcon from "../components/utility/RuppeeIcon";
import { fetchCartDataExtra, sendCartItems } from "../store/redux/slices/cartSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";





export const ProdutListcard = ({ product = {} }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isInCart, setIsInCart] = useState(0);
  const [extrAddCartqty, setExtrAddCartqty] = useState(product.mimimum_qty);

  const [mimimumqty, setMimimumqty] = useState(product.mimimum_qty);
  const [cartItemQty, setCartItemQty] = useState(0);
  const [cartItemDetail, setCartItemDetail] = useState([]);

  const [prodductId, setProdductId] = useState(product.prod_id);

  const {
    name = product.prod_name,
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


  const cart_items = useSelector(state => state.cartReducer.cart_items);



  useEffect(() => {
    const foundCartItem = cart_items.find(
      (cart_item) => cart_item.product_fid === prodductId
    );
    setMimimumqty(mimimum_qty);
    if (foundCartItem) {
      // Item found in cart
      setIsInCart(1);
      setExtrAddCartqty(1); // Assuming quantity is stored in cart_qty
      setCartItemQty(foundCartItem.cart_qty);
      setCartItemDetail(foundCartItem);
    } else {
      // Item not found in cart
      setIsInCart(0);
      setExtrAddCartqty(mimimum_qty); // Assuming quantity is stored in cart_qty
      setCartItemQty(0);
      setCartItemDetail([]);
    }
    console.log("produt-list-info-card.component.js render isInCart "+isInCart+", prodductId:"+prodductId+", cartItemQty:"+cartItemQty);

    console.log("cartItemQtyaaaaaaaa:", cartItemQty);

  }, []);


  // Use a useEffect hook to listen for changes in cart_items
  useEffect(() => {
    // cart_items has been updated here, you can use it for further processing
    //console.log('Updated cart_items:', cart_items);

    // You can perform additional actions here based on the updated cart items
  }, []);

  const handleAddToCart = async (flag, itemData) => {
    const user_id = await AsyncStorage.getItem("user_id");

    let qty = 0;
    // Pass parameters to the action when dispatching it
    // if (!isInCart) {
    //   flag = product.mimimum_qty
    // }
    if (flag == "-") {
      qty = parseInt(cartItemQty) - parseInt(extrAddCartqty);

    } else {
      qty = parseInt(cartItemQty) + parseInt(extrAddCartqty);
    }
    if (qty < mimimumqty) {
      qty = 0;
    }
    console.log("extrAddCartqty" + extrAddCartqty);
    console.log("cartItemQty" + cartItemQty);
    console.log("qty" + qty);
    console.log("mimimumqty" + mimimumqty)

    const params = {
      // Define your parameters here
      // For example:
      "frm_mode": "cartaddeditdeleteitem",
      "user_id": user_id,
      "prod_id": itemData.prod_id,
      "cart_qty": qty,
      "item_qty1": "0",
      "item_qty2": "0"
    };
    // Dispatch an action to send cart items
    console.log("ProductDetail.js params:", params);
    dispatch(sendCartItems(params))
      .then((response) => {
        // Handle the response from the dispatched action
        console.log("ProductDetail.js Cart items sent successfully:", response.meta);
        // You can return something here if needed
        //return "Success"; // Replace with the data you want to return
        console.log("produt-list-info-card.component.js render isInCart"+isInCart);

        setCartItemQty(qty);
        if(qty>0){
          setIsInCart(1);
        } else {
          setIsInCart(0);
        }
        // Dispatch an action to fetch cart data
        const requestData2 = {
          frm_mode: "cartlist",
          user_id: user_id, // Use the fetched user_id here
        };

        dispatch(fetchCartDataExtra(requestData2)); // Replace with the appropriate action for fetching cart data
      })
      .catch((error) => {
        console.error("ProductDetail.js Error sending cart items:", error);
        // You can return an error or handle it as needed
        //  throw error; // Throw the error to propagate it further, or return an error message
      });

  };



  return (
    <Card style={styles.card}>

<TouchableOpacity
          onPress={() =>
            navigation.navigate("ProductDetail", {
              prodId: product.prod_id,
              categoryId: product.category_id,
              product: product,
            })
          }
        ><View style={styles.imageBigView}>
        {image != null && image != "" ? (
          <Image
            style={styles.imageCover}
            source={{ uri: image, crop: { left: 10, top: 50, width: 20, height: 40 } }}
            onError={() => {
              // Handle image load error, e.g., show a placeholder image
              //console.log('Error loading image:', image);
            }}
          />
        ) : (
          <Image

            source={require("../../assets/noimage.png")}
            onError={() => {
              // Handle image load error, e.g., show a placeholder image
              //console.log('Error loading image:', item.image);
            }}
          />

        )}

      </View>
      </TouchableOpacity>

      <View style={styles.containerRow}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text style={FlatListStyles.CardTitle}>{name}</Text>
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
            {!isInCart ? <TouchableOpacity
              onPress={() => handleAddToCart("+", product)}
            >
              <Text style={styles.buttonText} >Add to Cart</Text>
            </TouchableOpacity> : <View
              style={{
                ...FlatListStyles.quantityMain,
              }}
            >
              <TouchableOpacity
                style={{ ...FlatListStyles.quantityContainer }}
                onPress={() => handleAddToCart("-", product)}
              >
                <Icon name="minus" size={15} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...FlatListStyles.quantityContainer,
                  paddingHorizontal: 30,
                }}
              >
                <TextComponent

                  label={cartItemQty}
                  style={{ ...FlatListStyles.itemQuantity }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{ ...FlatListStyles.quantityContainer }}
                onPress={() => handleAddToCart("+", product)}
              >
                <Icon name="plus" size={15} color="#fff" />
              </TouchableOpacity>
            </View>}


          </View>

        </View>
      </View>
    </Card>
  );
};


const styles = StyleSheet.create({
  containerRow: {
    flex: 1,
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
    flexDirection: 'row', justifyContent: 'center',
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
    fontSize: 14,
    fontWeight: 'normal',
    color: '#ffffff',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
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