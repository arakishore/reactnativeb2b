import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'; // Replace with the appropriate icon library

import {
  SafeAreaView,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Linking,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from "react-native";
//import { Text } from 'react-native-paper'


import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import { theme } from '../../core/theme'
import { mobileValidator } from '../../helpers/mobileValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import { handleNetwork } from "../../components/checkNetwrok";
import API_BASE_URL from "../../config/Config";
import endpoint from "../../config/Endpoints";
import { useDispatch } from "react-redux";
import { fetchCategoriesAndProductsExtra, } from "../../store/redux/slices/categorySlice";
import { fetchCartDataExtra } from "../../store/redux/slices/cartSlice";

export default function LoginScreen({ navigation }) {

  const dispatch = useDispatch();
  const [token, setToken] = useState(null)

  
  const [mobile, setMobile] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [showPassword, setShowPassword] = useState(true);
  const [user_id, setUserId] = useState(0); // Use useState to manage user_id
  
  // Fetch the user_id from AsyncStorage
  const fetchUserId = async () => {
      try {
          const userIdFromStorage = await AsyncStorage.getItem("user_id");
          setUserId(userIdFromStorage || 0); // Use 0 as the default value if userIdFromStorage is null
      } catch (error) {
          console.error("Error fetching user_id:", error);
      }
  };

  useEffect(() => {
      fetchUserId();
  }, []); // Empty dependency array ensures this runs only once



  const commonFunction = async () => {
    try {
      const requestData = {
        frm_mode: "cartlist",
        user_id: user_id, // Use the fetched user_id here
      };
  
      // Dispatch an action to fetch categories and products
      const categoriesAndProductsResponse = await dispatch(fetchCategoriesAndProductsExtra(requestData));
      
     // console.log("LoginScreen.js response:", categoriesAndProductsResponse.payload.cart_info);
  
      // Assuming the fetched data contains cart items
      // const fetchedCartItems = categoriesAndProductsResponse.payload.cart_items; // Replace with your actual data structure
      // Update cartItems state with the fetched data
      // setCartItems(fetchedCartItems);
  
      if (user_id > 0) {
        const requestData2 = {
          frm_mode: "cartlist",
          user_id: user_id, // Use the fetched user_id here
        };
  
        // Dispatch an action to fetch cart data
         dispatch(fetchCartDataExtra(requestData2)); // Replace with the appropriate action for fetching cart data
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    commonFunction();
  }, [dispatch, user_id]); // Include user_id in dependency array




  useEffect(() => {
    (async () => {
       
        const token = await AsyncStorage.getItem("externalToken");
        if (token !== null) {
          setToken(token);
          commonFunction();
          navigation.navigate("Dashboard");
        }
     
    })();

    return () => {
      // this now gets called when the component unmounts
    };
  }, [token]);




  const onLoginPressed = async () => {
    let error = false;
    // const emailError = emailValidator(email.value)
    const mobileError = mobileValidator(mobile.value)
    const passwordError = passwordValidator(password.value)
    if (mobileError || passwordError) {
      setMobile({ ...mobile, error: mobileError })
      setPassword({ ...password, error: passwordError })
      error = true;
      return
    }
    if (!error) {

      const network = await handleNetwork();
     // console.log("API_BASE_URL", API_BASE_URL + endpoint.userlogin);

      if (network) {
        const requestData = {
          frm_mode: 'userlogin',
          mobile_number: mobile.value,
          password: password.value,
          device_uuid: "device_uuid"
        };
        try {
          const response = await axios.post(API_BASE_URL + endpoint.userlogin, requestData, {
            headers: {
              'Content-Type': 'application/json', // Set the content type to JSON
            },
          });

          // Handle successful response
            console.log(response.data.cartItem.cart_items);
          if (response.data.status) {
            AsyncStorage.setItem("externalToken", response.data.token);
            // Serialize the object to a JSON string
            const userInfoString = JSON.stringify(response.data.userInfo);

            // Store the JSON string in AsyncStorage
            AsyncStorage.setItem('userInfo', userInfoString)
              .then(() => {
                console.log('User info stored successfully');
              })
              .catch(error => {
                console.error('Error storing user info:', error);
              });
            AsyncStorage.setItem("user_id", response.data.user_id);
            AsyncStorage.setItem("cartItem", JSON.stringify(response.data.cartItem.cart_items));
           // console.log("LoginScreen.js response.data.cartItem", response.data.cartItem);
              navigation.navigate("Dashboard");
            // navigation.reset({
            //   index: 0,
            //   routes: [{ name: 'Dashboard' }],
            // })
          } else {
            alert(response.data.message);
            return false;
          }


        } catch (error) {
          // Handle error
          console.error("error", error);
        }
      } else {

      }

    }


  }


  return (
    <View style={styles.background} >
      <View style={styles.container} behavior="padding">
        {/* <BackButton goBack={navigation.goBack} /> */}
        <Logo />
        <Header>Welcome back.</Header>
        <TextInput
          label="Mobile"
          returnKeyType="next"
          value={mobile.value}
          onChangeText={(text) => setMobile({ value: text, error: '' })}

          error={
            mobile.error
              ? mobile.error
              : ""
          }
          autoCapitalize="none"
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry={showPassword} // Toggle secureTextEntry based on showPassword
          right={
            <Icon name="whatsapp" size={24} />

          }

        />

        <Button mode="contained" onPress={onLoginPressed}>
          Login
        </Button>
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  // Add styles for the togglePassword text if needed
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  togglePassword: {
    fontSize: 16,
    color: theme.colors.primary,
    textAlign: 'center',
    marginTop: 10,
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
