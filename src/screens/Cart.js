import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, IconButton, Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace with the appropriate icon library
import { useSelector, useDispatch } from 'react-redux';

import FlatListStyles from '../components/FlatlistCss';
import { Spacer } from '../components/spacer/spacer.component';
import TextComponent from '../components/TextComponent';

const cartInitialState = {
  message: 'List of Items in cart !',
  cart_items: [],
  total_cart_items: 0,
  total_sub_total: 0,
  total_save_amt: 0,
  total_net_payable_amt: 0,
  net_payable_info: [],
  label_total_save_description: 'You are saving',
  label_discount_description: 'Discount',
  label_net_payable_description: 'Net Payable',
  label_shopingcart: 'Shopping Cart',
  extra_info_forshipping: 0,
  label_coupon_info: 'Tap & Save - Apply Coupon',
  applied_coupon_code: 0,
  coupon_applied_status: 0,
  delveryslot_selected_fulldate: '',
  delveryslot_selected_date: '',
  delveryslot_selected_time: '',
  delveryslot_selected_amt: 0,
};


const Cart = ({ navigation, route }) => {
  const [isInCart, setIsInCart] = useState(0);

  //const dispatch = useDispatch();
  // console.log('navigation:', navigation);
  // console.log('route:', route);
  const cart_items = useSelector(state => state.cartReducer.cart_items);
  console.log('cart_items:', cart_items);
  //const [cartState, setCartState] = useState(cartInitialState);

  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 10.99, quantity: 2 },
    { id: 2, name: 'Item 2', price: 5.99, quantity: 1 },
    { id: 3, name: 'Item 3', price: 5.99, quantity: 1 },
    { id: 4, name: 'Item 4', price: 5.99, quantity: 1 },
    { id: 5, name: 'Item 5', price: 5.99, quantity: 1 },
    { id: 6, name: 'Item 6', price: 5.99, quantity: 1 },
    { id: 7, name: 'Item 7', price: 5.99, quantity: 1 },
    { id: 8, name: 'Item 8', price: 5.99, quantity: 1 },
    { id: 9, name: 'Item 9', price: 5.99, quantity: 1 },
    { id: 10, name: 'Item 10', price: 5.99, quantity: 1 },
    { id: 11, name: 'Item 11', price: 5.99, quantity: 1 },
    { id: 12, name: 'Item 12', price: 5.99, quantity: 1 },
    { id: 13, name: 'Item 13', price: 5.99, quantity: 1 },
    // Add more items as needed
  ]);

  const handleAddToCart = async (flag, itemData) => {
    const user_id = await AsyncStorage.getItem("user_id");

  };

  const handleRemoveItem = (itemId) => {
    // Implement logic to remove an item from the cart
    // Update the cartItems state accordingly
  };

  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        <ScrollView >

          {cart_items.map((item) => (
            <Spacer key={item.cart_primary_id} size="small">
              <Card style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    {/* Replace 'Image_URL_here' with the actual image URL */}
                    <Image source={{ uri: item.prod_primary_image_path }} style={{ width: 100, height: 100 }} />
                  </View>
                  <View style={{ flex: 3 }}>
                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ flex: 3 }}>
                        <Text>{item.prod_name}</Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text>{item.prod_amount}</Text>
                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 10 }}>
                      <View
                        style={{
                          ...FlatListStyles.quantityMain,
                        }}
                      >
                        <View style={styles.buttonView} >
                          <View
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
                                label={item.cart_qty}
                                style={{ ...FlatListStyles.itemQuantity }}
                              />
                            </TouchableOpacity>

                            <TouchableOpacity
                              style={{ ...FlatListStyles.quantityContainer }}
                              onPress={() => handleAddToCart("+", product)}
                            >
                              <Icon name="plus" size={15} color="#fff" />
                            </TouchableOpacity>
                          </View>


                        </View>
                      </View>
                      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <TouchableOpacity style={styles.deleteButton}>
                          <Icon name="trash" size={28} color="red" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Card>
            </Spacer>
          ))}


        </ScrollView>
      </View>

      <View style={styles.buttonViewpostion}>

        <View style={{ flexDirection: 'row' }}  >
          <View style={{ flex: 3, padding: 8 }}>
            <Text style={styles.subtotal} >10 Items</Text>
            <Text style={styles.subtotal}>Rs 1000</Text>
          </View>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity

              onPress={() => alert('Checkout clicked')}
            >
              <View   >
                <Text  >Checkout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>


      </View>

    </View>

  )
}

// Add styles to your component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure that the parent container has flex: 1
    paddingLeft: 16,
    paddingRight: 16,
    position: 'relative',
  },
  scrollView: {

    flex: 1,
    paddingBottom: 8,

  },
  subtotal: {
    fontSize: 14,
    fontWeight: "normal",
    color: "gray",

  },
  buttonView: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    backgroundColor: 'green',
    borderRadius: 5,

  },
  buttonViewpostion: {
    // position: 'absolute',
    // bottom: 0,
    alignItems: 'center', // Center the button vertically
    width: '100%', // Make the button full width
    padding: 4,
    backgroundColor: '#ffffff',

  },
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
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 3,
    marginLeft: 10,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
  },
  quantityButton: {
    backgroundColor: '#ccc',
    padding: 5,
    borderRadius: 5,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  deleteButton: {


    alignItems: 'center',

    marginRight: 10,


  },
  deleteButtonText: {
    color: 'white',
  },

  checkoutButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 16,
    alignItems: 'center',
    width: '100%', // Make the button full width

  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default Cart