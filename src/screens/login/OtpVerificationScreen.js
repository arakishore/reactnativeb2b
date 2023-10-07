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
import { handleNetwork } from "../../components/checkNetwrok";
import API_BASE_URL from "../../config/Config";
import endpoint from "../../config/Endpoints";

export default function OtpVerificationScreen(props) {
  const [otpcode, setOtpcode] = useState({ value: '', error: '' })
  const [mobile4, setMobile4] = useState()

  const [mobile, setMobile] = useState()




  useEffect(() => {
    const maskedString = maskString(props.route.params.mobile, 4);
    setMobile(props.route.params.mobile);
    setMobile4(maskedString);
    console.log("OtpVerificationScreen props", props);
  }, []);



  const onResendOTP = async () => {



    const network = await handleNetwork();
    console.log("network", network);

    if (network) {
      const requestData = {
        frm_mode: 'requestOTP',
        mobile_number: mobile,
        device_uuid: "device_uuid"
      };
      try {
        const response = await axios.post(API_BASE_URL + endpoint.user_mobile_verification, requestData, {
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
        });

        // Handle successful response
        console.log("requestOTP: ", response.data);
        if (response.data.status) {
          alert(response.data.message);

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

  const onPressed = async () => {
    let error = false;
    if (!otpcode.value) {
      error = true;
      return
    }
    if (!error) {

      const network = await handleNetwork();

      if (network) {
        const requestData1 = {
          frm_mode: 'user_mobile_verification',
          "mobile_verification_code": otpcode.value,
          mobile_number: mobile,
          device_uuid: "device_uuid"
        };
        console.log("requestData", requestData1);
        try {
          const response = await axios.post(API_BASE_URL + endpoint.user_mobile_verification, requestData1, {
            headers: {
              'Content-Type': 'application/json', // Set the content type to JSON
            },
          });

          // Handle successful response
          console.log("user_mobile_verification: ", response.data);
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
            props.navigation.reset({
              index: 0,
              routes: [{ name: 'Dashboard' }],
            })
          } else {
            if (response.data.goto) {
              alert(response.data.message);
              props.navigation.navigate("LoginScreen");
              return false;
            } else {
              alert(response.data.message);
              return false;
            }

          }


        } catch (error) {
          // Handle error
          console.error("error", error);
        }
      } else {

      }

    }


  }
  function maskString(inputString, visibleLength) {
    if (inputString.length < visibleLength) {
      return inputString; // Input string is shorter than the visible length, return as is
    }

    const maskedPart = 'x'.repeat(inputString.length - visibleLength);
    const visiblePart = inputString.slice(-visibleLength);

    return maskedPart + visiblePart;
  }

  return (
    <View style={styles.background} >
      <View style={styles.container} behavior="padding">
        {/* <BackButton goBack={navigation.goBack} /> */}
        <Logo />
        <Header>Verify Phone Number</Header>
        <View>
          <Text>{mobile4}</Text>
        </View>
        <TextInput
          label="OTP"

          value={otpcode.value}
          onChangeText={(text) => setOtpcode({ value: text, error: '' })}

          error={
            otpcode.error
              ? otpcode.error
              : ""
          }
          autoCapitalize="none"
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
        />

        <Button mode="contained" onPress={onPressed}>
          Verify
        </Button>
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={onResendOTP}
          >
            <Text style={styles.forgot}>Resend a new code</Text>
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
