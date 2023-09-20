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

export default function LoginScreen({ navigation }) {
  const [mobile, setmMbile] = useState({ value: '9422945125', error: '' })
  const [password, setPassword] = useState({ value: '1111111', error: '' })


  const isFocused = useIsFocused();


  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    (async () => {
      if (isFocused) {
        const token = await AsyncStorage.getItem("externalToken");
        if (token !== null) {
          navigation.navigate("Dashboard");
        }
      }
    })();

    return () => {
      // this now gets called when the component unmounts
    };
  }, [isFocused]);




  const onLoginPressed = async () => {
    let error = false;
    // const emailError = emailValidator(email.value)
    const mobileError = mobileValidator(mobile.value)
    const passwordError = passwordValidator(password.value)
    if (mobileError || passwordError) {
      setmMbile({ ...mobile, error: mobileError })
      setPassword({ ...password, error: passwordError })
      error = true;
      return
    }
    if (!error) {

      const network = await handleNetwork();
      console.log("network", network);

      if (network) {
        const requestData = {
          frm_mode: 'userlogin',
          mobile_number: mobile.value,
          password: password.value
        };
        try {
          const response = await axios.post(API_BASE_URL + endpoint.login, requestData, {
            headers: {
              'Content-Type': 'application/json', // Set the content type to JSON
            },
          });

          // Handle successful response
          // console.log(response.data);
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

            // navigation.navigate("MainRoute");
            navigation.reset({
              index: 0,
              routes: [{ name: 'Dashboard' }],
            })
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
        onChangeText={(text) => setmMbile({ value: text, error: '' })}

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
